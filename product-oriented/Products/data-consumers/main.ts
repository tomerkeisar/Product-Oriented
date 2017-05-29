import { Observable } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { DataConsumer } from "./data-consumer";

export function ResolveRelation(elem: HTMLElement): Observable<Element[]>{

    let obj: DataConsumer = new DataConsumer(elem);

    return obj.ResolveRelation();
}

