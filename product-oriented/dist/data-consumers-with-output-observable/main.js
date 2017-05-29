System.register(["jspm_packages/npm/rxjs@5.4.0/Rx", "../data-consumers-with-output/main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ResolveRelationWithOutputAndNotify(elem) {
        let intObservable = new Rx_1.BehaviorSubject(undefined);
        let retObservable = intObservable.filter(val => typeof val != "undefined");
        let observable = main_1.ResolveRelationWithOutput(elem);
        let array = [];
        let subscribers = [];
        observable.subscribe((data) => {
            clearPrev();
            for (var i = 0; i < data.length; i++) {
                var elem = data[i];
                let sub = elem['output'].subscribe((output) => {
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