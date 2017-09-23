class AppDialog extends HTMLElement {
    static get is() {
        return 'app-dialog';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
	        <link rel="stylesheet" href="components/app-dialog/app-dialog.css">
            <div class="backdrop js-close"></div>
			<div class="dialog">
				<slot></slot>
			</div>
        `;

        this.handleClose = this.handleClose.bind(this);
    }

    connectedCallback() {
        this.shadow.querySelector('.js-close').addEventListener('click',  this.handleClose);
    }

    disconnectedCallback() {
        this.shadow.querySelector('.js-close').removeEventListener('click',  this.handleClose);
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}

    handleClose() {
        this.hidden = true;
    }
}

window.customElements.define(AppDialog.is, AppDialog);