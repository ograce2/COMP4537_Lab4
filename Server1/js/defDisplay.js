const DIV = "div";
const H3 = "h3";
const P = "p";
const NONE = "none";
const BLOCK = "block";

class DefDisplay{
    constructor(word, def, wordId, defId){
        this.div = document.createElement(DIV);
        this.word = document.createElement(H3);
        this.def = document.createElement(P);

        this.word.innerHTML = word;
        this.word.id = wordId;
        this.def.innerHTML = def;
        this.def.id = defId

        this.div.appendChild(this.word);
        this.div.appendChild(this.def);
    }

    getDisplay(){
        return this.div;
    }

    setContent(word, def){
        this.word.innerHTML = word;
        this.def.innerHTML = def;
    }

    hideContent(){
        this.div.style.display = NONE;
    }

    showContent(){
        this.div.style.display = BLOCK;
    }
}