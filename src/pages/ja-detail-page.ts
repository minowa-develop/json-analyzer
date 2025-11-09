import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { RequestData } from "../domain/model/request-data";
import '@shoelace-style/shoelace/dist/components/textarea/textarea';
import './ja-table';
import { COLUMN_KEYS, ColumnKey } from "../constants/column-key-relation";

const TAG = 'ja-detail-page';

@customElement(TAG)
export class JaDetailPage extends LitElement {
  detail: RequestData = new RequestData();

  private renderFields(){
    return COLUMN_KEYS.filter(column => !column.hidden).map(column => this.renderField(column));
  }

  private renderField(column: ColumnKey){
    return html`
      <h2>${column.column}</h2>
      <sl-textarea .value=${this.detail!.get(column.key)}></sl-textarea>
    `;
  }

  render() {
    return html`
      ${this.renderFields()}
    `
  }

  protected async firstUpdated() {
    const tmp = localStorage.getItem('detail');
    this.detail.setFields(tmp ? JSON.parse(tmp) : null);
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG]: JaDetailPage
  }
}
