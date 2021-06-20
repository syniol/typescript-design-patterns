import { Payer, PaymentProvider } from './type'

export class PaymentProcessing implements Payer {
    private cached: boolean;

    public constructor(private provider: Readonly<PaymentProvider & Payer>) {
        this.cached = false;
    }

    public pay(amount: Readonly<number>): void {
        if (!this.cached) {
            this.provider.authenticate()
            this.provider.pay(amount)
        }

        this.provider.pay(amount)
        this.cached = true;
    }
}
