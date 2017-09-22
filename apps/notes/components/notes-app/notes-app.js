class NotesApp extends HTMLElement {
    static get is() {
        return 'notes-app';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
	        <link rel="stylesheet" href="components/notes-app/notes-app.css">
            <div class="content"></div>
        `;
    }

    connectedCallback() {
        this.renderScreenMain();
    }

    disconnectedCallback() {}

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}

    renderScreenMain() {
        const content = this.shadow.querySelector('.content');

        content.innerHTML = `<screen-main></screen-main>`;
    }

    renderScreenDetail(id) {
        const content = this.shadow.querySelector('.content');

        content.innerHTML = `<screen-detail ${typeof id === 'number' ? `data-id="${id}"` : ''}></screen-detail>`;
    }
}

window.customElements.define(NotesApp.is, NotesApp);