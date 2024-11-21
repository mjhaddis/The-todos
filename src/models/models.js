export class Todo {

    id;
    text;
    done;

    constructor(id, text, done = false) {

        this.id = id;
        this.text = text;
        this.done = done;
    }

}