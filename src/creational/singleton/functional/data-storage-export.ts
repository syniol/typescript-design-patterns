export interface DataStorage {
    connect(): Promise<any>
    connect(): void
}

function NewDataStorage<T extends GenericObject>(client: T): DataStorage {
    return {
        connect: async () => {
            return client.connect()
        },
    }
}

export const instance: DataStorage = NewDataStorage({})
