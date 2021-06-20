export declare interface Command {
    execute(): void | Promise<void>
    isExecutable(): boolean | Promise<boolean>
    undo(): Promise<void>
    retry(): Promise<void>
}

export declare type PromiseOrValue<T> = T[] | Promise<T[]>

export declare interface Repository {
    findOne<T>(...arg: any[]): PromiseOrValue<T>
    insertOne<T>(...arg: any[]): PromiseOrValue<T>
}

export declare interface RequestContextUserCard {
    name: string
    number: number
    securityCode: string
}

export declare interface RequestContext {
    merchantId: string
    amount: number
    userCard: RequestContextUserCard
}
