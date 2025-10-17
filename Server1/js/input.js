const INPUT = "input";
const TEXT = "text";
const FORM = "form";
const SUBMIT = "submit";
const LABEL = "label";

/**
 * The TextInput class contains an HTML text input element and methods for accessing
 * and validating that input.
 */
class TextInput {

    /**
     * Createes a new HTML text input element.
     */
    constructor(inputId, labelText) {
        this.input = document.createElement(INPUT);
        this.input.type = TEXT;
        this.input.name = inputId;
        this.input.id = inputId;
        this.label = document.createElement(LABEL);
        this.label.innerHTML = labelText;
        this.label.for = inputId;
    }

    /**
     * Returns the text HTML element
     * @returns the text HTML element
     */
    getInput() {
        return this.input;
    }

    getLabel() {
        return this.label;
    }
}


/**
 * The TextInputValidator class contains static methods to validate text input.
 */
class TextInputValidator {

    static NUMBERS = "0123456789";

    /**
     * Determines if a string is empty
     * @param {*} text 
     * @returns true if the text is empty or null, false otherwise
     */
    static isEmpty(text) {
        if (text === null || text === "") {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Determines if a string contains any numbers.
     * @param {*} text 
     * @returns true if the string contains numbers, false otherwise
     */
    static containsNumbers(text) {
        //
        let numFlag = false;
        TextInputValidator.NUMBERS.split('').forEach(num => {
            if (text.includes(num)) {
                numFlag = true;
            }
        });
        return numFlag;
    }
}