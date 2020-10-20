function capitalFirstLetter(sentence) {
    return sentence.charAt(1).toUpperCase() + sentence.slice(2);
}

function prepareText(text) {
    //  regular expressions
    const regExpForWords = /([A-Z]|\É|\Ñ|\Á|\Í|\Ó|\Ú)/g;    //  poner el resto
    const regExpForDigits = /\d{1,}/g;
    const regExpForparenthesis = /\(|\)/g;

    //  $& inserts the whole match
    const spaceBetweenWords = text.replace(regExpForWords, ' $&');
    const spaceBetweenDigitsAndWords = spaceBetweenWords.replace(regExpForDigits, ' $&');
    const spaceBetweenparenthesis = spaceBetweenDigitsAndWords.replace(regExpForparenthesis, ' $&');

    //  I separate sentences to analyze them separately
    const sentences = spaceBetweenparenthesis.split(".");
    for (let sentence in sentences) {
        sentences[sentence] = sentences[sentence].toLowerCase();
        sentences[sentence] = capitalFirstLetter(sentences[sentence]);
    }

    const finalResult = sentences.join(". ");
    return finalResult;
}

function sendText() {
    const text = document.getElementById("textToModify").value;
    document.getElementById("modifiedText").value = prepareText(text);
}

function copyClipboard(){
    const clipboard = document.getElementById("modifiedText");
    clipboard.select();
    clipboard.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied in clipboard!");
}