import { Entity } from '../entity'

export class BankOfEngland extends Entity<number, any> {
    public constructor(id: any, document: any) {
        super(id, document)
    }

    public clone(): this {
        this.country = 'England'

        return super.clone()
    }
}
