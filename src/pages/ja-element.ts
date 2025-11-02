import { Router } from "@vaadin/router";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import './ja-table-page';

const TAG = 'ja-element';

@customElement(TAG)
export class JaElement extends LitElement {

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
      { path: '(.*)', component: 'ja-not-found' },
    ]);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG]: JaElement
  }
}