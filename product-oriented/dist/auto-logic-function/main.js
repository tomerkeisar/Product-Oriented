System.register(["../logic-function/logic-function"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function registerAutoLogicFunctionOnHtmlElement(elem) {
        var obj = new logic_function_1.LogicFunction(elem);
        var logicFunctionSubject = obj.registerElementOnLogicFunction();
        elem.hasAttribute("auto-logic") && logicFunctionSubject.next(null);
        return logicFunctionSubject;
    }
    exports_1("registerAutoLogicFunctionOnHtmlElement", registerAutoLogicFunctionOnHtmlElement);
    var logic_function_1;
    return {
        setters: [
            function (logic_function_1_1) {
                logic_function_1 = logic_function_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=main.js.map