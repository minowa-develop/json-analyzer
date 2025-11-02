import * as XLSX from 'xlsx';

export class TableRangeGetter {
  public static get(startCell: string, worksheet: XLSX.WorkSheet): string {
    const start = XLSX.utils.decode_cell(startCell);
    let endRow = start.r;
    let endCol = start.c;

    // 探索：行方向（下へ）
    while (true) {
      const cellAddress = XLSX.utils.encode_cell({ r: endRow + 1, c: start.c });
      if (worksheet[cellAddress]) {
        endRow++;
      } else {
        break;
      }
    }

    // 探索：列方向（右へ）
    while (true) {
      const cellAddress = XLSX.utils.encode_cell({ r: start.r, c: endCol + 1 });
      if (worksheet[cellAddress]) {
        endCol++;
      } else {
        break;
      }
    }

    const endCell = XLSX.utils.encode_cell({ r: endRow, c: endCol });
    console.log(`${startCell}:${endCell}`)
    return `${startCell}:${endCell}`;
  }
}
