import { Loadable } from "./loadable";
import { ExcelToJson } from "./excel-controller/excel-to-json";
import { FileToJson } from "./file-controller/file-to-json";
import { SHEET_NO, TABLE_START_CELL } from "../../constants/constants";

export class LoaderFactory {
  public static createLoader(file: string | File): Loadable {
    if(typeof file === 'string'){
      return new FileToJson(file);
    }
    return new ExcelToJson(file, SHEET_NO, TABLE_START_CELL);
  }
}
