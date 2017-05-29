System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InjectProperty;
    return {
        setters: [],
        execute: function () {
            InjectProperty = class InjectProperty {
                constructor(elem, model) {
                    this.elem = elem;
                    this.model = model;
                }
                injectPropertyToThisHtmlElement() {
                    Object.defineProperty(this.elem, this.model.propName, this.model.descriptoes);
                }
            };
            exports_1("InjectProperty", InjectProperty);
        }
    };
});
//# sourceMappingURL=inject-property.js.map