import path from "path";
import { Command } from "./decorators/command-decorator";
import { BaseCreateCommand } from "./contracts/base-create-command";
import { ICommand } from "./contracts/command";
import { inject, injectable } from "tsyringe";
import { ITemplateEngineGateway } from "./contracts/template-engine-gateway";

@Command('CreateUseCaseCommand')
@injectable()
export class CreateUseCaseCommand extends BaseCreateCommand implements ICommand {
    name: string = 'create-usecase'
    signature: string = 'make:use-case :name: :interface:'

    constructor(
        @inject('ITemplateEngineGateway') templateEngineGateway: ITemplateEngineGateway
    ) {
        super(templateEngineGateway)
    }

    templateString(): string {
        return path.resolve(__dirname + './../templates/use-case.tmpl')
    }
}