
export interface ICommand {
    name: string
    signature: string

    run(): void
}