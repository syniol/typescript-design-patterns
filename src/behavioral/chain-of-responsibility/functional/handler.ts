import { Handler } from '../type'

export default function NewPaymentHandler<T>(receivers: Handler<T>[]) {
    return {
        receivers: receivers,
        async handle(request: T): Promise<void> {
            for (const handler of receivers) {
                await handler.handle(request)
            }
        },
        setNext(handler: Handler<any>): Handler<any> {
            this.receivers.push(handler)

            return this
        },
    }
}
