import { Payer, PaymentProvider } from './type'

export class Paypal<T extends GenericObject> implements Payer, PaymentProvider {
    public constructor(private client: T) {}

    public async pay(amount: Readonly<number>): Promise<void> {
        await this.authenticate()
        await this.client.processPayment(amount)
    }

    public async authenticate(): Promise<void> {
        setTimeout(() => {
            console.log('fake time waste for http call emulation')
        }, 300)
    }
}
