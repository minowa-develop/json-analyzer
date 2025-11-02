import { ColumnKey } from "../../../../constants/column-key-relation";
import { RequestData } from "../../request-data";
import { RequestMapable } from "../request-mapable";

export class ExcelToRequestMapper implements RequestMapable{
  private columnKeys: Array<ColumnKey>;

  constructor(columnKeys: Array<ColumnKey>){
    this.columnKeys = columnKeys;
  }

  public map(json: Array<object>): RequestData {
    const request = new RequestData();
    for (const relation of this.columnKeys) {
      request.set(relation.key, this.get(json, relation.column));
    }
    return request;
  }

  private get(obj: unknown, key: string): string {
    if (typeof obj === 'object' && obj !== null && key in obj) {
      const value = (obj as any)[key];
      return value.toString().replace(/\r\n|\r/g, '\n');
    }
    return '';
  }
}
