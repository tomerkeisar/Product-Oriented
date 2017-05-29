import { Observable } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { GetNotificationOnUserSetDataOnAttribute } from "../mutation-attribute/main";
import { InsertPropertyOnDomElement } from "../inject-property/main";


export function SynchrunPropertyAndAttribute(elem: HTMLElement, attributePropName: string): Observable<string> {
    let firstTimer = true;
    let observable: Observable<string> =
        GetNotificationOnUserSetDataOnAttribute(elem, attributePropName);

    InsertPropertyOnDomElement(elem, attributePropName);


    observable.subscribe((data) => {
       // console.log("attribute changed to: ", data);

        if (firstTimer) {
            firstTimer = false;
            elem[attributePropName] = data;
            return;
        }
        firstTimer = true;

    });

    elem[attributePropName].subscribe((data: any) => {

      //  console.log("property changed to: ", data);

        if (firstTimer) {
            firstTimer = false;
            elem.setAttribute(attributePropName, data);
            return;
        }
        firstTimer = true;
    });

    return observable;
}