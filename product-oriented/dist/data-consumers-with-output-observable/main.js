System.register(["jspm_packages/npm/rxjs@5.4.0/Rx", "../data-consumers-with-output/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ResolveRelationWithOutputAndNotify(elem) {
        var intObservable = new Rx_1.BehaviorSubject(undefined);
        var retObservable = intObservable.filter(function (val) { return typeof val != "undefined"; });
        var observable = main_1.ResolveRelationWithOutput(elem);
        var array = [];
        var subscribers = [];
        observable.subscribe(function (data) {
            clearPrev();
            for (var i = 0; i < data.length; i++) {
                var elem = data[i];
                var sub = elem['output'].subscribe(function (output) {
                    intObservable.next(output);
                });
                subscribers.push(sub);
            }
        });
        function clearPrev() {
            for (var i = 0; i < subscribers.length; i++) {
                subscribers[i].unsubscribe();
            }
            subscribers = [];
        }
        return retObservable;
    }
    exports_1("ResolveRelationWithOutputAndNotify", ResolveRelationWithOutputAndNotify);
    var Rx_1, main_1;
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
        }
    };
});
//# sourceMappingURL=main.js.map