export class ContainerPool {
    private static DefaultMaxPoolSize = process.env?.MAX_POOL_SIZE
        ? Number(process.env.MAX_POOL_SIZE)
        : 1000

    readonly #pool: Map<string, any>
    #poolSize: number

    public constructor(poolSize?: number) {
        this.#poolSize = poolSize || ContainerPool.DefaultMaxPoolSize
        this.#pool = new Map<string, any>()
    }

    set maxPoolSize(size: number) {
        this.#poolSize = size
    }

    add<T>(alias: string, instance: T): void {
        if (this.#poolSize < this.#pool.size) {
            this.#pool.set(alias, instance)
        }
    }

    remove(alias: string): void {
        this.#pool.delete(alias)
    }

    get<T>(alias: string): T {
        return this.#pool.get(alias)
    }

    get aliases(): IterableIterator<string> {
        return this.#pool.keys()
    }

    get instances(): IterableIterator<any> {
        return this.#pool.values()
    }
}

const ss = new ContainerPool(1);
ss.add('sss', {});
