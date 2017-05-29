System.register(["../synchrun-property-attribute/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function SynchrunOutputAttrpropLogic(elem) {
        let observavleAttribute = main_1.SynchrunPropertyAndAttribute(elem, "output");
        if (elem.hasAttribute('init-output')) {
            elem['output'] = eval(elem.getAttribute('init-output'));
        }
    }
    exports_1("SynchrunOutputAttrpropLogic", SynchrunOutputAttrpropLogic);
    var main_1;
    return {
        setters: [
            function (main_1_1) {
                main_1 = main_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=main.js.map