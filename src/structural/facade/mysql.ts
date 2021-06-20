import { Connection, createConnection } from 'mysql'
import { Connector, Querying } from './storage'

export class MySQL implements Connector {
    #client: Connection

    public constructor(client?: Connection) {
        if (client) {
            this.#client = client
        } else {
            this.#client = createConnection({})
        }
    }

    public async connect(): Promise<Querying> {
        return {
            query: this.query,
        }
    }

    private async query(...query: any) {
        await this.#client.connect()

        const result = await new Promise((resolve, reject) => {
            this.#client.query(query, (error, results) => {
                if (error) {
                    reject(error)
                }

                resolve(results)
            })
        })

        this.#client.end()

        return result
    }
}
