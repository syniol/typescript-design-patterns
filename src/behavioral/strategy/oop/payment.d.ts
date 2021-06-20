export type SupportedPaymentTypes = 'ApplePay' | 'Contactless' | 'CardReader'

export declare interface PaymentProcessor {
    type: SupportedPaymentTypes
    pay(order: PaymentRequest): void
}

export declare interface PaymentRequest {
    amount: number
    paymentType: SupportedPaymentTypes
}

export declare interface Repository {
    insertOne<T>(arg: T): void
}
