const DefaultMaxPoolSize = process.env?.MAX_POOL_SIZE
    ? Number(process.env.MAX_POOL_SIZE)
    : 1000

export interface PoolContainer {
    maxPoolSize: number
    add<T>(alias: string, instance: T): void
    get<T>(alias: string): T
    remove(alias: string): void
    aliases(): IterableIterator<string>
    instances(): IterableIterator<any>
}

export function NewContainerPool(poolSize?: number): PoolContainer {
    const pool = new Map<string, any>()

    return {
        maxPoolSize: poolSize || DefaultMaxPoolSize,
        add<T>(alias: string, instance: T): void {
            if (pool.size < this.maxPoolSize) {
                pool.set(alias, instance)
            }
        },
        get<T>(alias: string): T {
            return pool.get(alias)
        },
        remove(alias: string): void {
            pool.delete(alias)
        },
        aliases(): IterableIterator<string> {
            return pool.keys()
        },
        instances(): IterableIterator<any> {
            return pool.values()
        },
    }
}
