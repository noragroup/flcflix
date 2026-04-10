class FavorisButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <button class="bookmarkBtn" onclick="addToFavorites('https://flcorp.github.io/flcflix/films/filmspages/action/argylle.html', 'https://github.com/FLCorp/flcflixposters/blob/main/argylle.jpg?raw=true')">
        <span class="IconContainer">
             <i class="fi fi-sr-bookmark"></i>
        </span>
        <p class="text">Favoris</p>
    </button>
    `;
    }
}

customElements.define("favoris-button", FavorisButton);