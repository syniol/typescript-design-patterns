import { CreditCard } from './creditcard'

export class CreditCardBuilder extends CreditCard {
    public constructor(cardNumber: number, cc: number) {
        super(cardNumber, cc)
    }

    dateOfBirth(date: Date): CreditCardBuilder {
        this._dateOfBirth = date

        return this
    }

    placeOfBirth(birthPlace: string): CreditCardBuilder {
        this._placeOfBirth = birthPlace

        return this
    }

    firstName(name: string): CreditCardBuilder {
        this._firstName = name

        return this
    }
    surname(name: string): CreditCardBuilder {
        this._surname = name

        return this
    }
    middleName(name: string): CreditCardBuilder {
        this._middleName = name

        return this
    }
    build(): CreditCard {
        return this
    }
}
