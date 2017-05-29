import { Observable, BehaviorSubject } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { ResolveRelationWithOutput } from "../data-consumers-with-output/main";


export function ResolveRelationWithOutputAndNotify(elem: HTMLElement): Observable<any> {

    let intObservable: BehaviorSubject<any> = new BehaviorSubject(undefined);
    let retObservable: Observable<any> = intObservable.filter(val => typeof val != "undefined");

    let observable = ResolveRelationWithOutput(elem);
    let array: Array<Observable<HTMLElement>> = [];
    let subscribers: Array<any> = [];
    observable.subscribe((data: Array<HTMLElement>) => {
        
        clearPrev();
        for (var i = 0; i < data.length; i++) {
            var elem = data[i];
            let sub = elem['output'].subscribe((output: any) => {
                intObservable.next(output);
            });
            subscribers.push(sub);
        }
    });

    function clearPrev() {
        for (var i = 0; i < subscribers.length; i++) {
            subscribers[i].unsubscribe();
        }
        subscribers = [];
    }

    return retObservable;
}

