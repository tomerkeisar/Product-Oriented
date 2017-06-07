System.register(["./inject-property", "./inject-property.model"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function InsertPropertyOnDomElement(elem, propName) {
        var model = new inject_property_model_1.InjectPropertyModel(propName, elem);
        new inject_property_1.InjectProperty(elem, model).
            injectPropertyToThisHtmlElement();
    }
    exports_1("InsertPropertyOnDomElement", InsertPropertyOnDomElement);
    var inject_property_1, inject_property_model_1;
    return {
        setters: [
            function (inject_property_1_1) {
                inject_property_1 = inject_property_1_1;
            },
            function (inject_property_model_1_1) {
                inject_property_model_1 = inject_property_model_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=main.js.map