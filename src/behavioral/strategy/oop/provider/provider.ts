import { PaymentProcessor, PaymentRequest, Repository, SupportedPaymentTypes } from '../payment'

export abstract class PaymentProvider implements PaymentProcessor {
    protected repository: Repository

    public constructor(repository?: Repository) {
        this.repository = repository || ({} as Repository)
    }

    abstract get type(): SupportedPaymentTypes;

    abstract pay(order: PaymentRequest): void
}
