import AuthorizeContactlessPaymentCommand from './authorizer.command'
import CommandManager from './manager'
import { Repository, RequestContext } from '../type'

export default class CardReader {
    readonly #commandManager: CommandManager

    public constructor(commandManager?: CommandManager) {
        this.#commandManager = commandManager || new CommandManager()
    }

    public async authoriseContactLess<T extends RequestContext>(
        userRepository: Repository,
        paymentCardRepository: Repository,
        EventRepository: Repository,
        request: T
    ): Promise<void> {
        const command = new AuthorizeContactlessPaymentCommand(
            userRepository,
            paymentCardRepository,
            EventRepository,
            request
        )

        return this.#commandManager.invoke(command)
    }
}
