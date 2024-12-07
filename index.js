"use strict";
class StringCollection {
    constructor(...items) {
        this._theCollection = [];
        this._theCollection = this._theCollection.concat(items);
    }
    //01. Create Function
    add(item) {
        this._theCollection.push(item);
    }
    //02.Read Function
    getAll() {
        return this._theCollection;
    }
    //03.Edit Function
    edit(oldItem, newItem) {
        const index = this._theCollection.indexOf(oldItem);
        if (index !== -1) {
            this._theCollection[index] = newItem;
        }
        else {
            console.log(`item "${oldItem}" not found in the collection.`);
        }
    }
    //04.Delete Function
    remove(item) {
        const index = this._theCollection.indexOf(item);
        if (index !== -1) {
            this._theCollection.splice(index, 1);
        }
    }
}
//-----------------The implementation-----------------------
const collection = new StringCollection("Cars", "Boats", "Airplines");
collection.add("Holicapters"); //01. Create
collection.edit("Cars", "Dogs"); //02.Update
collection.remove("Airplines"); //03. Delete
console.log(collection.getAll()); //04.
