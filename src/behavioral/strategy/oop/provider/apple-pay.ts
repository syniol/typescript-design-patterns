import { PaymentRequest, SupportedPaymentTypes } from '../payment'
import { PaymentProvider } from './provider'

export class ApplePayPayment extends PaymentProvider {
    public get type(): SupportedPaymentTypes {
        return 'ApplePay'
    }

    public async pay(order: PaymentRequest): Promise<void> {
        if (order.paymentType !== this.type) {
            return
        }

        await this.repository.insertOne({
            version: '1.0.1',
            id: '',
            order,
        })
    }
}
