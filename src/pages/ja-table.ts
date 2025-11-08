import { css, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RequestData } from "../domain/model/request-data";
import { ColumnKey } from "../constants/column-key-relation";

const TAG = 'ja-table';

@customElement(TAG)
export class JaTable extends LitElement {
  @property({type: Array}) private data: Array<RequestData> = [];
  @property({type: Array}) private columns: Array<ColumnKey> = [];

  private renderRows(data: Array<RequestData>) {
    return data.map(d => html`<tr>${this.viewData(d)}</tr>`);
  }

  private viewData(data: RequestData) {
    return this.columns.filter(column => !column.hidden).map(column => html`<td>${data.get(column.key)}</td>`);
  }

  private viewRow(row: Array<string>): TemplateResult {
    return html`
      <tr>
        ${row.map(value => html`<td>${value}</td>`)}
      </tr>
    `
  }

  protected firstUpdated(): void {
    console.log(`test: ${this.data}`)
  }

  render() {
    return html`
      <table border="1">
        <thead>
          ${this.viewRow(this.columns.filter(column => !column.hidden).map(column => column.column))}
        </thead>

        <tbody>
          ${this.renderRows(this.data)}
        </tbody>
      </table>
    `
  }

  static styles = css`
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      padding: 8px;
      text-align: left;
    }
    thead {
      background-color: #F2F2F2;
    }
    thead td {
      font-weight: bold
    }
    tbody tr:nth-child(odd) {
      background-color: #DAF9FF;
    }
    tbody tr:nth-child(even) {
      background-color: #E4FCFF;
    }
  `;

}

declare global {
  interface HTMLElementTagNameMap {
    [TAG]: JaTable
  }
}
