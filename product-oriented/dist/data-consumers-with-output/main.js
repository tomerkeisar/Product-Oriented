System.register(["../data-consumers/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ResolveRelationWithOutput(elem) {
        var observable = main_1.ResolveRelation(elem);
        observable.subscribe((relatives) => {
        });
        return observable;
    }
    exports_1("ResolveRelationWithOutput", ResolveRelationWithOutput);
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