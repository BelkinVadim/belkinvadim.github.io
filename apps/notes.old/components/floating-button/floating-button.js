class FloatingButton extends HTMLElement {
    static get is() {
        return 'floating-button';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/floating-button/floating-button.css">
            <div class="shade"></div>
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

window.customElements.define(FloatingButton.is, FloatingButton);