import { BehaviorSubject } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { LogicFunction } from "../logic-function/logic-function";

export function registerAutoLogicFunctionOnHtmlElement(elem: HTMLElement): BehaviorSubject<any> {
    let obj: LogicFunction = new LogicFunction(elem);
    let logicFunctionSubject: BehaviorSubject<any> = obj.registerElementOnLogicFunction();


  elem.hasAttribute("auto-logic") && logicFunctionSubject.next(null);

    return logicFunctionSubject;
}