class IconButton extends HTMLElement {
    static get is() {
        return 'icon-button';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/icon-button/icon-button.css">
            <custom-icon></custom-icon>
        `;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    static get observedAttributes() {
        return ['data-icon'];
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
        if (attributeName === 'data-icon' && this.dataset.icon) {
            const customIcon = this.shadow.querySelector('custom-icon');

            customIcon.dataset.icon = this.dataset.icon;
        }
    }
}

window.customElements.define(IconButton.is, IconButton);