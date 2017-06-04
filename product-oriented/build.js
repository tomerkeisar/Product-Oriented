!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", ["3"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Rx_1, LogicFunction;
    return {
        setters: [function (Rx_1_1) {
            Rx_1 = Rx_1_1;
        }],
        execute: function () {
            LogicFunction = function () {
                function LogicFunction(elem) {
                    this.elem = elem;
                    this.subject = new Rx_1.BehaviorSubject("FirstTime");
                }
                LogicFunction.prototype.registerElementOnLogicFunction = function () {
                    var _this = this;
                    this.elem['logic'] = this.subject;
                    this.subject.subscribe(function (data) {
                        if (data != "FirstTime") _this.callLogicFunctionToThisElement(data);
                    });
                    return this.subject;
                };
                LogicFunction.prototype.callLogicFunctionToThisElement = function (data) {
                    var logicContent = this.elem.getAttribute("logic");
                    if (logicContent) {
                        var strFunc = "(function () {\n                 " + logicContent + ";\n            }).call(this.elem,data)";
                        eval(strFunc);
                    }
                };
                return LogicFunction;
            }();
            exports_1("LogicFunction", LogicFunction);
        }
    };
});

$__System.register("4", ["2"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function registerAutoLogicFunctionOnHtmlElement(elem) {
        var obj = new logic_function_1.LogicFunction(elem);
        var logicFunctionSubject = obj.registerElementOnLogicFunction();
        elem.hasAttribute("auto-logic") && logicFunctionSubject.next(null);
        return logicFunctionSubject;
    }
    exports_1("registerAutoLogicFunctionOnHtmlElement", registerAutoLogicFunctionOnHtmlElement);
    var logic_function_1;
    return {
        setters: [function (logic_function_1_1) {
            logic_function_1 = logic_function_1_1;
        }],
        execute: function () {}
    };
});

$__System.register("5", ["6", "4"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function SynchrunInputAttrpropLogic(elem) {
        var observavleAttribute = main_1.SynchrunPropertyAndAttribute(elem, "input");
        var subjectLogicFunction = main_2.registerAutoLogicFunctionOnHtmlElement(elem);
        observavleAttribute.subscribe(function (data) {
            console.log("attribute changed", data);
            subjectLogicFunction.next(data);
        });
    }
    exports_1("SynchrunInputAttrpropLogic", SynchrunInputAttrpropLogic);
    var main_1, main_2;
    return {
        setters: [function (main_1_1) {
            main_1 = main_1_1;
        }, function (main_2_1) {
            main_2 = main_2_1;
        }],
        execute: function () {}
    };
});

$__System.register("7", ["6"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function SynchrunOutputAttrpropLogic(elem) {
        var observavleAttribute = main_1.SynchrunPropertyAndAttribute(elem, "output");
        if (elem.hasAttribute('init-output')) {
            elem['output'] = eval(elem.getAttribute('init-output'));
        }
    }
    exports_1("SynchrunOutputAttrpropLogic", SynchrunOutputAttrpropLogic);
    var main_1;
    return {
        setters: [function (main_1_1) {
            main_1 = main_1_1;
        }],
        execute: function () {}
    };
});

$__System.register("8", ["6"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function SynchrunInputFromAttrprop(elem) {
        var observavleAttribute = main_1.SynchrunPropertyAndAttribute(elem, "input-from");
        return observavleAttribute;
    }
    exports_1("SynchrunInputFromAttrprop", SynchrunInputFromAttrprop);
    var main_1;
    return {
        setters: [function (main_1_1) {
            main_1 = main_1_1;
        }],
        execute: function () {}
    };
});

$__System.register("9", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Config;
    return {
        setters: [],
        execute: function () {
            exports_1("Config", Config = {
                attributes: true,
                attributeOldValue: true
            });
        }
    };
});

$__System.register("a", ["3", "9"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Rx_1, mutation_attribute_model_1, MutationAttribute;
    return {
        setters: [function (Rx_1_1) {
            Rx_1 = Rx_1_1;
        }, function (mutation_attribute_model_1_1) {
            mutation_attribute_model_1 = mutation_attribute_model_1_1;
        }],
        execute: function () {
            MutationAttribute = function () {
                function MutationAttribute(elem, attributeName) {
                    this.elem = elem;
                    this.attributeName = attributeName;
                    this.subject = new Rx_1.BehaviorSubject(undefined);
                    var seedVAl = this.elem.getAttribute(this.attributeName);
                    if (seedVAl) {
                        this.subject.next(seedVAl);
                    }
                    this.userSetDataToAttribute = this.subject.filter(function (value, index) {
                        return typeof value != "undefined";
                    });
                }
                MutationAttribute.prototype.MutationOnAttribute = function () {
                    var _this = this;
                    var observer = new MutationObserver(function (mutations) {
                        mutations.forEach(function (mutation) {
                            if (mutation.type == "attributes") {
                                if (mutation.attributeName == _this.attributeName) {
                                    var newVal = mutation.target.getAttribute(_this.attributeName);
                                    _this.subject.next(newVal);
                                }
                            }
                        });
                    });
                    observer.observe(this.elem, mutation_attribute_model_1.Config);
                    return this.userSetDataToAttribute;
                };
                return MutationAttribute;
            }();
            exports_1("MutationAttribute", MutationAttribute);
        }
    };
});

$__System.register("b", ["a"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function GetNotificationOnUserSetDataOnAttribute(elem, attributeName) {
        return new mutation_attribute_1.MutationAttribute(elem, attributeName).MutationOnAttribute();
    }
    exports_1("GetNotificationOnUserSetDataOnAttribute", GetNotificationOnUserSetDataOnAttribute);
    var mutation_attribute_1;
    return {
        setters: [function (mutation_attribute_1_1) {
            mutation_attribute_1 = mutation_attribute_1_1;
        }],
        execute: function () {}
    };
});

$__System.register("c", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var InjectProperty;
    return {
        setters: [],
        execute: function () {
            InjectProperty = function () {
                function InjectProperty(elem, model) {
                    this.elem = elem;
                    this.model = model;
                }
                InjectProperty.prototype.injectPropertyToThisHtmlElement = function () {
                    Object.defineProperty(this.elem, this.model.propName, this.model.descriptoes);
                };
                return InjectProperty;
            }();
            exports_1("InjectProperty", InjectProperty);
        }
    };
});

