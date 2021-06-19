class DataStorageExport<T extends GenericObject> {
    public constructor(private client: T) {}

    public async connect(): Promise<void> {
        await this.client.connect()
    }
}

export const DataStorage = new DataStorageExport<{}>({})
