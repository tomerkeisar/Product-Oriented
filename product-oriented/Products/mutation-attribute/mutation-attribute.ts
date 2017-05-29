import { BehaviorSubject, Observable } from "jspm_packages/npm/rxjs@5.4.0/Rx";
import {Config } from "./mutation-attribute.model";

export class MutationAttribute {

    private subject: BehaviorSubject<string>
    = new BehaviorSubject<string>(undefined);

    private userSetDataToAttribute: Observable<string>;

    constructor(private elem: HTMLElement, private attributeName: string) {
        let seedVAl = this.elem.getAttribute(this.attributeName);

        if (seedVAl)
        {
            this.subject.next(seedVAl);
        }

        this.userSetDataToAttribute = this.subject.filter((value, index) => {
            return typeof value != "undefined";
        });
    }

    MutationOnAttribute(): Observable<string> {

        var observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type == "attributes") {
                    if (mutation.attributeName == this.attributeName) {
                        var newVal = (<HTMLElement>mutation.target)
                            .getAttribute(this.attributeName);
                        this.subject.next(newVal);
                    }
                }
            });
        });

        observer.observe(this.elem, Config);

        return this.userSetDataToAttribute;
    }
}