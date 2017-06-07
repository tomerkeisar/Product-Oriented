System.register(["./synchrun-inputfrom-attrprop/main", "../synchrun-property-attribute/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var main_1, main_2, DataConsumer;
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
            DataConsumer = (function () {
                function DataConsumer(elemNeddedData) {
                    this.elemNeddedData = elemNeddedData;
                    this.FirstTime = true;
                }
                DataConsumer.prototype.ResolveRelation = function () {
                    var _this = this;
                    var observable = main_1.SynchrunInputFromAttrprop(this.elemNeddedData);
                    if (this.FirstTime) {
                        main_2.SynchrunPropertyAndAttribute(this.elemNeddedData, "data-suplyers");
                        this.FirstTime = false;
                    }
                    observable.subscribe(function (data) {
                        var supplyers = _this.removeSelf(document.querySelectorAll(data));
                        _this.elemNeddedData["data-suplyers"] = supplyers;
                        if (supplyers.length === 0) {
                            setTimeout(function () {
                                var supplyers = _this.removeSelf(document.querySelectorAll(data));
                                _this.elemNeddedData["data-suplyers"] = supplyers;
                            }, 10);
                        }
                    });
                    return this.elemNeddedData["data-suplyers"];
                };
                DataConsumer.prototype.removeSelf = function (elems) {
                    var retArray = [];
                    for (var i = 0; i < elems.length; i++) {
                        if (elems[i] != this.elemNeddedData) {
                            retArray.push(elems[i]);
                        }
                    }
                    return retArray;
                };
                return DataConsumer;
            }());
            exports_1("DataConsumer", DataConsumer);
        }
    };
});
//# sourceMappingURL=data-consumer.js.map