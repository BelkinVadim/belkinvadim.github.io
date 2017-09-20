class ScreenDetail extends HTMLElement {
    static get is() {
        return 'screen-detail';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <app-screen>
                <app-header>
                    <app-toolbar class="primary" role="toolbar">
                        <icon-button class="js-back" data-icon="arrow_back" role="button" tabindex="0"></icon-button>
                        <div class="title"></div>
                        <icon-button class="js-delete" data-icon="delete" role="button" tabindex="0"></icon-button>
                    </app-toolbar>
                </app-header>
                <note-detail></note-detail>
            </app-screen>
        `;

        this.handleBack = this.handleBack.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    connectedCallback() {
        const buttonBack = this.shadow.querySelector('.js-back');
        const buttonDelete = this.shadow.querySelector('.js-delete');

        buttonBack.addEventListener('click', this.handleBack);
        buttonDelete.addEventListener('click', this.handleDelete);
    }

    disconnectedCallback() {
        const buttonBack = this.shadow.querySelector('.js-back');
        const buttonDelete = this.shadow.querySelector('.js-delete');

        buttonBack.removeEventListener('click', this.handleBack);
        buttonDelete.removeEventListener('click', this.handleDelete);
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
        if (attributeName === 'data-id') {
            const notesApp = document.querySelector('notes-app');
            const notesDetail = this.shadow.querySelector('note-detail');

            Notes
                .get(newValue * 1)
                .then(note => {
                    notesDetail.note = note;
                });
        }
    }

    static get observedAttributes() {
        return ['data-id'];
    }

    get isEmpty() {
        const notesDetail = this.shadow.querySelector('note-detail');
        const note = notesDetail.note;

        return !note.title && !note.text;
    }

    async handleBack() {
        const notesApp = document.querySelector('notes-app');
        const notesDetail = this.shadow.querySelector('note-detail');
        const note = notesDetail.note;

        if (this.isEmpty) {
            await Notes.delete(note.id);
        }
        else {
            await Notes.put(note);
        }
        notesApp.renderScreenMain();
    }

    async handleDelete() {
        const notesApp = document.querySelector('notes-app');
        const notesDetail = this.shadow.querySelector('note-detail');
        const note = notesDetail.note;

        await Notes.delete(note.id);
        notesApp.renderScreenMain();
    }
}

window.customElements.define(ScreenDetail.is, ScreenDetail);