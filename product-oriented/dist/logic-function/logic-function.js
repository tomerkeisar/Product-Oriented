System.register(["jspm_packages/npm/rxjs@5.4.0/Rx"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1, LogicFunction;
    return {
        setters: [
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {
            LogicFunction = class LogicFunction {
                constructor(elem) {
                    this.elem = elem;
                    this.subject = new Rx_1.BehaviorSubject("FirstTime");
                }
                registerElementOnLogicFunction() {
                    this.elem['logic'] = this.subject;
                    this.subject.subscribe((data) => {
                        if (data != "FirstTime")
                            this.callLogicFunctionToThisElement(data);
                    });
                    return this.subject;
                }
                callLogicFunctionToThisElement(data) {
                    var logicContent = this.elem.getAttribute("logic");
                    if (logicContent) {
                        var strFunc = `(function () {
                 ${logicContent};
            }).call(this.elem,data)`;
                        eval(strFunc);
                    }
                }
            };
            exports_1("LogicFunction", LogicFunction);
        }
    };
});
//# sourceMappingURL=logic-function.js.map