$__System.registerDynamic('d', ['e', 'f', '10', '11'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var AsyncSubject_1 = $__require('11');
  var BoundCallbackObservable = function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, context, scheduler) {
      _super.call(this);
      this.callbackFunc = callbackFunc;
      this.selector = selector;
      this.args = args;
      this.context = context;
      this.scheduler = scheduler;
    }
    BoundCallbackObservable.create = function (func, selector, scheduler) {
      if (selector === void 0) {
        selector = undefined;
      }
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new BoundCallbackObservable(func, selector, args, this, scheduler);
      };
    };
    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
      var callbackFunc = this.callbackFunc;
      var args = this.args;
      var scheduler = this.scheduler;
      var subject = this.subject;
      if (!scheduler) {
        if (!subject) {
          subject = this.subject = new AsyncSubject_1.AsyncSubject();
          var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector,
                subject = source.subject;
            if (selector) {
              var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
              if (result_1 === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
              } else {
                subject.next(result_1);
                subject.complete();
              }
            } else {
              subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
              subject.complete();
            }
          };
          handler.source = this;
          var result = tryCatch_1.tryCatch(callbackFunc).apply(this.context, args.concat(handler));
          if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(BoundCallbackObservable.dispatch, 0, {
          source: this,
          subscriber: subscriber,
          context: this.context
        });
      }
    };
    BoundCallbackObservable.dispatch = function (state) {
      var self = this;
      var source = state.source,
          subscriber = state.subscriber,
          context = state.context;
      var callbackFunc = source.callbackFunc,
          args = source.args,
          scheduler = source.scheduler;
      var subject = source.subject;
      if (!subject) {
        subject = source.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function handlerFn() {
          var innerArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            innerArgs[_i - 0] = arguments[_i];
          }
          var source = handlerFn.source;
          var selector = source.selector,
              subject = source.subject;
          if (selector) {
            var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
            if (result_2 === errorObject_1.errorObject) {
              self.add(scheduler.schedule(dispatchError, 0, {
                err: errorObject_1.errorObject.e,
                subject: subject
              }));
            } else {
              self.add(scheduler.schedule(dispatchNext, 0, {
                value: result_2,
                subject: subject
              }));
            }
          } else {
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            self.add(scheduler.schedule(dispatchNext, 0, {
              value: value,
              subject: subject
            }));
          }
        };
        handler.source = source;
        var result = tryCatch_1.tryCatch(callbackFunc).apply(context, args.concat(handler));
        if (result === errorObject_1.errorObject) {
          subject.error(errorObject_1.errorObject.e);
        }
      }
      self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
  }(Observable_1.Observable);
  exports.BoundCallbackObservable = BoundCallbackObservable;
  function dispatchNext(arg) {
    var value = arg.value,
        subject = arg.subject;
    subject.next(value);
    subject.complete();
  }
  function dispatchError(arg) {
    var err = arg.err,
        subject = arg.subject;
    subject.error(err);
  }
});
$__System.registerDynamic("12", ["d"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var BoundCallbackObservable_1 = $__require("d");
  exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
});
$__System.registerDynamic('13', ['e', '12'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var bindCallback_1 = $__require('12');
  Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
});
$__System.registerDynamic('14', ['e', 'f', '10', '11'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var AsyncSubject_1 = $__require('11');
  var BoundNodeCallbackObservable = function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, context, scheduler) {
      _super.call(this);
      this.callbackFunc = callbackFunc;
      this.selector = selector;
      this.args = args;
      this.context = context;
      this.scheduler = scheduler;
    }
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
      if (selector === void 0) {
        selector = undefined;
      }
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new BoundNodeCallbackObservable(func, selector, args, this, scheduler);
      };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
      var callbackFunc = this.callbackFunc;
      var args = this.args;
      var scheduler = this.scheduler;
      var subject = this.subject;
      if (!scheduler) {
        if (!subject) {
          subject = this.subject = new AsyncSubject_1.AsyncSubject();
          var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector,
                subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
              subject.error(err);
            } else if (selector) {
              var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
              if (result_1 === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
              } else {
                subject.next(result_1);
                subject.complete();
              }
            } else {
              subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
              subject.complete();
            }
          };
          handler.source = this;
          var result = tryCatch_1.tryCatch(callbackFunc).apply(this.context, args.concat(handler));
          if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          source: this,
          subscriber: subscriber,
          context: this.context
        });
      }
    };
    return BoundNodeCallbackObservable;
  }(Observable_1.Observable);
  exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
  function dispatch(state) {
    var self = this;
    var source = state.source,
        subscriber = state.subscriber,
        context = state.context;
    var _a = source,
        callbackFunc = _a.callbackFunc,
        args = _a.args,
        scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
      subject = source.subject = new AsyncSubject_1.AsyncSubject();
      var handler = function handlerFn() {
        var innerArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          innerArgs[_i - 0] = arguments[_i];
        }
        var source = handlerFn.source;
        var selector = source.selector,
            subject = source.subject;
        var err = innerArgs.shift();
        if (err) {
          self.add(scheduler.schedule(dispatchError, 0, {
            err: err,
            subject: subject
          }));
        } else if (selector) {
          var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
          if (result_2 === errorObject_1.errorObject) {
            self.add(scheduler.schedule(dispatchError, 0, {
              err: errorObject_1.errorObject.e,
              subject: subject
            }));
          } else {
            self.add(scheduler.schedule(dispatchNext, 0, {
              value: result_2,
              subject: subject
            }));
          }
        } else {
          var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
          self.add(scheduler.schedule(dispatchNext, 0, {
            value: value,
            subject: subject
          }));
        }
      };
      handler.source = source;
      var result = tryCatch_1.tryCatch(callbackFunc).apply(context, args.concat(handler));
      if (result === errorObject_1.errorObject) {
        self.add(scheduler.schedule(dispatchError, 0, {
          err: errorObject_1.errorObject.e,
          subject: subject
        }));
      }
    }
    self.add(subject.subscribe(subscriber));
  }
  function dispatchNext(arg) {
    var value = arg.value,
        subject = arg.subject;
    subject.next(value);
    subject.complete();
  }
  function dispatchError(arg) {
    var err = arg.err,
        subject = arg.subject;
    subject.error(err);
  }
});
$__System.registerDynamic("15", ["14"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var BoundNodeCallbackObservable_1 = $__require("14");
  exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
});
$__System.registerDynamic('16', ['e', '15'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var bindNodeCallback_1 = $__require('15');
  Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
});
$__System.registerDynamic('17', ['18', '19', '1a', '1b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var isScheduler_1 = $__require('18');
  var isArray_1 = $__require('19');
  var ArrayObservable_1 = $__require('1a');
  var combineLatest_1 = $__require('1b');
  function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
      scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
      project = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
  }
  exports.combineLatest = combineLatest;
});
$__System.registerDynamic('1c', ['e', '17'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var combineLatest_1 = $__require('17');
  Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
});
$__System.registerDynamic("1d", ["1e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var concat_1 = $__require("1e");
  exports.concat = concat_1.concatStatic;
});
$__System.registerDynamic('1f', ['e', '1d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var concat_1 = $__require('1d');
  Observable_1.Observable.concat = concat_1.concat;
});
$__System.registerDynamic('20', ['e', '21', '22'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var subscribeToResult_1 = $__require('21');
  var OuterSubscriber_1 = $__require('22');
  var DeferObservable = function (_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
      _super.call(this);
      this.observableFactory = observableFactory;
    }
    DeferObservable.create = function (observableFactory) {
      return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function (subscriber) {
      return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
  }(Observable_1.Observable);
  exports.DeferObservable = DeferObservable;
  var DeferSubscriber = function (_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
      _super.call(this, destination);
      this.factory = factory;
      this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function () {
      try {
        this._callFactory();
      } catch (err) {
        this._error(err);
      }
    };
    DeferSubscriber.prototype._callFactory = function () {
      var result = this.factory();
      if (result) {
        this.add(subscribeToResult_1.subscribeToResult(this, result));
      }
    };
    return DeferSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic("23", ["20"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var DeferObservable_1 = $__require("20");
  exports.defer = DeferObservable_1.DeferObservable.create;
});
$__System.registerDynamic('24', ['e', '23'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var defer_1 = $__require('23');
  Observable_1.Observable.defer = defer_1.defer;
});
$__System.registerDynamic("25", ["26"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var EmptyObservable_1 = $__require("26");
  exports.empty = EmptyObservable_1.EmptyObservable.create;
});
$__System.registerDynamic('27', ['e', '25'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var empty_1 = $__require('25');
  Observable_1.Observable.empty = empty_1.empty;
});
$__System.registerDynamic('28', ['e', '26', '19', '21', '22'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var EmptyObservable_1 = $__require('26');
  var isArray_1 = $__require('19');
  var subscribeToResult_1 = $__require('21');
  var OuterSubscriber_1 = $__require('22');
  var ForkJoinObservable = function (_super) {
    __extends(ForkJoinObservable, _super);
    function ForkJoinObservable(sources, resultSelector) {
      _super.call(this);
      this.sources = sources;
      this.resultSelector = resultSelector;
    }
    ForkJoinObservable.create = function () {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i - 0] = arguments[_i];
      }
      if (sources === null || arguments.length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      }
      var resultSelector = null;
      if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
      }
      if (sources.length === 1 && isArray_1.isArray(sources[0])) {
        sources = sources[0];
      }
      if (sources.length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      }
      return new ForkJoinObservable(sources, resultSelector);
    };
    ForkJoinObservable.prototype._subscribe = function (subscriber) {
      return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
    };
    return ForkJoinObservable;
  }(Observable_1.Observable);
  exports.ForkJoinObservable = ForkJoinObservable;
  var ForkJoinSubscriber = function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources, resultSelector) {
      _super.call(this, destination);
      this.sources = sources;
      this.resultSelector = resultSelector;
      this.completed = 0;
      this.haveValues = 0;
      var len = sources.length;
      this.total = len;
      this.values = new Array(len);
      for (var i = 0; i < len; i++) {
        var source = sources[i];
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
        if (innerSubscription) {
          innerSubscription.outerIndex = i;
          this.add(innerSubscription);
        }
      }
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.values[outerIndex] = innerValue;
      if (!innerSub._hasValue) {
        innerSub._hasValue = true;
        this.haveValues++;
      }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
      var destination = this.destination;
      var _a = this,
          haveValues = _a.haveValues,
          resultSelector = _a.resultSelector,
          values = _a.values;
      var len = values.length;
      if (!innerSub._hasValue) {
        destination.complete();
        return;
      }
      this.completed++;
      if (this.completed !== len) {
        return;
      }
      if (haveValues === len) {
        var value = resultSelector ? resultSelector.apply(this, values) : values;
        destination.next(value);
      }
      destination.complete();
    };
    return ForkJoinSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic("29", ["28"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var ForkJoinObservable_1 = $__require("28");
  exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
});
$__System.registerDynamic('2a', ['e', '29'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var forkJoin_1 = $__require('29');
  Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
});
$__System.registerDynamic("2b", ["2c"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var FromObservable_1 = $__require("2c");
  exports.from = FromObservable_1.FromObservable.create;
});
$__System.registerDynamic('2d', ['e', '2b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var from_1 = $__require('2b');
  Observable_1.Observable.from = from_1.from;
});
$__System.registerDynamic('2e', ['e', 'f', '2f', '10', '30', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require('e');
    var tryCatch_1 = $__require('f');
    var isFunction_1 = $__require('2f');
    var errorObject_1 = $__require('10');
    var Subscription_1 = $__require('30');
    var toString = Object.prototype.toString;
    function isNodeStyleEventEmitter(sourceObj) {
      return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
    }
    function isJQueryStyleEventEmitter(sourceObj) {
      return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
    }
    function isNodeList(sourceObj) {
      return !!sourceObj && toString.call(sourceObj) === '[object NodeList]';
    }
    function isHTMLCollection(sourceObj) {
      return !!sourceObj && toString.call(sourceObj) === '[object HTMLCollection]';
    }
    function isEventTarget(sourceObj) {
      return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
    }
    var FromEventObservable = function (_super) {
      __extends(FromEventObservable, _super);
      function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
      }
      FromEventObservable.create = function (target, eventName, options, selector) {
        if (isFunction_1.isFunction(options)) {
          selector = options;
          options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
      };
      FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
          for (var i = 0, len = sourceObj.length; i < len; i++) {
            FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
          }
        } else if (isEventTarget(sourceObj)) {
          var source_1 = sourceObj;
          sourceObj.addEventListener(eventName, handler, options);
          unsubscribe = function () {
            return source_1.removeEventListener(eventName, handler);
          };
        } else if (isJQueryStyleEventEmitter(sourceObj)) {
          var source_2 = sourceObj;
          sourceObj.on(eventName, handler);
          unsubscribe = function () {
            return source_2.off(eventName, handler);
          };
        } else if (isNodeStyleEventEmitter(sourceObj)) {
          var source_3 = sourceObj;
          sourceObj.addListener(eventName, handler);
          unsubscribe = function () {
            return source_3.removeListener(eventName, handler);
          };
        } else {
          throw new TypeError('Invalid event target');
        }
        subscriber.add(new Subscription_1.Subscription(unsubscribe));
      };
      FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
          }
          var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
          if (result === errorObject_1.errorObject) {
            subscriber.error(errorObject_1.errorObject.e);
          } else {
            subscriber.next(result);
          }
        } : function (e) {
          return subscriber.next(e);
        };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
      };
      return FromEventObservable;
    }(Observable_1.Observable);
    exports.FromEventObservable = FromEventObservable;
  })($__require('31'));
});
$__System.registerDynamic("32", ["2e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var FromEventObservable_1 = $__require("2e");
  exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
});
$__System.registerDynamic('33', ['e', '32'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var fromEvent_1 = $__require('32');
  Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
});
$__System.registerDynamic('34', ['2f', 'e', '30', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isFunction_1 = $__require('2f');
    var Observable_1 = $__require('e');
    var Subscription_1 = $__require('30');
    var FromEventPatternObservable = function (_super) {
      __extends(FromEventPatternObservable, _super);
      function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _super.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
      }
      FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
      };
      FromEventPatternObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var removeHandler = this.removeHandler;
        var handler = !!this.selector ? function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
          }
          _this._callSelector(subscriber, args);
        } : function (e) {
          subscriber.next(e);
        };
        var retValue = this._callAddHandler(handler, subscriber);
        if (!isFunction_1.isFunction(removeHandler)) {
          return;
        }
        subscriber.add(new Subscription_1.Subscription(function () {
          removeHandler(handler, retValue);
        }));
      };
      FromEventPatternObservable.prototype._callSelector = function (subscriber, args) {
        try {
          var result = this.selector.apply(this, args);
          subscriber.next(result);
        } catch (e) {
          subscriber.error(e);
        }
      };
      FromEventPatternObservable.prototype._callAddHandler = function (handler, errorSubscriber) {
        try {
          return this.addHandler(handler) || null;
        } catch (e) {
          errorSubscriber.error(e);
        }
      };
      return FromEventPatternObservable;
    }(Observable_1.Observable);
    exports.FromEventPatternObservable = FromEventPatternObservable;
  })($__require('31'));
});
$__System.registerDynamic("35", ["34"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var FromEventPatternObservable_1 = $__require("34");
  exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
});
$__System.registerDynamic('36', ['e', '35'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var fromEventPattern_1 = $__require('35');
  Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
});
$__System.registerDynamic("37", ["38"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var PromiseObservable_1 = $__require("38");
  exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
});
$__System.registerDynamic('39', ['e', '37'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var fromPromise_1 = $__require('37');
  Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
});
$__System.registerDynamic('3a', ['e', '18'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var isScheduler_1 = $__require('18');
  var selfSelector = function (value) {
    return value;
  };
  var GenerateObservable = function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
      _super.call(this);
      this.initialState = initialState;
      this.condition = condition;
      this.iterate = iterate;
      this.resultSelector = resultSelector;
      this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
      if (arguments.length == 1) {
        return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
      }
      if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
        return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
      }
      return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function (subscriber) {
      var state = this.initialState;
      if (this.scheduler) {
        return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
          subscriber: subscriber,
          iterate: this.iterate,
          condition: this.condition,
          resultSelector: this.resultSelector,
          state: state
        });
      }
      var _a = this,
          condition = _a.condition,
          resultSelector = _a.resultSelector,
          iterate = _a.iterate;
      do {
        if (condition) {
          var conditionResult = void 0;
          try {
            conditionResult = condition(state);
          } catch (err) {
            subscriber.error(err);
            return;
          }
          if (!conditionResult) {
            subscriber.complete();
            break;
          }
        }
        var value = void 0;
        try {
          value = resultSelector(state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
          break;
        }
        try {
          state = iterate(state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
      } while (true);
    };
    GenerateObservable.dispatch = function (state) {
      var subscriber = state.subscriber,
          condition = state.condition;
      if (subscriber.closed) {
        return;
      }
      if (state.needIterate) {
        try {
          state.state = state.iterate(state.state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
      } else {
        state.needIterate = true;
      }
      if (condition) {
        var conditionResult = void 0;
        try {
          conditionResult = condition(state.state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (!conditionResult) {
          subscriber.complete();
          return;
        }
        if (subscriber.closed) {
          return;
        }
      }
      var value;
      try {
        value = state.resultSelector(state.state);
      } catch (err) {
        subscriber.error(err);
        return;
      }
      if (subscriber.closed) {
        return;
      }
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
      return this.schedule(state);
    };
    return GenerateObservable;
  }(Observable_1.Observable);
  exports.GenerateObservable = GenerateObservable;
});
$__System.registerDynamic('3b', ['e', '3a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var GenerateObservable_1 = $__require('3a');
  Observable_1.Observable.generate = GenerateObservable_1.GenerateObservable.create;
});
$__System.registerDynamic('3c', ['e', '21', '22'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var subscribeToResult_1 = $__require('21');
  var OuterSubscriber_1 = $__require('22');
  var IfObservable = function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
      _super.call(this);
      this.condition = condition;
      this.thenSource = thenSource;
      this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
      return new IfObservable(condition, thenSource, elseSource);
    };
    IfObservable.prototype._subscribe = function (subscriber) {
      var _a = this,
          condition = _a.condition,
          thenSource = _a.thenSource,
          elseSource = _a.elseSource;
      return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
  }(Observable_1.Observable);
  exports.IfObservable = IfObservable;
  var IfSubscriber = function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
      _super.call(this, destination);
      this.condition = condition;
      this.thenSource = thenSource;
      this.elseSource = elseSource;
      this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
      var _a = this,
          condition = _a.condition,
          thenSource = _a.thenSource,
          elseSource = _a.elseSource;
      var result;
      try {
        result = condition();
        var source = result ? thenSource : elseSource;
        if (source) {
          this.add(subscribeToResult_1.subscribeToResult(this, source));
        } else {
          this._complete();
        }
      } catch (err) {
        this._error(err);
      }
    };
    return IfSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic("3d", ["3c"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var IfObservable_1 = $__require("3c");
  exports._if = IfObservable_1.IfObservable.create;
});
$__System.registerDynamic('3e', ['e', '3d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var if_1 = $__require('3d');
  Observable_1.Observable.if = if_1._if;
});
$__System.registerDynamic('3f', ['40', 'e', '41'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = $__require('40');
  var Observable_1 = $__require('e');
  var async_1 = $__require('41');
  var IntervalObservable = function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      _super.call(this);
      this.period = period;
      this.scheduler = scheduler;
      if (!isNumeric_1.isNumeric(period) || period < 0) {
        this.period = 0;
      }
      if (!scheduler || typeof scheduler.schedule !== 'function') {
        this.scheduler = async_1.async;
      }
    }
    IntervalObservable.create = function (period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
      var index = state.index,
          subscriber = state.subscriber,
          period = state.period;
      subscriber.next(index);
      if (subscriber.closed) {
        return;
      }
      state.index += 1;
      this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
      var index = 0;
      var period = this.period;
      var scheduler = this.scheduler;
      subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
        index: index,
        subscriber: subscriber,
        period: period
      }));
    };
    return IntervalObservable;
  }(Observable_1.Observable);
  exports.IntervalObservable = IntervalObservable;
});
$__System.registerDynamic("42", ["3f"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var IntervalObservable_1 = $__require("3f");
  exports.interval = IntervalObservable_1.IntervalObservable.create;
});
$__System.registerDynamic('43', ['e', '42'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var interval_1 = $__require('42');
  Observable_1.Observable.interval = interval_1.interval;
});
$__System.registerDynamic("44", ["45"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var merge_1 = $__require("45");
  exports.merge = merge_1.mergeStatic;
});
$__System.registerDynamic('46', ['e', '44'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var merge_1 = $__require('44');
  Observable_1.Observable.merge = merge_1.merge;
});
$__System.registerDynamic('47', ['e', '48'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var race_1 = $__require('48');
  Observable_1.Observable.race = race_1.raceStatic;
});
$__System.registerDynamic('49', ['e', '4a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var noop_1 = $__require('4a');
  var NeverObservable = function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
      _super.call(this);
    }
    NeverObservable.create = function () {
      return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function (subscriber) {
      noop_1.noop();
    };
    return NeverObservable;
  }(Observable_1.Observable);
  exports.NeverObservable = NeverObservable;
});
$__System.registerDynamic("4b", ["49"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var NeverObservable_1 = $__require("49");
  exports.never = NeverObservable_1.NeverObservable.create;
});
$__System.registerDynamic('4c', ['e', '4b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var never_1 = $__require('4b');
  Observable_1.Observable.never = never_1.never;
});
$__System.registerDynamic("4d", ["1a"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var ArrayObservable_1 = $__require("1a");
  exports.of = ArrayObservable_1.ArrayObservable.of;
});
$__System.registerDynamic('4e', ['e', '4d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var of_1 = $__require('4d');
  Observable_1.Observable.of = of_1.of;
});
$__System.registerDynamic('4f', ['e', '50'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var onErrorResumeNext_1 = $__require('50');
  Observable_1.Observable.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNextStatic;
});
$__System.registerDynamic("51", ["e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require("e");
  function dispatch(state) {
    var obj = state.obj,
        keys = state.keys,
        length = state.length,
        index = state.index,
        subscriber = state.subscriber;
    if (index === length) {
      subscriber.complete();
      return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
  }
  var PairsObservable = function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
      _super.call(this);
      this.obj = obj;
      this.scheduler = scheduler;
      this.keys = Object.keys(obj);
    }
    PairsObservable.create = function (obj, scheduler) {
      return new PairsObservable(obj, scheduler);
    };
    PairsObservable.prototype._subscribe = function (subscriber) {
      var _a = this,
          keys = _a.keys,
          scheduler = _a.scheduler;
      var length = keys.length;
      if (scheduler) {
        return scheduler.schedule(dispatch, 0, {
          obj: this.obj,
          keys: keys,
          length: length,
          index: 0,
          subscriber: subscriber
        });
      } else {
        for (var idx = 0; idx < length; idx++) {
          var key = keys[idx];
          subscriber.next([key, this.obj[key]]);
        }
        subscriber.complete();
      }
    };
    return PairsObservable;
  }(Observable_1.Observable);
  exports.PairsObservable = PairsObservable;
});
$__System.registerDynamic("52", ["51"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var PairsObservable_1 = $__require("51");
  exports.pairs = PairsObservable_1.PairsObservable.create;
});
$__System.registerDynamic('53', ['e', '52'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var pairs_1 = $__require('52');
  Observable_1.Observable.pairs = pairs_1.pairs;
});
$__System.registerDynamic("54", ["e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require("e");
  var RangeObservable = function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
      _super.call(this);
      this.start = start;
      this._count = count;
      this.scheduler = scheduler;
    }
    RangeObservable.create = function (start, count, scheduler) {
      if (start === void 0) {
        start = 0;
      }
      if (count === void 0) {
        count = 0;
      }
      return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
      var start = state.start,
          index = state.index,
          count = state.count,
          subscriber = state.subscriber;
      if (index >= count) {
        subscriber.complete();
        return;
      }
      subscriber.next(start);
      if (subscriber.closed) {
        return;
      }
      state.index = index + 1;
      state.start = start + 1;
      this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function (subscriber) {
      var index = 0;
      var start = this.start;
      var count = this._count;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(RangeObservable.dispatch, 0, {
          index: index,
          count: count,
          start: start,
          subscriber: subscriber
        });
      } else {
        do {
          if (index++ >= count) {
            subscriber.complete();
            break;
          }
          subscriber.next(start++);
          if (subscriber.closed) {
            break;
          }
        } while (true);
      }
    };
    return RangeObservable;
  }(Observable_1.Observable);
  exports.RangeObservable = RangeObservable;
});
$__System.registerDynamic("55", ["54"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var RangeObservable_1 = $__require("54");
  exports.range = RangeObservable_1.RangeObservable.create;
});
$__System.registerDynamic('56', ['e', '55'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var range_1 = $__require('55');
  Observable_1.Observable.range = range_1.range;
});
$__System.registerDynamic('57', ['e', '21', '22'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var subscribeToResult_1 = $__require('21');
  var OuterSubscriber_1 = $__require('22');
  var UsingObservable = function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
      _super.call(this);
      this.resourceFactory = resourceFactory;
      this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
      return new UsingObservable(resourceFactory, observableFactory);
    };
    UsingObservable.prototype._subscribe = function (subscriber) {
      var _a = this,
          resourceFactory = _a.resourceFactory,
          observableFactory = _a.observableFactory;
      var resource;
      try {
        resource = resourceFactory();
        return new UsingSubscriber(subscriber, resource, observableFactory);
      } catch (err) {
        subscriber.error(err);
      }
    };
    return UsingObservable;
  }(Observable_1.Observable);
  exports.UsingObservable = UsingObservable;
  var UsingSubscriber = function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
      _super.call(this, destination);
      this.resource = resource;
      this.observableFactory = observableFactory;
      destination.add(resource);
      this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
      try {
        var source = this.observableFactory.call(this, this.resource);
        if (source) {
          this.add(subscribeToResult_1.subscribeToResult(this, source));
        }
      } catch (err) {
        this._error(err);
      }
    };
    return UsingSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic("58", ["57"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var UsingObservable_1 = $__require("57");
  exports.using = UsingObservable_1.UsingObservable.create;
});
$__System.registerDynamic('59', ['e', '58'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var using_1 = $__require('58');
  Observable_1.Observable.using = using_1.using;
});
$__System.registerDynamic("5a", ["e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require("e");
  var ErrorObservable = function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
      _super.call(this);
      this.error = error;
      this.scheduler = scheduler;
    }
    ErrorObservable.create = function (error, scheduler) {
      return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
      var error = arg.error,
          subscriber = arg.subscriber;
      subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
      var error = this.error;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ErrorObservable.dispatch, 0, {
          error: error,
          subscriber: subscriber
        });
      } else {
        subscriber.error(error);
      }
    };
    return ErrorObservable;
  }(Observable_1.Observable);
  exports.ErrorObservable = ErrorObservable;
});
$__System.registerDynamic("5b", ["5a"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var ErrorObservable_1 = $__require("5a");
  exports._throw = ErrorObservable_1.ErrorObservable.create;
});
$__System.registerDynamic('5c', ['e', '5b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var throw_1 = $__require('5b');
  Observable_1.Observable.throw = throw_1._throw;
});
$__System.registerDynamic('5d', ['40', 'e', '41', '18', '5e'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = $__require('40');
  var Observable_1 = $__require('e');
  var async_1 = $__require('41');
  var isScheduler_1 = $__require('18');
  var isDate_1 = $__require('5e');
  var TimerObservable = function (_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }
      _super.call(this);
      this.period = -1;
      this.dueTime = 0;
      if (isNumeric_1.isNumeric(period)) {
        this.period = Number(period) < 1 && 1 || Number(period);
      } else if (isScheduler_1.isScheduler(period)) {
        scheduler = period;
      }
      if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
      }
      this.scheduler = scheduler;
      this.dueTime = isDate_1.isDate(dueTime) ? +dueTime - this.scheduler.now() : dueTime;
    }
    TimerObservable.create = function (initialDelay, period, scheduler) {
      if (initialDelay === void 0) {
        initialDelay = 0;
      }
      return new TimerObservable(initialDelay, period, scheduler);
    };
    TimerObservable.dispatch = function (state) {
      var index = state.index,
          period = state.period,
          subscriber = state.subscriber;
      var action = this;
      subscriber.next(index);
      if (subscriber.closed) {
        return;
      } else if (period === -1) {
        return subscriber.complete();
      }
      state.index = index + 1;
      action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function (subscriber) {
      var index = 0;
      var _a = this,
          period = _a.period,
          dueTime = _a.dueTime,
          scheduler = _a.scheduler;
      return scheduler.schedule(TimerObservable.dispatch, dueTime, {
        index: index,
        period: period,
        subscriber: subscriber
      });
    };
    return TimerObservable;
  }(Observable_1.Observable);
  exports.TimerObservable = TimerObservable;
});
$__System.registerDynamic("5f", ["5d"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var TimerObservable_1 = $__require("5d");
  exports.timer = TimerObservable_1.TimerObservable.create;
});
$__System.registerDynamic('60', ['e', '5f'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var timer_1 = $__require('5f');
  Observable_1.Observable.timer = timer_1.timer;
});
$__System.registerDynamic("61", ["62"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var zip_1 = $__require("62");
  exports.zip = zip_1.zipStatic;
});
$__System.registerDynamic('63', ['e', '61'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var zip_1 = $__require('61');
  Observable_1.Observable.zip = zip_1.zip;
});
$__System.registerDynamic("64", ["65"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var AjaxObservable_1 = $__require("65");
  exports.ajax = AjaxObservable_1.AjaxObservable.create;
});
$__System.registerDynamic('66', ['e', '64'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var ajax_1 = $__require('64');
  Observable_1.Observable.ajax = ajax_1.ajax;
});
$__System.registerDynamic("67", ["68"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require("68");
  function assignImpl(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      sources[_i - 1] = arguments[_i];
    }
    var len = sources.length;
    for (var i = 0; i < len; i++) {
      var source = sources[i];
      for (var k in source) {
        if (source.hasOwnProperty(k)) {
          target[k] = source[k];
        }
      }
    }
    return target;
  }
  exports.assignImpl = assignImpl;
  ;
  function getAssign(root) {
    return root.Object.assign || assignImpl;
  }
  exports.getAssign = getAssign;
  exports.assign = getAssign(root_1.root);
});
$__System.registerDynamic('69', ['6a', '6b', 'e', '30', '68', '6c', 'f', '10', '67'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var Subscriber_1 = $__require('6b');
  var Observable_1 = $__require('e');
  var Subscription_1 = $__require('30');
  var root_1 = $__require('68');
  var ReplaySubject_1 = $__require('6c');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var assign_1 = $__require('67');
  var WebSocketSubject = function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
      if (urlConfigOrSource instanceof Observable_1.Observable) {
        _super.call(this, destination, urlConfigOrSource);
      } else {
        _super.call(this);
        this.WebSocketCtor = root_1.root.WebSocket;
        this._output = new Subject_1.Subject();
        if (typeof urlConfigOrSource === 'string') {
          this.url = urlConfigOrSource;
        } else {
          assign_1.assign(this, urlConfigOrSource);
        }
        if (!this.WebSocketCtor) {
          throw new Error('no WebSocket constructor can be found');
        }
        this.destination = new ReplaySubject_1.ReplaySubject();
      }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
      return JSON.parse(e.data);
    };
    WebSocketSubject.create = function (urlConfigOrSource) {
      return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
      var sock = new WebSocketSubject(this, this.destination);
      sock.operator = operator;
      return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
      this.socket = null;
      if (!this.source) {
        this.destination = new ReplaySubject_1.ReplaySubject();
      }
      this._output = new Subject_1.Subject();
    };
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
      var self = this;
      return new Observable_1.Observable(function (observer) {
        var result = tryCatch_1.tryCatch(subMsg)();
        if (result === errorObject_1.errorObject) {
          observer.error(errorObject_1.errorObject.e);
        } else {
          self.next(result);
        }
        var subscription = self.subscribe(function (x) {
          var result = tryCatch_1.tryCatch(messageFilter)(x);
          if (result === errorObject_1.errorObject) {
            observer.error(errorObject_1.errorObject.e);
          } else if (result) {
            observer.next(x);
          }
        }, function (err) {
          return observer.error(err);
        }, function () {
          return observer.complete();
        });
        return function () {
          var result = tryCatch_1.tryCatch(unsubMsg)();
          if (result === errorObject_1.errorObject) {
            observer.error(errorObject_1.errorObject.e);
          } else {
            self.next(result);
          }
          subscription.unsubscribe();
        };
      });
    };
    WebSocketSubject.prototype._connectSocket = function () {
      var _this = this;
      var WebSocketCtor = this.WebSocketCtor;
      var observer = this._output;
      var socket = null;
      try {
        socket = this.protocol ? new WebSocketCtor(this.url, this.protocol) : new WebSocketCtor(this.url);
        this.socket = socket;
        if (this.binaryType) {
          this.socket.binaryType = this.binaryType;
        }
      } catch (e) {
        observer.error(e);
        return;
      }
      var subscription = new Subscription_1.Subscription(function () {
        _this.socket = null;
        if (socket && socket.readyState === 1) {
          socket.close();
        }
      });
      socket.onopen = function (e) {
        var openObserver = _this.openObserver;
        if (openObserver) {
          openObserver.next(e);
        }
        var queue = _this.destination;
        _this.destination = Subscriber_1.Subscriber.create(function (x) {
          return socket.readyState === 1 && socket.send(x);
        }, function (e) {
          var closingObserver = _this.closingObserver;
          if (closingObserver) {
            closingObserver.next(undefined);
          }
          if (e && e.code) {
            socket.close(e.code, e.reason);
          } else {
            observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' + 'and an optional reason: { code: number, reason: string }'));
          }
          _this._resetState();
        }, function () {
          var closingObserver = _this.closingObserver;
          if (closingObserver) {
            closingObserver.next(undefined);
          }
          socket.close();
          _this._resetState();
        });
        if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
          subscription.add(queue.subscribe(_this.destination));
        }
      };
      socket.onerror = function (e) {
        _this._resetState();
        observer.error(e);
      };
      socket.onclose = function (e) {
        _this._resetState();
        var closeObserver = _this.closeObserver;
        if (closeObserver) {
          closeObserver.next(e);
        }
        if (e.wasClean) {
          observer.complete();
        } else {
          observer.error(e);
        }
      };
      socket.onmessage = function (e) {
        var result = tryCatch_1.tryCatch(_this.resultSelector)(e);
        if (result === errorObject_1.errorObject) {
          observer.error(errorObject_1.errorObject.e);
        } else {
          observer.next(result);
        }
      };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
      var _this = this;
      var source = this.source;
      if (source) {
        return source.subscribe(subscriber);
      }
      if (!this.socket) {
        this._connectSocket();
      }
      var subscription = new Subscription_1.Subscription();
      subscription.add(this._output.subscribe(subscriber));
      subscription.add(function () {
        var socket = _this.socket;
        if (_this._output.observers.length === 0) {
          if (socket && socket.readyState === 1) {
            socket.close();
          }
          _this._resetState();
        }
      });
      return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
      var _a = this,
          source = _a.source,
          socket = _a.socket;
      if (socket && socket.readyState === 1) {
        socket.close();
        this._resetState();
      }
      _super.prototype.unsubscribe.call(this);
      if (!source) {
        this.destination = new ReplaySubject_1.ReplaySubject();
      }
    };
    return WebSocketSubject;
  }(Subject_1.AnonymousSubject);
  exports.WebSocketSubject = WebSocketSubject;
});
$__System.registerDynamic("6d", ["69"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var WebSocketSubject_1 = $__require("69");
  exports.webSocket = WebSocketSubject_1.WebSocketSubject.create;
});
$__System.registerDynamic('6e', ['e', '6d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var webSocket_1 = $__require('6d');
  Observable_1.Observable.webSocket = webSocket_1.webSocket;
});
$__System.registerDynamic('6f', ['22', '21', '70'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (Buffer) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1 = $__require('22');
    var subscribeToResult_1 = $__require('21');
    function buffer(closingNotifier) {
      return this.lift(new BufferOperator(closingNotifier));
    }
    exports.buffer = buffer;
    var BufferOperator = function () {
      function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
      }
      BufferOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
      };
      return BufferOperator;
    }();
    var BufferSubscriber = function (_super) {
      __extends(BufferSubscriber, _super);
      function BufferSubscriber(destination, closingNotifier) {
        _super.call(this, destination);
        this.buffer = [];
        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
      }
      BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
      };
      BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
      };
      return BufferSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
  })($__require('70').Buffer);
});
$__System.registerDynamic('71', ['e', '6f'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var buffer_1 = $__require('6f');
  Observable_1.Observable.prototype.buffer = buffer_1.buffer;
});
$__System.registerDynamic('72', ['6b', '70'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (Buffer) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('6b');
    function bufferCount(bufferSize, startBufferEvery) {
      if (startBufferEvery === void 0) {
        startBufferEvery = null;
      }
      return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    }
    exports.bufferCount = bufferCount;
    var BufferCountOperator = function () {
      function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
          this.subscriberClass = BufferCountSubscriber;
        } else {
          this.subscriberClass = BufferSkipCountSubscriber;
        }
      }
      BufferCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
      };
      return BufferCountOperator;
    }();
    var BufferCountSubscriber = function (_super) {
      __extends(BufferCountSubscriber, _super);
      function BufferCountSubscriber(destination, bufferSize) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.buffer = [];
      }
      BufferCountSubscriber.prototype._next = function (value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
          this.destination.next(buffer);
          this.buffer = [];
        }
      };
      BufferCountSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer.length > 0) {
          this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
      };
      return BufferCountSubscriber;
    }(Subscriber_1.Subscriber);
    var BufferSkipCountSubscriber = function (_super) {
      __extends(BufferSkipCountSubscriber, _super);
      function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [];
        this.count = 0;
      }
      BufferSkipCountSubscriber.prototype._next = function (value) {
        var _a = this,
            bufferSize = _a.bufferSize,
            startBufferEvery = _a.startBufferEvery,
            buffers = _a.buffers,
            count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) {
          buffers.push([]);
        }
        for (var i = buffers.length; i--;) {
          var buffer = buffers[i];
          buffer.push(value);
          if (buffer.length === bufferSize) {
            buffers.splice(i, 1);
            this.destination.next(buffer);
          }
        }
      };
      BufferSkipCountSubscriber.prototype._complete = function () {
        var _a = this,
            buffers = _a.buffers,
            destination = _a.destination;
        while (buffers.length > 0) {
          var buffer = buffers.shift();
          if (buffer.length > 0) {
            destination.next(buffer);
          }
        }
        _super.prototype._complete.call(this);
      };
      return BufferSkipCountSubscriber;
    }(Subscriber_1.Subscriber);
  })($__require('70').Buffer);
});
$__System.registerDynamic('73', ['e', '72'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var bufferCount_1 = $__require('72');
  Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
});
$__System.registerDynamic('74', ['41', '6b', '18', '70'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (Buffer) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var async_1 = $__require('41');
    var Subscriber_1 = $__require('6b');
    var isScheduler_1 = $__require('18');
    function bufferTime(bufferTimeSpan) {
      var length = arguments.length;
      var scheduler = async_1.async;
      if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
      }
      var bufferCreationInterval = null;
      if (length >= 2) {
        bufferCreationInterval = arguments[1];
      }
      var maxBufferSize = Number.POSITIVE_INFINITY;
      if (length >= 3) {
        maxBufferSize = arguments[2];
      }
      return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    }
    exports.bufferTime = bufferTime;
    var BufferTimeOperator = function () {
      function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
      }
      BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
      };
      return BufferTimeOperator;
    }();
    var Context = function () {
      function Context() {
        this.buffer = [];
      }
      return Context;
    }();
    var BufferTimeSubscriber = function (_super) {
      __extends(BufferTimeSubscriber, _super);
      function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        _super.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        var context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
          var timeSpanOnlyState = {
            subscriber: this,
            context: context,
            bufferTimeSpan: bufferTimeSpan
          };
          this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        } else {
          var closeState = {
            subscriber: this,
            context: context
          };
          var creationState = {
            bufferTimeSpan: bufferTimeSpan,
            bufferCreationInterval: bufferCreationInterval,
            subscriber: this,
            scheduler: scheduler
          };
          this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
          this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
      }
      BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
          var context = contexts[i];
          var buffer = context.buffer;
          buffer.push(value);
          if (buffer.length == this.maxBufferSize) {
            filledBufferContext = context;
          }
        }
        if (filledBufferContext) {
          this.onBufferFull(filledBufferContext);
        }
      };
      BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
      };
      BufferTimeSubscriber.prototype._complete = function () {
        var _a = this,
            contexts = _a.contexts,
            destination = _a.destination;
        while (contexts.length > 0) {
          var context = contexts.shift();
          destination.next(context.buffer);
        }
        _super.prototype._complete.call(this);
      };
      BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
      };
      BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
          context = this.openContext();
          var bufferTimeSpan = this.bufferTimeSpan;
          var timeSpanOnlyState = {
            subscriber: this,
            context: context,
            bufferTimeSpan: bufferTimeSpan
          };
          this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
      };
      BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
      };
      BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
          contexts.splice(contexts.indexOf(context), 1);
        }
      };
      return BufferTimeSubscriber;
    }(Subscriber_1.Subscriber);
    function dispatchBufferTimeSpanOnly(state) {
      var subscriber = state.subscriber;
      var prevContext = state.context;
      if (prevContext) {
        subscriber.closeContext(prevContext);
      }
      if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
      }
    }
    function dispatchBufferCreation(state) {
      var bufferCreationInterval = state.bufferCreationInterval,
          bufferTimeSpan = state.bufferTimeSpan,
          subscriber = state.subscriber,
          scheduler = state.scheduler;
      var context = subscriber.openContext();
      var action = this;
      if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
          subscriber: subscriber,
          context: context
        }));
        action.schedule(state, bufferCreationInterval);
      }
    }
    function dispatchBufferClose(arg) {
      var subscriber = arg.subscriber,
          context = arg.context;
      subscriber.closeContext(context);
    }
  })($__require('70').Buffer);
});
$__System.registerDynamic('75', ['e', '74'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var bufferTime_1 = $__require('74');
  Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
});
$__System.registerDynamic('76', ['30', '21', '22', '70'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (Buffer) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1 = $__require('30');
    var subscribeToResult_1 = $__require('21');
    var OuterSubscriber_1 = $__require('22');
    function bufferToggle(openings, closingSelector) {
      return this.lift(new BufferToggleOperator(openings, closingSelector));
    }
    exports.bufferToggle = bufferToggle;
    var BufferToggleOperator = function () {
      function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
      }
      BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
      };
      return BufferToggleOperator;
    }();
    var BufferToggleSubscriber = function (_super) {
      __extends(BufferToggleSubscriber, _super);
      function BufferToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(subscribeToResult_1.subscribeToResult(this, openings));
      }
      BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
          contexts[i].buffer.push(value);
        }
      };
      BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
          var context = contexts.shift();
          context.subscription.unsubscribe();
          context.buffer = null;
          context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
      };
      BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
          var context = contexts.shift();
          this.destination.next(context.buffer);
          context.subscription.unsubscribe();
          context.buffer = null;
          context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
      };
      BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
      };
      BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
      };
      BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
          var closingSelector = this.closingSelector;
          var closingNotifier = closingSelector.call(this, value);
          if (closingNotifier) {
            this.trySubscribe(closingNotifier);
          }
        } catch (err) {
          this._error(err);
        }
      };
      BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
          var buffer = context.buffer,
              subscription = context.subscription;
          this.destination.next(buffer);
          contexts.splice(contexts.indexOf(context), 1);
          this.remove(subscription);
          subscription.unsubscribe();
        }
      };
      BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new Subscription_1.Subscription();
        var context = {
          buffer: buffer,
          subscription: subscription
        };
        contexts.push(context);
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
          this.closeBuffer(context);
        } else {
          innerSubscription.context = context;
          this.add(innerSubscription);
          subscription.add(innerSubscription);
        }
      };
      return BufferToggleSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
  })($__require('70').Buffer);
});
$__System.registerDynamic('77', ['e', '76'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var bufferToggle_1 = $__require('76');
  Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
});
$__System.registerDynamic('78', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.byteLength = byteLength;
  exports.toByteArray = toByteArray;
  exports.fromByteArray = fromByteArray;

  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;

  function placeHoldersCount(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
  }

  function byteLength(b64) {
    // base64 is 4/3 + up to two characters of the original data
    return b64.length * 3 / 4 - placeHoldersCount(b64);
  }

  function toByteArray(b64) {
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;
    placeHolders = placeHoldersCount(b64);

    arr = new Arr(len * 3 / 4 - placeHolders);

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? len - 4 : len;

    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = tmp >> 16 & 0xFF;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    return arr;
  }

  function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
  }

  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
      output.push(tripletToBase64(tmp));
    }
    return output.join('');
  }

  function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[tmp << 4 & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      output += lookup[tmp >> 10];
      output += lookup[tmp >> 4 & 0x3F];
      output += lookup[tmp << 2 & 0x3F];
      output += '=';
    }

    parts.push(output);

    return parts.join('');
  }
});
$__System.registerDynamic("79", ["78"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("78");
});
$__System.registerDynamic("7a", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  exports.read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };

  exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  };
});
$__System.registerDynamic("7b", ["7a"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("7a");
});
$__System.registerDynamic('7c', ['79', '7b'], true, function ($__require, exports, module) {
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  /* eslint-disable no-proto */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var base64 = $__require('79');
  var ieee754 = $__require('7b');

  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;

  var K_MAX_LENGTH = 0x7fffffff;
  exports.kMaxLength = K_MAX_LENGTH;

  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Print warning and recommend using `buffer` v4.x which has an Object
   *               implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * We report that the browser does not support typed arrays if the are not subclassable
   * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
   * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
   * for __proto__ and has a buggy typed array implementation.
   */
  Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

  if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
  }

  function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
      var arr = new Uint8Array(1);
      arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () {
          return 42;
        } };
      return arr.foo() === 42;
    } catch (e) {
      return false;
    }
  }

  function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('Invalid typed array length');
    }
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    buf.__proto__ = Buffer.prototype;
    return buf;
  }

  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */

  function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error('If encoding is specified then the first argument must be a string');
      }
      return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
  }

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    });
  }

  Buffer.poolSize = 8192; // not used by this implementation

  function from(value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number');
    }

    if (value instanceof ArrayBuffer) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }

    if (typeof value === 'string') {
      return fromString(value, encodingOrOffset);
    }

    return fromObject(value);
  }

  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
  };

  // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
  // https://github.com/feross/buffer/pull/148
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  function assertSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number');
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative');
    }
  }

  function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(size);
    }
    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpretted as a start offset.
      return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    }
    return createBuffer(size);
  }

  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/
  Buffer.alloc = function (size, fill, encoding) {
    return alloc(size, fill, encoding);
  };

  function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
  }

  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(size);
  };
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */
  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(size);
  };

  function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }

    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding');
    }

    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);

    var actual = buf.write(string, encoding);

    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      buf = buf.slice(0, actual);
    }

    return buf;
  }

  function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for (var i = 0; i < length; i += 1) {
      buf[i] = array[i] & 255;
    }
    return buf;
  }

  function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds');
    }

    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds');
    }

    var buf;
    if (byteOffset === undefined && length === undefined) {
      buf = new Uint8Array(array);
    } else if (length === undefined) {
      buf = new Uint8Array(array, byteOffset);
    } else {
      buf = new Uint8Array(array, byteOffset, length);
    }

    // Return an augmented `Uint8Array` instance
    buf.__proto__ = Buffer.prototype;
    return buf;
  }

  function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
      var len = checked(obj.length) | 0;
      var buf = createBuffer(len);

      if (buf.length === 0) {
        return buf;
      }

      obj.copy(buf, 0, 0, len);
      return buf;
    }

    if (obj) {
      if (isArrayBufferView(obj) || 'length' in obj) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }

      if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }

    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
  }

  function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
    }
    return length | 0;
  }

  function SlowBuffer(length) {
    if (+length != length) {
      // eslint-disable-line eqeqeq
      length = 0;
    }
    return Buffer.alloc(+length);
  }

  Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true;
  };

  Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }

    if (a === b) return 0;

    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };

  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };

  Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    if (list.length === 0) {
      return Buffer.alloc(0);
    }

    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }

    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
      var buf = list[i];
      if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      buf.copy(buffer, pos);
      pos += buf.length;
    }
    return buffer;
  };

  function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) {
      return string.length;
    }
    if (isArrayBufferView(string) || string instanceof ArrayBuffer) {
      return string.byteLength;
    }
    if (typeof string !== 'string') {
      string = '' + string;
    }

    var len = string.length;
    if (len === 0) return 0;

    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len;
        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase) return utf8ToBytes(string).length; // assume utf8
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;

  function slowToString(encoding, start, end) {
    var loweredCase = false;

    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.

    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
      start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
      return '';
    }

    if (end === undefined || end > this.length) {
      end = this.length;
    }

    if (end <= 0) {
      return '';
    }

    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
      return '';
    }

    if (!encoding) encoding = 'utf8';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);

        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);

        case 'ascii':
          return asciiSlice(this, start, end);

        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end);

        case 'base64':
          return base64Slice(this, start, end);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }

  // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
  // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
  // reliably in a browserify context because there could be multiple different
  // copies of the 'buffer' package in use. This method works even for Buffer
  // instances that were created from another copy of the `buffer` package.
  // See: https://github.com/feross/buffer/issues/154
  Buffer.prototype._isBuffer = true;

  function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }

  Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this;
  };

  Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this;
  };

  Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this;
  };

  Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };

  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
  };

  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };

  Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (!Buffer.isBuffer(target)) {
      throw new TypeError('Argument must be a Buffer');
    }

    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index');
    }

    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }

    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;

    if (this === target) return 0;

    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);

    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };

  // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf
  function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;

    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset; // Coerce to Number.
    if (numberIsNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : buffer.length - 1;
    }

    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir) return -1;else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;else return -1;
    }

    // Normalize val
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding);
    }

    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
      val = val & 0xFF; // Search for a byte value [0-255]
      if (typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }

    throw new TypeError('val must be string, number or Buffer');
  }

  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();
      if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }

    function read(buf, i) {
      if (indexSize === 1) {
        return buf[i];
      } else {
        return buf.readUInt16BE(i * indexSize);
      }
    }

    var i;
    if (dir) {
      var foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        var found = true;
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }
        if (found) return i;
      }
    }

    return -1;
  }

  Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };

  Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };

  Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };

  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }

    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (numberIsNaN(parsed)) return i;
      buf[offset + i] = parsed;
    }
    return i;
  }

  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }

  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }

  function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }

  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }

  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }

  Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
      // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds');
    }

    if (!encoding) encoding = 'utf8';

    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);

        case 'ascii':
          return asciiWrite(this, string, offset, length);

        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length);

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };

  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };

  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }

  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray(res);
  }

  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var MAX_ARGUMENTS_LENGTH = 0x1000;

  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }

  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }

  function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }

  function hexSlice(buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;

    var out = '';
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i]);
    }
    return out;
  }

  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }

  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }

    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }

    if (end < start) end = start;

    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype;
    return newBuf;
  };

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  }

  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val;
  };

  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val;
  };

  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };

  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };

  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };

  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  };

  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };

  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
  };

  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
  };

  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
  };

  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };

  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };

  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };

  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };

  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };

  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };

  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
  }

  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
  };

  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };

  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
  };

  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
  };

  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
  };

  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
  };

  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };

  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
  };

  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
  };

  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
  };

  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
  }

  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }

  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };

  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };

  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }

  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };

  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };

  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;

    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000) {
      // ascending copy from start
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    }

    return len;
  };

  // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])
  Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (code < 256) {
          val = code;
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string');
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    }

    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index');
    }

    if (end <= start) {
      return this;
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;

    if (!val) val = 0;

    var i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = Buffer.isBuffer(val) ? val : new Buffer(val, encoding);
      var len = bytes.length;
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }

    return this;
  };

  // HELPER FUNCTIONS
  // ================

  var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

  function base64clean(str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }

  function toHex(n) {
    if (n < 16) return '0' + n.toString(16);
    return n.toString(16);
  }

  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);

      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }

          // valid lead
          leadSurrogate = codePoint;

          continue;
        }

        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }

        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null;

      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }

    return bytes;
  }

  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }

  function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break;

      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray;
  }

  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }

  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }
    return i;
  }

  // Node 0.10 supports `ArrayBuffer` but lacks `ArrayBuffer.isView`
  function isArrayBufferView(obj) {
    return typeof ArrayBuffer.isView === 'function' && ArrayBuffer.isView(obj);
  }

  function numberIsNaN(obj) {
    return obj !== obj; // eslint-disable-line no-self-compare
  }
});
$__System.registerDynamic("7d", ["7c"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("7c");
});
$__System.registerDynamic('7e', ['7d'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('buffer') : $__require('7d');
});
$__System.registerDynamic("70", ["7e"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("7e");
});
$__System.registerDynamic('7f', ['30', 'f', '10', '22', '21', '70', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (Buffer, process) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1 = $__require('30');
    var tryCatch_1 = $__require('f');
    var errorObject_1 = $__require('10');
    var OuterSubscriber_1 = $__require('22');
    var subscribeToResult_1 = $__require('21');
    function bufferWhen(closingSelector) {
      return this.lift(new BufferWhenOperator(closingSelector));
    }
    exports.bufferWhen = bufferWhen;
    var BufferWhenOperator = function () {
      function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
      }
      BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
      };
      return BufferWhenOperator;
    }();
    var BufferWhenSubscriber = function (_super) {
      __extends(BufferWhenSubscriber, _super);
      function BufferWhenSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
      }
      BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
      };
      BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
          this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
      };
      BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = null;
        this.subscribing = false;
      };
      BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
      };
      BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
          this.complete();
        } else {
          this.openBuffer();
        }
      };
      BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
          this.remove(closingSubscription);
          closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
          this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
          this.error(errorObject_1.errorObject.e);
        } else {
          closingSubscription = new Subscription_1.Subscription();
          this.closingSubscription = closingSubscription;
          this.add(closingSubscription);
          this.subscribing = true;
          closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
          this.subscribing = false;
        }
      };
      return BufferWhenSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
  })($__require('70').Buffer, $__require('31'));
});
$__System.registerDynamic('80', ['e', '7f'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var bufferWhen_1 = $__require('7f');
  Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
});
$__System.registerDynamic('81', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function _catch(selector) {
    var operator = new CatchOperator(selector);
    var caught = this.lift(operator);
    return operator.caught = caught;
  }
  exports._catch = _catch;
  var CatchOperator = function () {
    function CatchOperator(selector) {
      this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
  }();
  var CatchSubscriber = function (_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
      _super.call(this, destination);
      this.selector = selector;
      this.caught = caught;
    }
    CatchSubscriber.prototype.error = function (err) {
      if (!this.isStopped) {
        var result = void 0;
        try {
          result = this.selector(err, this.caught);
        } catch (err2) {
          _super.prototype.error.call(this, err2);
          return;
        }
        this._unsubscribeAndRecycle();
        this.add(subscribeToResult_1.subscribeToResult(this, result));
      }
    };
    return CatchSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('82', ['e', '81'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var catch_1 = $__require('81');
  Observable_1.Observable.prototype.catch = catch_1._catch;
  Observable_1.Observable.prototype._catch = catch_1._catch;
});
$__System.registerDynamic("83", ["1b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var combineLatest_1 = $__require("1b");
  function combineAll(project) {
    return this.lift(new combineLatest_1.CombineLatestOperator(project));
  }
  exports.combineAll = combineAll;
});
$__System.registerDynamic('84', ['e', '83'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var combineAll_1 = $__require('83');
  Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
});
$__System.registerDynamic('1b', ['1a', '19', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArrayObservable_1 = $__require('1a');
  var isArray_1 = $__require('19');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  var none = {};
  function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
      project = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0].slice();
    }
    observables.unshift(this);
    return this.lift.call(new ArrayObservable_1.ArrayObservable(observables), new CombineLatestOperator(project));
  }
  exports.combineLatest = combineLatest;
  var CombineLatestOperator = function () {
    function CombineLatestOperator(project) {
      this.project = project;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
  }();
  exports.CombineLatestOperator = CombineLatestOperator;
  var CombineLatestSubscriber = function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
      _super.call(this, destination);
      this.project = project;
      this.active = 0;
      this.values = [];
      this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
      this.values.push(none);
      this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
      var observables = this.observables;
      var len = observables.length;
      if (len === 0) {
        this.destination.complete();
      } else {
        this.active = len;
        this.toRespond = len;
        for (var i = 0; i < len; i++) {
          var observable = observables[i];
          this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
        }
      }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
      if ((this.active -= 1) === 0) {
        this.destination.complete();
      }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var values = this.values;
      var oldVal = values[outerIndex];
      var toRespond = !this.toRespond ? 0 : oldVal === none ? --this.toRespond : this.toRespond;
      values[outerIndex] = innerValue;
      if (toRespond === 0) {
        if (this.project) {
          this._tryProject(values);
        } else {
          this.destination.next(values.slice());
        }
      }
    };
    CombineLatestSubscriber.prototype._tryProject = function (values) {
      var result;
      try {
        result = this.project.apply(this, values);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return CombineLatestSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
  exports.CombineLatestSubscriber = CombineLatestSubscriber;
});
$__System.registerDynamic('85', ['e', '1b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var combineLatest_1 = $__require('1b');
  Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
});
$__System.registerDynamic('86', ['e', '1e'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var concat_1 = $__require('1e');
  Observable_1.Observable.prototype.concat = concat_1.concat;
});
$__System.registerDynamic("87", ["88"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var mergeAll_1 = $__require("88");
  function concatAll() {
    return this.lift(new mergeAll_1.MergeAllOperator(1));
  }
  exports.concatAll = concatAll;
});
$__System.registerDynamic('89', ['e', '87'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var concatAll_1 = $__require('87');
  Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
});
$__System.registerDynamic("8a", ["8b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var mergeMap_1 = $__require("8b");
  function concatMap(project, resultSelector) {
    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
  }
  exports.concatMap = concatMap;
});
$__System.registerDynamic('8c', ['e', '8a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var concatMap_1 = $__require('8a');
  Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
});
$__System.registerDynamic("8d", ["8e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var mergeMapTo_1 = $__require("8e");
  function concatMapTo(innerObservable, resultSelector) {
    return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
  }
  exports.concatMapTo = concatMapTo;
});
$__System.registerDynamic('8f', ['e', '8d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var concatMapTo_1 = $__require('8d');
  Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
});
$__System.registerDynamic("90", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function count(predicate) {
    return this.lift(new CountOperator(predicate, this));
  }
  exports.count = count;
  var CountOperator = function () {
    function CountOperator(predicate, source) {
      this.predicate = predicate;
      this.source = source;
    }
    CountOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
  }();
  var CountSubscriber = function (_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.count = 0;
      this.index = 0;
    }
    CountSubscriber.prototype._next = function (value) {
      if (this.predicate) {
        this._tryPredicate(value);
      } else {
        this.count++;
      }
    };
    CountSubscriber.prototype._tryPredicate = function (value) {
      var result;
      try {
        result = this.predicate(value, this.index++, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this.count++;
      }
    };
    CountSubscriber.prototype._complete = function () {
      this.destination.next(this.count);
      this.destination.complete();
    };
    return CountSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('91', ['e', '90'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var count_1 = $__require('90');
  Observable_1.Observable.prototype.count = count_1.count;
});
$__System.registerDynamic("92", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function dematerialize() {
    return this.lift(new DeMaterializeOperator());
  }
  exports.dematerialize = dematerialize;
  var DeMaterializeOperator = function () {
    function DeMaterializeOperator() {}
    DeMaterializeOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
  }();
  var DeMaterializeSubscriber = function (_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
      _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function (value) {
      value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('93', ['e', '92'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var dematerialize_1 = $__require('92');
  Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
});
$__System.registerDynamic('94', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function debounce(durationSelector) {
    return this.lift(new DebounceOperator(durationSelector));
  }
  exports.debounce = debounce;
  var DebounceOperator = function () {
    function DebounceOperator(durationSelector) {
      this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
  }();
  var DebounceSubscriber = function (_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
      _super.call(this, destination);
      this.durationSelector = durationSelector;
      this.hasValue = false;
      this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function (value) {
      try {
        var result = this.durationSelector.call(this, value);
        if (result) {
          this._tryNext(value, result);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    DebounceSubscriber.prototype._complete = function () {
      this.emitValue();
      this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
      var subscription = this.durationSubscription;
      this.value = value;
      this.hasValue = true;
      if (subscription) {
        subscription.unsubscribe();
        this.remove(subscription);
      }
      subscription = subscribeToResult_1.subscribeToResult(this, duration);
      if (!subscription.closed) {
        this.add(this.durationSubscription = subscription);
      }
    };
    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
      this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
      if (this.hasValue) {
        var value = this.value;
        var subscription = this.durationSubscription;
        if (subscription) {
          this.durationSubscription = null;
          subscription.unsubscribe();
          this.remove(subscription);
        }
        this.value = null;
        this.hasValue = false;
        _super.prototype._next.call(this, value);
      }
    };
    return DebounceSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('95', ['e', '94'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var debounce_1 = $__require('94');
  Observable_1.Observable.prototype.debounce = debounce_1.debounce;
});
$__System.registerDynamic('96', ['6b', '41'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var async_1 = $__require('41');
  function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
  }
  exports.debounceTime = debounceTime;
  var DebounceTimeOperator = function () {
    function DebounceTimeOperator(dueTime, scheduler) {
      this.dueTime = dueTime;
      this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
  }();
  var DebounceTimeSubscriber = function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
      _super.call(this, destination);
      this.dueTime = dueTime;
      this.scheduler = scheduler;
      this.debouncedSubscription = null;
      this.lastValue = null;
      this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
      this.clearDebounce();
      this.lastValue = value;
      this.hasValue = true;
      this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
      this.debouncedNext();
      this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
      this.clearDebounce();
      if (this.hasValue) {
        this.destination.next(this.lastValue);
        this.lastValue = null;
        this.hasValue = false;
      }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
      var debouncedSubscription = this.debouncedSubscription;
      if (debouncedSubscription !== null) {
        this.remove(debouncedSubscription);
        debouncedSubscription.unsubscribe();
        this.debouncedSubscription = null;
      }
    };
    return DebounceTimeSubscriber;
  }(Subscriber_1.Subscriber);
  function dispatchNext(subscriber) {
    subscriber.debouncedNext();
  }
});
$__System.registerDynamic('97', ['e', '96'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var debounceTime_1 = $__require('96');
  Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
});
$__System.registerDynamic("98", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = null;
    }
    return this.lift(new DefaultIfEmptyOperator(defaultValue));
  }
  exports.defaultIfEmpty = defaultIfEmpty;
  var DefaultIfEmptyOperator = function () {
    function DefaultIfEmptyOperator(defaultValue) {
      this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
  }();
  var DefaultIfEmptySubscriber = function (_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
      _super.call(this, destination);
      this.defaultValue = defaultValue;
      this.isEmpty = true;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
      this.isEmpty = false;
      this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
      if (this.isEmpty) {
        this.destination.next(this.defaultValue);
      }
      this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('99', ['e', '98'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var defaultIfEmpty_1 = $__require('98');
  Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
});
$__System.registerDynamic('9a', ['41', '5e', '6b', '9b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('41');
  var isDate_1 = $__require('5e');
  var Subscriber_1 = $__require('6b');
  var Notification_1 = $__require('9b');
  function delay(delay, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteDelay = isDate_1.isDate(delay);
    var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
    return this.lift(new DelayOperator(delayFor, scheduler));
  }
  exports.delay = delay;
  var DelayOperator = function () {
    function DelayOperator(delay, scheduler) {
      this.delay = delay;
      this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
  }();
  var DelaySubscriber = function (_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
      _super.call(this, destination);
      this.delay = delay;
      this.scheduler = scheduler;
      this.queue = [];
      this.active = false;
      this.errored = false;
    }
    DelaySubscriber.dispatch = function (state) {
      var source = state.source;
      var queue = source.queue;
      var scheduler = state.scheduler;
      var destination = state.destination;
      while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
        queue.shift().notification.observe(destination);
      }
      if (queue.length > 0) {
        var delay_1 = Math.max(0, queue[0].time - scheduler.now());
        this.schedule(state, delay_1);
      } else {
        source.active = false;
      }
    };
    DelaySubscriber.prototype._schedule = function (scheduler) {
      this.active = true;
      this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
        source: this,
        destination: this.destination,
        scheduler: scheduler
      }));
    };
    DelaySubscriber.prototype.scheduleNotification = function (notification) {
      if (this.errored === true) {
        return;
      }
      var scheduler = this.scheduler;
      var message = new DelayMessage(scheduler.now() + this.delay, notification);
      this.queue.push(message);
      if (this.active === false) {
        this._schedule(scheduler);
      }
    };
    DelaySubscriber.prototype._next = function (value) {
      this.scheduleNotification(Notification_1.Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function (err) {
      this.errored = true;
      this.queue = [];
      this.destination.error(err);
    };
    DelaySubscriber.prototype._complete = function () {
      this.scheduleNotification(Notification_1.Notification.createComplete());
    };
    return DelaySubscriber;
  }(Subscriber_1.Subscriber);
  var DelayMessage = function () {
    function DelayMessage(time, notification) {
      this.time = time;
      this.notification = notification;
    }
    return DelayMessage;
  }();
});
$__System.registerDynamic('9c', ['e', '9a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var delay_1 = $__require('9a');
  Observable_1.Observable.prototype.delay = delay_1.delay;
});
$__System.registerDynamic('9d', ['6b', 'e', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var Observable_1 = $__require('e');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
      return new SubscriptionDelayObservable(this, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    }
    return this.lift(new DelayWhenOperator(delayDurationSelector));
  }
  exports.delayWhen = delayWhen;
  var DelayWhenOperator = function () {
    function DelayWhenOperator(delayDurationSelector) {
      this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
  }();
  var DelayWhenSubscriber = function (_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
      _super.call(this, destination);
      this.delayDurationSelector = delayDurationSelector;
      this.completed = false;
      this.delayNotifierSubscriptions = [];
      this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(outerValue);
      this.removeSubscription(innerSub);
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
      this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
      var value = this.removeSubscription(innerSub);
      if (value) {
        this.destination.next(value);
      }
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
      try {
        var delayNotifier = this.delayDurationSelector(value);
        if (delayNotifier) {
          this.tryDelay(delayNotifier, value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    DelayWhenSubscriber.prototype._complete = function () {
      this.completed = true;
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
      subscription.unsubscribe();
      var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
      var value = null;
      if (subscriptionIdx !== -1) {
        value = this.values[subscriptionIdx];
        this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        this.values.splice(subscriptionIdx, 1);
      }
      return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
      var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
      if (notifierSubscription && !notifierSubscription.closed) {
        this.add(notifierSubscription);
        this.delayNotifierSubscriptions.push(notifierSubscription);
      }
      this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
      if (this.completed && this.delayNotifierSubscriptions.length === 0) {
        this.destination.complete();
      }
    };
    return DelayWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
  var SubscriptionDelayObservable = function (_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
      _super.call(this);
      this.source = source;
      this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
      this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
  }(Observable_1.Observable);
  var SubscriptionDelaySubscriber = function (_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
      _super.call(this);
      this.parent = parent;
      this.source = source;
      this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
      this.unsubscribe();
      this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
      if (!this.sourceSubscribed) {
        this.sourceSubscribed = true;
        this.unsubscribe();
        this.source.subscribe(this.parent);
      }
    };
    return SubscriptionDelaySubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('9e', ['e', '9d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var delayWhen_1 = $__require('9d');
  Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
});
$__System.registerDynamic("9f", ["68"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require("68");
  function minimalSetImpl() {
    return function () {
      function MinimalSet() {
        this._values = [];
      }
      MinimalSet.prototype.add = function (value) {
        if (!this.has(value)) {
          this._values.push(value);
        }
      };
      MinimalSet.prototype.has = function (value) {
        return this._values.indexOf(value) !== -1;
      };
      Object.defineProperty(MinimalSet.prototype, "size", {
        get: function () {
          return this._values.length;
        },
        enumerable: true,
        configurable: true
      });
      MinimalSet.prototype.clear = function () {
        this._values.length = 0;
      };
      return MinimalSet;
    }();
  }
  exports.minimalSetImpl = minimalSetImpl;
  exports.Set = root_1.root.Set || minimalSetImpl();
});
$__System.registerDynamic('a0', ['22', '21', '9f'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  var Set_1 = $__require('9f');
  function distinct(keySelector, flushes) {
    return this.lift(new DistinctOperator(keySelector, flushes));
  }
  exports.distinct = distinct;
  var DistinctOperator = function () {
    function DistinctOperator(keySelector, flushes) {
      this.keySelector = keySelector;
      this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    };
    return DistinctOperator;
  }();
  var DistinctSubscriber = function (_super) {
    __extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, keySelector, flushes) {
      _super.call(this, destination);
      this.keySelector = keySelector;
      this.values = new Set_1.Set();
      if (flushes) {
        this.add(subscribeToResult_1.subscribeToResult(this, flushes));
      }
    }
    DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.values.clear();
    };
    DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
      this._error(error);
    };
    DistinctSubscriber.prototype._next = function (value) {
      if (this.keySelector) {
        this._useKeySelector(value);
      } else {
        this._finalizeNext(value, value);
      }
    };
    DistinctSubscriber.prototype._useKeySelector = function (value) {
      var key;
      var destination = this.destination;
      try {
        key = this.keySelector(value);
      } catch (err) {
        destination.error(err);
        return;
      }
      this._finalizeNext(key, value);
    };
    DistinctSubscriber.prototype._finalizeNext = function (key, value) {
      var values = this.values;
      if (!values.has(key)) {
        values.add(key);
        this.destination.next(value);
      }
    };
    return DistinctSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
  exports.DistinctSubscriber = DistinctSubscriber;
});
$__System.registerDynamic('a1', ['e', 'a0'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var distinct_1 = $__require('a0');
  Observable_1.Observable.prototype.distinct = distinct_1.distinct;
});
$__System.registerDynamic('a2', ['e', 'a3'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var distinctUntilChanged_1 = $__require('a3');
  Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
});
$__System.registerDynamic('a3', ['6b', 'f', '10'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
  }
  exports.distinctUntilChanged = distinctUntilChanged;
  var DistinctUntilChangedOperator = function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
      this.compare = compare;
      this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
  }();
  var DistinctUntilChangedSubscriber = function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
      _super.call(this, destination);
      this.keySelector = keySelector;
      this.hasKey = false;
      if (typeof compare === 'function') {
        this.compare = compare;
      }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
      return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
      var keySelector = this.keySelector;
      var key = value;
      if (keySelector) {
        key = tryCatch_1.tryCatch(this.keySelector)(value);
        if (key === errorObject_1.errorObject) {
          return this.destination.error(errorObject_1.errorObject.e);
        }
      }
      var result = false;
      if (this.hasKey) {
        result = tryCatch_1.tryCatch(this.compare)(this.key, key);
        if (result === errorObject_1.errorObject) {
          return this.destination.error(errorObject_1.errorObject.e);
        }
      } else {
        this.hasKey = true;
      }
      if (Boolean(result) === false) {
        this.key = key;
        this.destination.next(value);
      }
    };
    return DistinctUntilChangedSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic("a4", ["a3"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var distinctUntilChanged_1 = $__require("a3");
  function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged.call(this, function (x, y) {
      if (compare) {
        return compare(x[key], y[key]);
      }
      return x[key] === y[key];
    });
  }
  exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
});
$__System.registerDynamic('a5', ['e', 'a4'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var distinctUntilKeyChanged_1 = $__require('a4');
  Observable_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
});
$__System.registerDynamic("a6", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
  }
  exports._do = _do;
  var DoOperator = function () {
    function DoOperator(nextOrObserver, error, complete) {
      this.nextOrObserver = nextOrObserver;
      this.error = error;
      this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
  }();
  var DoSubscriber = function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
      _super.call(this, destination);
      var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
      safeSubscriber.syncErrorThrowable = true;
      this.add(safeSubscriber);
      this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.next(value);
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.next(value);
      }
    };
    DoSubscriber.prototype._error = function (err) {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.error(err);
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.error(err);
      }
    };
    DoSubscriber.prototype._complete = function () {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.complete();
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.complete();
      }
    };
    return DoSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('a7', ['e', 'a6'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var do_1 = $__require('a6');
  Observable_1.Observable.prototype.do = do_1._do;
  Observable_1.Observable.prototype._do = do_1._do;
});
$__System.registerDynamic('a8', ['22', '21', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1 = $__require('22');
    var subscribeToResult_1 = $__require('21');
    function exhaust() {
      return this.lift(new SwitchFirstOperator());
    }
    exports.exhaust = exhaust;
    var SwitchFirstOperator = function () {
      function SwitchFirstOperator() {}
      SwitchFirstOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
      };
      return SwitchFirstOperator;
    }();
    var SwitchFirstSubscriber = function (_super) {
      __extends(SwitchFirstSubscriber, _super);
      function SwitchFirstSubscriber(destination) {
        _super.call(this, destination);
        this.hasCompleted = false;
        this.hasSubscription = false;
      }
      SwitchFirstSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
          this.hasSubscription = true;
          this.add(subscribeToResult_1.subscribeToResult(this, value));
        }
      };
      SwitchFirstSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
          this.destination.complete();
        }
      };
      SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
          this.destination.complete();
        }
      };
      return SwitchFirstSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
  })($__require('31'));
});
$__System.registerDynamic('a9', ['e', 'a8'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var exhaust_1 = $__require('a8');
  Observable_1.Observable.prototype.exhaust = exhaust_1.exhaust;
});
$__System.registerDynamic('aa', ['22', '21', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1 = $__require('22');
    var subscribeToResult_1 = $__require('21');
    function exhaustMap(project, resultSelector) {
      return this.lift(new SwitchFirstMapOperator(project, resultSelector));
    }
    exports.exhaustMap = exhaustMap;
    var SwitchFirstMapOperator = function () {
      function SwitchFirstMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
      }
      SwitchFirstMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
      };
      return SwitchFirstMapOperator;
    }();
    var SwitchFirstMapSubscriber = function (_super) {
      __extends(SwitchFirstMapSubscriber, _super);
      function SwitchFirstMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
      }
      SwitchFirstMapSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
          this.tryNext(value);
        }
      };
      SwitchFirstMapSubscriber.prototype.tryNext = function (value) {
        var index = this.index++;
        var destination = this.destination;
        try {
          var result = this.project(value, index);
          this.hasSubscription = true;
          this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
        } catch (err) {
          destination.error(err);
        }
      };
      SwitchFirstMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
          this.destination.complete();
        }
      };
      SwitchFirstMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this,
            resultSelector = _a.resultSelector,
            destination = _a.destination;
        if (resultSelector) {
          this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        } else {
          destination.next(innerValue);
        }
      };
      SwitchFirstMapSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this,
            resultSelector = _a.resultSelector,
            destination = _a.destination;
        try {
          var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
          destination.next(result);
        } catch (err) {
          destination.error(err);
        }
      };
      SwitchFirstMapSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
      };
      SwitchFirstMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
          this.destination.complete();
        }
      };
      return SwitchFirstMapSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
  })($__require('31'));
});
$__System.registerDynamic('ab', ['e', 'aa'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var exhaustMap_1 = $__require('aa');
  Observable_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
});
$__System.registerDynamic('ac', ['f', '10', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
      scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return this.lift(new ExpandOperator(project, concurrent, scheduler));
  }
  exports.expand = expand;
  var ExpandOperator = function () {
    function ExpandOperator(project, concurrent, scheduler) {
      this.project = project;
      this.concurrent = concurrent;
      this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
  }();
  exports.ExpandOperator = ExpandOperator;
  var ExpandSubscriber = function (_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
      _super.call(this, destination);
      this.project = project;
      this.concurrent = concurrent;
      this.scheduler = scheduler;
      this.index = 0;
      this.active = 0;
      this.hasCompleted = false;
      if (concurrent < Number.POSITIVE_INFINITY) {
        this.buffer = [];
      }
    }
    ExpandSubscriber.dispatch = function (arg) {
      var subscriber = arg.subscriber,
          result = arg.result,
          value = arg.value,
          index = arg.index;
      subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function (value) {
      var destination = this.destination;
      if (destination.closed) {
        this._complete();
        return;
      }
      var index = this.index++;
      if (this.active < this.concurrent) {
        destination.next(value);
        var result = tryCatch_1.tryCatch(this.project)(value, index);
        if (result === errorObject_1.errorObject) {
          destination.error(errorObject_1.errorObject.e);
        } else if (!this.scheduler) {
          this.subscribeToProjection(result, value, index);
        } else {
          var state = {
            subscriber: this,
            result: result,
            value: value,
            index: index
          };
          this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
        }
      } else {
        this.buffer.push(value);
      }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
      this.active++;
      this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function () {
      this.hasCompleted = true;
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer && buffer.length > 0) {
        this._next(buffer.shift());
      }
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    return ExpandSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
  exports.ExpandSubscriber = ExpandSubscriber;
});
$__System.registerDynamic('ad', ['e', 'ac'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var expand_1 = $__require('ac');
  Observable_1.Observable.prototype.expand = expand_1.expand;
});
$__System.registerDynamic('ae', ['6b', 'af'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var ArgumentOutOfRangeError_1 = $__require('af');
  function elementAt(index, defaultValue) {
    return this.lift(new ElementAtOperator(index, defaultValue));
  }
  exports.elementAt = elementAt;
  var ElementAtOperator = function () {
    function ElementAtOperator(index, defaultValue) {
      this.index = index;
      this.defaultValue = defaultValue;
      if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
      }
    }
    ElementAtOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
    };
    return ElementAtOperator;
  }();
  var ElementAtSubscriber = function (_super) {
    __extends(ElementAtSubscriber, _super);
    function ElementAtSubscriber(destination, index, defaultValue) {
      _super.call(this, destination);
      this.index = index;
      this.defaultValue = defaultValue;
    }
    ElementAtSubscriber.prototype._next = function (x) {
      if (this.index-- === 0) {
        this.destination.next(x);
        this.destination.complete();
      }
    };
    ElementAtSubscriber.prototype._complete = function () {
      var destination = this.destination;
      if (this.index >= 0) {
        if (typeof this.defaultValue !== 'undefined') {
          destination.next(this.defaultValue);
        } else {
          destination.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError());
        }
      }
      destination.complete();
    };
    return ElementAtSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('b0', ['e', 'ae'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var elementAt_1 = $__require('ae');
  Observable_1.Observable.prototype.elementAt = elementAt_1.elementAt;
});
$__System.registerDynamic('b1', ['e', 'b2'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var filter_1 = $__require('b2');
  Observable_1.Observable.prototype.filter = filter_1.filter;
});
$__System.registerDynamic('b3', ['6b', '30'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var Subscription_1 = $__require('30');
  function _finally(callback) {
    return this.lift(new FinallyOperator(callback));
  }
  exports._finally = _finally;
  var FinallyOperator = function () {
    function FinallyOperator(callback) {
      this.callback = callback;
    }
    FinallyOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
  }();
  var FinallySubscriber = function (_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
      _super.call(this, destination);
      this.add(new Subscription_1.Subscription(callback));
    }
    return FinallySubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('b4', ['e', 'b3'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var finally_1 = $__require('b3');
  Observable_1.Observable.prototype.finally = finally_1._finally;
  Observable_1.Observable.prototype._finally = finally_1._finally;
});
$__System.registerDynamic('b5', ['e', 'b6'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var find_1 = $__require('b6');
  Observable_1.Observable.prototype.find = find_1.find;
});
$__System.registerDynamic('b6', ['6b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate is not a function');
    }
    return this.lift(new FindValueOperator(predicate, this, false, thisArg));
  }
  exports.find = find;
  var FindValueOperator = function () {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
      this.predicate = predicate;
      this.source = source;
      this.yieldIndex = yieldIndex;
      this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function (observer, source) {
      return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
  }();
  exports.FindValueOperator = FindValueOperator;
  var FindValueSubscriber = function (_super) {
    __extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.yieldIndex = yieldIndex;
      this.thisArg = thisArg;
      this.index = 0;
    }
    FindValueSubscriber.prototype.notifyComplete = function (value) {
      var destination = this.destination;
      destination.next(value);
      destination.complete();
    };
    FindValueSubscriber.prototype._next = function (value) {
      var _a = this,
          predicate = _a.predicate,
          thisArg = _a.thisArg;
      var index = this.index++;
      try {
        var result = predicate.call(thisArg || this, value, index, this.source);
        if (result) {
          this.notifyComplete(this.yieldIndex ? index : value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    FindValueSubscriber.prototype._complete = function () {
      this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
  }(Subscriber_1.Subscriber);
  exports.FindValueSubscriber = FindValueSubscriber;
});
$__System.registerDynamic("b7", ["b6"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var find_1 = $__require("b6");
  function findIndex(predicate, thisArg) {
    return this.lift(new find_1.FindValueOperator(predicate, this, true, thisArg));
  }
  exports.findIndex = findIndex;
});
$__System.registerDynamic('b8', ['e', 'b7'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var findIndex_1 = $__require('b7');
  Observable_1.Observable.prototype.findIndex = findIndex_1.findIndex;
});
$__System.registerDynamic('b9', ['6b', 'ba'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var EmptyError_1 = $__require('ba');
  function first(predicate, resultSelector, defaultValue) {
    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
  }
  exports.first = first;
  var FirstOperator = function () {
    function FirstOperator(predicate, resultSelector, defaultValue, source) {
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
    }
    FirstOperator.prototype.call = function (observer, source) {
      return source.subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return FirstOperator;
  }();
  var FirstSubscriber = function (_super) {
    __extends(FirstSubscriber, _super);
    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
      this.index = 0;
      this.hasCompleted = false;
      this._emitted = false;
    }
    FirstSubscriber.prototype._next = function (value) {
      var index = this.index++;
      if (this.predicate) {
        this._tryPredicate(value, index);
      } else {
        this._emit(value, index);
      }
    };
    FirstSubscriber.prototype._tryPredicate = function (value, index) {
      var result;
      try {
        result = this.predicate(value, index, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this._emit(value, index);
      }
    };
    FirstSubscriber.prototype._emit = function (value, index) {
      if (this.resultSelector) {
        this._tryResultSelector(value, index);
        return;
      }
      this._emitFinal(value);
    };
    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
      var result;
      try {
        result = this.resultSelector(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this._emitFinal(result);
    };
    FirstSubscriber.prototype._emitFinal = function (value) {
      var destination = this.destination;
      if (!this._emitted) {
        this._emitted = true;
        destination.next(value);
        destination.complete();
        this.hasCompleted = true;
      }
    };
    FirstSubscriber.prototype._complete = function () {
      var destination = this.destination;
      if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
        destination.next(this.defaultValue);
        destination.complete();
      } else if (!this.hasCompleted) {
        destination.error(new EmptyError_1.EmptyError());
      }
    };
    return FirstSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('bb', ['e', 'b9'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var first_1 = $__require('b9');
  Observable_1.Observable.prototype.first = first_1.first;
});
$__System.registerDynamic("bc", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var MapPolyfill = function () {
        function MapPolyfill() {
            this.size = 0;
            this._values = [];
            this._keys = [];
        }
        MapPolyfill.prototype.get = function (key) {
            var i = this._keys.indexOf(key);
            return i === -1 ? undefined : this._values[i];
        };
        MapPolyfill.prototype.set = function (key, value) {
            var i = this._keys.indexOf(key);
            if (i === -1) {
                this._keys.push(key);
                this._values.push(value);
                this.size++;
            } else {
                this._values[i] = value;
            }
            return this;
        };
        MapPolyfill.prototype.delete = function (key) {
            var i = this._keys.indexOf(key);
            if (i === -1) {
                return false;
            }
            this._values.splice(i, 1);
            this._keys.splice(i, 1);
            this.size--;
            return true;
        };
        MapPolyfill.prototype.clear = function () {
            this._keys.length = 0;
            this._values.length = 0;
            this.size = 0;
        };
        MapPolyfill.prototype.forEach = function (cb, thisArg) {
            for (var i = 0; i < this.size; i++) {
                cb.call(thisArg, this._values[i], this._keys[i]);
            }
        };
        return MapPolyfill;
    }();
    exports.MapPolyfill = MapPolyfill;
    
});
$__System.registerDynamic('bd', ['68', 'bc'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require('68');
  var MapPolyfill_1 = $__require('bc');
  exports.Map = root_1.root.Map || function () {
    return MapPolyfill_1.MapPolyfill;
  }();
});
$__System.registerDynamic("be", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var FastMap = function () {
        function FastMap() {
            this.values = {};
        }
        FastMap.prototype.delete = function (key) {
            this.values[key] = null;
            return true;
        };
        FastMap.prototype.set = function (key, value) {
            this.values[key] = value;
            return this;
        };
        FastMap.prototype.get = function (key) {
            return this.values[key];
        };
        FastMap.prototype.forEach = function (cb, thisArg) {
            var values = this.values;
            for (var key in values) {
                if (values.hasOwnProperty(key) && values[key] !== null) {
                    cb.call(thisArg, values[key], key);
                }
            }
        };
        FastMap.prototype.clear = function () {
            this.values = {};
        };
        return FastMap;
    }();
    exports.FastMap = FastMap;
    
});
$__System.registerDynamic('bf', ['6b', '30', 'e', '6a', 'bd', 'be'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var Subscription_1 = $__require('30');
  var Observable_1 = $__require('e');
  var Subject_1 = $__require('6a');
  var Map_1 = $__require('bd');
  var FastMap_1 = $__require('be');
  function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return this.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
  }
  exports.groupBy = groupBy;
  var GroupByOperator = function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
      this.keySelector = keySelector;
      this.elementSelector = elementSelector;
      this.durationSelector = durationSelector;
      this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
  }();
  var GroupBySubscriber = function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
      _super.call(this, destination);
      this.keySelector = keySelector;
      this.elementSelector = elementSelector;
      this.durationSelector = durationSelector;
      this.subjectSelector = subjectSelector;
      this.groups = null;
      this.attemptedToUnsubscribe = false;
      this.count = 0;
    }
    GroupBySubscriber.prototype._next = function (value) {
      var key;
      try {
        key = this.keySelector(value);
      } catch (err) {
        this.error(err);
        return;
      }
      this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
      var groups = this.groups;
      if (!groups) {
        groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
      }
      var group = groups.get(key);
      var element;
      if (this.elementSelector) {
        try {
          element = this.elementSelector(value);
        } catch (err) {
          this.error(err);
        }
      } else {
        element = value;
      }
      if (!group) {
        group = this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject();
        groups.set(key, group);
        var groupedObservable = new GroupedObservable(key, group, this);
        this.destination.next(groupedObservable);
        if (this.durationSelector) {
          var duration = void 0;
          try {
            duration = this.durationSelector(new GroupedObservable(key, group));
          } catch (err) {
            this.error(err);
            return;
          }
          this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
        }
      }
      if (!group.closed) {
        group.next(element);
      }
    };
    GroupBySubscriber.prototype._error = function (err) {
      var groups = this.groups;
      if (groups) {
        groups.forEach(function (group, key) {
          group.error(err);
        });
        groups.clear();
      }
      this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
      var groups = this.groups;
      if (groups) {
        groups.forEach(function (group, key) {
          group.complete();
        });
        groups.clear();
      }
      this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
      this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
      if (!this.closed) {
        this.attemptedToUnsubscribe = true;
        if (this.count === 0) {
          _super.prototype.unsubscribe.call(this);
        }
      }
    };
    return GroupBySubscriber;
  }(Subscriber_1.Subscriber);
  var GroupDurationSubscriber = function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
      _super.call(this);
      this.key = key;
      this.group = group;
      this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
      this._complete();
    };
    GroupDurationSubscriber.prototype._error = function (err) {
      var group = this.group;
      if (!group.closed) {
        group.error(err);
      }
      this.parent.removeGroup(this.key);
    };
    GroupDurationSubscriber.prototype._complete = function () {
      var group = this.group;
      if (!group.closed) {
        group.complete();
      }
      this.parent.removeGroup(this.key);
    };
    return GroupDurationSubscriber;
  }(Subscriber_1.Subscriber);
  var GroupedObservable = function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
      _super.call(this);
      this.key = key;
      this.groupSubject = groupSubject;
      this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
      var subscription = new Subscription_1.Subscription();
      var _a = this,
          refCountSubscription = _a.refCountSubscription,
          groupSubject = _a.groupSubject;
      if (refCountSubscription && !refCountSubscription.closed) {
        subscription.add(new InnerRefCountSubscription(refCountSubscription));
      }
      subscription.add(groupSubject.subscribe(subscriber));
      return subscription;
    };
    return GroupedObservable;
  }(Observable_1.Observable);
  exports.GroupedObservable = GroupedObservable;
  var InnerRefCountSubscription = function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
      _super.call(this);
      this.parent = parent;
      parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
      var parent = this.parent;
      if (!parent.closed && !this.closed) {
        _super.prototype.unsubscribe.call(this);
        parent.count -= 1;
        if (parent.count === 0 && parent.attemptedToUnsubscribe) {
          parent.unsubscribe();
        }
      }
    };
    return InnerRefCountSubscription;
  }(Subscription_1.Subscription);
});
$__System.registerDynamic('c0', ['e', 'bf'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var groupBy_1 = $__require('bf');
  Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
});
$__System.registerDynamic("4a", [], true, function ($__require, exports, module) {
  /* */
  "use strict";
  /* tslint:disable:no-empty */

  var global = this || self,
      GLOBAL = global;
  function noop() {}
  exports.noop = noop;
  
});
$__System.registerDynamic('c1', ['6b', '4a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var noop_1 = $__require('4a');
  function ignoreElements() {
    return this.lift(new IgnoreElementsOperator());
  }
  exports.ignoreElements = ignoreElements;
  ;
  var IgnoreElementsOperator = function () {
    function IgnoreElementsOperator() {}
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
  }();
  var IgnoreElementsSubscriber = function (_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
      _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
      noop_1.noop();
    };
    return IgnoreElementsSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('c2', ['e', 'c1'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var ignoreElements_1 = $__require('c1');
  Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
});
$__System.registerDynamic("c3", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function isEmpty() {
    return this.lift(new IsEmptyOperator());
  }
  exports.isEmpty = isEmpty;
  var IsEmptyOperator = function () {
    function IsEmptyOperator() {}
    IsEmptyOperator.prototype.call = function (observer, source) {
      return source.subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
  }();
  var IsEmptySubscriber = function (_super) {
    __extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
      _super.call(this, destination);
    }
    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
      var destination = this.destination;
      destination.next(isEmpty);
      destination.complete();
    };
    IsEmptySubscriber.prototype._next = function (value) {
      this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function () {
      this.notifyComplete(true);
    };
    return IsEmptySubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('c4', ['e', 'c3'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var isEmpty_1 = $__require('c3');
  Observable_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
});
$__System.registerDynamic('c5', ['f', '10', '22', '21', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var tryCatch_1 = $__require('f');
    var errorObject_1 = $__require('10');
    var OuterSubscriber_1 = $__require('22');
    var subscribeToResult_1 = $__require('21');
    function audit(durationSelector) {
      return this.lift(new AuditOperator(durationSelector));
    }
    exports.audit = audit;
    var AuditOperator = function () {
      function AuditOperator(durationSelector) {
        this.durationSelector = durationSelector;
      }
      AuditOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
      };
      return AuditOperator;
    }();
    var AuditSubscriber = function (_super) {
      __extends(AuditSubscriber, _super);
      function AuditSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
      }
      AuditSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
          var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
          if (duration === errorObject_1.errorObject) {
            this.destination.error(errorObject_1.errorObject.e);
          } else {
            this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
          }
        }
      };
      AuditSubscriber.prototype.clearThrottle = function () {
        var _a = this,
            value = _a.value,
            hasValue = _a.hasValue,
            throttled = _a.throttled;
        if (throttled) {
          this.remove(throttled);
          this.throttled = null;
          throttled.unsubscribe();
        }
        if (hasValue) {
          this.value = null;
          this.hasValue = false;
          this.destination.next(value);
        }
      };
      AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        this.clearThrottle();
      };
      AuditSubscriber.prototype.notifyComplete = function () {
        this.clearThrottle();
      };
      return AuditSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
  })($__require('31'));
});
$__System.registerDynamic('c6', ['e', 'c5'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var audit_1 = $__require('c5');
  Observable_1.Observable.prototype.audit = audit_1.audit;
});
$__System.registerDynamic('c7', ['41', '6b', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var async_1 = $__require('41');
    var Subscriber_1 = $__require('6b');
    function auditTime(duration, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      return this.lift(new AuditTimeOperator(duration, scheduler));
    }
    exports.auditTime = auditTime;
    var AuditTimeOperator = function () {
      function AuditTimeOperator(duration, scheduler) {
        this.duration = duration;
        this.scheduler = scheduler;
      }
      AuditTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new AuditTimeSubscriber(subscriber, this.duration, this.scheduler));
      };
      return AuditTimeOperator;
    }();
    var AuditTimeSubscriber = function (_super) {
      __extends(AuditTimeSubscriber, _super);
      function AuditTimeSubscriber(destination, duration, scheduler) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.hasValue = false;
      }
      AuditTimeSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
          this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, this));
        }
      };
      AuditTimeSubscriber.prototype.clearThrottle = function () {
        var _a = this,
            value = _a.value,
            hasValue = _a.hasValue,
            throttled = _a.throttled;
        if (throttled) {
          this.remove(throttled);
          this.throttled = null;
          throttled.unsubscribe();
        }
        if (hasValue) {
          this.value = null;
          this.hasValue = false;
          this.destination.next(value);
        }
      };
      return AuditTimeSubscriber;
    }(Subscriber_1.Subscriber);
    function dispatchNext(subscriber) {
      subscriber.clearThrottle();
    }
  })($__require('31'));
});
$__System.registerDynamic('c8', ['e', 'c7'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var auditTime_1 = $__require('c7');
  Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
});
$__System.registerDynamic('c9', ['6b', 'ba'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var EmptyError_1 = $__require('ba');
  function last(predicate, resultSelector, defaultValue) {
    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
  }
  exports.last = last;
  var LastOperator = function () {
    function LastOperator(predicate, resultSelector, defaultValue, source) {
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
    }
    LastOperator.prototype.call = function (observer, source) {
      return source.subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return LastOperator;
  }();
  var LastSubscriber = function (_super) {
    __extends(LastSubscriber, _super);
    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
      this.hasValue = false;
      this.index = 0;
      if (typeof defaultValue !== 'undefined') {
        this.lastValue = defaultValue;
        this.hasValue = true;
      }
    }
    LastSubscriber.prototype._next = function (value) {
      var index = this.index++;
      if (this.predicate) {
        this._tryPredicate(value, index);
      } else {
        if (this.resultSelector) {
          this._tryResultSelector(value, index);
          return;
        }
        this.lastValue = value;
        this.hasValue = true;
      }
    };
    LastSubscriber.prototype._tryPredicate = function (value, index) {
      var result;
      try {
        result = this.predicate(value, index, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        if (this.resultSelector) {
          this._tryResultSelector(value, index);
          return;
        }
        this.lastValue = value;
        this.hasValue = true;
      }
    };
    LastSubscriber.prototype._tryResultSelector = function (value, index) {
      var result;
      try {
        result = this.resultSelector(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.lastValue = result;
      this.hasValue = true;
    };
    LastSubscriber.prototype._complete = function () {
      var destination = this.destination;
      if (this.hasValue) {
        destination.next(this.lastValue);
        destination.complete();
      } else {
        destination.error(new EmptyError_1.EmptyError());
      }
    };
    return LastSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('ca', ['e', 'c9'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var last_1 = $__require('c9');
  Observable_1.Observable.prototype.last = last_1.last;
});
$__System.registerDynamic("cb", [], true, function ($__require, exports, module) {
  /* */
  "use strict";
  /**
   * @param func
   * @return {Observable<R>}
   * @method let
   * @owner Observable
   */

  var global = this || self,
      GLOBAL = global;
  function letProto(func) {
    return func(this);
  }
  exports.letProto = letProto;
  
});
$__System.registerDynamic('cc', ['e', 'cb'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var let_1 = $__require('cb');
  Observable_1.Observable.prototype.let = let_1.letProto;
  Observable_1.Observable.prototype.letBind = let_1.letProto;
});
$__System.registerDynamic("cd", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function every(predicate, thisArg) {
    return this.lift(new EveryOperator(predicate, thisArg, this));
  }
  exports.every = every;
  var EveryOperator = function () {
    function EveryOperator(predicate, thisArg, source) {
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.source = source;
    }
    EveryOperator.prototype.call = function (observer, source) {
      return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
    };
    return EveryOperator;
  }();
  var EverySubscriber = function (_super) {
    __extends(EverySubscriber, _super);
    function EverySubscriber(destination, predicate, thisArg, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.source = source;
      this.index = 0;
      this.thisArg = thisArg || this;
    }
    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
      this.destination.next(everyValueMatch);
      this.destination.complete();
    };
    EverySubscriber.prototype._next = function (value) {
      var result = false;
      try {
        result = this.predicate.call(this.thisArg, value, this.index++, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (!result) {
        this.notifyComplete(false);
      }
    };
    EverySubscriber.prototype._complete = function () {
      this.notifyComplete(true);
    };
    return EverySubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('ce', ['e', 'cd'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var every_1 = $__require('cd');
  Observable_1.Observable.prototype.every = every_1.every;
});
$__System.registerDynamic('cf', ['e', 'd0'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var map_1 = $__require('d0');
  Observable_1.Observable.prototype.map = map_1.map;
});
$__System.registerDynamic("d1", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function mapTo(value) {
    return this.lift(new MapToOperator(value));
  }
  exports.mapTo = mapTo;
  var MapToOperator = function () {
    function MapToOperator(value) {
      this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
  }();
  var MapToSubscriber = function (_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
      _super.call(this, destination);
      this.value = value;
    }
    MapToSubscriber.prototype._next = function (x) {
      this.destination.next(this.value);
    };
    return MapToSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('d2', ['e', 'd1'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var mapTo_1 = $__require('d1');
  Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
});
$__System.registerDynamic('d3', ['6b', '9b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var Notification_1 = $__require('9b');
  function materialize() {
    return this.lift(new MaterializeOperator());
  }
  exports.materialize = materialize;
  var MaterializeOperator = function () {
    function MaterializeOperator() {}
    MaterializeOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
  }();
  var MaterializeSubscriber = function (_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
      _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function (value) {
      this.destination.next(Notification_1.Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function (err) {
      var destination = this.destination;
      destination.next(Notification_1.Notification.createError(err));
      destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function () {
      var destination = this.destination;
      destination.next(Notification_1.Notification.createComplete());
      destination.complete();
    };
    return MaterializeSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('d4', ['e', 'd3'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var materialize_1 = $__require('d3');
  Observable_1.Observable.prototype.materialize = materialize_1.materialize;
});
$__System.registerDynamic('d5', ['d6'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var reduce_1 = $__require('d6');
  function max(comparer) {
    var max = typeof comparer === 'function' ? function (x, y) {
      return comparer(x, y) > 0 ? x : y;
    } : function (x, y) {
      return x > y ? x : y;
    };
    return this.lift(new reduce_1.ReduceOperator(max));
  }
  exports.max = max;
});
$__System.registerDynamic('d7', ['e', 'd5'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var max_1 = $__require('d5');
  Observable_1.Observable.prototype.max = max_1.max;
});
$__System.registerDynamic('45', ['e', '1a', '88', '18'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var ArrayObservable_1 = $__require('1a');
  var mergeAll_1 = $__require('88');
  var isScheduler_1 = $__require('18');
  function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    return this.lift.call(mergeStatic.apply(void 0, [this].concat(observables)));
  }
  exports.merge = merge;
  function mergeStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
      scheduler = observables.pop();
      if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
        concurrent = observables.pop();
      }
    } else if (typeof last === 'number') {
      concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
      return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
  }
  exports.mergeStatic = mergeStatic;
});
$__System.registerDynamic('d8', ['e', '45'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var merge_1 = $__require('45');
  Observable_1.Observable.prototype.merge = merge_1.merge;
});
$__System.registerDynamic('d9', ['e', '88'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var mergeAll_1 = $__require('88');
  Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
});
$__System.registerDynamic('8b', ['21', '22'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var subscribeToResult_1 = $__require('21');
  var OuterSubscriber_1 = $__require('22');
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'number') {
      concurrent = resultSelector;
      resultSelector = null;
    }
    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
  }
  exports.mergeMap = mergeMap;
  var MergeMapOperator = function () {
    function MergeMapOperator(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      this.project = project;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
      return source.subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
    };
    return MergeMapOperator;
  }();
  exports.MergeMapOperator = MergeMapOperator;
  var MergeMapSubscriber = function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      _super.call(this, destination);
      this.project = project;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeMapSubscriber.prototype._next = function (value) {
      if (this.active < this.concurrent) {
        this._tryNext(value);
      } else {
        this.buffer.push(value);
      }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
      var result;
      var index = this.index++;
      try {
        result = this.project(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.active++;
      this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapSubscriber.prototype._complete = function () {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (this.resultSelector) {
        this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        this.destination.next(innerValue);
      }
    };
    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
      var result;
      try {
        result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeMapSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
  exports.MergeMapSubscriber = MergeMapSubscriber;
});
$__System.registerDynamic('da', ['e', '8b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var mergeMap_1 = $__require('8b');
  Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
  Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
});
$__System.registerDynamic('8e', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'number') {
      concurrent = resultSelector;
      resultSelector = null;
    }
    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
  }
  exports.mergeMapTo = mergeMapTo;
  var MergeMapToOperator = function () {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      this.ish = ish;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function (observer, source) {
      return source.subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
    };
    return MergeMapToOperator;
  }();
  exports.MergeMapToOperator = MergeMapToOperator;
  var MergeMapToSubscriber = function (_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      _super.call(this, destination);
      this.ish = ish;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function (value) {
      if (this.active < this.concurrent) {
        var resultSelector = this.resultSelector;
        var index = this.index++;
        var ish = this.ish;
        var destination = this.destination;
        this.active++;
        this._innerSub(ish, destination, resultSelector, value, index);
      } else {
        this.buffer.push(value);
      }
    };
    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function () {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      if (resultSelector) {
        this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        destination.next(innerValue);
      }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      var result;
      try {
        result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        destination.error(err);
        return;
      }
      destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function (err) {
      this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeMapToSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
  exports.MergeMapToSubscriber = MergeMapToSubscriber;
});
$__System.registerDynamic('db', ['e', '8e'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var mergeMapTo_1 = $__require('8e');
  Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
  Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
});
$__System.registerDynamic('dc', ['f', '10', '21', '22'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var subscribeToResult_1 = $__require('21');
  var OuterSubscriber_1 = $__require('22');
  function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return this.lift(new MergeScanOperator(accumulator, seed, concurrent));
  }
  exports.mergeScan = mergeScan;
  var MergeScanOperator = function () {
    function MergeScanOperator(accumulator, seed, concurrent) {
      this.accumulator = accumulator;
      this.seed = seed;
      this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    };
    return MergeScanOperator;
  }();
  exports.MergeScanOperator = MergeScanOperator;
  var MergeScanSubscriber = function (_super) {
    __extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
      _super.call(this, destination);
      this.accumulator = accumulator;
      this.acc = acc;
      this.concurrent = concurrent;
      this.hasValue = false;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeScanSubscriber.prototype._next = function (value) {
      if (this.active < this.concurrent) {
        var index = this.index++;
        var ish = tryCatch_1.tryCatch(this.accumulator)(this.acc, value);
        var destination = this.destination;
        if (ish === errorObject_1.errorObject) {
          destination.error(errorObject_1.errorObject.e);
        } else {
          this.active++;
          this._innerSub(ish, value, index);
        }
      } else {
        this.buffer.push(value);
      }
    };
    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeScanSubscriber.prototype._complete = function () {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        if (this.hasValue === false) {
          this.destination.next(this.acc);
        }
        this.destination.complete();
      }
    };
    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var destination = this.destination;
      this.acc = innerValue;
      this.hasValue = true;
      destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        if (this.hasValue === false) {
          this.destination.next(this.acc);
        }
        this.destination.complete();
      }
    };
    return MergeScanSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
  exports.MergeScanSubscriber = MergeScanSubscriber;
});
$__System.registerDynamic('dd', ['e', 'dc'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var mergeScan_1 = $__require('dc');
  Observable_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
});
$__System.registerDynamic('de', ['d6'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var reduce_1 = $__require('d6');
  function min(comparer) {
    var min = typeof comparer === 'function' ? function (x, y) {
      return comparer(x, y) < 0 ? x : y;
    } : function (x, y) {
      return x < y ? x : y;
    };
    return this.lift(new reduce_1.ReduceOperator(min));
  }
  exports.min = min;
});
$__System.registerDynamic('df', ['e', 'de'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var min_1 = $__require('de');
  Observable_1.Observable.prototype.min = min_1.min;
});
$__System.registerDynamic('e0', ['e', 'e1'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var multicast_1 = $__require('e1');
  Observable_1.Observable.prototype.multicast = multicast_1.multicast;
});
$__System.registerDynamic('e2', ['e', 'e3'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var observeOn_1 = $__require('e3');
  Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
});
$__System.registerDynamic('38', ['68', 'e'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('68');
  var Observable_1 = $__require('e');
  var PromiseObservable = function (_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
      _super.call(this);
      this.promise = promise;
      this.scheduler = scheduler;
    }
    PromiseObservable.create = function (promise, scheduler) {
      return new PromiseObservable(promise, scheduler);
    };
    PromiseObservable.prototype._subscribe = function (subscriber) {
      var _this = this;
      var promise = this.promise;
      var scheduler = this.scheduler;
      if (scheduler == null) {
        if (this._isScalar) {
          if (!subscriber.closed) {
            subscriber.next(this.value);
            subscriber.complete();
          }
        } else {
          promise.then(function (value) {
            _this.value = value;
            _this._isScalar = true;
            if (!subscriber.closed) {
              subscriber.next(value);
              subscriber.complete();
            }
          }, function (err) {
            if (!subscriber.closed) {
              subscriber.error(err);
            }
          }).then(null, function (err) {
            root_1.root.setTimeout(function () {
              throw err;
            });
          });
        }
      } else {
        if (this._isScalar) {
          if (!subscriber.closed) {
            return scheduler.schedule(dispatchNext, 0, {
              value: this.value,
              subscriber: subscriber
            });
          }
        } else {
          promise.then(function (value) {
            _this.value = value;
            _this._isScalar = true;
            if (!subscriber.closed) {
              subscriber.add(scheduler.schedule(dispatchNext, 0, {
                value: value,
                subscriber: subscriber
              }));
            }
          }, function (err) {
            if (!subscriber.closed) {
              subscriber.add(scheduler.schedule(dispatchError, 0, {
                err: err,
                subscriber: subscriber
              }));
            }
          }).then(null, function (err) {
            root_1.root.setTimeout(function () {
              throw err;
            });
          });
        }
      }
    };
    return PromiseObservable;
  }(Observable_1.Observable);
  exports.PromiseObservable = PromiseObservable;
  function dispatchNext(arg) {
    var value = arg.value,
        subscriber = arg.subscriber;
    if (!subscriber.closed) {
      subscriber.next(value);
      subscriber.complete();
    }
  }
  function dispatchError(arg) {
    var err = arg.err,
        subscriber = arg.subscriber;
    if (!subscriber.closed) {
      subscriber.error(err);
    }
  }
});
$__System.registerDynamic('e4', ['68', 'e', 'e5'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('68');
  var Observable_1 = $__require('e');
  var iterator_1 = $__require('e5');
  var IteratorObservable = function (_super) {
    __extends(IteratorObservable, _super);
    function IteratorObservable(iterator, scheduler) {
      _super.call(this);
      this.scheduler = scheduler;
      if (iterator == null) {
        throw new Error('iterator cannot be null.');
      }
      this.iterator = getIterator(iterator);
    }
    IteratorObservable.create = function (iterator, scheduler) {
      return new IteratorObservable(iterator, scheduler);
    };
    IteratorObservable.dispatch = function (state) {
      var index = state.index,
          hasError = state.hasError,
          iterator = state.iterator,
          subscriber = state.subscriber;
      if (hasError) {
        subscriber.error(state.error);
        return;
      }
      var result = iterator.next();
      if (result.done) {
        subscriber.complete();
        return;
      }
      subscriber.next(result.value);
      state.index = index + 1;
      if (subscriber.closed) {
        if (typeof iterator.return === 'function') {
          iterator.return();
        }
        return;
      }
      this.schedule(state);
    };
    IteratorObservable.prototype._subscribe = function (subscriber) {
      var index = 0;
      var _a = this,
          iterator = _a.iterator,
          scheduler = _a.scheduler;
      if (scheduler) {
        return scheduler.schedule(IteratorObservable.dispatch, 0, {
          index: index,
          iterator: iterator,
          subscriber: subscriber
        });
      } else {
        do {
          var result = iterator.next();
          if (result.done) {
            subscriber.complete();
            break;
          } else {
            subscriber.next(result.value);
          }
          if (subscriber.closed) {
            if (typeof iterator.return === 'function') {
              iterator.return();
            }
            break;
          }
        } while (true);
      }
    };
    return IteratorObservable;
  }(Observable_1.Observable);
  exports.IteratorObservable = IteratorObservable;
  var StringIterator = function () {
    function StringIterator(str, idx, len) {
      if (idx === void 0) {
        idx = 0;
      }
      if (len === void 0) {
        len = str.length;
      }
      this.str = str;
      this.idx = idx;
      this.len = len;
    }
    StringIterator.prototype[iterator_1.iterator] = function () {
      return this;
    };
    StringIterator.prototype.next = function () {
      return this.idx < this.len ? {
        done: false,
        value: this.str.charAt(this.idx++)
      } : {
        done: true,
        value: undefined
      };
    };
    return StringIterator;
  }();
  var ArrayIterator = function () {
    function ArrayIterator(arr, idx, len) {
      if (idx === void 0) {
        idx = 0;
      }
      if (len === void 0) {
        len = toLength(arr);
      }
      this.arr = arr;
      this.idx = idx;
      this.len = len;
    }
    ArrayIterator.prototype[iterator_1.iterator] = function () {
      return this;
    };
    ArrayIterator.prototype.next = function () {
      return this.idx < this.len ? {
        done: false,
        value: this.arr[this.idx++]
      } : {
        done: true,
        value: undefined
      };
    };
    return ArrayIterator;
  }();
  function getIterator(obj) {
    var i = obj[iterator_1.iterator];
    if (!i && typeof obj === 'string') {
      return new StringIterator(obj);
    }
    if (!i && obj.length !== undefined) {
      return new ArrayIterator(obj);
    }
    if (!i) {
      throw new TypeError('object is not iterable');
    }
    return obj[iterator_1.iterator]();
  }
  var maxSafeInteger = Math.pow(2, 53) - 1;
  function toLength(o) {
    var len = +o.length;
    if (isNaN(len)) {
      return 0;
    }
    if (len === 0 || !numberIsFinite(len)) {
      return len;
    }
    len = sign(len) * Math.floor(Math.abs(len));
    if (len <= 0) {
      return 0;
    }
    if (len > maxSafeInteger) {
      return maxSafeInteger;
    }
    return len;
  }
  function numberIsFinite(value) {
    return typeof value === 'number' && root_1.root.isFinite(value);
  }
  function sign(value) {
    var valueAsNumber = +value;
    if (valueAsNumber === 0) {
      return valueAsNumber;
    }
    if (isNaN(valueAsNumber)) {
      return valueAsNumber;
    }
    return valueAsNumber < 0 ? -1 : 1;
  }
});
$__System.registerDynamic('e6', ['e', 'e7', '26'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var ScalarObservable_1 = $__require('e7');
  var EmptyObservable_1 = $__require('26');
  var ArrayLikeObservable = function (_super) {
    __extends(ArrayLikeObservable, _super);
    function ArrayLikeObservable(arrayLike, scheduler) {
      _super.call(this);
      this.arrayLike = arrayLike;
      this.scheduler = scheduler;
      if (!scheduler && arrayLike.length === 1) {
        this._isScalar = true;
        this.value = arrayLike[0];
      }
    }
    ArrayLikeObservable.create = function (arrayLike, scheduler) {
      var length = arrayLike.length;
      if (length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      } else if (length === 1) {
        return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
      } else {
        return new ArrayLikeObservable(arrayLike, scheduler);
      }
    };
    ArrayLikeObservable.dispatch = function (state) {
      var arrayLike = state.arrayLike,
          index = state.index,
          length = state.length,
          subscriber = state.subscriber;
      if (subscriber.closed) {
        return;
      }
      if (index >= length) {
        subscriber.complete();
        return;
      }
      subscriber.next(arrayLike[index]);
      state.index = index + 1;
      this.schedule(state);
    };
    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
      var index = 0;
      var _a = this,
          arrayLike = _a.arrayLike,
          scheduler = _a.scheduler;
      var length = arrayLike.length;
      if (scheduler) {
        return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
          arrayLike: arrayLike,
          index: index,
          length: length,
          subscriber: subscriber
        });
      } else {
        for (var i = 0; i < length && !subscriber.closed; i++) {
          subscriber.next(arrayLike[i]);
        }
        subscriber.complete();
      }
    };
    return ArrayLikeObservable;
  }(Observable_1.Observable);
  exports.ArrayLikeObservable = ArrayLikeObservable;
});
$__System.registerDynamic('2c', ['19', 'e8', 'e9', '38', 'e4', '1a', 'e6', 'e5', 'e', 'e3', 'ea'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isArray_1 = $__require('19');
  var isArrayLike_1 = $__require('e8');
  var isPromise_1 = $__require('e9');
  var PromiseObservable_1 = $__require('38');
  var IteratorObservable_1 = $__require('e4');
  var ArrayObservable_1 = $__require('1a');
  var ArrayLikeObservable_1 = $__require('e6');
  var iterator_1 = $__require('e5');
  var Observable_1 = $__require('e');
  var observeOn_1 = $__require('e3');
  var observable_1 = $__require('ea');
  var FromObservable = function (_super) {
    __extends(FromObservable, _super);
    function FromObservable(ish, scheduler) {
      _super.call(this, null);
      this.ish = ish;
      this.scheduler = scheduler;
    }
    FromObservable.create = function (ish, scheduler) {
      if (ish != null) {
        if (typeof ish[observable_1.observable] === 'function') {
          if (ish instanceof Observable_1.Observable && !scheduler) {
            return ish;
          }
          return new FromObservable(ish, scheduler);
        } else if (isArray_1.isArray(ish)) {
          return new ArrayObservable_1.ArrayObservable(ish, scheduler);
        } else if (isPromise_1.isPromise(ish)) {
          return new PromiseObservable_1.PromiseObservable(ish, scheduler);
        } else if (typeof ish[iterator_1.iterator] === 'function' || typeof ish === 'string') {
          return new IteratorObservable_1.IteratorObservable(ish, scheduler);
        } else if (isArrayLike_1.isArrayLike(ish)) {
          return new ArrayLikeObservable_1.ArrayLikeObservable(ish, scheduler);
        }
      }
      throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
    };
    FromObservable.prototype._subscribe = function (subscriber) {
      var ish = this.ish;
      var scheduler = this.scheduler;
      if (scheduler == null) {
        return ish[observable_1.observable]().subscribe(subscriber);
      } else {
        return ish[observable_1.observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
      }
    };
    return FromObservable;
  }(Observable_1.Observable);
  exports.FromObservable = FromObservable;
});
$__System.registerDynamic('50', ['2c', '19', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var FromObservable_1 = $__require('2c');
  var isArray_1 = $__require('19');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      nextSources[_i - 0] = arguments[_i];
    }
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
      nextSources = nextSources[0];
    }
    return this.lift(new OnErrorResumeNextOperator(nextSources));
  }
  exports.onErrorResumeNext = onErrorResumeNext;
  function onErrorResumeNextStatic() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      nextSources[_i - 0] = arguments[_i];
    }
    var source = null;
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
      nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return new FromObservable_1.FromObservable(source, null).lift(new OnErrorResumeNextOperator(nextSources));
  }
  exports.onErrorResumeNextStatic = onErrorResumeNextStatic;
  var OnErrorResumeNextOperator = function () {
    function OnErrorResumeNextOperator(nextSources) {
      this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
  }();
  var OnErrorResumeNextSubscriber = function (_super) {
    __extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
      _super.call(this, destination);
      this.destination = destination;
      this.nextSources = nextSources;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
      this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
      this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function (err) {
      this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function () {
      this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
      var next = this.nextSources.shift();
      if (next) {
        this.add(subscribeToResult_1.subscribeToResult(this, next));
      } else {
        this.destination.complete();
      }
    };
    return OnErrorResumeNextSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('eb', ['e', '50'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var onErrorResumeNext_1 = $__require('50');
  Observable_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
});
$__System.registerDynamic("ec", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function pairwise() {
    return this.lift(new PairwiseOperator());
  }
  exports.pairwise = pairwise;
  var PairwiseOperator = function () {
    function PairwiseOperator() {}
    PairwiseOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator;
  }();
  var PairwiseSubscriber = function (_super) {
    __extends(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
      _super.call(this, destination);
      this.hasPrev = false;
    }
    PairwiseSubscriber.prototype._next = function (value) {
      if (this.hasPrev) {
        this.destination.next([this.prev, value]);
      } else {
        this.hasPrev = true;
      }
      this.prev = value;
    };
    return PairwiseSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('ed', ['e', 'ec'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var pairwise_1 = $__require('ec');
  Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
});
$__System.registerDynamic("ee", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function not(pred, thisArg) {
        function notPred() {
            return !notPred.pred.apply(notPred.thisArg, arguments);
        }
        notPred.pred = pred;
        notPred.thisArg = thisArg;
        return notPred;
    }
    exports.not = not;
    
});
$__System.registerDynamic("b2", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function filter(predicate, thisArg) {
    return this.lift(new FilterOperator(predicate, thisArg));
  }
  exports.filter = filter;
  var FilterOperator = function () {
    function FilterOperator(predicate, thisArg) {
      this.predicate = predicate;
      this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
  }();
  var FilterSubscriber = function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.count = 0;
      this.predicate = predicate;
    }
    FilterSubscriber.prototype._next = function (value) {
      var result;
      try {
        result = this.predicate.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this.destination.next(value);
      }
    };
    return FilterSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('ef', ['ee', 'b2'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var not_1 = $__require('ee');
  var filter_1 = $__require('b2');
  function partition(predicate, thisArg) {
    return [filter_1.filter.call(this, predicate, thisArg), filter_1.filter.call(this, not_1.not(predicate, thisArg))];
  }
  exports.partition = partition;
});
$__System.registerDynamic('f0', ['e', 'ef'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var partition_1 = $__require('ef');
  Observable_1.Observable.prototype.partition = partition_1.partition;
});
$__System.registerDynamic('f1', ['d0'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var map_1 = $__require('d0');
  function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
      throw new Error('list of properties cannot be empty.');
    }
    return map_1.map.call(this, plucker(properties, length));
  }
  exports.pluck = pluck;
  function plucker(props, length) {
    var mapper = function (x) {
      var currentProp = x;
      for (var i = 0; i < length; i++) {
        var p = currentProp[props[i]];
        if (typeof p !== 'undefined') {
          currentProp = p;
        } else {
          return undefined;
        }
      }
      return currentProp;
    };
    return mapper;
  }
});
$__System.registerDynamic('f2', ['e', 'f1'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var pluck_1 = $__require('f1');
  Observable_1.Observable.prototype.pluck = pluck_1.pluck;
});
$__System.registerDynamic('f3', ['6a', 'e1'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Subject_1 = $__require('6a');
  var multicast_1 = $__require('e1');
  function publish(selector) {
    return selector ? multicast_1.multicast.call(this, function () {
      return new Subject_1.Subject();
    }, selector) : multicast_1.multicast.call(this, new Subject_1.Subject());
  }
  exports.publish = publish;
});
$__System.registerDynamic('f4', ['e', 'f3'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var publish_1 = $__require('f3');
  Observable_1.Observable.prototype.publish = publish_1.publish;
});
$__System.registerDynamic('f5', ['f6', 'e1'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var BehaviorSubject_1 = $__require('f6');
  var multicast_1 = $__require('e1');
  function publishBehavior(value) {
    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
  }
  exports.publishBehavior = publishBehavior;
});
$__System.registerDynamic('f7', ['e', 'f5'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var publishBehavior_1 = $__require('f5');
  Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
});
$__System.registerDynamic('f8', ['6c', 'e1'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var ReplaySubject_1 = $__require('6c');
  var multicast_1 = $__require('e1');
  function publishReplay(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }
    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }
    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
  }
  exports.publishReplay = publishReplay;
});
$__System.registerDynamic('f9', ['e', 'f8'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var publishReplay_1 = $__require('f8');
  Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
});
$__System.registerDynamic('fa', ['11', 'e1'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var AsyncSubject_1 = $__require('11');
  var multicast_1 = $__require('e1');
  function publishLast() {
    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
  }
  exports.publishLast = publishLast;
});
$__System.registerDynamic('fb', ['e', 'fa'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var publishLast_1 = $__require('fa');
  Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
});
$__System.registerDynamic('48', ['19', '1a', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isArray_1 = $__require('19');
  var ArrayObservable_1 = $__require('1a');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    return this.lift.call(raceStatic.apply(void 0, [this].concat(observables)));
  }
  exports.race = race;
  function raceStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    if (observables.length === 1) {
      if (isArray_1.isArray(observables[0])) {
        observables = observables[0];
      } else {
        return observables[0];
      }
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
  }
  exports.raceStatic = raceStatic;
  var RaceOperator = function () {
    function RaceOperator() {}
    RaceOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
  }();
  exports.RaceOperator = RaceOperator;
  var RaceSubscriber = function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
      _super.call(this, destination);
      this.hasFirst = false;
      this.observables = [];
      this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function (observable) {
      this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
      var observables = this.observables;
      var len = observables.length;
      if (len === 0) {
        this.destination.complete();
      } else {
        for (var i = 0; i < len && !this.hasFirst; i++) {
          var observable = observables[i];
          var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
          if (this.subscriptions) {
            this.subscriptions.push(subscription);
          }
          this.add(subscription);
        }
        this.observables = null;
      }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (!this.hasFirst) {
        this.hasFirst = true;
        for (var i = 0; i < this.subscriptions.length; i++) {
          if (i !== outerIndex) {
            var subscription = this.subscriptions[i];
            subscription.unsubscribe();
            this.remove(subscription);
          }
        }
        this.subscriptions = null;
      }
      this.destination.next(innerValue);
    };
    return RaceSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
  exports.RaceSubscriber = RaceSubscriber;
});
$__System.registerDynamic('fc', ['e', '48'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var race_1 = $__require('48');
  Observable_1.Observable.prototype.race = race_1.race;
});
$__System.registerDynamic("d6", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function reduce(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
      hasSeed = true;
    }
    return this.lift(new ReduceOperator(accumulator, seed, hasSeed));
  }
  exports.reduce = reduce;
  var ReduceOperator = function () {
    function ReduceOperator(accumulator, seed, hasSeed) {
      if (hasSeed === void 0) {
        hasSeed = false;
      }
      this.accumulator = accumulator;
      this.seed = seed;
      this.hasSeed = hasSeed;
    }
    ReduceOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new ReduceSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ReduceOperator;
  }();
  exports.ReduceOperator = ReduceOperator;
  var ReduceSubscriber = function (_super) {
    __extends(ReduceSubscriber, _super);
    function ReduceSubscriber(destination, accumulator, seed, hasSeed) {
      _super.call(this, destination);
      this.accumulator = accumulator;
      this.hasSeed = hasSeed;
      this.index = 0;
      this.hasValue = false;
      this.acc = seed;
      if (!this.hasSeed) {
        this.index++;
      }
    }
    ReduceSubscriber.prototype._next = function (value) {
      if (this.hasValue || (this.hasValue = this.hasSeed)) {
        this._tryReduce(value);
      } else {
        this.acc = value;
        this.hasValue = true;
      }
    };
    ReduceSubscriber.prototype._tryReduce = function (value) {
      var result;
      try {
        result = this.accumulator(this.acc, value, this.index++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.acc = result;
    };
    ReduceSubscriber.prototype._complete = function () {
      if (this.hasValue || this.hasSeed) {
        this.destination.next(this.acc);
      }
      this.destination.complete();
    };
    return ReduceSubscriber;
  }(Subscriber_1.Subscriber);
  exports.ReduceSubscriber = ReduceSubscriber;
});
$__System.registerDynamic('fd', ['e', 'd6'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var reduce_1 = $__require('d6');
  Observable_1.Observable.prototype.reduce = reduce_1.reduce;
});
$__System.registerDynamic('fe', ['6b', '26'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var EmptyObservable_1 = $__require('26');
  function repeat(count) {
    if (count === void 0) {
      count = -1;
    }
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else if (count < 0) {
      return this.lift(new RepeatOperator(-1, this));
    } else {
      return this.lift(new RepeatOperator(count - 1, this));
    }
  }
  exports.repeat = repeat;
  var RepeatOperator = function () {
    function RepeatOperator(count, source) {
      this.count = count;
      this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
  }();
  var RepeatSubscriber = function (_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
      _super.call(this, destination);
      this.count = count;
      this.source = source;
    }
    RepeatSubscriber.prototype.complete = function () {
      if (!this.isStopped) {
        var _a = this,
            source = _a.source,
            count = _a.count;
        if (count === 0) {
          return _super.prototype.complete.call(this);
        } else if (count > -1) {
          this.count = count - 1;
        }
        source.subscribe(this._unsubscribeAndRecycle());
      }
    };
    return RepeatSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('ff', ['e', 'fe'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var repeat_1 = $__require('fe');
  Observable_1.Observable.prototype.repeat = repeat_1.repeat;
});
$__System.registerDynamic('100', ['6a', 'f', '10', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function repeatWhen(notifier) {
    return this.lift(new RepeatWhenOperator(notifier));
  }
  exports.repeatWhen = repeatWhen;
  var RepeatWhenOperator = function () {
    function RepeatWhenOperator(notifier) {
      this.notifier = notifier;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator;
  }();
  var RepeatWhenSubscriber = function (_super) {
    __extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.source = source;
      this.sourceIsBeingSubscribedTo = true;
    }
    RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.sourceIsBeingSubscribedTo = true;
      this.source.subscribe(this);
    };
    RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
      if (this.sourceIsBeingSubscribedTo === false) {
        return _super.prototype.complete.call(this);
      }
    };
    RepeatWhenSubscriber.prototype.complete = function () {
      this.sourceIsBeingSubscribedTo = false;
      if (!this.isStopped) {
        if (!this.retries) {
          this.subscribeToRetries();
        } else if (this.retriesSubscription.closed) {
          return _super.prototype.complete.call(this);
        }
        this._unsubscribeAndRecycle();
        this.notifications.next();
      }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
      var _a = this,
          notifications = _a.notifications,
          retriesSubscription = _a.retriesSubscription;
      if (notifications) {
        notifications.unsubscribe();
        this.notifications = null;
      }
      if (retriesSubscription) {
        retriesSubscription.unsubscribe();
        this.retriesSubscription = null;
      }
      this.retries = null;
    };
    RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
      var _a = this,
          notifications = _a.notifications,
          retries = _a.retries,
          retriesSubscription = _a.retriesSubscription;
      this.notifications = null;
      this.retries = null;
      this.retriesSubscription = null;
      _super.prototype._unsubscribeAndRecycle.call(this);
      this.notifications = notifications;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      return this;
    };
    RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
      this.notifications = new Subject_1.Subject();
      var retries = tryCatch_1.tryCatch(this.notifier)(this.notifications);
      if (retries === errorObject_1.errorObject) {
        return _super.prototype.complete.call(this);
      }
      this.retries = retries;
      this.retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
    };
    return RepeatWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('101', ['e', '100'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var repeatWhen_1 = $__require('100');
  Observable_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;
});
$__System.registerDynamic("102", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function retry(count) {
    if (count === void 0) {
      count = -1;
    }
    return this.lift(new RetryOperator(count, this));
  }
  exports.retry = retry;
  var RetryOperator = function () {
    function RetryOperator(count, source) {
      this.count = count;
      this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
  }();
  var RetrySubscriber = function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
      _super.call(this, destination);
      this.count = count;
      this.source = source;
    }
    RetrySubscriber.prototype.error = function (err) {
      if (!this.isStopped) {
        var _a = this,
            source = _a.source,
            count = _a.count;
        if (count === 0) {
          return _super.prototype.error.call(this, err);
        } else if (count > -1) {
          this.count = count - 1;
        }
        source.subscribe(this._unsubscribeAndRecycle());
      }
    };
    return RetrySubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('103', ['e', '102'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var retry_1 = $__require('102');
  Observable_1.Observable.prototype.retry = retry_1.retry;
});
$__System.registerDynamic('104', ['6a', 'f', '10', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function retryWhen(notifier) {
    return this.lift(new RetryWhenOperator(notifier, this));
  }
  exports.retryWhen = retryWhen;
  var RetryWhenOperator = function () {
    function RetryWhenOperator(notifier, source) {
      this.notifier = notifier;
      this.source = source;
    }
    RetryWhenOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
  }();
  var RetryWhenSubscriber = function (_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function (err) {
      if (!this.isStopped) {
        var errors = this.errors;
        var retries = this.retries;
        var retriesSubscription = this.retriesSubscription;
        if (!retries) {
          errors = new Subject_1.Subject();
          retries = tryCatch_1.tryCatch(this.notifier)(errors);
          if (retries === errorObject_1.errorObject) {
            return _super.prototype.error.call(this, errorObject_1.errorObject.e);
          }
          retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
        } else {
          this.errors = null;
          this.retriesSubscription = null;
        }
        this._unsubscribeAndRecycle();
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        errors.next(err);
      }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function () {
      var _a = this,
          errors = _a.errors,
          retriesSubscription = _a.retriesSubscription;
      if (errors) {
        errors.unsubscribe();
        this.errors = null;
      }
      if (retriesSubscription) {
        retriesSubscription.unsubscribe();
        this.retriesSubscription = null;
      }
      this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          errors = _a.errors,
          retries = _a.retries,
          retriesSubscription = _a.retriesSubscription;
      this.errors = null;
      this.retries = null;
      this.retriesSubscription = null;
      this._unsubscribeAndRecycle();
      this.errors = errors;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('105', ['e', '104'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var retryWhen_1 = $__require('104');
  Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
});
$__System.registerDynamic('106', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function sample(notifier) {
    return this.lift(new SampleOperator(notifier));
  }
  exports.sample = sample;
  var SampleOperator = function () {
    function SampleOperator(notifier) {
      this.notifier = notifier;
    }
    SampleOperator.prototype.call = function (subscriber, source) {
      var sampleSubscriber = new SampleSubscriber(subscriber);
      var subscription = source.subscribe(sampleSubscriber);
      subscription.add(subscribeToResult_1.subscribeToResult(sampleSubscriber, this.notifier));
      return subscription;
    };
    return SampleOperator;
  }();
  var SampleSubscriber = function (_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber() {
      _super.apply(this, arguments);
      this.hasValue = false;
    }
    SampleSubscriber.prototype._next = function (value) {
      this.value = value;
      this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function () {
      this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function () {
      if (this.hasValue) {
        this.hasValue = false;
        this.destination.next(this.value);
      }
    };
    return SampleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('107', ['e', '106'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var sample_1 = $__require('106');
  Observable_1.Observable.prototype.sample = sample_1.sample;
});
$__System.registerDynamic('108', ['6b', '41'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var async_1 = $__require('41');
  function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new SampleTimeOperator(period, scheduler));
  }
  exports.sampleTime = sampleTime;
  var SampleTimeOperator = function () {
    function SampleTimeOperator(period, scheduler) {
      this.period = period;
      this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
  }();
  var SampleTimeSubscriber = function (_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
      _super.call(this, destination);
      this.period = period;
      this.scheduler = scheduler;
      this.hasValue = false;
      this.add(scheduler.schedule(dispatchNotification, period, {
        subscriber: this,
        period: period
      }));
    }
    SampleTimeSubscriber.prototype._next = function (value) {
      this.lastValue = value;
      this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function () {
      if (this.hasValue) {
        this.hasValue = false;
        this.destination.next(this.lastValue);
      }
    };
    return SampleTimeSubscriber;
  }(Subscriber_1.Subscriber);
  function dispatchNotification(state) {
    var subscriber = state.subscriber,
        period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
  }
});
$__System.registerDynamic('109', ['e', '108'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var sampleTime_1 = $__require('108');
  Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
});
$__System.registerDynamic("10a", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
      hasSeed = true;
    }
    return this.lift(new ScanOperator(accumulator, seed, hasSeed));
  }
  exports.scan = scan;
  var ScanOperator = function () {
    function ScanOperator(accumulator, seed, hasSeed) {
      if (hasSeed === void 0) {
        hasSeed = false;
      }
      this.accumulator = accumulator;
      this.seed = seed;
      this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
  }();
  var ScanSubscriber = function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
      _super.call(this, destination);
      this.accumulator = accumulator;
      this._seed = _seed;
      this.hasSeed = hasSeed;
      this.index = 0;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
      get: function () {
        return this._seed;
      },
      set: function (value) {
        this.hasSeed = true;
        this._seed = value;
      },
      enumerable: true,
      configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
      if (!this.hasSeed) {
        this.seed = value;
        this.destination.next(value);
      } else {
        return this._tryNext(value);
      }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
      var index = this.index++;
      var result;
      try {
        result = this.accumulator(this.seed, value, index);
      } catch (err) {
        this.destination.error(err);
      }
      this.seed = result;
      this.destination.next(result);
    };
    return ScanSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('10b', ['e', '10a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var scan_1 = $__require('10a');
  Observable_1.Observable.prototype.scan = scan_1.scan;
});
$__System.registerDynamic('10c', ['6b', 'f', '10'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  function sequenceEqual(compareTo, comparor) {
    return this.lift(new SequenceEqualOperator(compareTo, comparor));
  }
  exports.sequenceEqual = sequenceEqual;
  var SequenceEqualOperator = function () {
    function SequenceEqualOperator(compareTo, comparor) {
      this.compareTo = compareTo;
      this.comparor = comparor;
    }
    SequenceEqualOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
    };
    return SequenceEqualOperator;
  }();
  exports.SequenceEqualOperator = SequenceEqualOperator;
  var SequenceEqualSubscriber = function (_super) {
    __extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparor) {
      _super.call(this, destination);
      this.compareTo = compareTo;
      this.comparor = comparor;
      this._a = [];
      this._b = [];
      this._oneComplete = false;
      this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    SequenceEqualSubscriber.prototype._next = function (value) {
      if (this._oneComplete && this._b.length === 0) {
        this.emit(false);
      } else {
        this._a.push(value);
        this.checkValues();
      }
    };
    SequenceEqualSubscriber.prototype._complete = function () {
      if (this._oneComplete) {
        this.emit(this._a.length === 0 && this._b.length === 0);
      } else {
        this._oneComplete = true;
      }
    };
    SequenceEqualSubscriber.prototype.checkValues = function () {
      var _c = this,
          _a = _c._a,
          _b = _c._b,
          comparor = _c.comparor;
      while (_a.length > 0 && _b.length > 0) {
        var a = _a.shift();
        var b = _b.shift();
        var areEqual = false;
        if (comparor) {
          areEqual = tryCatch_1.tryCatch(comparor)(a, b);
          if (areEqual === errorObject_1.errorObject) {
            this.destination.error(errorObject_1.errorObject.e);
          }
        } else {
          areEqual = a === b;
        }
        if (!areEqual) {
          this.emit(false);
        }
      }
    };
    SequenceEqualSubscriber.prototype.emit = function (value) {
      var destination = this.destination;
      destination.next(value);
      destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function (value) {
      if (this._oneComplete && this._a.length === 0) {
        this.emit(false);
      } else {
        this._b.push(value);
        this.checkValues();
      }
    };
    return SequenceEqualSubscriber;
  }(Subscriber_1.Subscriber);
  exports.SequenceEqualSubscriber = SequenceEqualSubscriber;
  var SequenceEqualCompareToSubscriber = function (_super) {
    __extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
      _super.call(this, destination);
      this.parent = parent;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function (value) {
      this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function (err) {
      this.parent.error(err);
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function () {
      this.parent._complete();
    };
    return SequenceEqualCompareToSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('10d', ['e', '10c'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var sequenceEqual_1 = $__require('10c');
  Observable_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;
});
$__System.registerDynamic('10e', ['e1', '6a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var multicast_1 = $__require('e1');
  var Subject_1 = $__require('6a');
  function shareSubjectFactory() {
    return new Subject_1.Subject();
  }
  function share() {
    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
  }
  exports.share = share;
  ;
});
$__System.registerDynamic('10f', ['e', '10e'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var share_1 = $__require('10e');
  Observable_1.Observable.prototype.share = share_1.share;
});
$__System.registerDynamic('e1', ['110'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var ConnectableObservable_1 = $__require('110');
  function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return subjectOrSubjectFactory;
      };
    }
    if (typeof selector === 'function') {
      return this.lift(new MulticastOperator(subjectFactory, selector));
    }
    var connectable = Object.create(this, ConnectableObservable_1.connectableObservableDescriptor);
    connectable.source = this;
    connectable.subjectFactory = subjectFactory;
    return connectable;
  }
  exports.multicast = multicast;
  var MulticastOperator = function () {
    function MulticastOperator(subjectFactory, selector) {
      this.subjectFactory = subjectFactory;
      this.selector = selector;
    }
    MulticastOperator.prototype.call = function (subscriber, source) {
      var selector = this.selector;
      var subject = this.subjectFactory();
      var subscription = selector(subject).subscribe(subscriber);
      subscription.add(source.subscribe(subject));
      return subscription;
    };
    return MulticastOperator;
  }();
  exports.MulticastOperator = MulticastOperator;
});
$__System.registerDynamic('111', ['e1', '6c'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var multicast_1 = $__require('e1');
  var ReplaySubject_1 = $__require('6c');
  function shareReplay(bufferSize, windowTime, scheduler) {
    var subject;
    var connectable = multicast_1.multicast.call(this, function shareReplaySubjectFactory() {
      if (this._isComplete) {
        return subject;
      } else {
        return subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
      }
    });
    return connectable.refCount();
  }
  exports.shareReplay = shareReplay;
  ;
});
$__System.registerDynamic('112', ['e', '111'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var shareReplay_1 = $__require('111');
  Observable_1.Observable.prototype.shareReplay = shareReplay_1.shareReplay;
});
$__System.registerDynamic('113', ['6b', 'ba'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var EmptyError_1 = $__require('ba');
  function single(predicate) {
    return this.lift(new SingleOperator(predicate, this));
  }
  exports.single = single;
  var SingleOperator = function () {
    function SingleOperator(predicate, source) {
      this.predicate = predicate;
      this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
  }();
  var SingleSubscriber = function (_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.seenValue = false;
      this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
      if (this.seenValue) {
        this.destination.error('Sequence contains more than one element');
      } else {
        this.seenValue = true;
        this.singleValue = value;
      }
    };
    SingleSubscriber.prototype._next = function (value) {
      var index = this.index++;
      if (this.predicate) {
        this.tryNext(value, index);
      } else {
        this.applySingleValue(value);
      }
    };
    SingleSubscriber.prototype.tryNext = function (value, index) {
      try {
        if (this.predicate(value, index, this.source)) {
          this.applySingleValue(value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    SingleSubscriber.prototype._complete = function () {
      var destination = this.destination;
      if (this.index > 0) {
        destination.next(this.seenValue ? this.singleValue : undefined);
        destination.complete();
      } else {
        destination.error(new EmptyError_1.EmptyError());
      }
    };
    return SingleSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('114', ['e', '113'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var single_1 = $__require('113');
  Observable_1.Observable.prototype.single = single_1.single;
});
$__System.registerDynamic("115", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function skip(count) {
    return this.lift(new SkipOperator(count));
  }
  exports.skip = skip;
  var SkipOperator = function () {
    function SkipOperator(total) {
      this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
  }();
  var SkipSubscriber = function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.count = 0;
    }
    SkipSubscriber.prototype._next = function (x) {
      if (++this.count > this.total) {
        this.destination.next(x);
      }
    };
    return SkipSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('116', ['e', '115'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var skip_1 = $__require('115');
  Observable_1.Observable.prototype.skip = skip_1.skip;
});
$__System.registerDynamic('117', ['6b', 'af'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var ArgumentOutOfRangeError_1 = $__require('af');
  function skipLast(count) {
    return this.lift(new SkipLastOperator(count));
  }
  exports.skipLast = skipLast;
  var SkipLastOperator = function () {
    function SkipLastOperator(_skipCount) {
      this._skipCount = _skipCount;
      if (this._skipCount < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
      }
    }
    SkipLastOperator.prototype.call = function (subscriber, source) {
      if (this._skipCount === 0) {
        return source.subscribe(new Subscriber_1.Subscriber(subscriber));
      } else {
        return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
      }
    };
    return SkipLastOperator;
  }();
  var SkipLastSubscriber = function (_super) {
    __extends(SkipLastSubscriber, _super);
    function SkipLastSubscriber(destination, _skipCount) {
      _super.call(this, destination);
      this._skipCount = _skipCount;
      this._count = 0;
      this._ring = new Array(_skipCount);
    }
    SkipLastSubscriber.prototype._next = function (value) {
      var skipCount = this._skipCount;
      var count = this._count++;
      if (count < skipCount) {
        this._ring[count] = value;
      } else {
        var currentIndex = count % skipCount;
        var ring = this._ring;
        var oldValue = ring[currentIndex];
        ring[currentIndex] = value;
        this.destination.next(oldValue);
      }
    };
    return SkipLastSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('118', ['e', '117'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var skipLast_1 = $__require('117');
  Observable_1.Observable.prototype.skipLast = skipLast_1.skipLast;
});
$__System.registerDynamic('119', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function skipUntil(notifier) {
    return this.lift(new SkipUntilOperator(notifier));
  }
  exports.skipUntil = skipUntil;
  var SkipUntilOperator = function () {
    function SkipUntilOperator(notifier) {
      this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    };
    return SkipUntilOperator;
  }();
  var SkipUntilSubscriber = function (_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.hasValue = false;
      this.isInnerStopped = false;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function (value) {
      if (this.hasValue) {
        _super.prototype._next.call(this, value);
      }
    };
    SkipUntilSubscriber.prototype._complete = function () {
      if (this.isInnerStopped) {
        _super.prototype._complete.call(this);
      } else {
        this.unsubscribe();
      }
    };
    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function () {
      this.isInnerStopped = true;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    return SkipUntilSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('11a', ['e', '119'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var skipUntil_1 = $__require('119');
  Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
});
$__System.registerDynamic("11b", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function skipWhile(predicate) {
    return this.lift(new SkipWhileOperator(predicate));
  }
  exports.skipWhile = skipWhile;
  var SkipWhileOperator = function () {
    function SkipWhileOperator(predicate) {
      this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
  }();
  var SkipWhileSubscriber = function (_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.skipping = true;
      this.index = 0;
    }
    SkipWhileSubscriber.prototype._next = function (value) {
      var destination = this.destination;
      if (this.skipping) {
        this.tryCallPredicate(value);
      }
      if (!this.skipping) {
        destination.next(value);
      }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
      try {
        var result = this.predicate(value, this.index++);
        this.skipping = Boolean(result);
      } catch (err) {
        this.destination.error(err);
      }
    };
    return SkipWhileSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('11c', ['e', '11b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var skipWhile_1 = $__require('11b');
  Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
});
$__System.registerDynamic('88', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function mergeAll(concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return this.lift(new MergeAllOperator(concurrent));
  }
  exports.mergeAll = mergeAll;
  var MergeAllOperator = function () {
    function MergeAllOperator(concurrent) {
      this.concurrent = concurrent;
    }
    MergeAllOperator.prototype.call = function (observer, source) {
      return source.subscribe(new MergeAllSubscriber(observer, this.concurrent));
    };
    return MergeAllOperator;
  }();
  exports.MergeAllOperator = MergeAllOperator;
  var MergeAllSubscriber = function (_super) {
    __extends(MergeAllSubscriber, _super);
    function MergeAllSubscriber(destination, concurrent) {
      _super.call(this, destination);
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
    }
    MergeAllSubscriber.prototype._next = function (observable) {
      if (this.active < this.concurrent) {
        this.active++;
        this.add(subscribeToResult_1.subscribeToResult(this, observable));
      } else {
        this.buffer.push(observable);
      }
    };
    MergeAllSubscriber.prototype._complete = function () {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeAllSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
  exports.MergeAllSubscriber = MergeAllSubscriber;
});
$__System.registerDynamic('1e', ['e', '18', '1a', '88'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var isScheduler_1 = $__require('18');
  var ArrayObservable_1 = $__require('1a');
  var mergeAll_1 = $__require('88');
  function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    return this.lift.call(concatStatic.apply(void 0, [this].concat(observables)));
  }
  exports.concat = concat;
  function concatStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var scheduler = null;
    var args = observables;
    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
      scheduler = args.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
      return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
  }
  exports.concatStatic = concatStatic;
});
$__System.registerDynamic('11d', ['1a', 'e7', '26', '1e', '18'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var ArrayObservable_1 = $__require('1a');
  var ScalarObservable_1 = $__require('e7');
  var EmptyObservable_1 = $__require('26');
  var concat_1 = $__require('1e');
  var isScheduler_1 = $__require('18');
  function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i - 0] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
      array.pop();
    } else {
      scheduler = null;
    }
    var len = array.length;
    if (len === 1) {
      return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
    } else if (len > 1) {
      return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
    } else {
      return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
    }
  }
  exports.startWith = startWith;
});
$__System.registerDynamic('11e', ['e', '11d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var startWith_1 = $__require('11d');
  Observable_1.Observable.prototype.startWith = startWith_1.startWith;
});
$__System.registerDynamic('11f', ['e', '120', '40'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var asap_1 = $__require('120');
  var isNumeric_1 = $__require('40');
  var SubscribeOnObservable = function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
      if (delayTime === void 0) {
        delayTime = 0;
      }
      if (scheduler === void 0) {
        scheduler = asap_1.asap;
      }
      _super.call(this);
      this.source = source;
      this.delayTime = delayTime;
      this.scheduler = scheduler;
      if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
        this.delayTime = 0;
      }
      if (!scheduler || typeof scheduler.schedule !== 'function') {
        this.scheduler = asap_1.asap;
      }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
      if (delay === void 0) {
        delay = 0;
      }
      if (scheduler === void 0) {
        scheduler = asap_1.asap;
      }
      return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
      var source = arg.source,
          subscriber = arg.subscriber;
      return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
      var delay = this.delayTime;
      var source = this.source;
      var scheduler = this.scheduler;
      return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
        source: source,
        subscriber: subscriber
      });
    };
    return SubscribeOnObservable;
  }(Observable_1.Observable);
  exports.SubscribeOnObservable = SubscribeOnObservable;
});
$__System.registerDynamic("121", ["11f"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var SubscribeOnObservable_1 = $__require("11f");
  function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return this.lift(new SubscribeOnOperator(scheduler, delay));
  }
  exports.subscribeOn = subscribeOn;
  var SubscribeOnOperator = function () {
    function SubscribeOnOperator(scheduler, delay) {
      this.scheduler = scheduler;
      this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
      return new SubscribeOnObservable_1.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
  }();
});
$__System.registerDynamic('122', ['e', '121'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var subscribeOn_1 = $__require('121');
  Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
});
$__System.registerDynamic('123', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function _switch() {
    return this.lift(new SwitchOperator());
  }
  exports._switch = _switch;
  var SwitchOperator = function () {
    function SwitchOperator() {}
    SwitchOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new SwitchSubscriber(subscriber));
    };
    return SwitchOperator;
  }();
  var SwitchSubscriber = function (_super) {
    __extends(SwitchSubscriber, _super);
    function SwitchSubscriber(destination) {
      _super.call(this, destination);
      this.active = 0;
      this.hasCompleted = false;
    }
    SwitchSubscriber.prototype._next = function (value) {
      this.unsubscribeInner();
      this.active++;
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
    };
    SwitchSubscriber.prototype._complete = function () {
      this.hasCompleted = true;
      if (this.active === 0) {
        this.destination.complete();
      }
    };
    SwitchSubscriber.prototype.unsubscribeInner = function () {
      this.active = this.active > 0 ? this.active - 1 : 0;
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
        this.remove(innerSubscription);
      }
    };
    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(innerValue);
    };
    SwitchSubscriber.prototype.notifyError = function (err) {
      this.destination.error(err);
    };
    SwitchSubscriber.prototype.notifyComplete = function () {
      this.unsubscribeInner();
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    return SwitchSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('124', ['e', '123'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var switch_1 = $__require('123');
  Observable_1.Observable.prototype.switch = switch_1._switch;
  Observable_1.Observable.prototype._switch = switch_1._switch;
});
$__System.registerDynamic('125', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
  }
  exports.switchMap = switchMap;
  var SwitchMapOperator = function () {
    function SwitchMapOperator(project, resultSelector) {
      this.project = project;
      this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
  }();
  var SwitchMapSubscriber = function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
      _super.call(this, destination);
      this.project = project;
      this.resultSelector = resultSelector;
      this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
      var result;
      var index = this.index++;
      try {
        result = this.project(value, index);
      } catch (error) {
        this.destination.error(error);
        return;
      }
      this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
      }
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
      var innerSubscription = this.innerSubscription;
      if (!innerSubscription || innerSubscription.closed) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
      this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
      this.remove(innerSub);
      this.innerSubscription = null;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (this.resultSelector) {
        this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        this.destination.next(innerValue);
      }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
      var result;
      try {
        result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return SwitchMapSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('126', ['e', '125'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var switchMap_1 = $__require('125');
  Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
});
$__System.registerDynamic('127', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function switchMapTo(innerObservable, resultSelector) {
    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
  }
  exports.switchMapTo = switchMapTo;
  var SwitchMapToOperator = function () {
    function SwitchMapToOperator(observable, resultSelector) {
      this.observable = observable;
      this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
    };
    return SwitchMapToOperator;
  }();
  var SwitchMapToSubscriber = function (_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
      _super.call(this, destination);
      this.inner = inner;
      this.resultSelector = resultSelector;
      this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function (value) {
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
      }
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function () {
      var innerSubscription = this.innerSubscription;
      if (!innerSubscription || innerSubscription.closed) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function () {
      this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
      this.remove(innerSub);
      this.innerSubscription = null;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      if (resultSelector) {
        this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        destination.next(innerValue);
      }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      var result;
      try {
        result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        destination.error(err);
        return;
      }
      destination.next(result);
    };
    return SwitchMapToSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('128', ['e', '127'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var switchMapTo_1 = $__require('127');
  Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
});
$__System.registerDynamic('129', ['6b', 'af', '26'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var ArgumentOutOfRangeError_1 = $__require('af');
  var EmptyObservable_1 = $__require('26');
  function take(count) {
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else {
      return this.lift(new TakeOperator(count));
    }
  }
  exports.take = take;
  var TakeOperator = function () {
    function TakeOperator(total) {
      this.total = total;
      if (this.total < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
      }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
  }();
  var TakeSubscriber = function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
      var total = this.total;
      var count = ++this.count;
      if (count <= total) {
        this.destination.next(value);
        if (count === total) {
          this.destination.complete();
          this.unsubscribe();
        }
      }
    };
    return TakeSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('12a', ['e', '129'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var take_1 = $__require('129');
  Observable_1.Observable.prototype.take = take_1.take;
});
$__System.registerDynamic('12b', ['6b', 'af', '26'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var ArgumentOutOfRangeError_1 = $__require('af');
  var EmptyObservable_1 = $__require('26');
  function takeLast(count) {
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else {
      return this.lift(new TakeLastOperator(count));
    }
  }
  exports.takeLast = takeLast;
  var TakeLastOperator = function () {
    function TakeLastOperator(total) {
      this.total = total;
      if (this.total < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
      }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
  }();
  var TakeLastSubscriber = function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.ring = new Array();
      this.count = 0;
    }
    TakeLastSubscriber.prototype._next = function (value) {
      var ring = this.ring;
      var total = this.total;
      var count = this.count++;
      if (ring.length < total) {
        ring.push(value);
      } else {
        var index = count % total;
        ring[index] = value;
      }
    };
    TakeLastSubscriber.prototype._complete = function () {
      var destination = this.destination;
      var count = this.count;
      if (count > 0) {
        var total = this.count >= this.total ? this.total : this.count;
        var ring = this.ring;
        for (var i = 0; i < total; i++) {
          var idx = count++ % total;
          destination.next(ring[idx]);
        }
      }
      destination.complete();
    };
    return TakeLastSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('12c', ['e', '12b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var takeLast_1 = $__require('12b');
  Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
});
$__System.registerDynamic('12d', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function takeUntil(notifier) {
    return this.lift(new TakeUntilOperator(notifier));
  }
  exports.takeUntil = takeUntil;
  var TakeUntilOperator = function () {
    function TakeUntilOperator(notifier) {
      this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
    };
    return TakeUntilOperator;
  }();
  var TakeUntilSubscriber = function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {};
    return TakeUntilSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('12e', ['e', '12d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var takeUntil_1 = $__require('12d');
  Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
});
$__System.registerDynamic("12f", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function takeWhile(predicate) {
    return this.lift(new TakeWhileOperator(predicate));
  }
  exports.takeWhile = takeWhile;
  var TakeWhileOperator = function () {
    function TakeWhileOperator(predicate) {
      this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
  }();
  var TakeWhileSubscriber = function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
      var destination = this.destination;
      var result;
      try {
        result = this.predicate(value, this.index++);
      } catch (err) {
        destination.error(err);
        return;
      }
      this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
      var destination = this.destination;
      if (Boolean(predicateResult)) {
        destination.next(value);
      } else {
        destination.complete();
      }
    };
    return TakeWhileSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('130', ['e', '12f'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var takeWhile_1 = $__require('12f');
  Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
});
$__System.registerDynamic('131', ['e', '132'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var throttle_1 = $__require('132');
  Observable_1.Observable.prototype.throttle = throttle_1.throttle;
});
$__System.registerDynamic('132', ['22', '21', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1 = $__require('22');
    var subscribeToResult_1 = $__require('21');
    exports.defaultThrottleConfig = {
      leading: true,
      trailing: false
    };
    function throttle(durationSelector, config) {
      if (config === void 0) {
        config = exports.defaultThrottleConfig;
      }
      return this.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing));
    }
    exports.throttle = throttle;
    var ThrottleOperator = function () {
      function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
      }
      ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
      };
      return ThrottleOperator;
    }();
    var ThrottleSubscriber = function (_super) {
      __extends(ThrottleSubscriber, _super);
      function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
        this._leading = _leading;
        this._trailing = _trailing;
        this._hasTrailingValue = false;
      }
      ThrottleSubscriber.prototype._next = function (value) {
        if (this.throttled) {
          if (this._trailing) {
            this._hasTrailingValue = true;
            this._trailingValue = value;
          }
        } else {
          var duration = this.tryDurationSelector(value);
          if (duration) {
            this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
          }
          if (this._leading) {
            this.destination.next(value);
            if (this._trailing) {
              this._hasTrailingValue = true;
              this._trailingValue = value;
            }
          }
        }
      };
      ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
          return this.durationSelector(value);
        } catch (err) {
          this.destination.error(err);
          return null;
        }
      };
      ThrottleSubscriber.prototype._unsubscribe = function () {
        var _a = this,
            throttled = _a.throttled,
            _trailingValue = _a._trailingValue,
            _hasTrailingValue = _a._hasTrailingValue,
            _trailing = _a._trailing;
        this._trailingValue = null;
        this._hasTrailingValue = false;
        if (throttled) {
          this.remove(throttled);
          this.throttled = null;
          throttled.unsubscribe();
        }
      };
      ThrottleSubscriber.prototype._sendTrailing = function () {
        var _a = this,
            destination = _a.destination,
            throttled = _a.throttled,
            _trailing = _a._trailing,
            _trailingValue = _a._trailingValue,
            _hasTrailingValue = _a._hasTrailingValue;
        if (throttled && _trailing && _hasTrailingValue) {
          destination.next(_trailingValue);
          this._trailingValue = null;
          this._hasTrailingValue = false;
        }
      };
      ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._sendTrailing();
        this._unsubscribe();
      };
      ThrottleSubscriber.prototype.notifyComplete = function () {
        this._sendTrailing();
        this._unsubscribe();
      };
      return ThrottleSubscriber;
    }(OuterSubscriber_1.OuterSubscriber);
  })($__require('31'));
});
$__System.registerDynamic('133', ['6b', '41', '132', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('6b');
    var async_1 = $__require('41');
    var throttle_1 = $__require('132');
    function throttleTime(duration, scheduler, config) {
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      if (config === void 0) {
        config = throttle_1.defaultThrottleConfig;
      }
      return this.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
    }
    exports.throttleTime = throttleTime;
    var ThrottleTimeOperator = function () {
      function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
      }
      ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
      };
      return ThrottleTimeOperator;
    }();
    var ThrottleTimeSubscriber = function (_super) {
      __extends(ThrottleTimeSubscriber, _super);
      function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
        this._hasTrailingValue = false;
        this._trailingValue = null;
      }
      ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
          if (this.trailing) {
            this._trailingValue = value;
            this._hasTrailingValue = true;
          }
        } else {
          this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
          if (this.leading) {
            this.destination.next(value);
          }
        }
      };
      ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
          if (this.trailing && this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this._trailingValue = null;
            this._hasTrailingValue = false;
          }
          throttled.unsubscribe();
          this.remove(throttled);
          this.throttled = null;
        }
      };
      return ThrottleTimeSubscriber;
    }(Subscriber_1.Subscriber);
    function dispatchNext(arg) {
      var subscriber = arg.subscriber;
      subscriber.clearThrottle();
    }
  })($__require('31'));
});
$__System.registerDynamic('134', ['e', '133'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var throttleTime_1 = $__require('133');
  Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
});
$__System.registerDynamic('135', ['e', '136'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var timeInterval_1 = $__require('136');
  Observable_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
});
$__System.registerDynamic('137', ['41', '5e', '6b', '138'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('41');
  var isDate_1 = $__require('5e');
  var Subscriber_1 = $__require('6b');
  var TimeoutError_1 = $__require('138');
  function timeout(due, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, scheduler, new TimeoutError_1.TimeoutError()));
  }
  exports.timeout = timeout;
  var TimeoutOperator = function () {
    function TimeoutOperator(waitFor, absoluteTimeout, scheduler, errorInstance) {
      this.waitFor = waitFor;
      this.absoluteTimeout = absoluteTimeout;
      this.scheduler = scheduler;
      this.errorInstance = errorInstance;
    }
    TimeoutOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.scheduler, this.errorInstance));
    };
    return TimeoutOperator;
  }();
  var TimeoutSubscriber = function (_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, scheduler, errorInstance) {
      _super.call(this, destination);
      this.absoluteTimeout = absoluteTimeout;
      this.waitFor = waitFor;
      this.scheduler = scheduler;
      this.errorInstance = errorInstance;
      this.action = null;
      this.scheduleTimeout();
    }
    TimeoutSubscriber.dispatchTimeout = function (subscriber) {
      subscriber.error(subscriber.errorInstance);
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function () {
      var action = this.action;
      if (action) {
        this.action = action.schedule(this, this.waitFor);
      } else {
        this.add(this.action = this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, this));
      }
    };
    TimeoutSubscriber.prototype._next = function (value) {
      if (!this.absoluteTimeout) {
        this.scheduleTimeout();
      }
      _super.prototype._next.call(this, value);
    };
    TimeoutSubscriber.prototype._unsubscribe = function () {
      this.action = null;
      this.scheduler = null;
      this.errorInstance = null;
    };
    return TimeoutSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('139', ['e', '137'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var timeout_1 = $__require('137');
  Observable_1.Observable.prototype.timeout = timeout_1.timeout;
});
$__System.registerDynamic("5e", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function isDate(value) {
        return value instanceof Date && !isNaN(+value);
    }
    exports.isDate = isDate;
    
});
$__System.registerDynamic('13a', ['41', '5e', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('41');
  var isDate_1 = $__require('5e');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  }
  exports.timeoutWith = timeoutWith;
  var TimeoutWithOperator = function () {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
      this.waitFor = waitFor;
      this.absoluteTimeout = absoluteTimeout;
      this.withObservable = withObservable;
      this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
  }();
  var TimeoutWithSubscriber = function (_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
      _super.call(this, destination);
      this.absoluteTimeout = absoluteTimeout;
      this.waitFor = waitFor;
      this.withObservable = withObservable;
      this.scheduler = scheduler;
      this.action = null;
      this.scheduleTimeout();
    }
    TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
      var withObservable = subscriber.withObservable;
      subscriber._unsubscribeAndRecycle();
      subscriber.add(subscribeToResult_1.subscribeToResult(subscriber, withObservable));
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
      var action = this.action;
      if (action) {
        this.action = action.schedule(this, this.waitFor);
      } else {
        this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
      }
    };
    TimeoutWithSubscriber.prototype._next = function (value) {
      if (!this.absoluteTimeout) {
        this.scheduleTimeout();
      }
      _super.prototype._next.call(this, value);
    };
    TimeoutWithSubscriber.prototype._unsubscribe = function () {
      this.action = null;
      this.scheduler = null;
      this.withObservable = null;
    };
    return TimeoutWithSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('13b', ['e', '13a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var timeoutWith_1 = $__require('13a');
  Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
});
$__System.registerDynamic('13c', ['e', '13d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var timestamp_1 = $__require('13d');
  Observable_1.Observable.prototype.timestamp = timestamp_1.timestamp;
});
$__System.registerDynamic("13e", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  function toArray() {
    return this.lift(new ToArrayOperator());
  }
  exports.toArray = toArray;
  var ToArrayOperator = function () {
    function ToArrayOperator() {}
    ToArrayOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new ToArraySubscriber(subscriber));
    };
    return ToArrayOperator;
  }();
  var ToArraySubscriber = function (_super) {
    __extends(ToArraySubscriber, _super);
    function ToArraySubscriber(destination) {
      _super.call(this, destination);
      this.array = [];
    }
    ToArraySubscriber.prototype._next = function (x) {
      this.array.push(x);
    };
    ToArraySubscriber.prototype._complete = function () {
      this.destination.next(this.array);
      this.destination.complete();
    };
    return ToArraySubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('13f', ['e', '13e'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var toArray_1 = $__require('13e');
  Observable_1.Observable.prototype.toArray = toArray_1.toArray;
});
$__System.registerDynamic('140', ['68'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require('68');
  function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
      if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
        PromiseCtor = root_1.root.Rx.config.Promise;
      } else if (root_1.root.Promise) {
        PromiseCtor = root_1.root.Promise;
      }
    }
    if (!PromiseCtor) {
      throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
      var value;
      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  }
  exports.toPromise = toPromise;
});
$__System.registerDynamic('141', ['e', '140'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var toPromise_1 = $__require('140');
  Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
});
$__System.registerDynamic('142', ['6a', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function window(windowBoundaries) {
    return this.lift(new WindowOperator(windowBoundaries));
  }
  exports.window = window;
  var WindowOperator = function () {
    function WindowOperator(windowBoundaries) {
      this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
      var windowSubscriber = new WindowSubscriber(subscriber);
      var sourceSubscription = source.subscribe(windowSubscriber);
      if (!sourceSubscription.closed) {
        windowSubscriber.add(subscribeToResult_1.subscribeToResult(windowSubscriber, this.windowBoundaries));
      }
      return sourceSubscription;
    };
    return WindowOperator;
  }();
  var WindowSubscriber = function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
      _super.call(this, destination);
      this.window = new Subject_1.Subject();
      destination.next(this.window);
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
      this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
      this._complete();
    };
    WindowSubscriber.prototype._next = function (value) {
      this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
      this.window.error(err);
      this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function () {
      this.window.complete();
      this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function () {
      this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function () {
      var prevWindow = this.window;
      if (prevWindow) {
        prevWindow.complete();
      }
      var destination = this.destination;
      var newWindow = this.window = new Subject_1.Subject();
      destination.next(newWindow);
    };
    return WindowSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('143', ['e', '142'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var window_1 = $__require('142');
  Observable_1.Observable.prototype.window = window_1.window;
});
$__System.registerDynamic('144', ['6b', '6a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var Subject_1 = $__require('6a');
  function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
      startWindowEvery = 0;
    }
    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
  }
  exports.windowCount = windowCount;
  var WindowCountOperator = function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
      this.windowSize = windowSize;
      this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
  }();
  var WindowCountSubscriber = function (_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
      _super.call(this, destination);
      this.destination = destination;
      this.windowSize = windowSize;
      this.startWindowEvery = startWindowEvery;
      this.windows = [new Subject_1.Subject()];
      this.count = 0;
      destination.next(this.windows[0]);
    }
    WindowCountSubscriber.prototype._next = function (value) {
      var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
      var destination = this.destination;
      var windowSize = this.windowSize;
      var windows = this.windows;
      var len = windows.length;
      for (var i = 0; i < len && !this.closed; i++) {
        windows[i].next(value);
      }
      var c = this.count - windowSize + 1;
      if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
        windows.shift().complete();
      }
      if (++this.count % startWindowEvery === 0 && !this.closed) {
        var window_1 = new Subject_1.Subject();
        windows.push(window_1);
        destination.next(window_1);
      }
    };
    WindowCountSubscriber.prototype._error = function (err) {
      var windows = this.windows;
      if (windows) {
        while (windows.length > 0 && !this.closed) {
          windows.shift().error(err);
        }
      }
      this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function () {
      var windows = this.windows;
      if (windows) {
        while (windows.length > 0 && !this.closed) {
          windows.shift().complete();
        }
      }
      this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function () {
      this.count = 0;
      this.windows = null;
    };
    return WindowCountSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('145', ['e', '144'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var windowCount_1 = $__require('144');
  Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
});
$__System.registerDynamic("40", ["19"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var isArray_1 = $__require("19");
  function isNumeric(val) {
    return !isArray_1.isArray(val) && val - parseFloat(val) + 1 >= 0;
  }
  exports.isNumeric = isNumeric;
  ;
});
$__System.registerDynamic('146', ['6a', '41', '6b', '40', '18'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var async_1 = $__require('41');
  var Subscriber_1 = $__require('6b');
  var isNumeric_1 = $__require('40');
  var isScheduler_1 = $__require('18');
  function windowTime(windowTimeSpan) {
    var scheduler = async_1.async;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (isScheduler_1.isScheduler(arguments[3])) {
      scheduler = arguments[3];
    }
    if (isScheduler_1.isScheduler(arguments[2])) {
      scheduler = arguments[2];
    } else if (isNumeric_1.isNumeric(arguments[2])) {
      maxWindowSize = arguments[2];
    }
    if (isScheduler_1.isScheduler(arguments[1])) {
      scheduler = arguments[1];
    } else if (isNumeric_1.isNumeric(arguments[1])) {
      windowCreationInterval = arguments[1];
    }
    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
  }
  exports.windowTime = windowTime;
  var WindowTimeOperator = function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
      this.windowTimeSpan = windowTimeSpan;
      this.windowCreationInterval = windowCreationInterval;
      this.maxWindowSize = maxWindowSize;
      this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    };
    return WindowTimeOperator;
  }();
  var CountedSubject = function (_super) {
    __extends(CountedSubject, _super);
    function CountedSubject() {
      _super.apply(this, arguments);
      this._numberOfNextedValues = 0;
    }
    CountedSubject.prototype.next = function (value) {
      this._numberOfNextedValues++;
      _super.prototype.next.call(this, value);
    };
    Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
      get: function () {
        return this._numberOfNextedValues;
      },
      enumerable: true,
      configurable: true
    });
    return CountedSubject;
  }(Subject_1.Subject);
  var WindowTimeSubscriber = function (_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
      _super.call(this, destination);
      this.destination = destination;
      this.windowTimeSpan = windowTimeSpan;
      this.windowCreationInterval = windowCreationInterval;
      this.maxWindowSize = maxWindowSize;
      this.scheduler = scheduler;
      this.windows = [];
      var window = this.openWindow();
      if (windowCreationInterval !== null && windowCreationInterval >= 0) {
        var closeState = {
          subscriber: this,
          window: window,
          context: null
        };
        var creationState = {
          windowTimeSpan: windowTimeSpan,
          windowCreationInterval: windowCreationInterval,
          subscriber: this,
          scheduler: scheduler
        };
        this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
        this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
      } else {
        var timeSpanOnlyState = {
          subscriber: this,
          window: window,
          windowTimeSpan: windowTimeSpan
        };
        this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
      }
    }
    WindowTimeSubscriber.prototype._next = function (value) {
      var windows = this.windows;
      var len = windows.length;
      for (var i = 0; i < len; i++) {
        var window_1 = windows[i];
        if (!window_1.closed) {
          window_1.next(value);
          if (window_1.numberOfNextedValues >= this.maxWindowSize) {
            this.closeWindow(window_1);
          }
        }
      }
    };
    WindowTimeSubscriber.prototype._error = function (err) {
      var windows = this.windows;
      while (windows.length > 0) {
        windows.shift().error(err);
      }
      this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function () {
      var windows = this.windows;
      while (windows.length > 0) {
        var window_2 = windows.shift();
        if (!window_2.closed) {
          window_2.complete();
        }
      }
      this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function () {
      var window = new CountedSubject();
      this.windows.push(window);
      var destination = this.destination;
      destination.next(window);
      return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function (window) {
      window.complete();
      var windows = this.windows;
      windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
  }(Subscriber_1.Subscriber);
  function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber,
        windowTimeSpan = state.windowTimeSpan,
        window = state.window;
    if (window) {
      subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
  }
  function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan,
        subscriber = state.subscriber,
        scheduler = state.scheduler,
        windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = {
      action: action,
      subscription: null
    };
    var timeSpanState = {
      subscriber: subscriber,
      window: window,
      context: context
    };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
  }
  function dispatchWindowClose(state) {
    var subscriber = state.subscriber,
        window = state.window,
        context = state.context;
    if (context && context.action && context.subscription) {
      context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
  }
});
$__System.registerDynamic('147', ['e', '146'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var windowTime_1 = $__require('146');
  Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
});
$__System.registerDynamic('148', ['6a', '30', 'f', '10', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var Subscription_1 = $__require('30');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function windowToggle(openings, closingSelector) {
    return this.lift(new WindowToggleOperator(openings, closingSelector));
  }
  exports.windowToggle = windowToggle;
  var WindowToggleOperator = function () {
    function WindowToggleOperator(openings, closingSelector) {
      this.openings = openings;
      this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
  }();
  var WindowToggleSubscriber = function (_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
      _super.call(this, destination);
      this.openings = openings;
      this.closingSelector = closingSelector;
      this.contexts = [];
      this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function (value) {
      var contexts = this.contexts;
      if (contexts) {
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
          contexts[i].window.next(value);
        }
      }
    };
    WindowToggleSubscriber.prototype._error = function (err) {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.error(err);
          context.subscription.unsubscribe();
        }
      }
      _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function () {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.complete();
          context.subscription.unsubscribe();
        }
      }
      _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function () {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.unsubscribe();
          context.subscription.unsubscribe();
        }
      }
    };
    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (outerValue === this.openings) {
        var closingSelector = this.closingSelector;
        var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
        if (closingNotifier === errorObject_1.errorObject) {
          return this.error(errorObject_1.errorObject.e);
        } else {
          var window_1 = new Subject_1.Subject();
          var subscription = new Subscription_1.Subscription();
          var context = {
            window: window_1,
            subscription: subscription
          };
          this.contexts.push(context);
          var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
          if (innerSubscription.closed) {
            this.closeWindow(this.contexts.length - 1);
          } else {
            innerSubscription.context = context;
            subscription.add(innerSubscription);
          }
          this.destination.next(window_1);
        }
      } else {
        this.closeWindow(this.contexts.indexOf(outerValue));
      }
    };
    WindowToggleSubscriber.prototype.notifyError = function (err) {
      this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
      if (inner !== this.openSubscription) {
        this.closeWindow(this.contexts.indexOf(inner.context));
      }
    };
    WindowToggleSubscriber.prototype.closeWindow = function (index) {
      if (index === -1) {
        return;
      }
      var contexts = this.contexts;
      var context = contexts[index];
      var window = context.window,
          subscription = context.subscription;
      contexts.splice(index, 1);
      window.complete();
      subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('149', ['e', '148'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var windowToggle_1 = $__require('148');
  Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
});
$__System.registerDynamic('14a', ['6a', 'f', '10', '22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function windowWhen(closingSelector) {
    return this.lift(new WindowOperator(closingSelector));
  }
  exports.windowWhen = windowWhen;
  var WindowOperator = function () {
    function WindowOperator(closingSelector) {
      this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
  }();
  var WindowSubscriber = function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
      _super.call(this, destination);
      this.destination = destination;
      this.closingSelector = closingSelector;
      this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
      this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
      this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function (value) {
      this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
      this.window.error(err);
      this.destination.error(err);
      this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function () {
      this.window.complete();
      this.destination.complete();
      this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
      if (this.closingNotification) {
        this.closingNotification.unsubscribe();
      }
    };
    WindowSubscriber.prototype.openWindow = function (innerSub) {
      if (innerSub === void 0) {
        innerSub = null;
      }
      if (innerSub) {
        this.remove(innerSub);
        innerSub.unsubscribe();
      }
      var prevWindow = this.window;
      if (prevWindow) {
        prevWindow.complete();
      }
      var window = this.window = new Subject_1.Subject();
      this.destination.next(window);
      var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
      if (closingNotifier === errorObject_1.errorObject) {
        var err = errorObject_1.errorObject.e;
        this.destination.error(err);
        this.window.error(err);
      } else {
        this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
      }
    };
    return WindowSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('14b', ['e', '14a'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var windowWhen_1 = $__require('14a');
  Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
});
$__System.registerDynamic('14c', ['22', '21'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i - 0] = arguments[_i];
    }
    var project;
    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }
    var observables = args;
    return this.lift(new WithLatestFromOperator(observables, project));
  }
  exports.withLatestFrom = withLatestFrom;
  var WithLatestFromOperator = function () {
    function WithLatestFromOperator(observables, project) {
      this.observables = observables;
      this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
  }();
  var WithLatestFromSubscriber = function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
      _super.call(this, destination);
      this.observables = observables;
      this.project = project;
      this.toRespond = [];
      var len = observables.length;
      this.values = new Array(len);
      for (var i = 0; i < len; i++) {
        this.toRespond.push(i);
      }
      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
      }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.values[outerIndex] = innerValue;
      var toRespond = this.toRespond;
      if (toRespond.length > 0) {
        var found = toRespond.indexOf(outerIndex);
        if (found !== -1) {
          toRespond.splice(found, 1);
        }
      }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {};
    WithLatestFromSubscriber.prototype._next = function (value) {
      if (this.toRespond.length === 0) {
        var args = [value].concat(this.values);
        if (this.project) {
          this._tryProject(args);
        } else {
          this.destination.next(args);
        }
      }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
      var result;
      try {
        result = this.project.apply(this, args);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return WithLatestFromSubscriber;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic('14d', ['e', '14c'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var withLatestFrom_1 = $__require('14c');
  Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
});
$__System.registerDynamic('14e', ['e', '62'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var zip_1 = $__require('62');
  Observable_1.Observable.prototype.zip = zip_1.zipProto;
});
$__System.registerDynamic("e7", ["e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require("e");
  var ScalarObservable = function (_super) {
    __extends(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
      _super.call(this);
      this.value = value;
      this.scheduler = scheduler;
      this._isScalar = true;
      if (scheduler) {
        this._isScalar = false;
      }
    }
    ScalarObservable.create = function (value, scheduler) {
      return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function (state) {
      var done = state.done,
          value = state.value,
          subscriber = state.subscriber;
      if (done) {
        subscriber.complete();
        return;
      }
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
      state.done = true;
      this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function (subscriber) {
      var value = this.value;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ScalarObservable.dispatch, 0, {
          done: false,
          value: value,
          subscriber: subscriber
        });
      } else {
        subscriber.next(value);
        if (!subscriber.closed) {
          subscriber.complete();
        }
      }
    };
    return ScalarObservable;
  }(Observable_1.Observable);
  exports.ScalarObservable = ScalarObservable;
});
$__System.registerDynamic("26", ["e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require("e");
  var EmptyObservable = function (_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
      _super.call(this);
      this.scheduler = scheduler;
    }
    EmptyObservable.create = function (scheduler) {
      return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
      var subscriber = arg.subscriber;
      subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function (subscriber) {
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
      } else {
        subscriber.complete();
      }
    };
    return EmptyObservable;
  }(Observable_1.Observable);
  exports.EmptyObservable = EmptyObservable;
});
$__System.registerDynamic("18", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }
    exports.isScheduler = isScheduler;
    
});
$__System.registerDynamic('1a', ['e', 'e7', '26', '18'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var ScalarObservable_1 = $__require('e7');
  var EmptyObservable_1 = $__require('26');
  var isScheduler_1 = $__require('18');
  var ArrayObservable = function (_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
      _super.call(this);
      this.array = array;
      this.scheduler = scheduler;
      if (!scheduler && array.length === 1) {
        this._isScalar = true;
        this.value = array[0];
      }
    }
    ArrayObservable.create = function (array, scheduler) {
      return new ArrayObservable(array, scheduler);
    };
    ArrayObservable.of = function () {
      var array = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
      }
      var scheduler = array[array.length - 1];
      if (isScheduler_1.isScheduler(scheduler)) {
        array.pop();
      } else {
        scheduler = null;
      }
      var len = array.length;
      if (len > 1) {
        return new ArrayObservable(array, scheduler);
      } else if (len === 1) {
        return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
      } else {
        return new EmptyObservable_1.EmptyObservable(scheduler);
      }
    };
    ArrayObservable.dispatch = function (state) {
      var array = state.array,
          index = state.index,
          count = state.count,
          subscriber = state.subscriber;
      if (index >= count) {
        subscriber.complete();
        return;
      }
      subscriber.next(array[index]);
      if (subscriber.closed) {
        return;
      }
      state.index = index + 1;
      this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function (subscriber) {
      var index = 0;
      var array = this.array;
      var count = array.length;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ArrayObservable.dispatch, 0, {
          array: array,
          index: index,
          count: count,
          subscriber: subscriber
        });
      } else {
        for (var i = 0; i < count && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      }
    };
    return ArrayObservable;
  }(Observable_1.Observable);
  exports.ArrayObservable = ArrayObservable;
});
$__System.registerDynamic("22", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  var OuterSubscriber = function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
      _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
      this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
      this.destination.complete();
    };
    return OuterSubscriber;
  }(Subscriber_1.Subscriber);
  exports.OuterSubscriber = OuterSubscriber;
});
$__System.registerDynamic("e8", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  exports.isArrayLike = function (x) {
    return x && typeof x.length === 'number';
  };
  
});
$__System.registerDynamic('e9', [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function isPromise(value) {
        return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }
    exports.isPromise = isPromise;
    
});
$__System.registerDynamic("14f", ["6b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require("6b");
  var InnerSubscriber = function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
      _super.call(this);
      this.parent = parent;
      this.outerValue = outerValue;
      this.outerIndex = outerIndex;
      this.index = 0;
    }
    InnerSubscriber.prototype._next = function (value) {
      this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
      this.parent.notifyError(error, this);
      this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
      this.parent.notifyComplete(this);
      this.unsubscribe();
    };
    return InnerSubscriber;
  }(Subscriber_1.Subscriber);
  exports.InnerSubscriber = InnerSubscriber;
});
$__System.registerDynamic('21', ['68', 'e8', 'e9', '150', 'e', 'e5', '14f', 'ea'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require('68');
  var isArrayLike_1 = $__require('e8');
  var isPromise_1 = $__require('e9');
  var isObject_1 = $__require('150');
  var Observable_1 = $__require('e');
  var iterator_1 = $__require('e5');
  var InnerSubscriber_1 = $__require('14f');
  var observable_1 = $__require('ea');
  function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.closed) {
      return null;
    }
    if (result instanceof Observable_1.Observable) {
      if (result._isScalar) {
        destination.next(result.value);
        destination.complete();
        return null;
      } else {
        return result.subscribe(destination);
      }
    } else if (isArrayLike_1.isArrayLike(result)) {
      for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
        destination.next(result[i]);
      }
      if (!destination.closed) {
        destination.complete();
      }
    } else if (isPromise_1.isPromise(result)) {
      result.then(function (value) {
        if (!destination.closed) {
          destination.next(value);
          destination.complete();
        }
      }, function (err) {
        return destination.error(err);
      }).then(null, function (err) {
        root_1.root.setTimeout(function () {
          throw err;
        });
      });
      return destination;
    } else if (result && typeof result[iterator_1.iterator] === 'function') {
      var iterator = result[iterator_1.iterator]();
      do {
        var item = iterator.next();
        if (item.done) {
          destination.complete();
          break;
        }
        destination.next(item.value);
        if (destination.closed) {
          break;
        }
      } while (true);
    } else if (result && typeof result[observable_1.observable] === 'function') {
      var obs = result[observable_1.observable]();
      if (typeof obs.subscribe !== 'function') {
        destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
      } else {
        return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
      }
    } else {
      var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
      var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
      destination.error(new TypeError(msg));
    }
    return null;
  }
  exports.subscribeToResult = subscribeToResult;
});
$__System.registerDynamic('62', ['1a', '19', '6b', '22', '21', 'e5'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArrayObservable_1 = $__require('1a');
  var isArray_1 = $__require('19');
  var Subscriber_1 = $__require('6b');
  var OuterSubscriber_1 = $__require('22');
  var subscribeToResult_1 = $__require('21');
  var iterator_1 = $__require('e5');
  function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    return this.lift.call(zipStatic.apply(void 0, [this].concat(observables)));
  }
  exports.zipProto = zipProto;
  function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
      observables.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
  }
  exports.zipStatic = zipStatic;
  var ZipOperator = function () {
    function ZipOperator(project) {
      this.project = project;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
  }();
  exports.ZipOperator = ZipOperator;
  var ZipSubscriber = function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
      if (values === void 0) {
        values = Object.create(null);
      }
      _super.call(this, destination);
      this.iterators = [];
      this.active = 0;
      this.project = typeof project === 'function' ? project : null;
      this.values = values;
    }
    ZipSubscriber.prototype._next = function (value) {
      var iterators = this.iterators;
      if (isArray_1.isArray(value)) {
        iterators.push(new StaticArrayIterator(value));
      } else if (typeof value[iterator_1.iterator] === 'function') {
        iterators.push(new StaticIterator(value[iterator_1.iterator]()));
      } else {
        iterators.push(new ZipBufferIterator(this.destination, this, value));
      }
    };
    ZipSubscriber.prototype._complete = function () {
      var iterators = this.iterators;
      var len = iterators.length;
      if (len === 0) {
        this.destination.complete();
        return;
      }
      this.active = len;
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        if (iterator.stillUnsubscribed) {
          this.add(iterator.subscribe(iterator, i));
        } else {
          this.active--;
        }
      }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
      this.active--;
      if (this.active === 0) {
        this.destination.complete();
      }
    };
    ZipSubscriber.prototype.checkIterators = function () {
      var iterators = this.iterators;
      var len = iterators.length;
      var destination = this.destination;
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
          return;
        }
      }
      var shouldComplete = false;
      var args = [];
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        var result = iterator.next();
        if (iterator.hasCompleted()) {
          shouldComplete = true;
        }
        if (result.done) {
          destination.complete();
          return;
        }
        args.push(result.value);
      }
      if (this.project) {
        this._tryProject(args);
      } else {
        destination.next(args);
      }
      if (shouldComplete) {
        destination.complete();
      }
    };
    ZipSubscriber.prototype._tryProject = function (args) {
      var result;
      try {
        result = this.project.apply(this, args);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return ZipSubscriber;
  }(Subscriber_1.Subscriber);
  exports.ZipSubscriber = ZipSubscriber;
  var StaticIterator = function () {
    function StaticIterator(iterator) {
      this.iterator = iterator;
      this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
      return true;
    };
    StaticIterator.prototype.next = function () {
      var result = this.nextResult;
      this.nextResult = this.iterator.next();
      return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
      var nextResult = this.nextResult;
      return nextResult && nextResult.done;
    };
    return StaticIterator;
  }();
  var StaticArrayIterator = function () {
    function StaticArrayIterator(array) {
      this.array = array;
      this.index = 0;
      this.length = 0;
      this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.iterator] = function () {
      return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
      var i = this.index++;
      var array = this.array;
      return i < this.length ? {
        value: array[i],
        done: false
      } : {
        value: null,
        done: true
      };
    };
    StaticArrayIterator.prototype.hasValue = function () {
      return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
      return this.array.length === this.index;
    };
    return StaticArrayIterator;
  }();
  var ZipBufferIterator = function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
      _super.call(this, destination);
      this.parent = parent;
      this.observable = observable;
      this.stillUnsubscribed = true;
      this.buffer = [];
      this.isComplete = false;
    }
    ZipBufferIterator.prototype[iterator_1.iterator] = function () {
      return this;
    };
    ZipBufferIterator.prototype.next = function () {
      var buffer = this.buffer;
      if (buffer.length === 0 && this.isComplete) {
        return {
          value: null,
          done: true
        };
      } else {
        return {
          value: buffer.shift(),
          done: false
        };
      }
    };
    ZipBufferIterator.prototype.hasValue = function () {
      return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
      return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
      if (this.buffer.length > 0) {
        this.isComplete = true;
        this.parent.notifyInactive();
      } else {
        this.destination.complete();
      }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.buffer.push(innerValue);
      this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
      return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
  }(OuterSubscriber_1.OuterSubscriber);
});
$__System.registerDynamic("151", ["62"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var zip_1 = $__require("62");
  function zipAll(project) {
    return this.lift(new zip_1.ZipOperator(project));
  }
  exports.zipAll = zipAll;
});
$__System.registerDynamic('152', ['e', '151'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var zipAll_1 = $__require('151');
  Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
});
$__System.registerDynamic('11', ['6a', '30'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var Subscription_1 = $__require('30');
  var AsyncSubject = function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
      _super.apply(this, arguments);
      this.value = null;
      this.hasNext = false;
      this.hasCompleted = false;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
      if (this.hasError) {
        subscriber.error(this.thrownError);
        return Subscription_1.Subscription.EMPTY;
      } else if (this.hasCompleted && this.hasNext) {
        subscriber.next(this.value);
        subscriber.complete();
        return Subscription_1.Subscription.EMPTY;
      }
      return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
      if (!this.hasCompleted) {
        this.value = value;
        this.hasNext = true;
      }
    };
    AsyncSubject.prototype.error = function (error) {
      if (!this.hasCompleted) {
        _super.prototype.error.call(this, error);
      }
    };
    AsyncSubject.prototype.complete = function () {
      this.hasCompleted = true;
      if (this.hasNext) {
        _super.prototype.next.call(this, this.value);
      }
      _super.prototype.complete.call(this);
    };
    return AsyncSubject;
  }(Subject_1.Subject);
  exports.AsyncSubject = AsyncSubject;
});
$__System.registerDynamic('e3', ['6b', '9b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var Notification_1 = $__require('9b');
  function observeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return this.lift(new ObserveOnOperator(scheduler, delay));
  }
  exports.observeOn = observeOn;
  var ObserveOnOperator = function () {
    function ObserveOnOperator(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      this.scheduler = scheduler;
      this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
  }();
  exports.ObserveOnOperator = ObserveOnOperator;
  var ObserveOnSubscriber = function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      _super.call(this, destination);
      this.scheduler = scheduler;
      this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
      var notification = arg.notification,
          destination = arg.destination;
      notification.observe(destination);
      this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
      this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
      this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
      this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function () {
      this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
  }(Subscriber_1.Subscriber);
  exports.ObserveOnSubscriber = ObserveOnSubscriber;
  var ObserveOnMessage = function () {
    function ObserveOnMessage(notification, destination) {
      this.notification = notification;
      this.destination = destination;
    }
    return ObserveOnMessage;
  }();
  exports.ObserveOnMessage = ObserveOnMessage;
});
$__System.registerDynamic('6c', ['6a', '153', '30', 'e3', '154', '155'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var queue_1 = $__require('153');
  var Subscription_1 = $__require('30');
  var observeOn_1 = $__require('e3');
  var ObjectUnsubscribedError_1 = $__require('154');
  var SubjectSubscription_1 = $__require('155');
  var ReplaySubject = function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
      if (bufferSize === void 0) {
        bufferSize = Number.POSITIVE_INFINITY;
      }
      if (windowTime === void 0) {
        windowTime = Number.POSITIVE_INFINITY;
      }
      _super.call(this);
      this.scheduler = scheduler;
      this._events = [];
      this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
      this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
      var now = this._getNow();
      this._events.push(new ReplayEvent(now, value));
      this._trimBufferThenGetEvents();
      _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
      var _events = this._trimBufferThenGetEvents();
      var scheduler = this.scheduler;
      var subscription;
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      } else if (this.hasError) {
        subscription = Subscription_1.Subscription.EMPTY;
      } else if (this.isStopped) {
        subscription = Subscription_1.Subscription.EMPTY;
      } else {
        this.observers.push(subscriber);
        subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
      }
      if (scheduler) {
        subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
      }
      var len = _events.length;
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
      if (this.hasError) {
        subscriber.error(this.thrownError);
      } else if (this.isStopped) {
        subscriber.complete();
      }
      return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
      return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
      var now = this._getNow();
      var _bufferSize = this._bufferSize;
      var _windowTime = this._windowTime;
      var _events = this._events;
      var eventsCount = _events.length;
      var spliceCount = 0;
      while (spliceCount < eventsCount) {
        if (now - _events[spliceCount].time < _windowTime) {
          break;
        }
        spliceCount++;
      }
      if (eventsCount > _bufferSize) {
        spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
      }
      if (spliceCount > 0) {
        _events.splice(0, spliceCount);
      }
      return _events;
    };
    return ReplaySubject;
  }(Subject_1.Subject);
  exports.ReplaySubject = ReplaySubject;
  var ReplayEvent = function () {
    function ReplayEvent(time, value) {
      this.time = time;
      this.value = value;
    }
    return ReplayEvent;
  }();
});
$__System.registerDynamic('f6', ['6a', '154'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var ObjectUnsubscribedError_1 = $__require('154');
  var BehaviorSubject = function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
      _super.call(this);
      this._value = _value;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
      get: function () {
        return this.getValue();
      },
      enumerable: true,
      configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
      var subscription = _super.prototype._subscribe.call(this, subscriber);
      if (subscription && !subscription.closed) {
        subscriber.next(this._value);
      }
      return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
      if (this.hasError) {
        throw this.thrownError;
      } else if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      } else {
        return this._value;
      }
    };
    BehaviorSubject.prototype.next = function (value) {
      _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
  }(Subject_1.Subject);
  exports.BehaviorSubject = BehaviorSubject;
});
$__System.registerDynamic('110', ['6a', 'e', '6b', '30'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var Observable_1 = $__require('e');
  var Subscriber_1 = $__require('6b');
  var Subscription_1 = $__require('30');
  var ConnectableObservable = function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
      _super.call(this);
      this.source = source;
      this.subjectFactory = subjectFactory;
      this._refCount = 0;
      this._isComplete = false;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
      return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
      var subject = this._subject;
      if (!subject || subject.isStopped) {
        this._subject = this.subjectFactory();
      }
      return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
      var connection = this._connection;
      if (!connection) {
        this._isComplete = false;
        connection = this._connection = new Subscription_1.Subscription();
        connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
        if (connection.closed) {
          this._connection = null;
          connection = Subscription_1.Subscription.EMPTY;
        } else {
          this._connection = connection;
        }
      }
      return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
      return this.lift(new RefCountOperator(this));
    };
    return ConnectableObservable;
  }(Observable_1.Observable);
  exports.ConnectableObservable = ConnectableObservable;
  var connectableProto = ConnectableObservable.prototype;
  exports.connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: {
      value: 0,
      writable: true
    },
    _subject: {
      value: null,
      writable: true
    },
    _connection: {
      value: null,
      writable: true
    },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: {
      value: connectableProto._isComplete,
      writable: true
    },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
  };
  var ConnectableSubscriber = function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
      _super.call(this, destination);
      this.connectable = connectable;
    }
    ConnectableSubscriber.prototype._error = function (err) {
      this._unsubscribe();
      _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
      this.connectable._isComplete = true;
      this._unsubscribe();
      _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
      var connectable = this.connectable;
      if (connectable) {
        this.connectable = null;
        var connection = connectable._connection;
        connectable._refCount = 0;
        connectable._subject = null;
        connectable._connection = null;
        if (connection) {
          connection.unsubscribe();
        }
      }
    };
    return ConnectableSubscriber;
  }(Subject_1.SubjectSubscriber);
  var RefCountOperator = function () {
    function RefCountOperator(connectable) {
      this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
      var connectable = this.connectable;
      connectable._refCount++;
      var refCounter = new RefCountSubscriber(subscriber, connectable);
      var subscription = source.subscribe(refCounter);
      if (!refCounter.closed) {
        refCounter.connection = connectable.connect();
      }
      return subscription;
    };
    return RefCountOperator;
  }();
  var RefCountSubscriber = function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
      _super.call(this, destination);
      this.connectable = connectable;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
      var connectable = this.connectable;
      if (!connectable) {
        this.connection = null;
        return;
      }
      this.connectable = null;
      var refCount = connectable._refCount;
      if (refCount <= 0) {
        this.connection = null;
        return;
      }
      connectable._refCount = refCount - 1;
      if (refCount > 1) {
        this.connection = null;
        return;
      }
      var connection = this.connection;
      var sharedConnection = connectable._connection;
      this.connection = null;
      if (sharedConnection && (!connection || sharedConnection === connection)) {
        sharedConnection.unsubscribe();
      }
    };
    return RefCountSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('ba', [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an Observable or a sequence was queried but has no
     * elements.
     *
     * @see {@link first}
     * @see {@link last}
     * @see {@link single}
     *
     * @class EmptyError
     */
    var EmptyError = function (_super) {
        __extends(EmptyError, _super);
        function EmptyError() {
            var err = _super.call(this, 'no elements in sequence');
            this.name = err.name = 'EmptyError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return EmptyError;
    }(Error);
    exports.EmptyError = EmptyError;
    
});
$__System.registerDynamic('af', [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an element was queried at a certain index of an
     * Observable, but no such index or position exists in that sequence.
     *
     * @see {@link elementAt}
     * @see {@link take}
     * @see {@link takeLast}
     *
     * @class ArgumentOutOfRangeError
     */
    var ArgumentOutOfRangeError = function (_super) {
        __extends(ArgumentOutOfRangeError, _super);
        function ArgumentOutOfRangeError() {
            var err = _super.call(this, 'argument out of range');
            this.name = err.name = 'ArgumentOutOfRangeError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return ArgumentOutOfRangeError;
    }(Error);
    exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
    
});
$__System.registerDynamic('138', [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when duetime elapses.
     *
     * @see {@link timeout}
     *
     * @class TimeoutError
     */
    var TimeoutError = function (_super) {
        __extends(TimeoutError, _super);
        function TimeoutError() {
            var err = _super.call(this, 'Timeout has occurred');
            this.name = err.name = 'TimeoutError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return TimeoutError;
    }(Error);
    exports.TimeoutError = TimeoutError;
    
});
$__System.registerDynamic('136', ['6b', '41'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var async_1 = $__require('41');
  function timeInterval(scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new TimeIntervalOperator(scheduler));
  }
  exports.timeInterval = timeInterval;
  var TimeInterval = function () {
    function TimeInterval(value, interval) {
      this.value = value;
      this.interval = interval;
    }
    return TimeInterval;
  }();
  exports.TimeInterval = TimeInterval;
  ;
  var TimeIntervalOperator = function () {
    function TimeIntervalOperator(scheduler) {
      this.scheduler = scheduler;
    }
    TimeIntervalOperator.prototype.call = function (observer, source) {
      return source.subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
    };
    return TimeIntervalOperator;
  }();
  var TimeIntervalSubscriber = function (_super) {
    __extends(TimeIntervalSubscriber, _super);
    function TimeIntervalSubscriber(destination, scheduler) {
      _super.call(this, destination);
      this.scheduler = scheduler;
      this.lastTime = 0;
      this.lastTime = scheduler.now();
    }
    TimeIntervalSubscriber.prototype._next = function (value) {
      var now = this.scheduler.now();
      var span = now - this.lastTime;
      this.lastTime = now;
      this.destination.next(new TimeInterval(value, span));
    };
    return TimeIntervalSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('13d', ['6b', '41'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  var async_1 = $__require('41');
  function timestamp(scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new TimestampOperator(scheduler));
  }
  exports.timestamp = timestamp;
  var Timestamp = function () {
    function Timestamp(value, timestamp) {
      this.value = value;
      this.timestamp = timestamp;
    }
    return Timestamp;
  }();
  exports.Timestamp = Timestamp;
  ;
  var TimestampOperator = function () {
    function TimestampOperator(scheduler) {
      this.scheduler = scheduler;
    }
    TimestampOperator.prototype.call = function (observer, source) {
      return source.subscribe(new TimestampSubscriber(observer, this.scheduler));
    };
    return TimestampOperator;
  }();
  var TimestampSubscriber = function (_super) {
    __extends(TimestampSubscriber, _super);
    function TimestampSubscriber(destination, scheduler) {
      _super.call(this, destination);
      this.scheduler = scheduler;
    }
    TimestampSubscriber.prototype._next = function (value) {
      var now = this.scheduler.now();
      this.destination.next(new Timestamp(value, now));
    };
    return TimestampSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('9b', ['e'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('e');
  var Notification = function () {
    function Notification(kind, value, error) {
      this.kind = kind;
      this.value = value;
      this.error = error;
      this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
      switch (this.kind) {
        case 'N':
          return observer.next && observer.next(this.value);
        case 'E':
          return observer.error && observer.error(this.error);
        case 'C':
          return observer.complete && observer.complete();
      }
    };
    Notification.prototype.do = function (next, error, complete) {
      var kind = this.kind;
      switch (kind) {
        case 'N':
          return next && next(this.value);
        case 'E':
          return error && error(this.error);
        case 'C':
          return complete && complete();
      }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
      if (nextOrObserver && typeof nextOrObserver.next === 'function') {
        return this.observe(nextOrObserver);
      } else {
        return this.do(nextOrObserver, error, complete);
      }
    };
    Notification.prototype.toObservable = function () {
      var kind = this.kind;
      switch (kind) {
        case 'N':
          return Observable_1.Observable.of(this.value);
        case 'E':
          return Observable_1.Observable.throw(this.error);
        case 'C':
          return Observable_1.Observable.empty();
      }
      throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
      if (typeof value !== 'undefined') {
        return new Notification('N', value);
      }
      return this.undefinedValueNotification;
    };
    Notification.createError = function (err) {
      return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
      return this.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
  }();
  exports.Notification = Notification;
});
$__System.registerDynamic('156', ['e', '30', '157', '158'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var Subscription_1 = $__require('30');
  var SubscriptionLoggable_1 = $__require('157');
  var applyMixins_1 = $__require('158');
  var ColdObservable = function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
      _super.call(this, function (subscriber) {
        var observable = this;
        var index = observable.logSubscribedFrame();
        subscriber.add(new Subscription_1.Subscription(function () {
          observable.logUnsubscribedFrame(index);
        }));
        observable.scheduleMessages(subscriber);
        return subscriber;
      });
      this.messages = messages;
      this.subscriptions = [];
      this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
      var messagesLength = this.messages.length;
      for (var i = 0; i < messagesLength; i++) {
        var message = this.messages[i];
        subscriber.add(this.scheduler.schedule(function (_a) {
          var message = _a.message,
              subscriber = _a.subscriber;
          message.notification.observe(subscriber);
        }, message.frame, {
          message: message,
          subscriber: subscriber
        }));
      }
    };
    return ColdObservable;
  }(Observable_1.Observable);
  exports.ColdObservable = ColdObservable;
  applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
});
$__System.registerDynamic('154', [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an action is invalid because the object has been
     * unsubscribed.
     *
     * @see {@link Subject}
     * @see {@link BehaviorSubject}
     *
     * @class ObjectUnsubscribedError
     */
    var ObjectUnsubscribedError = function (_super) {
        __extends(ObjectUnsubscribedError, _super);
        function ObjectUnsubscribedError() {
            var err = _super.call(this, 'object unsubscribed');
            this.name = err.name = 'ObjectUnsubscribedError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return ObjectUnsubscribedError;
    }(Error);
    exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
    
});
$__System.registerDynamic("155", ["30"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = $__require("30");
  var SubjectSubscription = function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
      _super.call(this);
      this.subject = subject;
      this.subscriber = subscriber;
      this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
      if (this.closed) {
        return;
      }
      this.closed = true;
      var subject = this.subject;
      var observers = subject.observers;
      this.subject = null;
      if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
        return;
      }
      var subscriberIndex = observers.indexOf(this.subscriber);
      if (subscriberIndex !== -1) {
        observers.splice(subscriberIndex, 1);
      }
    };
    return SubjectSubscription;
  }(Subscription_1.Subscription);
  exports.SubjectSubscription = SubjectSubscription;
});
$__System.registerDynamic('6a', ['e', '6b', '30', '154', '155', '159'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var Subscriber_1 = $__require('6b');
  var Subscription_1 = $__require('30');
  var ObjectUnsubscribedError_1 = $__require('154');
  var SubjectSubscription_1 = $__require('155');
  var rxSubscriber_1 = $__require('159');
  var SubjectSubscriber = function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
      _super.call(this, destination);
      this.destination = destination;
    }
    return SubjectSubscriber;
  }(Subscriber_1.Subscriber);
  exports.SubjectSubscriber = SubjectSubscriber;
  var Subject = function (_super) {
    __extends(Subject, _super);
    function Subject() {
      _super.call(this);
      this.observers = [];
      this.closed = false;
      this.isStopped = false;
      this.hasError = false;
      this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
      return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
      var subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    };
    Subject.prototype.next = function (value) {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      }
      if (!this.isStopped) {
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
          copy[i].next(value);
        }
      }
    };
    Subject.prototype.error = function (err) {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      }
      this.hasError = true;
      this.thrownError = err;
      this.isStopped = true;
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();
      for (var i = 0; i < len; i++) {
        copy[i].error(err);
      }
      this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      }
      this.isStopped = true;
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();
      for (var i = 0; i < len; i++) {
        copy[i].complete();
      }
      this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
      this.isStopped = true;
      this.closed = true;
      this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      } else {
        return _super.prototype._trySubscribe.call(this, subscriber);
      }
    };
    Subject.prototype._subscribe = function (subscriber) {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      } else if (this.hasError) {
        subscriber.error(this.thrownError);
        return Subscription_1.Subscription.EMPTY;
      } else if (this.isStopped) {
        subscriber.complete();
        return Subscription_1.Subscription.EMPTY;
      } else {
        this.observers.push(subscriber);
        return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
      }
    };
    Subject.prototype.asObservable = function () {
      var observable = new Observable_1.Observable();
      observable.source = this;
      return observable;
    };
    Subject.create = function (destination, source) {
      return new AnonymousSubject(destination, source);
    };
    return Subject;
  }(Observable_1.Observable);
  exports.Subject = Subject;
  var AnonymousSubject = function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
      _super.call(this);
      this.destination = destination;
      this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
      var destination = this.destination;
      if (destination && destination.next) {
        destination.next(value);
      }
    };
    AnonymousSubject.prototype.error = function (err) {
      var destination = this.destination;
      if (destination && destination.error) {
        this.destination.error(err);
      }
    };
    AnonymousSubject.prototype.complete = function () {
      var destination = this.destination;
      if (destination && destination.complete) {
        this.destination.complete();
      }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
      var source = this.source;
      if (source) {
        return this.source.subscribe(subscriber);
      } else {
        return Subscription_1.Subscription.EMPTY;
      }
    };
    return AnonymousSubject;
  }(Subject);
  exports.AnonymousSubject = AnonymousSubject;
});
$__System.registerDynamic("157", ["15a"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var SubscriptionLog_1 = $__require("15a");
  var SubscriptionLoggable = function () {
    function SubscriptionLoggable() {
      this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
      this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
      return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
      var subscriptionLogs = this.subscriptions;
      var oldSubscriptionLog = subscriptionLogs[index];
      subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
  }();
  exports.SubscriptionLoggable = SubscriptionLoggable;
});
$__System.registerDynamic("158", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function applyMixins(derivedCtor, baseCtors) {
        for (var i = 0, len = baseCtors.length; i < len; i++) {
            var baseCtor = baseCtors[i];
            var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
            for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
                var name_1 = propertyKeys[j];
                derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
            }
        }
    }
    exports.applyMixins = applyMixins;
    
});
$__System.registerDynamic('15b', ['6a', '30', '157', '158'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('6a');
  var Subscription_1 = $__require('30');
  var SubscriptionLoggable_1 = $__require('157');
  var applyMixins_1 = $__require('158');
  var HotObservable = function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
      _super.call(this);
      this.messages = messages;
      this.subscriptions = [];
      this.scheduler = scheduler;
    }
    HotObservable.prototype._subscribe = function (subscriber) {
      var subject = this;
      var index = subject.logSubscribedFrame();
      subscriber.add(new Subscription_1.Subscription(function () {
        subject.logUnsubscribedFrame(index);
      }));
      return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
      var subject = this;
      var messagesLength = subject.messages.length;
      for (var i = 0; i < messagesLength; i++) {
        (function () {
          var message = subject.messages[i];
          subject.scheduler.schedule(function () {
            message.notification.observe(subject);
          }, message.frame);
        })();
      }
    };
    return HotObservable;
  }(Subject_1.Subject);
  exports.HotObservable = HotObservable;
  applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
});
$__System.registerDynamic("15a", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var SubscriptionLog = function () {
        function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
            if (unsubscribedFrame === void 0) {
                unsubscribedFrame = Number.POSITIVE_INFINITY;
            }
            this.subscribedFrame = subscribedFrame;
            this.unsubscribedFrame = unsubscribedFrame;
        }
        return SubscriptionLog;
    }();
    exports.SubscriptionLog = SubscriptionLog;
    
});
$__System.registerDynamic('15c', ['e', '9b', '156', '15b', '15a', '15d'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('e');
  var Notification_1 = $__require('9b');
  var ColdObservable_1 = $__require('156');
  var HotObservable_1 = $__require('15b');
  var SubscriptionLog_1 = $__require('15a');
  var VirtualTimeScheduler_1 = $__require('15d');
  var defaultMaxFrame = 750;
  var TestScheduler = function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
      _super.call(this, VirtualTimeScheduler_1.VirtualAction, defaultMaxFrame);
      this.assertDeepEqual = assertDeepEqual;
      this.hotObservables = [];
      this.coldObservables = [];
      this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
      var indexOf = marbles.indexOf('|');
      if (indexOf === -1) {
        throw new Error('marble diagram for time should have a completion marker "|"');
      }
      return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
      if (marbles.indexOf('^') !== -1) {
        throw new Error('cold observable cannot have subscription offset "^"');
      }
      if (marbles.indexOf('!') !== -1) {
        throw new Error('cold observable cannot have unsubscription marker "!"');
      }
      var messages = TestScheduler.parseMarbles(marbles, values, error);
      var cold = new ColdObservable_1.ColdObservable(messages, this);
      this.coldObservables.push(cold);
      return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
      if (marbles.indexOf('!') !== -1) {
        throw new Error('hot observable cannot have unsubscription marker "!"');
      }
      var messages = TestScheduler.parseMarbles(marbles, values, error);
      var subject = new HotObservable_1.HotObservable(messages, this);
      this.hotObservables.push(subject);
      return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
      var _this = this;
      var messages = [];
      observable.subscribe(function (value) {
        messages.push({
          frame: _this.frame - outerFrame,
          notification: Notification_1.Notification.createNext(value)
        });
      }, function (err) {
        messages.push({
          frame: _this.frame - outerFrame,
          notification: Notification_1.Notification.createError(err)
        });
      }, function () {
        messages.push({
          frame: _this.frame - outerFrame,
          notification: Notification_1.Notification.createComplete()
        });
      });
      return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
      var _this = this;
      if (unsubscriptionMarbles === void 0) {
        unsubscriptionMarbles = null;
      }
      var actual = [];
      var flushTest = {
        actual: actual,
        ready: false
      };
      var unsubscriptionFrame = TestScheduler.parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
      var subscription;
      this.schedule(function () {
        subscription = observable.subscribe(function (x) {
          var value = x;
          if (x instanceof Observable_1.Observable) {
            value = _this.materializeInnerObservable(value, _this.frame);
          }
          actual.push({
            frame: _this.frame,
            notification: Notification_1.Notification.createNext(value)
          });
        }, function (err) {
          actual.push({
            frame: _this.frame,
            notification: Notification_1.Notification.createError(err)
          });
        }, function () {
          actual.push({
            frame: _this.frame,
            notification: Notification_1.Notification.createComplete()
          });
        });
      }, 0);
      if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
        this.schedule(function () {
          return subscription.unsubscribe();
        }, unsubscriptionFrame);
      }
      this.flushTests.push(flushTest);
      return { toBe: function (marbles, values, errorValue) {
          flushTest.ready = true;
          flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
        } };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
      var flushTest = {
        actual: actualSubscriptionLogs,
        ready: false
      };
      this.flushTests.push(flushTest);
      return { toBe: function (marbles) {
          var marblesArray = typeof marbles === 'string' ? [marbles] : marbles;
          flushTest.ready = true;
          flushTest.expected = marblesArray.map(function (marbles) {
            return TestScheduler.parseMarblesAsSubscriptions(marbles);
          });
        } };
    };
    TestScheduler.prototype.flush = function () {
      var hotObservables = this.hotObservables;
      while (hotObservables.length > 0) {
        hotObservables.shift().setup();
      }
      _super.prototype.flush.call(this);
      var readyFlushTests = this.flushTests.filter(function (test) {
        return test.ready;
      });
      while (readyFlushTests.length > 0) {
        var test = readyFlushTests.shift();
        this.assertDeepEqual(test.actual, test.expected);
      }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
      if (typeof marbles !== 'string') {
        return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
      }
      var len = marbles.length;
      var groupStart = -1;
      var subscriptionFrame = Number.POSITIVE_INFINITY;
      var unsubscriptionFrame = Number.POSITIVE_INFINITY;
      for (var i = 0; i < len; i++) {
        var frame = i * this.frameTimeFactor;
        var c = marbles[i];
        switch (c) {
          case '-':
          case ' ':
            break;
          case '(':
            groupStart = frame;
            break;
          case ')':
            groupStart = -1;
            break;
          case '^':
            if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
              throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
            }
            subscriptionFrame = groupStart > -1 ? groupStart : frame;
            break;
          case '!':
            if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
              throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
            }
            unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
            break;
          default:
            throw new Error('there can only be \'^\' and \'!\' markers in a ' + 'subscription marble diagram. Found instead \'' + c + '\'.');
        }
      }
      if (unsubscriptionFrame < 0) {
        return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
      } else {
        return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
      }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
      if (materializeInnerObservables === void 0) {
        materializeInnerObservables = false;
      }
      if (marbles.indexOf('!') !== -1) {
        throw new Error('conventional marble diagrams cannot have the ' + 'unsubscription marker "!"');
      }
      var len = marbles.length;
      var testMessages = [];
      var subIndex = marbles.indexOf('^');
      var frameOffset = subIndex === -1 ? 0 : subIndex * -this.frameTimeFactor;
      var getValue = typeof values !== 'object' ? function (x) {
        return x;
      } : function (x) {
        if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
          return values[x].messages;
        }
        return values[x];
      };
      var groupStart = -1;
      for (var i = 0; i < len; i++) {
        var frame = i * this.frameTimeFactor + frameOffset;
        var notification = void 0;
        var c = marbles[i];
        switch (c) {
          case '-':
          case ' ':
            break;
          case '(':
            groupStart = frame;
            break;
          case ')':
            groupStart = -1;
            break;
          case '|':
            notification = Notification_1.Notification.createComplete();
            break;
          case '^':
            break;
          case '#':
            notification = Notification_1.Notification.createError(errorValue || 'error');
            break;
          default:
            notification = Notification_1.Notification.createNext(getValue(c));
            break;
        }
        if (notification) {
          testMessages.push({
            frame: groupStart > -1 ? groupStart : frame,
            notification: notification
          });
        }
      }
      return testMessages;
    };
    return TestScheduler;
  }(VirtualTimeScheduler_1.VirtualTimeScheduler);
  exports.TestScheduler = TestScheduler;
});
$__System.registerDynamic('15d', ['15e', '15f'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncAction_1 = $__require('15e');
  var AsyncScheduler_1 = $__require('15f');
  var VirtualTimeScheduler = function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
      var _this = this;
      if (SchedulerAction === void 0) {
        SchedulerAction = VirtualAction;
      }
      if (maxFrames === void 0) {
        maxFrames = Number.POSITIVE_INFINITY;
      }
      _super.call(this, SchedulerAction, function () {
        return _this.frame;
      });
      this.maxFrames = maxFrames;
      this.frame = 0;
      this.index = -1;
    }
    VirtualTimeScheduler.prototype.flush = function () {
      var _a = this,
          actions = _a.actions,
          maxFrames = _a.maxFrames;
      var error, action;
      while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      }
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
  }(AsyncScheduler_1.AsyncScheduler);
  exports.VirtualTimeScheduler = VirtualTimeScheduler;
  var VirtualAction = function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
      if (index === void 0) {
        index = scheduler.index += 1;
      }
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
      this.index = index;
      this.active = true;
      this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (!this.id) {
        return _super.prototype.schedule.call(this, state, delay);
      }
      this.active = false;
      var action = new VirtualAction(this.scheduler, this.work);
      this.add(action);
      return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      this.delay = scheduler.frame + delay;
      var actions = scheduler.actions;
      actions.push(this);
      actions.sort(VirtualAction.sortActions);
      return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
      if (this.active === true) {
        return _super.prototype._execute.call(this, state, delay);
      }
    };
    VirtualAction.sortActions = function (a, b) {
      if (a.delay === b.delay) {
        if (a.index === b.index) {
          return 0;
        } else if (a.index > b.index) {
          return 1;
        } else {
          return -1;
        }
      } else if (a.delay > b.delay) {
        return 1;
      } else {
        return -1;
      }
    };
    return VirtualAction;
  }(AsyncAction_1.AsyncAction);
  exports.VirtualAction = VirtualAction;
});
$__System.registerDynamic('160', ['6b', '159', '161'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Subscriber_1 = $__require('6b');
  var rxSubscriber_1 = $__require('159');
  var Observer_1 = $__require('161');
  function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
      if (nextOrObserver instanceof Subscriber_1.Subscriber) {
        return nextOrObserver;
      }
      if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
        return nextOrObserver[rxSubscriber_1.rxSubscriber]();
      }
    }
    if (!nextOrObserver && !error && !complete) {
      return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
  }
  exports.toSubscriber = toSubscriber;
});
$__System.registerDynamic('e', ['68', '160', 'ea'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require('68');
  var toSubscriber_1 = $__require('160');
  var observable_1 = $__require('ea');
  var Observable = function () {
    function Observable(subscribe) {
      this._isScalar = false;
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable.prototype.lift = function (operator) {
      var observable = new Observable();
      observable.source = this;
      observable.operator = operator;
      return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
      var operator = this.operator;
      var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
      if (operator) {
        operator.call(sink, this.source);
      } else {
        sink.add(this._trySubscribe(sink));
      }
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;
        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
      return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
        sink.error(err);
      }
    };
    Observable.prototype.forEach = function (next, PromiseCtor) {
      var _this = this;
      if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
          PromiseCtor = root_1.root.Rx.config.Promise;
        } else if (root_1.root.Promise) {
          PromiseCtor = root_1.root.Promise;
        }
      }
      if (!PromiseCtor) {
        throw new Error('no Promise impl found');
      }
      return new PromiseCtor(function (resolve, reject) {
        var subscription;
        subscription = _this.subscribe(function (value) {
          if (subscription) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscription.unsubscribe();
            }
          } else {
            next(value);
          }
        }, reject, resolve);
      });
    };
    Observable.prototype._subscribe = function (subscriber) {
      return this.source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
      return this;
    };
    Observable.create = function (subscribe) {
      return new Observable(subscribe);
    };
    return Observable;
  }();
  exports.Observable = Observable;
});
$__System.registerDynamic("161", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    exports.empty = {
        closed: true,
        next: function (value) {},
        error: function (err) {
            throw err;
        },
        complete: function () {}
    };
    
});
$__System.registerDynamic('6b', ['2f', '30', '161', '159'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isFunction_1 = $__require('2f');
  var Subscription_1 = $__require('30');
  var Observer_1 = $__require('161');
  var rxSubscriber_1 = $__require('159');
  var Subscriber = function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
      _super.call(this);
      this.syncErrorValue = null;
      this.syncErrorThrown = false;
      this.syncErrorThrowable = false;
      this.isStopped = false;
      switch (arguments.length) {
        case 0:
          this.destination = Observer_1.empty;
          break;
        case 1:
          if (!destinationOrNext) {
            this.destination = Observer_1.empty;
            break;
          }
          if (typeof destinationOrNext === 'object') {
            if (destinationOrNext instanceof Subscriber) {
              this.destination = destinationOrNext;
              this.destination.add(this);
            } else {
              this.syncErrorThrowable = true;
              this.destination = new SafeSubscriber(this, destinationOrNext);
            }
            break;
          }
        default:
          this.syncErrorThrowable = true;
          this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
          break;
      }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
      return this;
    };
    Subscriber.create = function (next, error, complete) {
      var subscriber = new Subscriber(next, error, complete);
      subscriber.syncErrorThrowable = false;
      return subscriber;
    };
    Subscriber.prototype.next = function (value) {
      if (!this.isStopped) {
        this._next(value);
      }
    };
    Subscriber.prototype.error = function (err) {
      if (!this.isStopped) {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber.prototype.complete = function () {
      if (!this.isStopped) {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber.prototype.unsubscribe = function () {
      if (this.closed) {
        return;
      }
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
      this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
      this.destination.error(err);
      this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
      this.destination.complete();
      this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
      var _a = this,
          _parent = _a._parent,
          _parents = _a._parents;
      this._parent = null;
      this._parents = null;
      this.unsubscribe();
      this.closed = false;
      this.isStopped = false;
      this._parent = _parent;
      this._parents = _parents;
      return this;
    };
    return Subscriber;
  }(Subscription_1.Subscription);
  exports.Subscriber = Subscriber;
  var SafeSubscriber = function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
      _super.call(this);
      this._parentSubscriber = _parentSubscriber;
      var next;
      var context = this;
      if (isFunction_1.isFunction(observerOrNext)) {
        next = observerOrNext;
      } else if (observerOrNext) {
        next = observerOrNext.next;
        error = observerOrNext.error;
        complete = observerOrNext.complete;
        if (observerOrNext !== Observer_1.empty) {
          context = Object.create(observerOrNext);
          if (isFunction_1.isFunction(context.unsubscribe)) {
            this.add(context.unsubscribe.bind(context));
          }
          context.unsubscribe = this.unsubscribe.bind(this);
        }
      }
      this._context = context;
      this._next = next;
      this._error = error;
      this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
      if (!this.isStopped && this._next) {
        var _parentSubscriber = this._parentSubscriber;
        if (!_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._next, value);
        } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.error = function (err) {
      if (!this.isStopped) {
        var _parentSubscriber = this._parentSubscriber;
        if (this._error) {
          if (!_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._error, err);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parentSubscriber, this._error, err);
            this.unsubscribe();
          }
        } else if (!_parentSubscriber.syncErrorThrowable) {
          this.unsubscribe();
          throw err;
        } else {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.complete = function () {
      var _this = this;
      if (!this.isStopped) {
        var _parentSubscriber = this._parentSubscriber;
        if (this._complete) {
          var wrappedComplete = function () {
            return _this._complete.call(_this._context);
          };
          if (!_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(wrappedComplete);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parentSubscriber, wrappedComplete);
            this.unsubscribe();
          }
        } else {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
      try {
        fn.call(this._context, value);
      } catch (err) {
        this.unsubscribe();
        throw err;
      }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
      try {
        fn.call(this._context, value);
      } catch (err) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      }
      return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
      var _parentSubscriber = this._parentSubscriber;
      this._context = null;
      this._parentSubscriber = null;
      _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
  }(Subscriber);
});
$__System.registerDynamic('d0', ['6b'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('6b');
  function map(project, thisArg) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.lift(new MapOperator(project, thisArg));
  }
  exports.map = map;
  var MapOperator = function () {
    function MapOperator(project, thisArg) {
      this.project = project;
      this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
      return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
  }();
  exports.MapOperator = MapOperator;
  var MapSubscriber = function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
      _super.call(this, destination);
      this.project = project;
      this.count = 0;
      this.thisArg = thisArg || this;
    }
    MapSubscriber.prototype._next = function (value) {
      var result;
      try {
        result = this.project.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return MapSubscriber;
  }(Subscriber_1.Subscriber);
});
$__System.registerDynamic('65', ['68', 'f', '10', 'e', '6b', 'd0'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('68');
  var tryCatch_1 = $__require('f');
  var errorObject_1 = $__require('10');
  var Observable_1 = $__require('e');
  var Subscriber_1 = $__require('6b');
  var map_1 = $__require('d0');
  function getCORSRequest() {
    if (root_1.root.XMLHttpRequest) {
      return new root_1.root.XMLHttpRequest();
    } else if (!!root_1.root.XDomainRequest) {
      return new root_1.root.XDomainRequest();
    } else {
      throw new Error('CORS is not supported by your browser');
    }
  }
  function getXMLHttpRequest() {
    if (root_1.root.XMLHttpRequest) {
      return new root_1.root.XMLHttpRequest();
    } else {
      var progId = void 0;
      try {
        var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
        for (var i = 0; i < 3; i++) {
          try {
            progId = progIds[i];
            if (new root_1.root.ActiveXObject(progId)) {
              break;
            }
          } catch (e) {}
        }
        return new root_1.root.ActiveXObject(progId);
      } catch (e) {
        throw new Error('XMLHttpRequest is not supported by your browser');
      }
    }
  }
  function ajaxGet(url, headers) {
    if (headers === void 0) {
      headers = null;
    }
    return new AjaxObservable({
      method: 'GET',
      url: url,
      headers: headers
    });
  }
  exports.ajaxGet = ajaxGet;
  ;
  function ajaxPost(url, body, headers) {
    return new AjaxObservable({
      method: 'POST',
      url: url,
      body: body,
      headers: headers
    });
  }
  exports.ajaxPost = ajaxPost;
  ;
  function ajaxDelete(url, headers) {
    return new AjaxObservable({
      method: 'DELETE',
      url: url,
      headers: headers
    });
  }
  exports.ajaxDelete = ajaxDelete;
  ;
  function ajaxPut(url, body, headers) {
    return new AjaxObservable({
      method: 'PUT',
      url: url,
      body: body,
      headers: headers
    });
  }
  exports.ajaxPut = ajaxPut;
  ;
  function ajaxPatch(url, body, headers) {
    return new AjaxObservable({
      method: 'PATCH',
      url: url,
      body: body,
      headers: headers
    });
  }
  exports.ajaxPatch = ajaxPatch;
  ;
  function ajaxGetJSON(url, headers) {
    return new AjaxObservable({
      method: 'GET',
      url: url,
      responseType: 'json',
      headers: headers
    }).lift(new map_1.MapOperator(function (x, index) {
      return x.response;
    }, null));
  }
  exports.ajaxGetJSON = ajaxGetJSON;
  ;
  var AjaxObservable = function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
      _super.call(this);
      var request = {
        async: true,
        createXHR: function () {
          return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
        },
        crossDomain: false,
        withCredentials: false,
        headers: {},
        method: 'GET',
        responseType: 'json',
        timeout: 0
      };
      if (typeof urlOrRequest === 'string') {
        request.url = urlOrRequest;
      } else {
        for (var prop in urlOrRequest) {
          if (urlOrRequest.hasOwnProperty(prop)) {
            request[prop] = urlOrRequest[prop];
          }
        }
      }
      this.request = request;
    }
    AjaxObservable.prototype._subscribe = function (subscriber) {
      return new AjaxSubscriber(subscriber, this.request);
    };
    AjaxObservable.create = function () {
      var create = function (urlOrRequest) {
        return new AjaxObservable(urlOrRequest);
      };
      create.get = ajaxGet;
      create.post = ajaxPost;
      create.delete = ajaxDelete;
      create.put = ajaxPut;
      create.patch = ajaxPatch;
      create.getJSON = ajaxGetJSON;
      return create;
    }();
    return AjaxObservable;
  }(Observable_1.Observable);
  exports.AjaxObservable = AjaxObservable;
  var AjaxSubscriber = function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
      _super.call(this, destination);
      this.request = request;
      this.done = false;
      var headers = request.headers = request.headers || {};
      if (!request.crossDomain && !headers['X-Requested-With']) {
        headers['X-Requested-With'] = 'XMLHttpRequest';
      }
      if (!('Content-Type' in headers) && !(root_1.root.FormData && request.body instanceof root_1.root.FormData) && typeof request.body !== 'undefined') {
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      }
      request.body = this.serializeBody(request.body, request.headers['Content-Type']);
      this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
      this.done = true;
      var _a = this,
          xhr = _a.xhr,
          request = _a.request,
          destination = _a.destination;
      var response = new AjaxResponse(e, xhr, request);
      destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
      var _a = this,
          request = _a.request,
          _b = _a.request,
          user = _b.user,
          method = _b.method,
          url = _b.url,
          async = _b.async,
          password = _b.password,
          headers = _b.headers,
          body = _b.body;
      var createXHR = request.createXHR;
      var xhr = tryCatch_1.tryCatch(createXHR).call(request);
      if (xhr === errorObject_1.errorObject) {
        this.error(errorObject_1.errorObject.e);
      } else {
        this.xhr = xhr;
        this.setupEvents(xhr, request);
        var result = void 0;
        if (user) {
          result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
        } else {
          result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
        }
        if (result === errorObject_1.errorObject) {
          this.error(errorObject_1.errorObject.e);
          return null;
        }
        xhr.timeout = request.timeout;
        xhr.responseType = request.responseType;
        if ('withCredentials' in xhr) {
          xhr.withCredentials = !!request.withCredentials;
        }
        this.setHeaders(xhr, headers);
        result = body ? tryCatch_1.tryCatch(xhr.send).call(xhr, body) : tryCatch_1.tryCatch(xhr.send).call(xhr);
        if (result === errorObject_1.errorObject) {
          this.error(errorObject_1.errorObject.e);
          return null;
        }
      }
      return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
      if (!body || typeof body === 'string') {
        return body;
      } else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
        return body;
      }
      if (contentType) {
        var splitIndex = contentType.indexOf(';');
        if (splitIndex !== -1) {
          contentType = contentType.substring(0, splitIndex);
        }
      }
      switch (contentType) {
        case 'application/x-www-form-urlencoded':
          return Object.keys(body).map(function (key) {
            return encodeURI(key) + "=" + encodeURI(body[key]);
          }).join('&');
        case 'application/json':
          return JSON.stringify(body);
        default:
          return body;
      }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
      for (var key in headers) {
        if (headers.hasOwnProperty(key)) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
      var progressSubscriber = request.progressSubscriber;
      function xhrTimeout(e) {
        var _a = xhrTimeout,
            subscriber = _a.subscriber,
            progressSubscriber = _a.progressSubscriber,
            request = _a.request;
        if (progressSubscriber) {
          progressSubscriber.error(e);
        }
        subscriber.error(new AjaxTimeoutError(this, request));
      }
      ;
      xhr.ontimeout = xhrTimeout;
      xhrTimeout.request = request;
      xhrTimeout.subscriber = this;
      xhrTimeout.progressSubscriber = progressSubscriber;
      if (xhr.upload && 'withCredentials' in xhr) {
        if (progressSubscriber) {
          var xhrProgress_1;
          xhrProgress_1 = function (e) {
            var progressSubscriber = xhrProgress_1.progressSubscriber;
            progressSubscriber.next(e);
          };
          if (root_1.root.XDomainRequest) {
            xhr.onprogress = xhrProgress_1;
          } else {
            xhr.upload.onprogress = xhrProgress_1;
          }
          xhrProgress_1.progressSubscriber = progressSubscriber;
        }
        var xhrError_1;
        xhrError_1 = function (e) {
          var _a = xhrError_1,
              progressSubscriber = _a.progressSubscriber,
              subscriber = _a.subscriber,
              request = _a.request;
          if (progressSubscriber) {
            progressSubscriber.error(e);
          }
          subscriber.error(new AjaxError('ajax error', this, request));
        };
        xhr.onerror = xhrError_1;
        xhrError_1.request = request;
        xhrError_1.subscriber = this;
        xhrError_1.progressSubscriber = progressSubscriber;
      }
      function xhrReadyStateChange(e) {
        var _a = xhrReadyStateChange,
            subscriber = _a.subscriber,
            progressSubscriber = _a.progressSubscriber,
            request = _a.request;
        if (this.readyState === 4) {
          var status_1 = this.status === 1223 ? 204 : this.status;
          var response = this.responseType === 'text' ? this.response || this.responseText : this.response;
          if (status_1 === 0) {
            status_1 = response ? 200 : 0;
          }
          if (200 <= status_1 && status_1 < 300) {
            if (progressSubscriber) {
              progressSubscriber.complete();
            }
            subscriber.next(e);
            subscriber.complete();
          } else {
            if (progressSubscriber) {
              progressSubscriber.error(e);
            }
            subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
          }
        }
      }
      ;
      xhr.onreadystatechange = xhrReadyStateChange;
      xhrReadyStateChange.subscriber = this;
      xhrReadyStateChange.progressSubscriber = progressSubscriber;
      xhrReadyStateChange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
      var _a = this,
          done = _a.done,
          xhr = _a.xhr;
      if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
        xhr.abort();
      }
      _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
  }(Subscriber_1.Subscriber);
  exports.AjaxSubscriber = AjaxSubscriber;
  var AjaxResponse = function () {
    function AjaxResponse(originalEvent, xhr, request) {
      this.originalEvent = originalEvent;
      this.xhr = xhr;
      this.request = request;
      this.status = xhr.status;
      this.responseType = xhr.responseType || request.responseType;
      switch (this.responseType) {
        case 'json':
          if ('response' in xhr) {
            this.response = xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
          } else {
            this.response = JSON.parse(xhr.responseText || 'null');
          }
          break;
        case 'xml':
          this.response = xhr.responseXML;
          break;
        case 'text':
        default:
          this.response = 'response' in xhr ? xhr.response : xhr.responseText;
          break;
      }
    }
    return AjaxResponse;
  }();
  exports.AjaxResponse = AjaxResponse;
  var AjaxError = function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
      _super.call(this, message);
      this.message = message;
      this.xhr = xhr;
      this.request = request;
      this.status = xhr.status;
    }
    return AjaxError;
  }(Error);
  exports.AjaxError = AjaxError;
  var AjaxTimeoutError = function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
      _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
  }(AjaxError);
  exports.AjaxTimeoutError = AjaxTimeoutError;
});
$__System.registerDynamic('162', ['68', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var root_1 = $__require('68');
    var ImmediateDefinition = function () {
      function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
          this.setImmediate = root.setImmediate.bind(root);
          this.clearImmediate = root.clearImmediate.bind(root);
        } else {
          this.nextHandle = 1;
          this.tasksByHandle = {};
          this.currentlyRunningATask = false;
          if (this.canUseProcessNextTick()) {
            this.setImmediate = this.createProcessNextTickSetImmediate();
          } else if (this.canUsePostMessage()) {
            this.setImmediate = this.createPostMessageSetImmediate();
          } else if (this.canUseMessageChannel()) {
            this.setImmediate = this.createMessageChannelSetImmediate();
          } else if (this.canUseReadyStateChange()) {
            this.setImmediate = this.createReadyStateChangeSetImmediate();
          } else {
            this.setImmediate = this.createSetTimeoutSetImmediate();
          }
          var ci = function clearImmediate(handle) {
            delete clearImmediate.instance.tasksByHandle[handle];
          };
          ci.instance = this;
          this.clearImmediate = ci;
        }
      }
      ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
      };
      ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
      };
      ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
      };
      ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
      };
      ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        if (root.postMessage && !root.importScripts) {
          var postMessageIsAsynchronous_1 = true;
          var oldOnMessage = root.onmessage;
          root.onmessage = function () {
            postMessageIsAsynchronous_1 = false;
          };
          root.postMessage('', '*');
          root.onmessage = oldOnMessage;
          return postMessageIsAsynchronous_1;
        }
        return false;
      };
      ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
          var _a = result,
              handler = _a.handler,
              args = _a.args;
          if (typeof handler === 'function') {
            handler.apply(undefined, args);
          } else {
            new Function('' + handler)();
          }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
      };
      ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
      };
      ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
          var instance = setImmediate.instance;
          var handle = instance.addFromSetImmediateArguments(arguments);
          instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
          return handle;
        };
        fn.instance = this;
        return fn;
      };
      ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
          var instance = globalMessageHandler.instance;
          if (event.source === root && typeof event.data === 'string' && event.data.indexOf(messagePrefix) === 0) {
            instance.runIfPresent(+event.data.slice(messagePrefix.length));
          }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
          var _a = setImmediate,
              messagePrefix = _a.messagePrefix,
              instance = _a.instance;
          var handle = instance.addFromSetImmediateArguments(arguments);
          instance.root.postMessage(messagePrefix + handle, '*');
          return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
      };
      ImmediateDefinition.prototype.runIfPresent = function (handle) {
        if (this.currentlyRunningATask) {
          this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        } else {
          var task = this.tasksByHandle[handle];
          if (task) {
            this.currentlyRunningATask = true;
            try {
              task();
            } finally {
              this.clearImmediate(handle);
              this.currentlyRunningATask = false;
            }
          }
        }
      };
      ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
          var handle = event.data;
          _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
          var _a = setImmediate,
              channel = _a.channel,
              instance = _a.instance;
          var handle = instance.addFromSetImmediateArguments(arguments);
          channel.port2.postMessage(handle);
          return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
      };
      ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
          var instance = setImmediate.instance;
          var root = instance.root;
          var doc = root.document;
          var html = doc.documentElement;
          var handle = instance.addFromSetImmediateArguments(arguments);
          var script = doc.createElement('script');
          script.onreadystatechange = function () {
            instance.runIfPresent(handle);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
          };
          html.appendChild(script);
          return handle;
        };
        fn.instance = this;
        return fn;
      };
      ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
          var instance = setImmediate.instance;
          var handle = instance.addFromSetImmediateArguments(arguments);
          instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
          return handle;
        };
        fn.instance = this;
        return fn;
      };
      return ImmediateDefinition;
    }();
    exports.ImmediateDefinition = ImmediateDefinition;
    exports.Immediate = new ImmediateDefinition(root_1.root);
  })($__require('31'));
});
$__System.registerDynamic('163', ['162', '15e'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Immediate_1 = $__require('162');
  var AsyncAction_1 = $__require('15e');
  var AsapAction = function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      scheduler.actions.push(this);
      return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
        return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
      }
      if (scheduler.actions.length === 0) {
        Immediate_1.Immediate.clearImmediate(id);
        scheduler.scheduled = undefined;
      }
      return undefined;
    };
    return AsapAction;
  }(AsyncAction_1.AsyncAction);
  exports.AsapAction = AsapAction;
});
$__System.registerDynamic("164", ["15f"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncScheduler_1 = $__require("15f");
  var AsapScheduler = function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
      _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function (action) {
      this.active = true;
      this.scheduled = undefined;
      var actions = this.actions;
      var error;
      var index = -1;
      var count = actions.length;
      action = action || actions.shift();
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (++index < count && (action = actions.shift()));
      this.active = false;
      if (error) {
        while (++index < count && (action = actions.shift())) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsapScheduler;
  }(AsyncScheduler_1.AsyncScheduler);
  exports.AsapScheduler = AsapScheduler;
});
$__System.registerDynamic('120', ['163', '164', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var AsapAction_1 = $__require('163');
    var AsapScheduler_1 = $__require('164');
    exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
  })($__require('31'));
});
$__System.registerDynamic('41', ['15e', '15f'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var AsyncAction_1 = $__require('15e');
  var AsyncScheduler_1 = $__require('15f');
  exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
});
$__System.registerDynamic("165", ["15e"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncAction_1 = $__require("15e");
  var QueueAction = function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay > 0) {
        return _super.prototype.schedule.call(this, state, delay);
      }
      this.delay = delay;
      this.state = state;
      this.scheduler.flush(this);
      return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
      return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      return scheduler.flush(this);
    };
    return QueueAction;
  }(AsyncAction_1.AsyncAction);
  exports.QueueAction = QueueAction;
});
$__System.registerDynamic("166", ["15f"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncScheduler_1 = $__require("15f");
  var QueueScheduler = function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
      _super.apply(this, arguments);
    }
    return QueueScheduler;
  }(AsyncScheduler_1.AsyncScheduler);
  exports.QueueScheduler = QueueScheduler;
});
$__System.registerDynamic('153', ['165', '166'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var QueueAction_1 = $__require('165');
  var QueueScheduler_1 = $__require('166');
  exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
});
$__System.registerDynamic("19", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  exports.isArray = Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
  
});
$__System.registerDynamic("150", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function isObject(x) {
        return x != null && typeof x === 'object';
    }
    exports.isObject = isObject;
    
});
$__System.registerDynamic("2f", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    function isFunction(x) {
        return typeof x === 'function';
    }
    exports.isFunction = isFunction;
    
});
$__System.registerDynamic("f", ["10"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var errorObject_1 = $__require("10");
  var tryCatchTarget;
  function tryCatcher() {
    try {
      return tryCatchTarget.apply(this, arguments);
    } catch (e) {
      errorObject_1.errorObject.e = e;
      return errorObject_1.errorObject;
    }
  }
  function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
  }
  exports.tryCatch = tryCatch;
  ;
});
$__System.registerDynamic("10", [], true, function ($__require, exports, module) {
  /* */
  "use strict";
  // typeof any so that it we don't have to cast when comparing a result to the error object

  var global = this || self,
      GLOBAL = global;
  exports.errorObject = { e: {} };
  
});
$__System.registerDynamic("167", [], true, function ($__require, exports, module) {
    /* */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when one or more errors have occurred during the
     * `unsubscribe` of a {@link Subscription}.
     */
    var UnsubscriptionError = function (_super) {
        __extends(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            _super.call(this);
            this.errors = errors;
            var err = Error.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) {
                return i + 1 + ") " + err.toString();
            }).join('\n  ') : '');
            this.name = err.name = 'UnsubscriptionError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return UnsubscriptionError;
    }(Error);
    exports.UnsubscriptionError = UnsubscriptionError;
    
});
$__System.registerDynamic('30', ['19', '150', '2f', 'f', '10', '167', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var isArray_1 = $__require('19');
    var isObject_1 = $__require('150');
    var isFunction_1 = $__require('2f');
    var tryCatch_1 = $__require('f');
    var errorObject_1 = $__require('10');
    var UnsubscriptionError_1 = $__require('167');
    var Subscription = function () {
      function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
          return;
        }
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
          _parent.remove(this);
          _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
          var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
          if (trial === errorObject_1.errorObject) {
            hasErrors = true;
            errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
          }
        }
        if (isArray_1.isArray(_subscriptions)) {
          index = -1;
          len = _subscriptions.length;
          while (++index < len) {
            var sub = _subscriptions[index];
            if (isObject_1.isObject(sub)) {
              var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
              if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || [];
                var err = errorObject_1.errorObject.e;
                if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          }
        }
        if (hasErrors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };
      Subscription.prototype.add = function (teardown) {
        if (!teardown || teardown === Subscription.EMPTY) {
          return Subscription.EMPTY;
        }
        if (teardown === this) {
          return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
          case 'function':
            subscription = new Subscription(teardown);
          case 'object':
            if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (typeof subscription._addParent !== 'function') {
              var tmp = subscription;
              subscription = new Subscription();
              subscription._subscriptions = [tmp];
            }
            break;
          default:
            throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
      };
      Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription.prototype._addParent = function (parent) {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;
        if (!_parent || _parent === parent) {
          this._parent = parent;
        } else if (!_parents) {
          this._parents = [parent];
        } else if (_parents.indexOf(parent) === -1) {
          _parents.push(parent);
        }
      };
      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());
      return Subscription;
    }();
    exports.Subscription = Subscription;
    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    }
  })($__require('31'));
});
$__System.registerDynamic("168", ["30"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = $__require("30");
  var Action = function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
      _super.call(this);
    }
    Action.prototype.schedule = function (state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return this;
    };
    return Action;
  }(Subscription_1.Subscription);
  exports.Action = Action;
});
$__System.registerDynamic('15e', ['68', '168'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('68');
  var Action_1 = $__require('168');
  var AsyncAction = function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
      this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (this.closed) {
        return this;
      }
      this.state = state;
      this.pending = true;
      var id = this.id;
      var scheduler = this.scheduler;
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, delay);
      }
      this.delay = delay;
      this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
      return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && this.delay === delay && this.pending === false) {
        return id;
      }
      return root_1.root.clearInterval(id) && undefined || undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
      if (this.closed) {
        return new Error('executing a cancelled action');
      }
      this.pending = false;
      var error = this._execute(state, delay);
      if (error) {
        return error;
      } else if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    AsyncAction.prototype._execute = function (state, delay) {
      var errored = false;
      var errorValue = undefined;
      try {
        this.work(state);
      } catch (e) {
        errored = true;
        errorValue = !!e && e || new Error(e);
      }
      if (errored) {
        this.unsubscribe();
        return errorValue;
      }
    };
    AsyncAction.prototype._unsubscribe = function () {
      var id = this.id;
      var scheduler = this.scheduler;
      var actions = scheduler.actions;
      var index = actions.indexOf(this);
      this.work = null;
      this.delay = null;
      this.state = null;
      this.pending = false;
      this.scheduler = null;
      if (index !== -1) {
        actions.splice(index, 1);
      }
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
    };
    return AsyncAction;
  }(Action_1.Action);
  exports.AsyncAction = AsyncAction;
});
$__System.registerDynamic("169", ["68"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require("68");
  var RequestAnimationFrameDefinition = function () {
    function RequestAnimationFrameDefinition(root) {
      if (root.requestAnimationFrame) {
        this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
      } else if (root.mozRequestAnimationFrame) {
        this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
      } else if (root.webkitRequestAnimationFrame) {
        this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
      } else if (root.msRequestAnimationFrame) {
        this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
      } else if (root.oRequestAnimationFrame) {
        this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
      } else {
        this.cancelAnimationFrame = root.clearTimeout.bind(root);
        this.requestAnimationFrame = function (cb) {
          return root.setTimeout(cb, 1000 / 60);
        };
      }
    }
    return RequestAnimationFrameDefinition;
  }();
  exports.RequestAnimationFrameDefinition = RequestAnimationFrameDefinition;
  exports.AnimationFrame = new RequestAnimationFrameDefinition(root_1.root);
});
$__System.registerDynamic('16a', ['15e', '169'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncAction_1 = $__require('15e');
  var AnimationFrame_1 = $__require('169');
  var AnimationFrameAction = function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      scheduler.actions.push(this);
      return scheduler.scheduled || (scheduler.scheduled = AnimationFrame_1.AnimationFrame.requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
        return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
      }
      if (scheduler.actions.length === 0) {
        AnimationFrame_1.AnimationFrame.cancelAnimationFrame(id);
        scheduler.scheduled = undefined;
      }
      return undefined;
    };
    return AnimationFrameAction;
  }(AsyncAction_1.AsyncAction);
  exports.AnimationFrameAction = AnimationFrameAction;
});
$__System.registerDynamic("16b", ["31"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var Scheduler = function () {
      function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
      }
      Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
      };
      Scheduler.now = Date.now ? Date.now : function () {
        return +new Date();
      };
      return Scheduler;
    }();
    exports.Scheduler = Scheduler;
  })($__require("31"));
});
$__System.registerDynamic("15f", ["16b"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Scheduler_1 = $__require("16b");
  var AsyncScheduler = function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
      _super.apply(this, arguments);
      this.actions = [];
      this.active = false;
      this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
      var actions = this.actions;
      if (this.active) {
        actions.push(action);
        return;
      }
      var error;
      this.active = true;
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (action = actions.shift());
      this.active = false;
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsyncScheduler;
  }(Scheduler_1.Scheduler);
  exports.AsyncScheduler = AsyncScheduler;
});
$__System.registerDynamic("16c", ["15f"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncScheduler_1 = $__require("15f");
  var AnimationFrameScheduler = function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
      _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
      this.active = true;
      this.scheduled = undefined;
      var actions = this.actions;
      var error;
      var index = -1;
      var count = actions.length;
      action = action || actions.shift();
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (++index < count && (action = actions.shift()));
      this.active = false;
      if (error) {
        while (++index < count && (action = actions.shift())) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AnimationFrameScheduler;
  }(AsyncScheduler_1.AsyncScheduler);
  exports.AnimationFrameScheduler = AnimationFrameScheduler;
});
$__System.registerDynamic('16d', ['16a', '16c'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var AnimationFrameAction_1 = $__require('16a');
  var AnimationFrameScheduler_1 = $__require('16c');
  exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
});
$__System.registerDynamic('159', ['68'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require('68');
  var Symbol = root_1.root.Symbol;
  exports.rxSubscriber = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('rxSubscriber') : '@@rxSubscriber';
  exports.$$rxSubscriber = exports.rxSubscriber;
});
$__System.registerDynamic('e5', ['68'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require('68');
  function symbolIteratorPonyfill(root) {
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
      if (!Symbol.iterator) {
        Symbol.iterator = Symbol('iterator polyfill');
      }
      return Symbol.iterator;
    } else {
      var Set_1 = root.Set;
      if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
        return '@@iterator';
      }
      var Map_1 = root.Map;
      if (Map_1) {
        var keys = Object.getOwnPropertyNames(Map_1.prototype);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
            return key;
          }
        }
      }
      return '@@iterator';
    }
  }
  exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
  exports.iterator = symbolIteratorPonyfill(root_1.root);
  exports.$$iterator = exports.iterator;
});
$__System.registerDynamic('68', [], true, function ($__require, exports, module) {
    /* */
    "use strict";
    // CommonJS / Node have global context exposed as "global" variable.
    // We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
    // the global "global" var for now.

    var global = this || self,
        GLOBAL = global;
    var __window = typeof window !== 'undefined' && window;
    var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;
    var __global = typeof global !== 'undefined' && global;
    var _root = __window || __global || __self;
    exports.root = _root;
    // Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
    // This is needed when used with angular/tsickle which inserts a goog.module statement.
    // Wrap in IIFE
    (function () {
        if (!_root) {
            throw new Error('RxJS could not find any global context (window, self, global)');
        }
    })();
    
});
$__System.registerDynamic('ea', ['68'], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var root_1 = $__require('68');
  function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
      if (Symbol.observable) {
        $$observable = Symbol.observable;
      } else {
        $$observable = Symbol('observable');
        Symbol.observable = $$observable;
      }
    } else {
      $$observable = '@@observable';
    }
    return $$observable;
  }
  exports.getSymbolObservable = getSymbolObservable;
  exports.observable = getSymbolObservable(root_1.root);
  exports.$$observable = exports.observable;
});
$__System.registerDynamic('16e', [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;

    process.listeners = function (name) {
        return [];
    };

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
});
$__System.registerDynamic("16f", ["16e"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("16e");
});
$__System.registerDynamic('170', ['16f'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('16f');
});
$__System.registerDynamic("31", ["170"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("170");
});
$__System.registerDynamic('3', ['6a', 'e', '13', '16', '1c', '1f', '24', '27', '2a', '2d', '33', '36', '39', '3b', '3e', '43', '46', '47', '4c', '4e', '4f', '53', '56', '59', '5c', '60', '63', '66', '6e', '71', '73', '75', '77', '80', '82', '84', '85', '86', '89', '8c', '8f', '91', '93', '95', '97', '99', '9c', '9e', 'a1', 'a2', 'a5', 'a7', 'a9', 'ab', 'ad', 'b0', 'b1', 'b4', 'b5', 'b8', 'bb', 'c0', 'c2', 'c4', 'c6', 'c8', 'ca', 'cc', 'ce', 'cf', 'd2', 'd4', 'd7', 'd8', 'd9', 'da', 'db', 'dd', 'df', 'e0', 'e2', 'eb', 'ed', 'f0', 'f2', 'f4', 'f7', 'f9', 'fb', 'fc', 'fd', 'ff', '101', '103', '105', '107', '109', '10b', '10d', '10f', '112', '114', '116', '118', '11a', '11c', '11e', '122', '124', '126', '128', '12a', '12c', '12e', '130', '131', '134', '135', '139', '13b', '13c', '13f', '141', '143', '145', '147', '149', '14b', '14d', '14e', '152', '30', '6b', '11', '6c', 'f6', '110', '9b', 'ba', 'af', '154', '138', '167', '136', '13d', '15c', '15d', '65', '120', '41', '153', '16d', '159', 'e5', 'ea', '31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    "use strict";

    var Subject_1 = $__require('6a');
    exports.Subject = Subject_1.Subject;
    exports.AnonymousSubject = Subject_1.AnonymousSubject;
    var Observable_1 = $__require('e');
    exports.Observable = Observable_1.Observable;
    $__require('13');
    $__require('16');
    $__require('1c');
    $__require('1f');
    $__require('24');
    $__require('27');
    $__require('2a');
    $__require('2d');
    $__require('33');
    $__require('36');
    $__require('39');
    $__require('3b');
    $__require('3e');
    $__require('43');
    $__require('46');
    $__require('47');
    $__require('4c');
    $__require('4e');
    $__require('4f');
    $__require('53');
    $__require('56');
    $__require('59');
    $__require('5c');
    $__require('60');
    $__require('63');
    $__require('66');
    $__require('6e');
    $__require('71');
    $__require('73');
    $__require('75');
    $__require('77');
    $__require('80');
    $__require('82');
    $__require('84');
    $__require('85');
    $__require('86');
    $__require('89');
    $__require('8c');
    $__require('8f');
    $__require('91');
    $__require('93');
    $__require('95');
    $__require('97');
    $__require('99');
    $__require('9c');
    $__require('9e');
    $__require('a1');
    $__require('a2');
    $__require('a5');
    $__require('a7');
    $__require('a9');
    $__require('ab');
    $__require('ad');
    $__require('b0');
    $__require('b1');
    $__require('b4');
    $__require('b5');
    $__require('b8');
    $__require('bb');
    $__require('c0');
    $__require('c2');
    $__require('c4');
    $__require('c6');
    $__require('c8');
    $__require('ca');
    $__require('cc');
    $__require('ce');
    $__require('cf');
    $__require('d2');
    $__require('d4');
    $__require('d7');
    $__require('d8');
    $__require('d9');
    $__require('da');
    $__require('db');
    $__require('dd');
    $__require('df');
    $__require('e0');
    $__require('e2');
    $__require('eb');
    $__require('ed');
    $__require('f0');
    $__require('f2');
    $__require('f4');
    $__require('f7');
    $__require('f9');
    $__require('fb');
    $__require('fc');
    $__require('fd');
    $__require('ff');
    $__require('101');
    $__require('103');
    $__require('105');
    $__require('107');
    $__require('109');
    $__require('10b');
    $__require('10d');
    $__require('10f');
    $__require('112');
    $__require('114');
    $__require('116');
    $__require('118');
    $__require('11a');
    $__require('11c');
    $__require('11e');
    $__require('122');
    $__require('124');
    $__require('126');
    $__require('128');
    $__require('12a');
    $__require('12c');
    $__require('12e');
    $__require('130');
    $__require('131');
    $__require('134');
    $__require('135');
    $__require('139');
    $__require('13b');
    $__require('13c');
    $__require('13f');
    $__require('141');
    $__require('143');
    $__require('145');
    $__require('147');
    $__require('149');
    $__require('14b');
    $__require('14d');
    $__require('14e');
    $__require('152');
    var Subscription_1 = $__require('30');
    exports.Subscription = Subscription_1.Subscription;
    var Subscriber_1 = $__require('6b');
    exports.Subscriber = Subscriber_1.Subscriber;
    var AsyncSubject_1 = $__require('11');
    exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
    var ReplaySubject_1 = $__require('6c');
    exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
    var BehaviorSubject_1 = $__require('f6');
    exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
    var ConnectableObservable_1 = $__require('110');
    exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
    var Notification_1 = $__require('9b');
    exports.Notification = Notification_1.Notification;
    var EmptyError_1 = $__require('ba');
    exports.EmptyError = EmptyError_1.EmptyError;
    var ArgumentOutOfRangeError_1 = $__require('af');
    exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    var ObjectUnsubscribedError_1 = $__require('154');
    exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
    var TimeoutError_1 = $__require('138');
    exports.TimeoutError = TimeoutError_1.TimeoutError;
    var UnsubscriptionError_1 = $__require('167');
    exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
    var timeInterval_1 = $__require('136');
    exports.TimeInterval = timeInterval_1.TimeInterval;
    var timestamp_1 = $__require('13d');
    exports.Timestamp = timestamp_1.Timestamp;
    var TestScheduler_1 = $__require('15c');
    exports.TestScheduler = TestScheduler_1.TestScheduler;
    var VirtualTimeScheduler_1 = $__require('15d');
    exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
    var AjaxObservable_1 = $__require('65');
    exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
    exports.AjaxError = AjaxObservable_1.AjaxError;
    exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
    var asap_1 = $__require('120');
    var async_1 = $__require('41');
    var queue_1 = $__require('153');
    var animationFrame_1 = $__require('16d');
    var rxSubscriber_1 = $__require('159');
    var iterator_1 = $__require('e5');
    var observable_1 = $__require('ea');
    var Scheduler = {
      asap: asap_1.asap,
      queue: queue_1.queue,
      animationFrame: animationFrame_1.animationFrame,
      async: async_1.async
    };
    exports.Scheduler = Scheduler;
    var Symbol = {
      rxSubscriber: rxSubscriber_1.rxSubscriber,
      observable: observable_1.observable,
      iterator: iterator_1.iterator
    };
    exports.Symbol = Symbol;
  })($__require('31'));
});
$__System.register("171", ["3"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Rx_1, InjectPropertyModel;
    return {
        setters: [function (Rx_1_1) {
            Rx_1 = Rx_1_1;
        }],
        execute: function () {
            InjectPropertyModel = function () {
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
            }();
            exports_1("InjectPropertyModel", InjectPropertyModel);
        }
    };
});

