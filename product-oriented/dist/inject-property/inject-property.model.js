System.register(["jspm_packages/npm/rxjs@5.4.0/Rx"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1, InjectPropertyModel;
    return {
        setters: [
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {
            InjectPropertyModel = class InjectPropertyModel {
                constructor(propName, elem) {
                    this.propName = propName;
                    this.elem = elem;
                    this.subject = new Rx_1.BehaviorSubject(undefined);
                    this.descriptoes = {
                        get: () => {
                            return this.whenPropertyWasSet;
                        },
                        set: (val) => {
                            this.elem[this.propName + "field"] = val;
                            this.subject.next(val);
                        },
                    };
                    this.whenPropertyWasSet = this.subject.filter((value, index) => {
                        return typeof value != "undefined";
                    });
                }
            };
            exports_1("InjectPropertyModel", InjectPropertyModel);
        }
    };
});
//# sourceMappingURL=inject-property.model.js.map