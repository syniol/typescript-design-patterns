import { Client } from 'pg'

import { Connector, Querying } from './storage'

export class Postgres implements Connector {
    #client: Client

    public constructor(client?: Client) {
        if (client) {
            this.#client = client;
        } else {
            this.#client = new Client({})
        }
    }

    public async connect(): Promise<Querying> {
        await this.#client.connect()

        return {
            query: this.#client.query,
        }
    }
}
