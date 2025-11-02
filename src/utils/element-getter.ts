import { ID, INPUT_TAG_ID, SELECT_TAG_ID, TABLE_TAG_ID, TD_TAG_ID } from "../constants/id-constants.js";

export class ElementGetter {
  // 存在しないIDを指定していた場合は例外を出力する
  public static getElementById<T extends HTMLElement>(id: ID): T{
    let element = document.getElementById(id);
    if(element === null){
        throw new Error(`parentId: ${id} is null.`);
    }
    return element as T;
  }

  public static getSelectElementById(id: SELECT_TAG_ID): HTMLSelectElement{
    return ElementGetter.getElementById<HTMLSelectElement>(id);
  }
  public static getTdElementById(id: TD_TAG_ID): HTMLTableCellElement{
    return ElementGetter.getElementById<HTMLTableCellElement>(id);
  }
  public static getInputElementById(id: INPUT_TAG_ID): HTMLInputElement{
    return ElementGetter.getElementById<HTMLInputElement>(id);
  }
  public static getTableElementById(id: TABLE_TAG_ID): HTMLTableElement{
    return ElementGetter.getElementById<HTMLTableElement>(id);
  }
}
