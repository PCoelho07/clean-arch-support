import { container } from "tsyringe"

import { ICommand } from "./commands/contracts/command"
import { TemplateEngine } from "./gateways/template-engine-gateway"
import commands from "./commands"

export class Handler {
    private commandList: ICommand[]

    constructor() {
        this.commandList = []
    }

    init(): void {
        this.registerInjectionContainer()
        this.registerCommands()
        this.registerCommandSignatures()
    }

    private registerInjectionContainer() {
        container.register('ITemplateEngineGateway', {
            useClass: TemplateEngine
        })
    }

    private registerCommands(): void {
        commands.forEach((command: Function) => {
            const commandInstance: ICommand = container.resolve(command.name)
            this.commandList.push(commandInstance)
        })
    }

    private registerCommandSignatures(): void {
        this.commandList.forEach((command: ICommand) => {

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

        command.run()
    }
}