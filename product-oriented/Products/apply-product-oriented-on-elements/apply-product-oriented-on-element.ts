import { ProductOriented } from "../product-oriented/main";
import { ResolveRelation } from "../product-oriented/main";

export class ApplyProductOrientedOnElements {
    constructor(private elem: HTMLElement) {

    }

    ApplyProductOrientedOnElements() {
        ProductOriented(this.elem);
    }
    ApplyResolveRelationOnElements() {
        ResolveRelation(this.elem);
    }
}