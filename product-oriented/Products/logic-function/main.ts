import { BehaviorSubject } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { LogicFunction } from "./logic-function";

export function registerLogicFunctionOnHtmlElement(elem: HTMLElement): BehaviorSubject<any> {
    let obj: LogicFunction = new LogicFunction(elem);
    return obj.registerElementOnLogicFunction();
}