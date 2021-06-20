import { Invoke, Retry, Undo } from './manager'
import NewAuthorizeContactlessPaymentCommand from './authoriser.command'
import { Repository } from '../type'

describe('Command Client Example in Functional Programming Paradigm', () => {
    const UserRepositoryMock: jest.Mock<Repository> = jest.fn()
    const PaymentCardRepositoryMock: jest.Mock<Repository> = jest.fn()
    const EventRepositoryMock: jest.Mock<Repository> = jest.fn()

    const requestMock = {};

    const command = NewAuthorizeContactlessPaymentCommand(
        UserRepositoryMock(),
        PaymentCardRepositoryMock(),
        EventRepositoryMock(),
        requestMock
    )

    it('should `Invoke` a given command without any error', () => {
        expect(async () => await Invoke(command)).not.toThrow()
    })

    it('should `Undo` all invoked commands without any error', () => {
        expect(async () => await Undo()).not.toThrow()
    })

    it('should `Retry` all commands failed during invocation without any error', () => {
        expect(async () => await Retry()).not.toThrow()
    })
})
