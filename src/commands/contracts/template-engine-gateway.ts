
export interface ITemplateEngineGateway<T = object> {
    render(templateString: string, params: T): string
}