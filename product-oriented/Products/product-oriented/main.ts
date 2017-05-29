import { SynchrunInputAttrpropLogic } from "../synchrun-input-attrprop-logic/main";
import { SynchrunOutputAttrpropLogic } from "../synchrun-output-attrprop-logic/main";
import { ResolveRelationWithOutputAndNotify } from "../data-consumers-with-output-observable/main";

export function ProductOriented(elem: HTMLElement): any {

    SynchrunOutputAttrpropLogic(elem);
    SynchrunInputAttrpropLogic(elem);


    // var observable = ResolveRelationWithOutputAndNotify(elem);

    //observable.subscribe((data) => {
    //    elem['input'] = data;

    //});

    // return observable;
}

export function ResolveRelation(elem: HTMLElement): any {

    var observable = ResolveRelationWithOutputAndNotify(elem);

    let sub = observable.subscribe((relativeOutput: any) => {

        if (!elem['skip'])
            elem['input'] = relativeOutput;
        if (elem['data-suplyersfield'][0].tagName === "TEMPLATE") {
            elem['skip'] = true;
        }
    });

    return observable;
}