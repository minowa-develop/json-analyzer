import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { RequestsConverter } from "../domain/requests-converter";
import { RequestData } from "../domain/model/request-data";
import { COLUMN_KEYS } from "../constants/column-key-relation";
import { REQUEST_FILE } from "../constants/constants";

const TAG = 'ja-table-page';

@customElement(TAG)
export class JaTablePage extends LitElement {
  data: Array<RequestData> = [];


  private renderData(data: Array<RequestData>): TemplateResult[] {
    return data.map((record) => html`
        <tr>
          ${this.renderRow(record)}
        </tr>
      `
    )
  }
  private renderRow(record: RequestData): TemplateResult[] {
    return Object.entries(record.getFields()).map((key) => html`
        <td>${key}</td>
      `
    )
  }


  render() {
    return html`
      <button id="initialize">initialize</button>
      <input type="file" id="import_file"></input>

      <div class="request-data_area">
        <table id="request-data_area" border="1" style="border-collapse: collapse; width: 100%;">
          ${this.renderData(this.data)}
        </table>
      </div>
    `
  }

  protected async firstUpdated() {
    this.data = await RequestsConverter.convert(REQUEST_FILE, COLUMN_KEYS) as Array<RequestData>;
    console.log('tgerws')
    console.log(this.data);
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG]: JaTablePage
  }
}