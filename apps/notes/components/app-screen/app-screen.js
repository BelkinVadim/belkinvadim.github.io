const template = `
	<link rel="stylesheet" href="components/app-screen/app-screen.css">
	<slot></slot>
`;

class AppScreen extends HTMLElement {
    static get is() {
        return 'app-screen';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/app-screen/app-screen.css">
	        <slot></slot>
        `;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}
}

window.customElements.define(AppScreen.is, AppScreen);