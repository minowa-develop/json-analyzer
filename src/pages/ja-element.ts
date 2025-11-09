import { Router } from "@vaadin/router";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import './ja-table-page';
import './ja-detail-page';
import { RequestData } from "../domain/model/request-data";
import { provide } from "@lit/context";
import { viewModelContext } from "../view-model-content";
import '@shoelace-style/shoelace/dist/themes/light.css';

const TAG = 'ja-element';

@customElement(TAG)
export class JaElement extends LitElement {
  @provide({ context: viewModelContext }) viewModel: Array<RequestData> = [];

  render() {
    return html`
      <main></main>
    `
  }

  firstUpdated(){
    console.log('test');
    const outlet = this.renderRoot.querySelector('main');
    const router = new Router(outlet);

    router.setRoutes([
      { path: '/', component: 'ja-table-page' },
      { path: '/table', component: 'ja-table-page' },
      { path: '/detail/:id', component: 'ja-detail-page' },
      { path: '(.*)', component: 'ja-not-found' },
    ]);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG]: JaElement
  }
}