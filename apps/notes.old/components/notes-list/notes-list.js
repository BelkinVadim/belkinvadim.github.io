class NotesList extends HTMLElement {
    static get is() {
        return 'notes-list';
    }

    constructor() {
        super();

        this._notes = [];

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
	        <link rel="stylesheet" href="components/notes-list/notes-list.css">
	        <div class="content"></div>
        `;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
        this.render();
    }

    render() {
        const content = this.shadow.querySelector('.content');
        const fragment = document.createDocumentFragment();

        content.innerHTML = '';

        if (this.notes.length) {
            this.notes
                .sort((a, b) => b.created - a.created)
                .map(note => {
                    const noteItem = document.createElement('note-item');

                    noteItem.setAttribute('tabindex', 0);
                    noteItem.note = note;
                    fragment.append(noteItem);
                });

            content.append(fragment);
            this.hidden = false;
        }
        else {
            this.hidden = true;
        }
    }
}

window.customElements.define(NotesList.is, NotesList);