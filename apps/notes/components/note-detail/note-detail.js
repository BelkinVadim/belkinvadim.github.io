class NoteDetail extends HTMLElement {
    static get is() {
        return 'note-detail';
    }

    constructor() {
        super();

        this._note = {};

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
	        <link rel="stylesheet" href="components/note-detail/note-detail.css">
	        <div class="title" contenteditable>${this.note.title || ''}</div>
	        <div class="text" contenteditable>${this.note.text || ''}</div>
        `;

        this.handleChange = this.handleChange.bind(this);
    }

    connectedCallback() {
        const title = this.shadow.querySelector('.title');
        const text = this.shadow.querySelector('.text');

        title.addEventListener('input', this.handleChange);
        text.addEventListener('input', this.handleChange);
    }

    disconnectedCallback() {
        const title = this.shadow.querySelector('.title');
        const text = this.shadow.querySelector('.text');

        title.removeEventListener('input', this.handleChange);
        text.removeEventListener('input', this.handleChange);
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}

    static get observedAttributes() {}

    get note() {
        return this._note;
    }

    set note(note) {
        this._note = note;
        this.render();
    }

    render() {
        const title = this.shadow.querySelector('.title');
        const text = this.shadow.querySelector('.text');

        title.innerHTML = this.note.title || '';
        text.innerHTML = this.note.text || '';
    }

    handleChange() {
        this._note.title = this.shadow.querySelector('.title').innerHTML;
        this._note.text = this.shadow.querySelector('.text').innerHTML;
    }
}

window.customElements.define(NoteDetail.is, NoteDetail);