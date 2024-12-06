class Snackbar extends HTMLElement {
  constructor() {
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
        .snackbar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
            display: none;
        }
        `;
    const div = document.createElement("div");
    div.classList.add("snackbar");
    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".snackbar").style.display = "block";
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".snackbar").style.display = "none";
  }
}

customElements.define("snackbar-element", Snackbar);
