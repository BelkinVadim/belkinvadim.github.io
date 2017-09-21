const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

class ScreenDetail extends HTMLElement {
    static get is() {
        return 'screen-detail';
    }

    constructor() {
        super();

        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
        }

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
                ${SpeechRecognition ?
                    '<floating-button class="accent fixed js-record" data-icon="mic" role="button"></floating-button>'
                    :
                    ''
                }
            </app-screen>
        `;

        this.handleBack = this.handleBack.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRecordStart = this.handleRecordStart.bind(this);
        this.handleRecordEnd = this.handleRecordEnd.bind(this);
        this.handleRecordResult = this.handleRecordResult.bind(this);
    }

    connectedCallback() {
        const buttonBack = this.shadow.querySelector('.js-back');
        const buttonDelete = this.shadow.querySelector('.js-delete');
        const buttonRecord = this.shadow.querySelector('.js-record');

        buttonBack.addEventListener('click', this.handleBack);
        buttonDelete.addEventListener('click', this.handleDelete);

        if (SpeechRecognition) {
            // Mouse events
            buttonRecord.addEventListener('mousedown', this.handleRecordStart);
            buttonRecord.addEventListener('mouseup', this.handleRecordEnd);
            // Touch events
            buttonRecord.addEventListener('touchstart', this.handleRecordStart);
            buttonRecord.addEventListener('touchend', this.handleRecordEnd);

            this.recognition.addEventListener('result', this.handleRecordResult);
        }
    }

    disconnectedCallback() {
        const buttonBack = this.shadow.querySelector('.js-back');
        const buttonDelete = this.shadow.querySelector('.js-delete');
        const buttonRecord = this.shadow.querySelector('.js-record');

        buttonBack.removeEventListener('click', this.handleBack);
        buttonDelete.removeEventListener('click', this.handleDelete);

        if (SpeechRecognition) {
            // Mouse events
            buttonRecord.removeEventListener('mousedown', this.handleRecordStart);
            buttonRecord.removeEventListener('mouseup', this.handleRecordEnd);
            // Touch events
            buttonRecord.removeEventListener('touchstart', this.handleRecordStart);
            buttonRecord.removeEventListener('touchend', this.handleRecordEnd);

            this.recognition.removeEventListener('result', this.handleRecordResult);
        }
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
            note.updated = new Date().getTime();
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

    handleRecordStart() {
        const buttonRecord = this.shadow.querySelector('.js-record');

        if (localStorage.getItem('audio_access')) {
            buttonRecord.dataset.icon = 'record_voice_over';
            this.recognition.start();
        }
        else {
            navigator.mediaDevices
                .getUserMedia({audio: true})
                .then(stream => {
                    localStorage.setItem('audio_access', true);
                    stream.getAudioTracks()[0].muted;
                })
                .catch(error => console.log(error));
        }
    }

    handleRecordEnd() {
        const buttonRecord = this.shadow.querySelector('.js-record');

        if (localStorage.getItem('audio_access')) {
            buttonRecord.dataset.icon = 'mic';
            this.recognition.stop();
        }
    }

    handleRecordResult(event) {
        const current = event.resultIndex;
        const { transcript } = event.results[current][0];
        const notesDetail = this.shadow.querySelector('note-detail');
        const { note } = notesDetail;

        note.text += transcript;
        notesDetail.note = note;
    }
}

window.customElements.define(ScreenDetail.is, ScreenDetail);