const template = `
	<link rel="stylesheet" href="components/clear/clear.css">
	<slot></slot>
`;

class Clear extends HTMLElement {
    static get is() {
        return 'clear';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = template;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {
        return ['hidden'];
    }
}

window.customElements.define(Clear.is, Clear);