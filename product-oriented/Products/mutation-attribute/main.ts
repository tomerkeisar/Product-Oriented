import { MutationAttribute } from "./mutation-attribute";


export function GetNotificationOnUserSetDataOnAttribute(elem: HTMLElement, attributeName: string) {
    return new MutationAttribute(elem, attributeName)
        .MutationOnAttribute();
}