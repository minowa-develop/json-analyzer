import { ColumnKey } from "../../../constants/column-key-relation";
import { ExcelToRequestMapper } from "./implements/excel-mapper";
import { FileMapper } from "./implements/file-mapper";
import { RequestMapable } from "./request-mapable";

export class RequestMapperFactory {
  public static create(file: string | File, columnKeys: Array<ColumnKey>): RequestMapable{
    if(typeof file === 'string'){
      return new FileMapper();
    }
    return new ExcelToRequestMapper(columnKeys);
  }
}
