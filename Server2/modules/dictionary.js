class Dictionary {
    constructor() {
        this.dictionary = {}

        this.count = 0;
    }

    validateInput(word) {
        if (this.dictionary.hasOwnProperty(word)) {
            return true;
        }
        return false;
    }

    searchDefinition(wordToSearch) {
        const word = this.inputValidation(wordToSearch);

        let response = {};
        if (this.validateInput(word)) {
            response["exists"] = true;
            response["definition"] = this.dictionary[word];
        } else {
            response["exists"] = false;
        }
        return JSON.stringify(response);
    }

    storeDefinition(wordToStore, definition) {
        const word = this.inputValidation(wordToStore);

        let response = {};
        if (this.dictionary.hasOwnProperty(word)) {
            response["exists"] = true;
        } else {
            console.log(this.dictionary);

            this.dictionary[word] = definition;

            console.log(this.dictionary);

            this.count++;
            response["exists"] = false;
            response["word"] = word;
            response["definition"] = definition;
            response["count"] = this.count;
        }
        return JSON.stringify(response);
    }

    inputValidation(word) {
        return word.trim().toLowerCase();
    }
}

export default Dictionary;