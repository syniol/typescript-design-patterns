import { Handler } from '../../type'

const NewHeaderValidationHandler = <T>(): Handler<T> => {
    return {
        async handle<T>(request: T): Promise<void> {
            if (request) {
                return;
            }
        },
    }
}

export default NewHeaderValidationHandler
