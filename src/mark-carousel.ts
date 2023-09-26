import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
  static override styles = css`
    .slider-container {
      position: relative;
      width: 100%;
    }

    .slider img {
      width: 100%;
      height: auto;
    }

    .navigation {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    button {
      margin: 0 10px;
      padding: 5px 10px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
  `;

  @property({ type: Array }) images: string[] = [];
  @property({ type: Number }) currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  override render() {
    return html`
      <div class="slider-container">
        <div class="slider">
          <img src="${this.images[this.currentIndex]}" alt="Slider Image" />
        </div>
        <div class="navigation">
          <button @click="${this.prevImage}">Previous</button>
          <button @click="${this.nextImage}">Next</button>
        </div>
      </div>
    `;
  }
}
