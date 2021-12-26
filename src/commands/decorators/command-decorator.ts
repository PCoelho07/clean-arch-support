import 'reflect-metadata'
import { container } from 'tsyringe'

export function Command(commandName: string) {
    return function (target: any) {
        container.register(commandName, {
            useClass: target
        })
    }
}