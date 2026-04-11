class MySidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" id="closeSidebarBtn">&times;</a>
        <nav>
            <ul>
                <li><a href="https://noragroup.github.io/flcflix/" id="link">Accueil</a></li>
                <li><a href="https://noragroup.github.io/flcflix/films.html" id="link">Films</a></li>
                <li><a href="https://noragroup.github.io/flcflix/series.html" id="link">Séries</a></li>
            </ul>
            <ul>
                <li><a href="https://noragroup.github.io/flcflix/nights.html" id="link">FLC Flix Nights</a></li>
            </ul>
            <ul>
                <li><a href="https://noragroup.github.io/noragroup/" id="link" target="_blank">Groupe Nora</a></li>
            </ul>
        </nav>
    </div>
    `;
  }
}

customElements.define("my-sidebar", MySidebar);