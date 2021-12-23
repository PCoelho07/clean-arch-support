import 'reflect-metadata'

export function Command(commandName: string) {
    return function (target: any) {
        Reflect.defineMetadata('command', commandName, target)
    }
}