class FilmsGenre extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="category-wrapper">
                <div class="category-btn" id="categoryBtn">
                    <div class="category-header">
                        <img src="https://noragroup.github.io/flcflix/img/nouveau/MOVIES.png" alt="">
                        <span>Choisir une catégorie</span>
                    </div>
                    <div class="category-sidebar">
                        <ul>
                            <li><a href="https://noragroup.github.io/flcflix/films/all.html">Tous les films</a></li>
                            <li><a href="https://noragroup.github.io/flcflix/films/action.html">Action</a></li>
                            <li><a href="https://noragroup.github.io/flcflix/films/animation.html">Animation</a></li>
                            <li><a href="https://noragroup.github.io/flcflix/films/aventure.html">Aventure</a></li>
                            <li><a href="https://noragroup.github.io/flcflix/films/biopic.html">Biopic</a></li>
                        </ul>
                    </div>
                </div>
                <div class="overlay" id="overlay"></div>
            </div>
        `;
    }
}

customElements.define("genre-selec", FilmsGenre);