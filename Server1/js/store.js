// import { TextInputForm } from "./input";
const WORD_ID = "word";
const DEF_ID = "def";
const SEARCH_HREF = "../html/search.html";
const DIV = "div";
const DISPLAY_ID = "displayId";
const PRE_WRAP = "pre-wrap";
const WORD = "word";
const EXISTS = "exists";
const DEFINITION = "definition";
const COUNT = "count";
const PLACEHOLDER = "%1";

class Store {
    constructor() {
        // create a new text input form for whatever the store does
        this.wordInput = new TextInput(WORD_ID, WORD_LABEL);
        this.definitionInput = new TextInput(DEF_ID, DEF_LABEL);
        this.submitBtn = new Button(Store.sendDefinition, ADD_DEF);
        this.goToSearchBtn = new Button(function () { window.location.href = SEARCH_HREF }, GO_TO_SEARCH);
        this.display = document.createElement(DIV);
        this.display.style.whiteSpace = PRE_WRAP;
        this.display.id = DISPLAY_ID;


        document.body.appendChild(this.wordInput.getLabel());
        document.body.appendChild(this.wordInput.getInput());
        document.body.appendChild(this.definitionInput.getLabel());
        document.body.appendChild(this.definitionInput.getInput());
        document.body.appendChild(this.submitBtn.getButton());
        document.body.appendChild(this.display);
        document.body.appendChild(this.goToSearchBtn.getButton());
    }

    // static postURL = "https://comp-4537-lab-4-server.vercel.app/api/definitions/";
    static postURL = "http://localhost:8080/api/definitions/";

    static sendDefinition() {
        const xhttp = new XMLHttpRequest();
        const word = document.getElementById(WORD_ID).value;
        const defintion = document.getElementById(DEF_ID).value;

        xhttp.open("POST", Store.postURL, true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(`word=${word}&def=${defintion}`);

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(DISPLAY_ID).innerHTML = Store.parseResponse(this.responseText);
            }
        }
    }

    static parseResponse(response){
        let jsonResponse = JSON.parse(response);
        if (jsonResponse[EXISTS]){
            return EXISTING_WORD;
        } else if (!jsonResponse[EXISTS]){
            return ADDED_WORD + jsonResponse[WORD] + COLON_SPACE + jsonResponse[DEFINITION] + NUM_WORDS.replace(PLACEHOLDER, jsonResponse[COUNT]);
        }
    }
}

new Store();
