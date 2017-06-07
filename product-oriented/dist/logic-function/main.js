System.register(["./logic-function"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function registerLogicFunctionOnHtmlElement(elem) {
        var obj = new logic_function_1.LogicFunction(elem);
        return obj.registerElementOnLogicFunction();
    }
    exports_1("registerLogicFunctionOnHtmlElement", registerLogicFunctionOnHtmlElement);
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