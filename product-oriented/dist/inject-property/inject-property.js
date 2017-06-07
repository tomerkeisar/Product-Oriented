System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InjectProperty;
    return {
        setters: [],
        execute: function () {
            InjectProperty = (function () {
                function InjectProperty(elem, model) {
                    this.elem = elem;
                    this.model = model;
                }
                InjectProperty.prototype.injectPropertyToThisHtmlElement = function () {
                    Object.defineProperty(this.elem, this.model.propName, this.model.descriptoes);
                };
                return InjectProperty;
            }());
            exports_1("InjectProperty", InjectProperty);
        }
    };
});
//# sourceMappingURL=inject-property.js.map