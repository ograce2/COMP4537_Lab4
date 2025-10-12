const BUTTON = "button";

/**
 * The Button class creates an HTML button element with an action and text
 */
class Button {
    constructor(action, text) {
        this.btn = document.createElement(BUTTON);
        this.btn.onclick = action;
        this.btn.innerHTML = text;
    }

    getButton() {
        return this.btn;
    }
}