import { Observable, BehaviorSubject } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { SynchrunPropertyAndAttribute } from "../synchrun-property-attribute/main";
import { registerAutoLogicFunctionOnHtmlElement } from "../auto-logic-function/main";

export function SynchrunOutputAttrpropLogic
    (elem: HTMLElement) {

  //  let subjectLogicFunction: BehaviorSubject<any> = registerAutoLogicFunctionOnHtmlElement(elem);

    let observavleAttribute: Observable<string> = SynchrunPropertyAndAttribute(elem, "output");

    if (elem.hasAttribute('init-output')) {
        elem['output'] = eval(elem.getAttribute('init-output'));
    }
}