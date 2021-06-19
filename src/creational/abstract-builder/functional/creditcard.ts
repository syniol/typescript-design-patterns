export interface CreditCard {
    cardNumber: number
    cc: number
    expDate: Date
    startDate: Date
    firstName?: string
    surname?: string
    middleName?: string
    dateOfBirth?: Date
    placeOfBirth?: string
}

export interface CreditCardBuilder {
    creditCard: CreditCard

    build(): CreditCard
    dateOfBirth(date: Date): CreditCardBuilder
    placeOfBirth(birthPlace: string): CreditCardBuilder
    firstName(name: string): CreditCardBuilder
    surname(name: string): CreditCardBuilder
    middleName(name: string): CreditCardBuilder
}

export function NewCreditCard(
    cardNumber: number,
    cc: number
): CreditCardBuilder {
    const startDate = new Date()

    return {
        creditCard: {
            cardNumber: cardNumber,
            cc: cc,
            expDate: new Date(
                startDate.getFullYear() + 3,
                startDate.getMonth()
            ),
            startDate: startDate,
        },
        build(): CreditCard {
            ;['dateOfBirth', 'placeOfBirth', 'firstName', 'surname'].forEach(
                (value: string) => {
                    if (!(value in this.creditCard)) {
                        throw new Error(`${value} hasn't been defined`)
                    }
                }
            )

            return this.creditCard
        },
        dateOfBirth(date: Date): CreditCardBuilder {
            this.creditCard.dateOfBirth = date

            return this
        },
        placeOfBirth(birthPlace: string): CreditCardBuilder {
            this.creditCard.placeOfBirth = birthPlace

            return this
        },
        firstName(name: string): CreditCardBuilder {
            this.creditCard.firstName = name

            return this
        },
        middleName(name: string): CreditCardBuilder {
            this.creditCard.middleName = name

            return this
        },
        surname(name: string): CreditCardBuilder {
            this.creditCard.surname = name

            return this
        },
    }
}
