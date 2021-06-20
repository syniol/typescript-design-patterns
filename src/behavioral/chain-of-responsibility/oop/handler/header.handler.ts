import { Handler } from '../../type'

export default class HeaderValidationHandler<T> implements Handler<T> {
    readonly #consumerRepository: any;

    public constructor(consumerRepository: any) {
        this.#consumerRepository = consumerRepository;
    }

    public async handle(request: T): Promise<void> {
        await this.#consumerRepository.findOne(request);
    }
}
