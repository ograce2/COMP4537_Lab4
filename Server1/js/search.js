const SEARCH_ID = "search";
const STORE_HREF = "../html/store.html";

class Search{
    constructor(){
        // create a new text input form for whatever the store does
        this.searchInput = new TextInput(SEARCH_ID, SEARCH_LABEL);
        this.submitBtn = new Button("placeholder", GET_DEF);
        this.goToStoreBtn = new Button(function (){window.location.href = STORE_HREF}, GO_TO_STORE)

        document.body.appendChild(this.searchInput.getLabel());
        document.body.appendChild(this.searchInput.getInput());
        document.body.appendChild(this.submitBtn.getButton());
        document.body.appendChild(this.goToStoreBtn.getButton());
    }
}

new Search();