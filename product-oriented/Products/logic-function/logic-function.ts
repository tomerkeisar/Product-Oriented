import { Observer, BehaviorSubject } from "jspm_packages/npm/rxjs@5.4.0/Rx";
export class LogicFunction {

    constructor(private elem: HTMLElement) {
    }

    private subject: BehaviorSubject<any> = new BehaviorSubject<any>("FirstTime");

    public registerElementOnLogicFunction(): BehaviorSubject<any> {
        this.elem['logic'] = this.subject;
        this.subject.subscribe((data) => {
            if (data != "FirstTime")
                this.callLogicFunctionToThisElement(data);
        });
        return this.subject;
    }

    private callLogicFunctionToThisElement(data: any) {
        var logicContent = this.elem.getAttribute("logic");
        if (logicContent) {
            var strFunc = `(function () {
                 ${logicContent};
            }).call(this.elem,data)`;
            eval(strFunc);
        }
    }
}