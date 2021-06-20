import { Handler } from '../../type'

const NewUserVerificationHandler = <T>(
    userRepository: any,
): Handler<T> => {
    return {
        async handle<T>(request: T): Promise<void> {
            await userRepository.findOne(request);
        },
    }
}

export default NewUserVerificationHandler
