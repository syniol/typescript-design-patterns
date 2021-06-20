import { Handler } from '../../type'

export default class UserVerificationHandler<T> implements Handler<T> {
    readonly #userRepository: any;

    public constructor(userRepository: any) {
        this.#userRepository = userRepository;
    }

    public async handle(request: T): Promise<void> {
        await this.#userRepository(request);
    }
}