$__System.register("172", ["c", "171"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function InsertPropertyOnDomElement(elem, propName) {
        var model = new inject_property_model_1.InjectPropertyModel(propName, elem);
        new inject_property_1.InjectProperty(elem, model).injectPropertyToThisHtmlElement();
    }
    exports_1("InsertPropertyOnDomElement", InsertPropertyOnDomElement);
    var inject_property_1, inject_property_model_1;
    return {
        setters: [function (inject_property_1_1) {
            inject_property_1 = inject_property_1_1;
        }, function (inject_property_model_1_1) {
            inject_property_model_1 = inject_property_model_1_1;
        }],
        execute: function () {}
    };
});

$__System.register("6", ["b", "172"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function SynchrunPropertyAndAttribute(elem, attributePropName) {
        var firstTimer = true;
        var observable = main_1.GetNotificationOnUserSetDataOnAttribute(elem, attributePropName);
        main_2.InsertPropertyOnDomElement(elem, attributePropName);
        observable.subscribe(function (data) {
            if (firstTimer) {
                firstTimer = false;
                elem[attributePropName] = data;
                return;
            }
            firstTimer = true;
        });
        elem[attributePropName].subscribe(function (data) {
            if (firstTimer) {
                firstTimer = false;
                elem.setAttribute(attributePropName, data);
                return;
            }
            firstTimer = true;
        });
        return observable;
    }
    exports_1("SynchrunPropertyAndAttribute", SynchrunPropertyAndAttribute);
    var main_1, main_2;
    return {
        setters: [function (main_1_1) {
            main_1 = main_1_1;
        }, function (main_2_1) {
            main_2 = main_2_1;
        }],
        execute: function () {}
    };
});

