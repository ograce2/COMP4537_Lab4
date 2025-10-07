// import { TextInputForm } from "./input";


class Store{
    constructor(){
        // create a new text input form for whatever the store does
        this.wordInput = new TextInput();
        this.definitionInput = new TextInput();
        this.submitBtn = new Button("placeholder action", ADD_DEF);

        document.body.appendChild(this.wordInput.getInput());
        document.body.appendChild(this.definitionInput.getInput());
        document.body.appendChild(this.submitBtn.getButton());
    }
}

new Store();
