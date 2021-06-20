import { Command } from '../type'

const commands: Command[] = []
const failedCommands: Command[] = []

export async function Invoke(command: Command): Promise<void> {
    if (await command.isExecutable()) {
        commands.push(command)

        try {
            await command.execute()
        } catch (e: unknown) {
            failedCommands.push(command)

            throw e
        }
    }
}

export async function Undo(): Promise<void> {
    while (commands.length > 0) {
        const command = commands.pop()
        if (command) {
            await command.undo()
        }
    }
}

export async function Retry(): Promise<void> {
    while (failedCommands.length > 0) {
        const command = failedCommands.pop()
        if (command) {
            await command.retry()
        }
    }
}
