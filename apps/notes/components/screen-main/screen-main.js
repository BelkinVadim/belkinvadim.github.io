class ScreenMain extends HTMLElement {
    static get is() {
        return 'screen-main';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <app-screen>
                <app-header>
                    <app-toolbar class="primary" role="toolbar">
                        <icon-button data-icon="menu" role="button" tabindex="0"></icon-button>
                        <div class="title">Notes</div>
                        <icon-button data-icon="search" role="button" tabindex="0"></icon-button>
                    </app-toolbar>
                </app-header>
                <notes-list></notes-list>
                <floating-button class="accent fixed js-create" data-icon="add" role="button"></floating-button>
            </app-screen>
        `;

        this.handleCreateNote = this.handleCreateNote.bind(this);
    }

    connectedCallback() {
        const notesList = this.shadow.querySelector('notes-list');
        const buttonCreate = this.shadow.querySelector('.js-create');

        buttonCreate.addEventListener('click', this.handleCreateNote);

        Notes
            .getAll()
            .then(notes => notesList.notes = notes);
    }

    disconnectedCallback() {
        const buttonCreate = this.shadow.querySelector('.js-create');

        buttonCreate.removeEventListener('click', this.handleCreateNote);
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}

    async handleCreateNote() {
        const notesApp = document.querySelector('notes-app');

        await Notes.put({
            title: '',
            text: '',
            created: new Date().getTime(),
            updated: new Date().getTime()
        });

        await Notes
            .getAll()
            .then(notes => notesApp.renderScreenDetail(notes[notes.length - 1].id));
    }
}

window.customElements.define(ScreenMain.is, ScreenMain);