import { Observable } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { ResolveRelation } from "../data-consumers/main";
import { AddOutputToSupplyer } from "./add-output-to-supplyer";


export function ResolveRelationWithOutput(elem: HTMLElement): Observable<any> {

    var observable = ResolveRelation(elem);

    observable.subscribe((relatives:any) => {
      //  let obj = new AddOutputToSupplyer(relatives);
       // obj.AddOutputPropertyAttributeToThisSupplyer();
    });

    return observable;
}

