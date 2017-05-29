System.register(["./mutation-attribute"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function GetNotificationOnUserSetDataOnAttribute(elem, attributeName) {
        return new mutation_attribute_1.MutationAttribute(elem, attributeName)
            .MutationOnAttribute();
    }
    exports_1("GetNotificationOnUserSetDataOnAttribute", GetNotificationOnUserSetDataOnAttribute);
    var mutation_attribute_1;
    return {
        setters: [
            function (mutation_attribute_1_1) {
                mutation_attribute_1 = mutation_attribute_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=main.js.map