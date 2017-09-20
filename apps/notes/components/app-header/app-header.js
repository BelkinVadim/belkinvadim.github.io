class AppHeader extends HTMLElement {
    static get is() {
        return 'app-header';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/app-header/app-header.css">
            <slot></slot>
        `;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}
}

window.customElements.define(AppHeader.is, AppHeader);