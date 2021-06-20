export interface Payer {
    pay(amount: Readonly<number>): void;
}

export interface Cacheable {
    cached: boolean;
}

export interface PaymentProvider<T> {
    client: T
    authenticate(): void;
}
