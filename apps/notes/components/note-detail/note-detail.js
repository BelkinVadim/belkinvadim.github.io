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
	        <time class="date">${this.date}</time>
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

    get date() {
        const { updated } = this.note;
        const updatedDate = new Date(updated);
        const nowDate = new Date();
        let options = {};
        let date = '';

        if (updated) {
            const updatedDay = updatedDate.getDate();
            const updatedMonth = updatedDate.getMonth();
            const updatedYear = updatedDate.getFullYear();
            const nowDay = nowDate.getDate();
            const nowMonth = nowDate.getMonth();
            const nowYear = nowDate.getFullYear();

            if (updatedDay === nowDay && updatedMonth === nowMonth && updatedYear === nowYear) {
                options = {
                    hour: 'numeric',
                    minute: 'numeric'
                };
            }
            else if (updatedYear === nowYear) {
                options = {
                    month: 'short',
                    day: 'numeric'
                };
            }
            else {
                options = {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                };
            }

            date = `Изменено: ${updatedDate.toLocaleString('ru', options)}`;
        }

        return date;
    }

    render() {
        const title = this.shadow.querySelector('.title');
        const text = this.shadow.querySelector('.text');
        const date = this.shadow.querySelector('.date');

        title.innerHTML = this.note.title || '';
        text.innerHTML = this.note.text || '';
        date.innerHTML = this.date;
    }

    handleChange() {
        this._note.title = this.shadow.querySelector('.title').innerHTML;
        this._note.text = this.shadow.querySelector('.text').innerHTML;
    }
}

window.customElements.define(NoteDetail.is, NoteDetail);