class CustomIcon extends HTMLElement {
    static get is() {
        return 'custom-icon';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/custom-icon/custom-icon.css">
            <svg viewBox="0 0 32 32" width="15" height="15">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/icons.svg"></use>
            </svg>
        `;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    static get observedAttributes() {
        return ['data-icon'];
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
        if (attributeName === 'data-icon' && this.dataset.icon) {
            const use = this.shadow.querySelector('use');

            use.setAttribute('xlink:href', `img/icons.svg#${this.dataset.icon}`);
        }
    }
}

window.customElements.define(CustomIcon.is, CustomIcon);