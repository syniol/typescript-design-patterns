export class Entity<P, T> {
    readonly #_id: P;
    readonly #_document: T
    protected country?: string;

    public constructor(id: P, document: T) {
        this.#_id = id;
        this.#_document = document;
    }

    public clone(): this {
        return { ...this };
    }

    get id(): P {
        return this.#_id;
    }

    get document(): T {
        return this.#_document;
    }
}
