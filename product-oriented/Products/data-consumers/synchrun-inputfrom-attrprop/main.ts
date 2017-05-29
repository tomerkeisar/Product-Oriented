import { Observable, BehaviorSubject } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { SynchrunPropertyAndAttribute } from "../../synchrun-property-attribute/main";

export function SynchrunInputFromAttrprop
    (elem: HTMLElement): Observable<string> {

    let observavleAttribute: Observable<string> = SynchrunPropertyAndAttribute(elem,
        "input-from");

    //observavleAttribute.subscribe((data) => {
    //    console.log("attribute changed", data);
    //});

    return observavleAttribute;
}