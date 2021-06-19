export class DataStorage<T extends GenericObject> {
    private static instance: DataStorage<any> | undefined

    private constructor(private client: T) {}

    public static getInstance<T>(client: T): DataStorage<T> {
        if (!DataStorage.instance) {
            return (DataStorage.instance = new DataStorage(client))
        }

        return DataStorage.instance
    }

    public async connect(): Promise<void> {
        await this.client.connect()
    }
}
