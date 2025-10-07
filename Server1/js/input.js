const INPUT = "input";
const TEXT = "text";
const FORM = "form";
const SUBMIT = "submit";

/**
 * The TextInput class contains an HTML text input element and methods for accessing
 * and validating that input.
 */
class TextInput {

    /**
     * Createes a new HTML text input element.
     */
    constructor(){
        this.input = document.createElement(INPUT);
        this.input.type = TEXT;
    }

    /**
     * Returns the text HTML element
     * @returns the text HTML element
     */
    getInput(){
        return this.input;
    }

    /**
     * Determines if the input is valid using the TextInputValidator static methods.
     * @returns true if the input is valid, false otherwise
     */
    validate(){
        return (TextInputValidator.isEmpty(this.input.value) && TextInputValidator.containsNumbers(this.input.value))
    }
}


/**
 * The TextInputValidator class contains static methods to validate text input.
 */
class TextInputValidator{

    static NUMBERS = "0123456789";

    /**
     * Determines if a string is empty
     * @param {*} text 
     * @returns true if the text is empty or null, false otherwise
     */
    static isEmpty(text){
        if (text === null || text === ""){
            return true;
        } else{
            return false;
        }
    }

    /**
     * Determines if a string contains any numbers.
     * @param {*} text 
     * @returns true if the string contains numbers, false otherwise
     */
    static containsNumbers(text){
        //
        this.NUMBERS.array.forEach(num => {
            if (text.includes(num)){
                return true
            }
        });
        return false;
    }
}