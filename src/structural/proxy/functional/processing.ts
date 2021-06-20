import { Cacheable, Payer, PaymentProvider } from './type'

export function NewPaymentProcessing<T>(
    provider: Readonly<PaymentProvider<T> & Payer>
): Payer & Cacheable {
    return {
        cached: false,
        pay(amount: Readonly<number>): void {
            if (!this.cached) {
                provider.authenticate()
                provider.pay(amount)
            }

            provider.pay(amount)
            this.cached = true
        },
    }
}
