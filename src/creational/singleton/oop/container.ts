export class Container {
    private static instance: Container

    readonly #services: Map<string, object>

    private constructor(map?: Map<string, object>) {
        this.#services = map || new Map<string, object>()
    }

    public static getInstance(): Container {
        if (Container.instance) {
            return Container.instance
        }

        return (Container.instance = new Container())
    }

    public add(service: object, alias?: string): void {
        if (alias) {
            this.#services.set(alias, service)

            return
        }

        this.#services.set(service.constructor.name, service)
    }

    public get(alias: string): object {
        const service = this.#services.get(alias)
        if (service) {
            return service
        }

        throw new Error('Alias is not defined')
    }
}
