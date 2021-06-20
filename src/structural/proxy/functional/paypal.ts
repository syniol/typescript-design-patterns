import { Payer, PaymentProvider } from './type'

export function NewPayPal<T extends GenericObject>(
    client: T
): Payer & PaymentProvider<T> {
    return {
        client: client,
        authenticate(): void {},
        async pay(amount: Readonly<number>): Promise<void> {
            await this.client.processPayment(amount)
        },
    }
}
