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
            DataConsumer = class DataConsumer {
                constructor(elemNeddedData) {
                    this.elemNeddedData = elemNeddedData;
                    this.FirstTime = true;
                }
                ResolveRelation() {
                    let observable = main_1.SynchrunInputFromAttrprop(this.elemNeddedData);
                    if (this.FirstTime) {
                        main_2.SynchrunPropertyAndAttribute(this.elemNeddedData, "data-suplyers");
                        this.FirstTime = false;
                    }
                    observable.subscribe(data => {
                        let supplyers = this.removeSelf(document.querySelectorAll(data));
                        this.elemNeddedData["data-suplyers"] = supplyers;
                    });
                    return this.elemNeddedData["data-suplyers"];
                }
                removeSelf(elems) {
                    let retArray = [];
                    for (var i = 0; i < elems.length; i++) {
                        if (elems[i] != this.elemNeddedData) {
                            retArray.push(elems[i]);
                        }
                    }
                    return retArray;
                }
            };
            exports_1("DataConsumer", DataConsumer);
        }
    };
});
//# sourceMappingURL=data-consumer.js.map