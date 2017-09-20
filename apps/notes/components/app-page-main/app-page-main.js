class AppPageMain extends HTMLElement {
    static get is() {
        return 'app-page-main';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/app-page-main/app-page-main.css">
            <app-header>
                <app-toolbar class="primary" role="toolbar">
                    <icon-button data-icon="menu" role="button" tabindex="0"></icon-button>
                    <div class="title">Notes</div>
                    <icon-button data-icon="search" role="button" tabindex="0"></icon-button>
                </app-toolbar>
            </app-header>
            <app-drawer></app-drawer>
            <floating-button class="accent" data-icon="add" role="button"></floating-button>
            <notes-list></notes-list>
        `;

        this.createNote = this.createNote.bind(this);
    }

    connectedCallback() {
        const floatingButton = this.shadow.querySelector('floating-button');

        floatingButton.addEventListener('click', this.createNote);
    }

    disconnectedCallback() {
        const floatingButton = this.shadow.querySelector('floating-button');

        floatingButton.removeEventListener('click', this.createNote);
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}

    createNote() {}
}

window.customElements.define(AppPageMain.is, AppPageMain);