$__System.register("173", ["8", "6"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var main_1, main_2, DataConsumer;
    return {
        setters: [function (main_1_1) {
            main_1 = main_1_1;
        }, function (main_2_1) {
            main_2 = main_2_1;
        }],
        execute: function () {
            DataConsumer = function () {
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
            }();
            exports_1("DataConsumer", DataConsumer);
        }
    };
});

$__System.register("174", ["173"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function ResolveRelation(elem) {
        var obj = new data_consumer_1.DataConsumer(elem);
        return obj.ResolveRelation();
    }
    exports_1("ResolveRelation", ResolveRelation);
    var data_consumer_1;
    return {
        setters: [function (data_consumer_1_1) {
            data_consumer_1 = data_consumer_1_1;
        }],
        execute: function () {}
    };
});

$__System.register("175", ["174"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function ResolveRelationWithOutput(elem) {
        var observable = main_1.ResolveRelation(elem);
        observable.subscribe(function (relatives) {});
        return observable;
    }
    exports_1("ResolveRelationWithOutput", ResolveRelationWithOutput);
    var main_1;
    return {
        setters: [function (main_1_1) {
            main_1 = main_1_1;
        }],
        execute: function () {}
    };
});

$__System.register("176", ["3", "175"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function ResolveRelationWithOutputAndNotify(elem) {
        var intObservable = new Rx_1.BehaviorSubject(undefined);
        var retObservable = intObservable.filter(function (val) {
            return typeof val != "undefined";
        });
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
        setters: [function (Rx_1_1) {
            Rx_1 = Rx_1_1;
        }, function (main_1_1) {
            main_1 = main_1_1;
        }],
        execute: function () {}
    };
});

