class ScrollToTopBtn extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="scroll-top-wrapper" id="scrollTopWrapper">
                <div class="scroll-top-btn" id="scrollTopBtn">
                    <i class="fi fi-br-angle-up" id="arrow"></i>
                    <span class="scroll-text">Haut de page</span>
                </div>
            </div>
        `;
    }
}

customElements.define("scroll-top", ScrollToTopBtn);