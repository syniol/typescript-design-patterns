import { ContainerDefinition } from './type'

function add(
    services: Map<string, object>,
    service: object,
    alias?: string,
): void {
    if (alias) {
        services.set(alias, service)

        return
    }

    services.set(service.constructor.name, service)
}

function get(services: Map<string, object>, alias: string): object {
    const service = services.get(alias)
    if (service) {
        return service
    }

    throw new Error('Alias is not defined')
}

export function getInstance(): ContainerDefinition {
    const services = new Map<string, object>()

    return {
        add(service: object, alias?: string): void {
            return add(services, service, alias)
        },
        get(alias: string): object {
            return get(services, alias)
        },
    }
}
