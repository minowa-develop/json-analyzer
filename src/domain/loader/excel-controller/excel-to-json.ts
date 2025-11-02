import * as XLSX from 'xlsx';
import { Loadable } from '../loadable';
import { TableRangeGetter } from './table-range-getter';

export class ExcelToJson implements Loadable {
  private readonly file: File;
  private readonly sheetNo: number = 0;
  private readonly startTableCell: string;

  constructor(file: File, sheetNo: number, startTableCell: string){
    this.file = file;
    this.sheetNo = sheetNo;
    this.startTableCell = startTableCell;
  }

  public async load(): Promise<Array<object>> {
    const arrayBuffer = await ExcelToJson.readFileAsArrayBuffer(this.file);
    const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[this.sheetNo]];

    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      range: TableRangeGetter.get(this.startTableCell, worksheet),
      header: ExcelToJson.cellToRowNo(this.startTableCell)
    });

    return jsonData as Array<object>;
  }

  private static readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = () => reject(reader.error);

      reader.readAsArrayBuffer(file);
    });
  }

  private static cellToRowNo(cell: string): number | undefined {
    return Number(cell.match(/\d+/)?.[0]);
  }
}
