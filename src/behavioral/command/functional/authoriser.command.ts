import { Command, Repository } from '../type'

enum AuthorisationEvent {
    CONTACTLESS_PAYMENT_REQUESTED = 'CONTACTLESS_PAYMENT_REQUESTED',
    CONTACTLESS_PAYMENT_REQUEST_CANCELLED = 'CONTACTLESS_PAYMENT_REQUEST_CANCELLED',
}

async function execute(
    userRepository: Repository,
    contactlessCardRepository: Repository,
    eventRepository: Repository,
    userId: Readonly<string>
): Promise<void> {
    const user = await userRepository.findOne<any>(userId)
    const paymentCard = await contactlessCardRepository.findOne(userId)

    await eventRepository.insertOne({
        version: '1.2.3',
        name: AuthorisationEvent.CONTACTLESS_PAYMENT_REQUESTED,
        body: {
            user: user,
            card: paymentCard,
        },
        createdDateTime: new Date().toISOString(),
    })
}

async function isExecutable(
    userRepository: Readonly<Repository>,
    contactlessCardRepository: Readonly<Repository>,
    userId: Readonly<string>
): Promise<boolean> {
    const user = await userRepository.findOne<any>(userId)
    if (user?.length || 0 < 1) {
        return false
    }

    const contactlessCard = await contactlessCardRepository.findOne(userId)

    return !(contactlessCard?.length || 0 < 1)
}

async function undo(
    userRepository: Repository,
    contactlessCardRepository: Repository,
    eventRepository: Repository,
    userId: Readonly<string>
): Promise<void> {
    const user = await userRepository.findOne<any>(userId)
    const paymentCard = await contactlessCardRepository.findOne(userId)

    await eventRepository.insertOne({
        version: '1.2.3',
        name: AuthorisationEvent.CONTACTLESS_PAYMENT_REQUEST_CANCELLED,
        body: {
            user: user,
            card: paymentCard,
        },
        createdDateTime: new Date().toISOString(),
    })
}

export default function NewAuthorizeContactlessPaymentCommand<
    R extends Record<string, any>
>(
    userRepository: Repository,
    contactlessCardRepository: Repository,
    eventRepository: Repository,
    requestInput: R
): Command {
    const { userId } = requestInput.businessRecord

    return {
        isExecutable: async () =>
            await isExecutable(
                userRepository,
                contactlessCardRepository,
                userId
            ),
        execute: async () =>
            await execute(
                userRepository,
                contactlessCardRepository,
                eventRepository,
                userId
            ),
        undo: async () =>
            await undo(
                userRepository,
                contactlessCardRepository,
                eventRepository,
                userId
            ),
        retry: async () =>
            await execute(
                userRepository,
                contactlessCardRepository,
                eventRepository,
                userId
            ),
    }
}
