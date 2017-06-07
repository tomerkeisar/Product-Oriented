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
            InjectPropertyModel = (function () {
                function InjectPropertyModel(propName, elem) {
                    var _this = this;
                    this.propName = propName;
                    this.elem = elem;
                    this.subject = new Rx_1.BehaviorSubject(undefined);
                    this.descriptoes = {
                        get: function () {
                            return _this.whenPropertyWasSet;
                        },
                        set: function (val) {
                            _this.elem[_this.propName + "field"] = val;
                            _this.subject.next(val);
                        }
                    };
                    this.whenPropertyWasSet = this.subject.filter(function (value, index) {
                        return typeof value != "undefined";
                    });
                }
                return InjectPropertyModel;
            }());
            exports_1("InjectPropertyModel", InjectPropertyModel);
        }
    };
});
//# sourceMappingURL=inject-property.model.js.map