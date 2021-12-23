import { container } from "tsyringe"
import { ICommand } from "./commands/contracts/command"
import commands from "./commands"

export class Handler {
    private commandList: {
        name: string
        signature: string
        instance: ICommand
    }[]

    constructor() {
        this.commandList = []
    }

    init(): void {
        this.registerCommands()
    }

    private registerCommands(): void {
        commands.forEach((command: any) => {
            const token = Reflect.getMetadata('command', command)
            const commandInstance: ICommand = container.resolve(token)
            this.commandList.push({
                name: commandInstance.name,
                signature: commandInstance.signature,
                instance: commandInstance
            })
        })
    }

    run() {
        const commandInput: string|undefined = process.argv.slice(2).join(' ')

        if (!commandInput) {
            throw new Error('Please, type a command, your piece of shit!')
        }

        const command = this.commandList.find(command => command.signature === commandInput)

        if (!command) {
            throw new Error(`Command ${commandInput} not found!`)
        }

        command.instance.run()
    }
}