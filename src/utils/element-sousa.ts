import { TD_TAG_ID, SELECT_TAG_ID } from "../constants/id-constants.js";
import { ElementGetter } from "./element-getter.js";

export class ElementSousa {
  /** valueを表示するtd要素を作成 */
  public static createTdElement(value: string, classnm?: string): HTMLTableCellElement{
    const test = (value ?? "").replace(/\n/g, "<br>");
    let tdElement = document.createElement("td");
    tdElement.innerHTML = test;
    if (classnm) {
      tdElement.className = classnm;
    }
    return tdElement;
  }

  /** valueを表示するボタン要素を作成 */
  public static createButtonElement(value: string, pushFunc?: () => void): HTMLInputElement{
    let elm = document.createElement("input");
    elm.type = "button";
    elm.value = value;
    if(pushFunc) {
      elm.addEventListener('click', pushFunc);
    }
    return elm;
  }

  /**
   * 指定したIDの子要素を削除
   * @param id
   */
  public static clearChildElement(id: TD_TAG_ID|SELECT_TAG_ID): void{
    let element: HTMLElement = ElementGetter.getElementById(id);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

}
