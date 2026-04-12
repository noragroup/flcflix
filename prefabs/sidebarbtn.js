class MySidebarBtn extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="nav-bar" id="openSidebarBtn">
        <div class="navinfo">
            <h1>Menu</h1>
        </div>
        <img src="img/icons/white/unselected/Menu white unselected.png" id="SidebarBtnImg">
    </div>
    `;
  }
}

customElements.define("sidebar-btn", MySidebarBtn);