System.register(["../product-oriented/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var main_1, main_2, ApplyProductOrientedOnElements;
    return {
        setters: [
            function (main_1_1) {
                main_1 = main_1_1;
                main_2 = main_1_1;
            }
        ],
        execute: function () {
            ApplyProductOrientedOnElements = (function () {
                function ApplyProductOrientedOnElements(elem) {
                    this.elem = elem;
                }
                ApplyProductOrientedOnElements.prototype.ApplyProductOrientedOnElements = function () {
                    main_1.ProductOriented(this.elem);
                };
                ApplyProductOrientedOnElements.prototype.ApplyResolveRelationOnElements = function () {
                    main_2.ResolveRelation(this.elem);
                };
                return ApplyProductOrientedOnElements;
            }());
            exports_1("ApplyProductOrientedOnElements", ApplyProductOrientedOnElements);
        }
    };
});
//# sourceMappingURL=apply-product-oriented-on-element.js.map