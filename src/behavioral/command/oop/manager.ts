import { Command } from '../type'

export default class CommandManager {
    readonly #commands: Command[]
    readonly #failedCommands: Command[]

    public constructor() {
        this.#commands = []
        this.#failedCommands = []
    }

    public async invoke(command: Command): Promise<void> {
        if (command.isExecutable()) {
            this.#commands.push(command)
            await command.execute()
        }
    }

    public async undo(): Promise<void> {
        while (this.#commands.length > 0) {
            const command = this.#commands.pop()

            if (command) {
                await command.undo()
            }
        }
    }

    public async retry(): Promise<void> {
        while (this.#failedCommands.length > 0) {
            const command = this.#failedCommands.pop()

            if (command) {
                await command.undo()
            }
        }
    }
}
