System.register(["jspm_packages/npm/rxjs@5.4.0/Rx", "../synchrun-property-attribute/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1, main_1, AddOutputToSupplyer;
    return {
        setters: [
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            }
        ],
        execute: function () {
            AddOutputToSupplyer = class AddOutputToSupplyer {
                constructor(supplyers) {
                    this.supplyers = supplyers;
                    this.fieldName = "output";
                    this.subject = new Rx_1.BehaviorSubject(null);
                }
                AddOutputPropertyAttributeToThisSupplyer() {
                    this.subject.subscribe((elem) => {
                        if (elem && !elem[this.fieldName]) {
                            main_1.SynchrunPropertyAndAttribute(elem, this.fieldName);
                        }
                    });
                    this.iterateOnSupplyers();
                }
                iterateOnSupplyers() {
                    for (var i = 0; i < this.supplyers.length; i++) {
                        this.subject.next(this.supplyers[i]);
                    }
                }
            };
            exports_1("AddOutputToSupplyer", AddOutputToSupplyer);
        }
    };
});
//# sourceMappingURL=add-output-to-supplyer.js.map