System.register(["../synchrun-input-attrprop-logic/main", "../synchrun-output-attrprop-logic/main", "../data-consumers-with-output-observable/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ProductOriented(elem) {
        main_1.SynchrunOutputAttrpropLogic(elem);
        main_2.SynchrunInputAttrpropLogic(elem);
    }
    exports_1("ProductOriented", ProductOriented);
    function ResolveRelation(elem) {
        var observable = main_3.ResolveRelationWithOutputAndNotify(elem);
        var sub = observable.subscribe(function (relativeOutput) {
            if (!elem['skip'])
                elem['input'] = relativeOutput;
            if (elem['data-suplyersfield'][0].tagName === "TEMPLATE") {
                elem['skip'] = true;
            }
        });
        return observable;
    }
    exports_1("ResolveRelation", ResolveRelation);
    var main_2, main_1, main_3;
    return {
        setters: [
            function (main_2_1) {
                main_2 = main_2_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (main_3_1) {
                main_3 = main_3_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=main.js.map