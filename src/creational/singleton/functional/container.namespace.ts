export namespace Container {
    const services = new Map<string, object>()

    export function add(service: object, alias?: string): void {
        if (alias) {
            services.set(alias, service)

            return
        }

        services.set(service.constructor.name, service)
    }

    export function get(alias: string): object {
        const service = services.get(alias)
        if (service) {
            return service
        }

        throw new Error('Alias is not defined')
    }
}
