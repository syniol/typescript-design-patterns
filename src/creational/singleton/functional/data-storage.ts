export interface DataStorage {
    connect(): Promise<any>
    connect(): void
}

let instance: DataStorage

export function NewDataStorage<T extends GenericObject>(
    client: T
): DataStorage {
    if (!instance) {
        return (instance = {
            connect: async () => {
                return client.connect()
            },
        })
    }

    return instance
}
