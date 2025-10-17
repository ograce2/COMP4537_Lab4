const SEARCH_ID = "search";
const STORE_HREF = "../html/store.html";
const WORD_ID = "wordId";
const DEF_ID = "defId";

class Search {
    constructor() {
        // create a new text input form for whatever the store does
        this.searchInput = new TextInput(SEARCH_ID, SEARCH_LABEL);
        this.submitBtn = new Button(Search.searchDefinition, GET_DEF);
        this.goToStoreBtn = new Button(function () { window.location.href = STORE_HREF }, GO_TO_STORE)
        this.defDisplay = new DefDisplay(EMPTY, EMPTY, WORD_ID, DEF_ID);

        document.body.appendChild(this.searchInput.getLabel());
        document.body.appendChild(this.searchInput.getInput());
        document.body.appendChild(this.submitBtn.getButton());
        document.body.appendChild(this.defDisplay.getDisplay());
        document.body.appendChild(this.goToStoreBtn.getButton());
    }

    // static getURL = "https://comp-4537-lab-4-server.vercel.app/api/definitions/?word=";
    static getURL = "http://localhost:8080/api/definitions/?word=";

    static searchDefinition() {


        const xhttp = new XMLHttpRequest();
        const word = document.getElementById(SEARCH_ID).value;

        if (TextInputValidator.isEmpty(word) ||  TextInputValidator.containsNumbers(word)){
            document.getElementById(WORD_ID).innerHTML = INVALID_INPUT;
            document.getElementById(DEF_ID).innerHTML = EMPTY;
            
            return;
        }

        xhttp.open("GET", Search.getURL + word, true);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById(WORD_ID).innerHTML = word;
                document.getElementById(DEF_ID).innerHTML = Search.parseResponse(this.responseText);
            }
        }
    }

    static parseResponse(response){
        let jsonResponse = JSON.parse(response);
        if (jsonResponse["exists"]){
            return jsonResponse["definition"];
        } else if (!jsonResponse["exists"]){
            return NOT_FOUND;
        }
    }
}

new Search();