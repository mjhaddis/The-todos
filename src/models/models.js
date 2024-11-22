export class Todo {

    id;  // ID för todo (används för att identifiera varje todo)
    text; // Texten för todo
    done; // Boolean som anger om todo är klar eller inte

    constructor(id, text, done = false) {

        this.id = id; // Sätt ID till det värde som skickades in
        this.text = text; // Sätt texten till det värde som skickades in
        this.done = done; // Sätt 'done' till falskt som standard om inget skickades in
    }

}