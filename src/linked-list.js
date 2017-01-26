const Node = require('./node');

class LinkedList {
    constructor(value) {
    const list = new LinkedList();        
    this._length = 0;
    this.head = null;
    this.tail = null;
}

    append(data) {
        }

    head() {}

    tail() {}

    at(index) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
       while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
