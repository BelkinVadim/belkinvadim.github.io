class CustomButton extends HTMLElement {
    static get is() {
        return 'custom-button';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/custom-button/custom-button.css">
            <div class="shade"></div>
            <slot></slot>
        `;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}
}

window.customElements.define(CustomButton.is, CustomButton);