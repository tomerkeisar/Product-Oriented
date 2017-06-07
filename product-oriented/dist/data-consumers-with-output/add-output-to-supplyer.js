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
            AddOutputToSupplyer = (function () {
                function AddOutputToSupplyer(supplyers) {
                    this.supplyers = supplyers;
                    this.fieldName = "output";
                    this.subject = new Rx_1.BehaviorSubject(null);
                }
                AddOutputToSupplyer.prototype.AddOutputPropertyAttributeToThisSupplyer = function () {
                    var _this = this;
                    this.subject.subscribe(function (elem) {
                        if (elem && !elem[_this.fieldName]) {
                            main_1.SynchrunPropertyAndAttribute(elem, _this.fieldName);
                        }
                    });
                    this.iterateOnSupplyers();
                };
                AddOutputToSupplyer.prototype.iterateOnSupplyers = function () {
                    for (var i = 0; i < this.supplyers.length; i++) {
                        this.subject.next(this.supplyers[i]);
                    }
                };
                return AddOutputToSupplyer;
            }());
            exports_1("AddOutputToSupplyer", AddOutputToSupplyer);
        }
    };
});
//# sourceMappingURL=add-output-to-supplyer.js.map