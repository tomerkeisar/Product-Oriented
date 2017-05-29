import { Observable, BehaviorSubject } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { SynchrunPropertyAndAttribute } from "../synchrun-property-attribute/main";
import { registerAutoLogicFunctionOnHtmlElement } from "../auto-logic-function/main";

export function SynchrunInputAttrpropLogic
    (elem: HTMLElement) {


    let observavleAttribute: Observable<string> = SynchrunPropertyAndAttribute(elem, "input");

    let subjectLogicFunction: BehaviorSubject<any> = registerAutoLogicFunctionOnHtmlElement(elem);

    observavleAttribute.subscribe((data) => {
        console.log("attribute changed", data);

        subjectLogicFunction.next(data);
    });

}