import { ApplyProductOrientedOnElements } from "./apply-product-oriented-on-element";
function registerProductOriented() {

    var elements = document.querySelectorAll("[input-from],[input],[logic]");

    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var obj = new ApplyProductOrientedOnElements(<HTMLElement>elem);
        obj.ApplyProductOrientedOnElements();
    }

    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var obj = new ApplyProductOrientedOnElements(<HTMLElement>elem);
        obj.ApplyResolveRelationOnElements();
    }


    var insertedNodes = [];
    document.addEventListener("DOMNodeInserted", function (e) {

        var elem = e.target as HTMLElement;
        recursia(elem as HTMLElement);
        function recursia(elem: HTMLElement) {
            if (elem && elem.tagName) {
                var obj = new ApplyProductOrientedOnElements(<HTMLElement>elem);
                obj.ApplyProductOrientedOnElements();
                obj.ApplyResolveRelationOnElements();
                for (var i = 0; i < elem.children.length; i++) {
                    recursia(elem.children[i] as HTMLElement);
                }
            }
        }
        
    }, false);
}


registerProductOriented();
