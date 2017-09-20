const DataBase = idb.open('Notes', 1, upgradeDB => {
    stores.map(store => {
        upgradeDB.createObjectStore(store.name, { keyPath: store.key, autoIncrement: store.autoIncrement });
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

    add(items) {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name, 'readwrite');
            const store = transaction.objectStore(this.name);

            items.map(item => {
                store.add(item);
            });

            return transaction.complete;
        });
    }

    put(items) {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name, 'readwrite');
            const store = transaction.objectStore(this.name);

            items.map(item => {
                store.put(item);
            });

            return transaction.complete;
        });
    }

    del(key) {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name, 'readwrite');
            const store = transaction.objectStore(this.name);

            store.delete(key);

            return transaction.complete;
        });
    }

    keys() {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name);
            const store = transaction.objectStore(this.name);
            const keys = [];

            // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
            // openKeyCursor isn't supported by Safari, so we fall back
            (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                if (!cursor) return;
                keys.push(cursor.key);
                cursor.continue();
            });

            return transaction.complete.then(() => keys);
        });
    }

    getAll() {
        return DataBase.then(db => {
            const transaction = db.transaction(this.name);
            const store = transaction.objectStore(this.name);

            return store.getAll()
        })
    }
}