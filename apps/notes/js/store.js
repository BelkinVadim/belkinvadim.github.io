const DataBase = idb.open('AppDataBase', 1, upgradeDB => {
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