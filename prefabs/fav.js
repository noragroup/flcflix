class FavorisButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button class="favoris-btn">❤️ Favoris</button>
    `;
  }
}

customElements.define("favoris-button", FavorisButton);