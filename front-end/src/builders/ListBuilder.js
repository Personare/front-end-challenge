import uuid from "uuid/v1";

class ListBuilder {
    constructor(list) {
        this.list = list;
    }

    limit = max => {
        this.list = this.list.slice(0, max);
        return this;
    };

    generateItemId = () => {
        this.list = this.list.map(item => ({ ...item, id: uuid() }));
        return this;
    };

    generateItemKey = prefix => {
        this.list = this.list.map(item => ({
            ...item,
            key: `${prefix}-${uuid()}`
        }));
        return this;
    };

    duplicate = () => {
        this.list = this.list.concat(this.list);
        return this;
    };

    shuffle = () => {
        var array = this.list.slice();
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        this.list = array;

        return this;
    };

    build = () => {
        return this.list;
    };
}

export default ListBuilder;
