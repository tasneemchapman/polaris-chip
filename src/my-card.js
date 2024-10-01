import { LitElement, html, css } from 'lit';
// import '@haxtheweb/multiple-choice.js';

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
    this.description = "Lets just see if this does anything";
    this.buttonTitle = "";
    this.fancy = false;
   // this.summary = "More Information";
    
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 20px 5px 5px red;
        margin-bottom: 25px;
      } 
      details summary {
        font-size: 15px;
        margin-bottom: 15px;
    
      }
      details [open] summary {
        background: white;
      }
      details div {
        width: 400px;
        border: 2 solid;
        text-align: left;
        font-display: inline-block; // is a block flex even a thing???
        padding: 15px;
        overflow: 70px;
        background: white;
      }
      div {
        width: 500px;
        padding: 16px;
        text-align: center-align;
        font-family: Georgia, 'Times New Roman';
        justify-content: center;
        border: 1px solid;
        border-radius: 8px;
        margin: 24px;
        background: rgb(235,196,213);
        background: radial-gradient(circle, rgba(235,196,213,1) 0%, rgba(194,215,240,1) 100%);
        
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
    <h1>${this.title}</h1>
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
        <div>
         <slot>${this.description}</slot>
        </div>
      </details>
    <a href="${this.link}" target="_blank">${this.buttonTitle}</a>
  </div>
  `;
}
openChanged(e) {
  console.log(e.newState);
  if (e.newState === "open") {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

static get properties() {
  return {
    title: { type: String },
    image: { type: String },
    link: { type: String },
    description: { type: String },
    buttonTitle: { type: String}, //attribute: button-title
    fancy: { type: Boolean, reflect: true }
    //summary: { type, String}
   };
 } 
}

globalThis.customElements.define(MyCard.tag, MyCard);
