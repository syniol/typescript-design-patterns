import { Command, Repository, RequestContext } from '../type'

enum AuthorisationEvent {
    CONTACTLESS_PAYMENT_REQUESTED = 'CONTACTLESS_PAYMENT_REQUESTED',
    CONTACTLESS_PAYMENT_REQUEST_CANCELLED = 'CONTACTLESS_PAYMENT_REQUEST_CANCELLED',
}

export default class AuthorizeContactlessPaymentCommand<
    T extends RequestContext
> implements Command {
    readonly #MaximumLimit: number = 40
    readonly #userRepository: Repository
    readonly #contactlessCardRepository: Repository
    readonly #eventRepository: Repository
    readonly #requestContext: T

    public constructor(
        userRepository: Repository,
        contactlessCardRepository: Repository,
        eventRepository: Repository,
        requestContext: T
    ) {
        this.#userRepository = userRepository
        this.#contactlessCardRepository = contactlessCardRepository
        this.#eventRepository = eventRepository
        this.#requestContext = requestContext
    }

    public async execute(): Promise<void> {
        const user = await this.#userRepository.findOne<Record<string, any>>(
            this.#requestContext.userCard.name,
            this.#requestContext.userCard.number,
            this.#requestContext.userCard.securityCode
        )

        const paymentCard = await this.#contactlessCardRepository.findOne(
            user[0].userId
        )

        await this.#eventRepository.insertOne({
            version: '1.0.3',
            name: AuthorisationEvent.CONTACTLESS_PAYMENT_REQUESTED,
            body: {
                user: user[0],
                card: paymentCard[0],
            },
            createdDateTime: new Date().toISOString(),
        })
    }

    public async isExecutable(): Promise<boolean> {
        if (this.#requestContext?.amount || 0 > this.#MaximumLimit) {
            return false
        }

        const user = await this.#userRepository.findOne<Record<string, any>>(
            this.#requestContext.userCard.name,
            this.#requestContext.userCard.number,
            this.#requestContext.userCard.securityCode
        )

        if (user?.length || 0 < 1) {
            return false
        }

        const contactlessCard = await this.#contactlessCardRepository.findOne(
            user[0].userId
        )

        return !(contactlessCard?.length || 0 < 1)
    }

    public async retry(): Promise<void> {
        return Promise.resolve(undefined)
    }

    public async undo(): Promise<void> {
        const user = await this.#userRepository.findOne<Record<string, any>>(
            this.#requestContext.userCard.name,
            this.#requestContext.userCard.number,
            this.#requestContext.userCard.securityCode
        )

        const paymentCard = await this.#contactlessCardRepository.findOne(
            user[0].userId
        )

        await this.#eventRepository.insertOne({
            version: '1.0.3',
            name: AuthorisationEvent.CONTACTLESS_PAYMENT_REQUEST_CANCELLED,
            body: {
                user: user[0],
                card: paymentCard[0],
            },
            createdDateTime: new Date().toISOString(),
        })
    }
}
