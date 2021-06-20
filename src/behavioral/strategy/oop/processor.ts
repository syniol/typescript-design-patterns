import { PaymentProcessor, PaymentRequest } from './payment'
import {
    ApplePayPayment,
    CardReaderPayment,
    ContactlessPayment,
} from './provider'

export class Processor {
    readonly #paymentProcessors: ReadonlyArray<PaymentProcessor>
    readonly #request: Readonly<PaymentRequest>

    public constructor(
        request: PaymentRequest,
        paymentProcessors?: PaymentProcessor[]
    ) {
        this.#request = request
        this.#paymentProcessors = paymentProcessors || [
            new ApplePayPayment(),
            new ContactlessPayment(),
            new CardReaderPayment(),
        ]
    }

    public async process(): Promise<void> {
        for (const processor of this.#paymentProcessors) {
            await processor.pay(this.#request)
        }
    }
}
