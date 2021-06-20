export declare interface ContainerDefinition {
    add(service: object, alias?: string): void
    get(alias: string): object
}
