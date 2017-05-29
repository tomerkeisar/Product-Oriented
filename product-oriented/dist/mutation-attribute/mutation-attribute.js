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
            MutationAttribute = class MutationAttribute {
                constructor(elem, attributeName) {
                    this.elem = elem;
                    this.attributeName = attributeName;
                    this.subject = new Rx_1.BehaviorSubject(undefined);
                    let seedVAl = this.elem.getAttribute(this.attributeName);
                    if (seedVAl) {
                        this.subject.next(seedVAl);
                    }
                    this.userSetDataToAttribute = this.subject.filter((value, index) => {
                        return typeof value != "undefined";
                    });
                }
                MutationOnAttribute() {
                    var observer = new MutationObserver((mutations) => {
                        mutations.forEach((mutation) => {
                            if (mutation.type == "attributes") {
                                if (mutation.attributeName == this.attributeName) {
                                    var newVal = mutation.target
                                        .getAttribute(this.attributeName);
                                    this.subject.next(newVal);
                                }
                            }
                        });
                    });
                    observer.observe(this.elem, mutation_attribute_model_1.Config);
                    return this.userSetDataToAttribute;
                }
            };
            exports_1("MutationAttribute", MutationAttribute);
        }
    };
});
//# sourceMappingURL=mutation-attribute.js.map