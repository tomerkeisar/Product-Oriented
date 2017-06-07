System.register(["jspm_packages/npm/rxjs@5.4.0/Rx", "./mutation-attribute.model"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1, mutation_attribute_model_1, MutationAttribute;
    return {
        setters: [
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (mutation_attribute_model_1_1) {
                mutation_attribute_model_1 = mutation_attribute_model_1_1;
            }
        ],
        execute: function () {
            MutationAttribute = (function () {
                function MutationAttribute(elem, attributeName) {
                    this.elem = elem;
                    this.attributeName = attributeName;
                    this.subject = new Rx_1.BehaviorSubject(undefined);
                    var seedVAl = this.elem.getAttribute(this.attributeName);
                    if (seedVAl) {
                        this.subject.next(seedVAl);
                    }
                    this.userSetDataToAttribute = this.subject.filter(function (value, index) {
                        return typeof value != "undefined";
                    });
                }
                MutationAttribute.prototype.MutationOnAttribute = function () {
                    var _this = this;
                    var observer = new MutationObserver(function (mutations) {
                        mutations.forEach(function (mutation) {
                            if (mutation.type == "attributes") {
                                if (mutation.attributeName == _this.attributeName) {
                                    var newVal = mutation.target
                                        .getAttribute(_this.attributeName);
                                    _this.subject.next(newVal);
                                }
                            }
                        });
                    });
                    observer.observe(this.elem, mutation_attribute_model_1.Config);
                    return this.userSetDataToAttribute;
                };
                return MutationAttribute;
            }());
            exports_1("MutationAttribute", MutationAttribute);
        }
    };
});
//# sourceMappingURL=mutation-attribute.js.map