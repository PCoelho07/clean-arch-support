import path from "path";
import { Command } from "./decorators/command-decorator";
import { BaseCreateCommand } from "./contracts/base-create-command";
import { ICommand } from "./contracts/command";

@Command('create-usecase')
export class CreateUseCaseCommand extends BaseCreateCommand implements ICommand {
    name: string = 'create-usecase'
    signature: string = 'make:use-case :UseCaseName:'

    templateString(): string {
        return path.resolve(__dirname + './../templates/use-case.tmpl')
    }
}