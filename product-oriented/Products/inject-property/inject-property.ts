import { InjectPropertyModel } from "./inject-property.model";

export class InjectProperty {
    constructor(private elem: HTMLElement, private model: InjectPropertyModel) {
    }

    injectPropertyToThisHtmlElement(): void {
        Object.defineProperty(this.elem, this.model.propName, this.model.descriptoes);
    }
}