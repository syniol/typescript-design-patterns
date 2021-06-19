export abstract class CreditCard {
    protected readonly expDate: Date
    protected readonly startDate: Date

    protected _firstName?: string
    protected _surname?: string
    protected _middleName?: string
    protected _dateOfBirth?: Date
    protected _placeOfBirth?: string

    protected constructor(protected cardNumber: number, protected cc: number) {
        this.startDate = new Date()
        this.expDate = new Date(
            this.startDate.getFullYear() + 3,
            this.startDate.getMonth()
        )
    }
}
