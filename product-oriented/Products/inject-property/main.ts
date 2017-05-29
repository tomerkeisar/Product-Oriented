import { InjectProperty } from "./inject-property";
import { InjectPropertyModel } from "./inject-property.model";

export function InsertPropertyOnDomElement(elem: HTMLElement, propName: string) {
    let model: InjectPropertyModel = new InjectPropertyModel(propName, elem);
    new InjectProperty(elem, model).
        injectPropertyToThisHtmlElement();
}

 