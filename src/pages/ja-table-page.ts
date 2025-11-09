import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RequestsConverter } from "../domain/requests-converter";
import { RequestData } from "../domain/model/request-data";
import { COLUMN_KEYS } from "../constants/column-key-relation";
import { REQUEST_FILE } from "../constants/constants";
import './ja-table';
import '@shoelace-style/shoelace/dist/components/button/button';
import '@shoelace-style/shoelace/dist/themes/light.css';

const TAG = 'ja-table-page';

@customElement(TAG)
export class JaTablePage extends LitElement {
  @property({ attribute: false }) data: Array<RequestData> = [];

  render() {
    return html`
      <button id="initialize">initialize</button>
      <sl-button>test</sl-button>
      <input type="file" id="import_file"></input>
      <br>
      <br>

      <div class="">
        <ja-table .data=${this.data} .columns=${COLUMN_KEYS}></ja-table>
      </div>
    `
  }

  protected async firstUpdated() {
    this.data = await RequestsConverter.convert(REQUEST_FILE, COLUMN_KEYS) as Array<RequestData>;
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG]: JaTablePage
  }
}
