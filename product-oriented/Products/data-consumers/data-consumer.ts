import { Observable } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { InsertPropertyOnDomElement } from "../inject-property/main";
import { SynchrunInputFromAttrprop } from "./synchrun-inputfrom-attrprop/main";
import { SynchrunPropertyAndAttribute } from "../synchrun-property-attribute/main";
import { } from "../";
export class DataConsumer {
    constructor(private elemNeddedData: HTMLElement) {

    }

    FirstTime: boolean = true;

    ResolveRelation(): Observable<Array<Element>> {

        let observable: Observable<string> =
            SynchrunInputFromAttrprop(this.elemNeddedData);


        if (this.FirstTime) {
            SynchrunPropertyAndAttribute(this.elemNeddedData, "data-suplyers");

            this.FirstTime = false;
        }

        observable.subscribe(data => {

            let supplyers: Array<Element> =
                this.removeSelf(document.querySelectorAll(data));

            //   this.clearPrviousSubscription();

            this.elemNeddedData["data-suplyers"] = supplyers;

            if (supplyers.length === 0)
            {
                setTimeout(() => {

                    let supplyers: Array<Element> =
                        this.removeSelf(document.querySelectorAll(data));

                    this.elemNeddedData["data-suplyers"] = supplyers;

                },10);
            }

            // console.log("need to work on elem", this.elemNeddedData);

        });

        return this.elemNeddedData["data-suplyers"];
    }
    //clearPrviousSubscription() {
    //    var supplyers = this.elemNeddedData["data-suplyersfield"];
    //    if (typeof supplyers != "undefined")
    //        for (var i = 0; i < supplyers.length; i++) {
    //            debugger
    //            var currentSupplyer = supplyers[i];
    //            if (currentSupplyer['output']) {
    //                debugger
    //                currentSupplyer['output'].unsubscribe();
    //            }
    //        }
    //}

    removeSelf(elems: NodeListOf<Element>): Array<Element> {

        let retArray = [];

        for (var i = 0; i < elems.length; i++) {
            if (elems[i] != this.elemNeddedData) {
                retArray.push(elems[i]);
            }
        }

        return retArray;
    }
}