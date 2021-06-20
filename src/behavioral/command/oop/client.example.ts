import { Repository, RequestContext } from '../type'
import CardReader from './card-reader'

describe('Command Client Example in OOP Programming Paradigm', () => {
    const UserRepositoryMock: jest.Mock<Repository> = jest.fn()
    const PaymentCardRepositoryMock: jest.Mock<Repository> = jest.fn()
    const EventRepositoryMock: jest.Mock<Repository> = jest.fn()

    beforeAll(() => {
        const cardReader = new CardReader()
        cardReader.authoriseContactLess<RequestContext>(
            UserRepositoryMock(),
            PaymentCardRepositoryMock(),
            EventRepositoryMock(),
            {
                merchantId: '',
                amount: 23.9,
                userCard: {
                    name: '',
                    number: 0,
                    securityCode: "076",
                },
            }
        )
    })

    afterAll(() => {
        UserRepositoryMock.mockReset()
        PaymentCardRepositoryMock.mockReset()
        PaymentCardRepositoryMock.mockReset()
    })

    it('should `Invoke` a given command without any error', () => {
        expect(UserRepositoryMock().findOne).toHaveBeenCalledTimes(1)
    })

    it('should `Undo` all invoked commands without any error', () => {
        expect(PaymentCardRepositoryMock().findOne).toHaveBeenCalledTimes(1)
    })

    it('should `Retry` all commands failed during invocation without any error', () => {
        expect(EventRepositoryMock().findOne).toHaveBeenCalledTimes(1)
    })
})
