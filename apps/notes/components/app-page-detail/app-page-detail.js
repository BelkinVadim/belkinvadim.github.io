class AppPageDetail extends HTMLElement {
    static get is() {
        return 'app-page-detail';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/app-page-detail/app-page-detail.css">
            <app-header>
                <app-toolbar class="primary" role="toolbar">
                    <icon-button data-icon="arrow_back" role="button" tabindex="0"></icon-button>
                    <div class="title"></div>
                    <icon-button data-icon="done" role="button" tabindex="0"></icon-button>
                </app-toolbar>
            </app-header>
            <div class="content">
                <note-detail></note-detail>
            </div>
        `;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}
}

window.customElements.define(AppPageDetail.is, AppPageDetail);