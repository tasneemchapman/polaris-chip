import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      a {
        background-color: grey;
        color: black;
        font-size: 12px;
        padding: 10px;
        margin: 8px;
        text-decoration: none;
      }
      a:hover,
      a:active {
        background-color: LightGray; 
        border-radius: 8px;
        border-color: solid black;
      }
    `;
  }

  render() {
    return html`<a>${this.title}</a>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
