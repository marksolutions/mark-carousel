import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'mark-carousel': MarkCarousel;
  }
}

/**
 * A custom web component that allows slide its content.
 */
@customElement('mark-carousel')
export class MarkCarousel extends LitElement {
  static override styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  override render() {
    return html`Mark carousel`;
  }
}
