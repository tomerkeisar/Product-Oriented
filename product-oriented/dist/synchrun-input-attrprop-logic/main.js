System.register(["../synchrun-property-attribute/main", "../auto-logic-function/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function SynchrunInputAttrpropLogic(elem) {
        var observavleAttribute = main_1.SynchrunPropertyAndAttribute(elem, "input");
        var subjectLogicFunction = main_2.registerAutoLogicFunctionOnHtmlElement(elem);
        observavleAttribute.subscribe(function (data) {
            console.log("attribute changed", data);
            subjectLogicFunction.next(data);
        });
    }
    exports_1("SynchrunInputAttrpropLogic", SynchrunInputAttrpropLogic);
    var main_1, main_2;
    return {
        setters: [
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (main_2_1) {
                main_2 = main_2_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=main.js.map