import { Entity } from '../entity'

export class BankOfAmerica extends Entity<number, any> {
    public constructor(id: any, document: any) {
        super(id, document)
    }

    public clone(): this {
        this.country = 'America'

        return super.clone()
    }
}
