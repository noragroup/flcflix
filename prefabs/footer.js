class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="footer">
                <p>Un site de FloLeCrafteur</p>
                <p>Uicons by <a href="https://www.flaticon.com/uicons" target="_blank">Flaticon</a></p>
            </footer>
        `;
    }
}

customElements.define("my-footer", MyFooter);