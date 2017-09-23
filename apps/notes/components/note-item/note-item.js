class NoteItem extends HTMLElement {
    static get is() {
        return 'note-item';
    }

    constructor() {
        super();

        this._note = {};

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
	        <link rel="stylesheet" href="components/note-item/note-item.css">
	        <div class="title">${this.note.title || 'Без названия'}</div>
	        <div class="date">${noteDate(this.note.created)}</div>
	        <div class="text">${this.note.text || ''}</div>
        `;

        this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', this.handleClick);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.handleClick);
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}

    get note() {
        return this._note;
    }

    set note(note) {
        this._note = note;
    }

    render() {
        const title = this.shadow.querySelector('.title');
        const date = this.shadow.querySelector('.date');
        const text = this.shadow.querySelector('.text');

        title.innerHTML = this.note.title || 'Без названия';
        date.innerHTML = noteDate(this.note.created);
        text.innerHTML = this.note.text.length > 150 ? `${this.note.text.substr(0, 120)}&hellip;` : this.note.text || '';
    }

    handleClick() {
        const notesApp = document.querySelector('notes-app');

        notesApp.renderScreenDetail(this.note.id);
    }
}

window.customElements.define(NoteItem.is, NoteItem);