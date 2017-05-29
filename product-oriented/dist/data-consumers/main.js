System.register(["./data-consumer"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ResolveRelation(elem) {
        let obj = new data_consumer_1.DataConsumer(elem);
        return obj.ResolveRelation();
    }
    exports_1("ResolveRelation", ResolveRelation);
    var data_consumer_1;
    return {
        setters: [
            function (data_consumer_1_1) {
                data_consumer_1 = data_consumer_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=main.js.map