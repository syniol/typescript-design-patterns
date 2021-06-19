export abstract class User {
    protected constructor(
        protected uniqueId: string,
        protected email: string
    ) {}
}
