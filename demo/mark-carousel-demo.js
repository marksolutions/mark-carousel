import { LitElement, html, css } from 'lit';
import '../src/mark-carousel';

export class MarkCarouselDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        width: 400px;
      }
    `,
  ];

  render() {
    return html`<mark-carousel
      .images="${[
        'https://image.tmdb.org/t/p/w500/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg',
        'https://image.tmdb.org/t/p/w500/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg',
        'https://image.tmdb.org/t/p/w500/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
      ]}"
    ></mark-carousel>`;
  }
}
customElements.define('mark-carousel-demo', MarkCarouselDemo);
