// import { TextInputForm } from "./input";
const WORD_ID = "word";
const DEF_ID = "def";
const SEARCH_HREF = "../html/search.html";


class Store{
    constructor(){
        // create a new text input form for whatever the store does
        this.wordInput = new TextInput(WORD_ID, WORD_LABEL);
        this.definitionInput = new TextInput(DEF_ID, DEF_LABEL);
        this.submitBtn = new Button("placeholder", ADD_DEF);
        this.goToSearchBtn = new Button(function (){window.location.href = SEARCH_HREF}, GO_TO_SEARCH)

        document.body.appendChild(this.wordInput.getLabel());
        document.body.appendChild(this.wordInput.getInput());
        document.body.appendChild(this.definitionInput.getLabel());
        document.body.appendChild(this.definitionInput.getInput());
        document.body.appendChild(this.submitBtn.getButton());
        document.body.appendChild(this.goToSearchBtn.getButton());
    }
}

new Store();