$__System.register("177", ["5", "7", "176"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function ProductOriented(elem) {
        main_1.SynchrunOutputAttrpropLogic(elem);
        main_2.SynchrunInputAttrpropLogic(elem);
    }
    exports_1("ProductOriented", ProductOriented);
    function ResolveRelation(elem) {
        var observable = main_3.ResolveRelationWithOutputAndNotify(elem);
        var sub = observable.subscribe(function (relativeOutput) {
            if (!elem['skip']) elem['input'] = relativeOutput;
            if (elem['data-suplyersfield'][0].tagName === "TEMPLATE") {
                elem['skip'] = true;
            }
        });
        return observable;
    }
    exports_1("ResolveRelation", ResolveRelation);
    var main_2, main_1, main_3;
    return {
        setters: [function (main_2_1) {
            main_2 = main_2_1;
        }, function (main_1_1) {
            main_1 = main_1_1;
        }, function (main_3_1) {
            main_3 = main_3_1;
        }],
        execute: function () {}
    };
});

$__System.register("178", ["177"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var main_1, main_2, ApplyProductOrientedOnElements;
    return {
        setters: [function (main_1_1) {
            main_1 = main_1_1;
            main_2 = main_1_1;
        }],
        execute: function () {
            ApplyProductOrientedOnElements = function () {
                function ApplyProductOrientedOnElements(elem) {
                    this.elem = elem;
                }
                ApplyProductOrientedOnElements.prototype.ApplyProductOrientedOnElements = function () {
                    main_1.ProductOriented(this.elem);
                };
                ApplyProductOrientedOnElements.prototype.ApplyResolveRelationOnElements = function () {
                    main_2.ResolveRelation(this.elem);
                };
                return ApplyProductOrientedOnElements;
            }();
            exports_1("ApplyProductOrientedOnElements", ApplyProductOrientedOnElements);
        }
    };
});

