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
    this.title = "place holder";
    this.link = '#';
    this.image = null;
    this.description = "";
    this.buttonTitle = "";
    
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      div {
        padding: 16px;
        text-align: center-align;
        font-family: Georgia, 'Times New Roman';
        justify-content: center;
        border: 1px solid;
        border-radius: 8px;
        margin: 24px;
      }
      img {
        margin: auto;
        display: flex;
        height: 275px;
        width: auto;
  
      }
      h2 {
        text-align: center;
      }
    
      a, button {
        background-color: grey;
        color: black;
        font-size: 12px;
        padding: 6px;
        margin: 8px;
        text-decoration: none;
        border: 1px solid;
        text-align: center;
      }
      
      a:hover,
      a:focus {
        background-color: LightGray; 
        border-radius: 8px;
      }
    `;
  }

  render() {
    return html`
    <div>
    <img src="${this.image}"/>
    <h2>${this.title}</h2>
    <p>${this.description}</p>
    <a href="${this.link}" target="_blank">${this.buttonTitle}</a>
  </div>
  `;
}

static get properties() {
  return {
    title: { type: String },
    image: { type: String },
    link: { type: String },
    description: { type: String },
    buttonTitle: { type: String}
   };
 } 
}

globalThis.customElements.define(MyCard.tag, MyCard);
