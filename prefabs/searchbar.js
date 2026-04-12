class SearchBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="search-section">
                <div class="input__container" id="search-bar-container">
                    <div class="shadow__input"></div>
                    <button class="input__button__shadow"><i class="fi fi-br-search"></i></button>
                    <input type="text" name="text" class="input__search" id="search-input" placeholder="Que recherchez-vous ?">
                </div>
                <div id="search-results"></div>
            </div>
        `;
    }
}

customElements.define("search-bar", SearchBar);