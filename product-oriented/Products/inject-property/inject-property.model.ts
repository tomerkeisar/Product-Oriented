import { Observable, Observer, Subject, BehaviorSubject, AnonymousSubject } from "jspm_packages/npm/rxjs@5.4.0/Rx";

export class InjectPropertyModel {

    private subject: Subject<any> = new BehaviorSubject<any>(undefined);

    private whenPropertyWasSet: Observable<any>;

    descriptoes: PropertyDescriptor;

    constructor(public propName: string, private elem: HTMLElement) {
        this.descriptoes = {
            get: () => {
                return this.whenPropertyWasSet;
            },
            set: (val) => {
                this.elem[this.propName + "field"] = val;
                this.subject.next(val);
            },
        };

        this.whenPropertyWasSet = this.subject.filter((value, index) => {
            return typeof value != "undefined";
        });
    }

}