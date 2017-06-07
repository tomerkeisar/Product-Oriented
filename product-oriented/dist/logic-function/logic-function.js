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
            LogicFunction = (function () {
                function LogicFunction(elem) {
                    this.elem = elem;
                    this.subject = new Rx_1.BehaviorSubject("FirstTime");
                }
                LogicFunction.prototype.registerElementOnLogicFunction = function () {
                    var _this = this;
                    this.elem['logic'] = this.subject;
                    this.subject.subscribe(function (data) {
                        if (data != "FirstTime")
                            _this.callLogicFunctionToThisElement(data);
                    });
                    return this.subject;
                };
                LogicFunction.prototype.callLogicFunctionToThisElement = function (data) {
                    var logicContent = this.elem.getAttribute("logic");
                    if (logicContent) {
                        var strFunc = "(function () {\n                 " + logicContent + ";\n            }).call(this.elem,data)";
                        eval(strFunc);
                    }
                };
                return LogicFunction;
            }());
            exports_1("LogicFunction", LogicFunction);
        }
    };
});
//# sourceMappingURL=logic-function.js.map