import { Handler } from '../../type'

const NewFundsHandler = <T>(
    accountRepository: any,
): Handler<T> => {
    return {
        async handle<T>(request: T): Promise<void> {
            await accountRepository.findOne(request);
        },
    }
}

export default NewFundsHandler
