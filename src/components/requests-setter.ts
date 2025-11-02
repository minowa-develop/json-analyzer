import { ElementGetter } from "../utils/element-getter";
import { ElementSousa } from "../utils/element-sousa";
import { ColumnKey } from "../constants/column-key-relation";
import { REQUEST_FILE } from "../constants/constants";
import { RequestData } from "../domain/model/request-data";

export class RequestSetter {
  public static async show(requests: Array<RequestData>, columnKeys: Array<ColumnKey>){
    const table: HTMLTableElement = ElementGetter.getTableElementById('request-data_area');

    // reset tr
    while (table.rows.length > 0) table.deleteRow(0);

    // header
    const head = document.createElement("tr");
    for(const column of columnKeys){
      if(column.hidden) continue;
      head.appendChild(ElementSousa.createTdElement(column.column, column.key),);
    }
    head.appendChild(ElementSousa.createTdElement('操作'));
    table.appendChild(head);

    // ファイル出力
    const output: HTMLInputElement = ElementGetter.getInputElementById('initialize');
    output.addEventListener('click', async () => {
      await window.ipcRenderer.writeFile(REQUEST_FILE, JSON.stringify(requests));
    })


    // data
    for (const obj of requests) {
      const tr = document.createElement("tr");

      for(const column of columnKeys){
        if(column.hidden) continue;
        tr.appendChild(ElementSousa.createTdElement(obj.get(column.key), column.key));
      }

      // delete button
      tr.appendChild(RequestSetter.createButtonsTd(obj));

      table.appendChild(tr);
    }
  }

  private static createButtonsTd(request: RequestData): HTMLTableCellElement{
    const tdElement: HTMLTableCellElement = document.createElement("td");
    // 削除ボタン
    tdElement.appendChild(ElementSousa.createButtonElement('削除', async () => {
      request.set('deleted', 'true');
      await window.ipcRenderer.writeFile(request.getFilename()!, JSON.stringify(request));
    }));

    // 詳細ボタン　いつか別画面で実装する
    tdElement.appendChild(ElementSousa.createButtonElement('詳細'));

    // 作成ボタン
    tdElement.appendChild(ElementSousa.createButtonElement('作成'));
    return tdElement;
  }

}
