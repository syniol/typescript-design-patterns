export interface Querying {
    query(...arg: any): any;
}

export interface Connector {
    connect(): Promise<Querying>;
}
