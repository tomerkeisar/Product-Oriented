System.register(["../mutation-attribute/main", "../inject-property/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function SynchrunPropertyAndAttribute(elem, attributePropName) {
        let firstTimer = true;
        let observable = main_1.GetNotificationOnUserSetDataOnAttribute(elem, attributePropName);
        main_2.InsertPropertyOnDomElement(elem, attributePropName);
        observable.subscribe((data) => {
            if (firstTimer) {
                firstTimer = false;
                elem[attributePropName] = data;
                return;
            }
            firstTimer = true;
        });
        elem[attributePropName].subscribe((data) => {
            if (firstTimer) {
                firstTimer = false;
                elem.setAttribute(attributePropName, data);
                return;
            }
            firstTimer = true;
        });
        return observable;
    }
    exports_1("SynchrunPropertyAndAttribute", SynchrunPropertyAndAttribute);
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