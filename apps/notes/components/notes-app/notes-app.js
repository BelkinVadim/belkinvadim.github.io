const AppStore = {};

const DataBase = idb.open('Notes', 1, upgradeDB => {
    upgradeDB.createObjectStore('notes', {
        keyPath: 'id',
        autoIncrement: true
    });
});

class Store {
    constructor(name) {
        this.name = name;
    }

    get(key) {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name);
            const store = transaction.objectStore(this.name);

            return store.get(key);
        });
        }

    set(key, value) {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name, 'readwrite');
            const store = transaction.objectStore(this.name);
            store.put(value, key);

            return transaction.complete;
        });
    }

    put(record) {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name, 'readwrite');
            const store = transaction.objectStore(this.name);
            store.put(record);

            return transaction.complete;
        });
    }

    delete(key) {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name, 'readwrite');
            const store = transaction.objectStore(this.name);

            store.delete(key);

            return transaction.complete;
        });
    }

    getAll() {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name);
            const store = transaction.objectStore(this.name);

            return store.getAll();
        })
    }
}

const Notes = new Store('notes');

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
        const screenMain = document.createElement('screen-main');
        screenMain.handleCreate = '';

        content.innerHTML = '';
        content.append(screenMain);
    }

    renderScreenDetail(id) {
        const content = this.shadow.querySelector('.content');
        const screenDetail = document.createElement('screen-detail');
        screenDetail.setAttribute('data-id', id);

        content.innerHTML = '';
        content.append(screenDetail);
    }
}

window.customElements.define(NotesApp.is, NotesApp);