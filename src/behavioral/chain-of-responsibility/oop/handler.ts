import { Handler } from '../type'

export default class PaymentHandler<T> implements Handler<T> {
    readonly #receivers: Handler<T>[]

    public constructor(...receivers: Handler<T>[]) {
        this.#receivers = receivers || [];
    }

    public async handle(request: T): Promise<void> {
        for (const handler of this.#receivers) {
            await handler.handle(request)
        }
    }

    public setNext(handler: Handler<any>): Handler<any> {
        this.#receivers.push(handler)

        return this
    }
}
