var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var sreverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return sreverURL + "?" + "text=" + text;
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(res => res.json())
        .then(json => {
            var translatedText = json.contents.translated;
            console.log(json);
            outputDiv.innerText = translatedText;
        })
        .catch(err => console.log(err));
};

btnTranslate.addEventListener("click", clickHandler);