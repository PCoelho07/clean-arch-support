import { ITemplateEngineGateway } from "../commands/contracts/template-engine-gateway";

export class TemplateEngine implements ITemplateEngineGateway {
    render(templateString: string, params: object): string {
        return 'test'
    }
}