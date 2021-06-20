export interface Payer {
    pay(amount: Readonly<number>): void;
}

export interface PaymentProvider {
    authenticate(): void;
}
