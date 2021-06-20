import { Command, Repository, RequestContext } from '../type'
import NewAuthorizeContactlessPaymentCommand from './authoriser.command'
import { Invoke } from './manager'

export default function NewCardReader(
    invoke?: (command: Command) => Promise<void>
) {
    const invoker = invoke || Invoke
    return {
        authoriseContactLess<T extends RequestContext>(
            userRepository: Repository,
            paymentCardRepository: Repository,
            EventRepository: Repository,
            request: T
        ): Promise<void> {
            const command = NewAuthorizeContactlessPaymentCommand(
                userRepository,
                paymentCardRepository,
                EventRepository,
                request
            )

            return invoker(command)
        },
    }
}
