export type ColumnKey = {column: string, key: string, hidden?: boolean}
export const COLUMN_KEYS: Array<ColumnKey> = [
  { column: 'No', key: 'no' },
  { column: '要望/課題', key: 'descript' },
  { column: '分類', key: 'kind', hidden: true },
  { column: '要望T', key: 'name', hidden: true },
  { column: '優先度', key: 'primary', hidden: true },
  { column: 'ステータス', key: 'status', hidden: true },
  { column: '起票日', key: 'date', hidden: true },
  { column: '回答予定期限', key: 'schedule', hidden: true },
  { column: '回答T', key: 'answer-t', hidden: true },
  { column: '実案(草案)', key: 'answer' },
]
