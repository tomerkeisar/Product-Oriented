System.register(["./apply-product-oriented-on-element"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function registerProductOriented() {
        var elements = document.querySelectorAll("[input-from],[input],[logic]");
        for (var i = 0; i < elements.length; i++) {
            var elem = elements[i];
            var obj = new apply_product_oriented_on_element_1.ApplyProductOrientedOnElements(elem);
            obj.ApplyProductOrientedOnElements();
        }
        for (var i = 0; i < elements.length; i++) {
            var elem = elements[i];
            var obj = new apply_product_oriented_on_element_1.ApplyProductOrientedOnElements(elem);
            obj.ApplyResolveRelationOnElements();
        }
        var insertedNodes = [];
        document.addEventListener("DOMNodeInserted", function (e) {
            var elem = e.target;
            if (elem && elem.tagName) {
                var obj = new apply_product_oriented_on_element_1.ApplyProductOrientedOnElements(elem);
                obj.ApplyProductOrientedOnElements();
                obj.ApplyResolveRelationOnElements();
            }
        }, false);
    }
    var apply_product_oriented_on_element_1;
    return {
        setters: [
            function (apply_product_oriented_on_element_1_1) {
                apply_product_oriented_on_element_1 = apply_product_oriented_on_element_1_1;
            }
        ],
        execute: function () {
            registerProductOriented();
        }
    };
});
//# sourceMappingURL=main.js.map