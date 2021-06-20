import { Handler } from '../../type'

export default class FundsHandler<T> implements Handler<T> {
    readonly #accountRepository

    public constructor(accountRepository: any) {
        this.#accountRepository = accountRepository
    }

    public async handle(request: T): Promise<void> {
        await this.#accountRepository.findOne(request)
    }
}