$__System.register("1", ["178"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function registerProductOriented() {
        var elements = document.querySelectorAll("[input-from],[input],[logic]");
        for (var i = 0; i < elements.length; i++) {
            var elem = elements[i];
            var obj = new apply_product_oriented_on_element_1.ApplyProductOrientedOnElements(elem);
            obj.ApplyProductOrientedOnElements();
        }
        for (var i = 0; i < elements.length; i++) {
            var elem = elements[i];
            var obj = new apply_product_oriented_on_element_1.ApplyProductOrientedOnElements(elem);
            obj.ApplyResolveRelationOnElements();
        }
        var insertedNodes = [];
        document.addEventListener("DOMNodeInserted", function (e) {
            var elem = e.target;
            if (elem && elem.tagName) {
                var obj = new apply_product_oriented_on_element_1.ApplyProductOrientedOnElements(elem);
                obj.ApplyProductOrientedOnElements();
                obj.ApplyResolveRelationOnElements();
            }
        }, false);
    }
    var apply_product_oriented_on_element_1;
    return {
        setters: [function (apply_product_oriented_on_element_1_1) {
            apply_product_oriented_on_element_1 = apply_product_oriented_on_element_1_1;
        }],
        execute: function () {
            registerProductOriented();
        }
    };
});

})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map
