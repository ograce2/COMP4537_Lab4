const INPUT = "input";
const TEXT = "text";
const FORM = "form";

class TextInputForm {
    constructor(){
        this.form = document.createElement(FORM);

        this.input = document.createElement(INPUT);
        this.input.type = TEXT;
        this.inputValidator = new TextInputValidator(this.input);
    }
}

class TextInputValidator{
    constructor(input){
        this.input = input;
    }
}