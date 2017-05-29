import { Observable, BehaviorSubject } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import { SynchrunPropertyAndAttribute } from "../synchrun-property-attribute/main";

export class AddOutputToSupplyer {

    fieldName: string = "output";

    subject: BehaviorSubject<Element> = new BehaviorSubject(null);

    constructor(private supplyers: Element[]) {
    }

    AddOutputPropertyAttributeToThisSupplyer() {
        this.subject.subscribe((elem: HTMLElement) => {
            if (elem && !elem[this.fieldName]) {
                SynchrunPropertyAndAttribute(elem, this.fieldName);
            }
        });

        this.iterateOnSupplyers();
    }


    private iterateOnSupplyers() {
        for (var i = 0; i < this.supplyers.length; i++) {
            
            this.subject.next(this.supplyers[i]);
        }
    }
}

