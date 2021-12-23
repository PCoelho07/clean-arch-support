import { readFileSync, writeFileSync } from "fs";
import { ICommand } from "./command";
import { ITemplateEngineGateway } from "./template-engine-gateway";

export abstract class BaseCreateCommand implements ICommand {
    name!: string
    signature!: string

    constructor(
        private readonly templateEngineGateway: ITemplateEngineGateway
    ) {}

    abstract templateString(): string

    run(): void {
        console.log('rodei!')
        const template: Buffer = readFileSync(this.templateString())
        const templateParsed = this.templateEngineGateway.render(template.toString(), {})

        writeFileSync('use-case.ts', templateParsed)
    }
}