import { LitElement, html, css } from 'lit';
import '../src/mark-carousel'

export class MarkCarouselDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`<mark-carousel></mark-carousel>`;
  }
}
customElements.define('mark-carousel-demo', MarkCarouselDemo);
