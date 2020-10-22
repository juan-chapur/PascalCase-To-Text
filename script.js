//  Esta funcion fue creada para hacer mayuscula la primer letra de la oracion que se le pase
function capitalFirstLetter(sentence) {
    return sentence.charAt(1).toUpperCase() + sentence.slice(2);
}

//  Esta funcion fue creada para transformar CamelCase a texto
function prepareText(text) {
    //  Armamos la expresion regular
    const regExpForWords = /([A-Z]|\É|\Ñ|\Á|\Í|\Ó|\Ú)/g;    //  poner el resto
    const regExpForDigits = /\d{1,}/g;
    const regExpForparenthesis = /\(|\)/g;

    //  $8 es el contenido encontrado
    const spaceBetweenWords = text.replace(regExpForWords, ' $&');
    const spaceBetweenDigitsAndWords = spaceBetweenWords.replace(regExpForDigits, ' $&');
    const spaceBetweenparenthesis = spaceBetweenDigitsAndWords.replace(regExpForparenthesis, ' $&');

    //  Separo el texto en diferentes oraciones y asi analizarlas por separado
    const sentences = spaceBetweenparenthesis.split(".");
    for (let sentence in sentences) {
        sentences[sentence] = sentences[sentence].toLowerCase();
        sentences[sentence] = capitalFirstLetter(sentences[sentence]);
    }

    //  Finalmente uno las oraciones
    const finalResult = sentences.join(". ");
    return finalResult;
}

//  Esta funcion fue creada para tomar el texto, procesarlo y retornarlo
function sendText() {
    //  Tomo el texto ingresado por el campo correspondiente
    const text = document.getElementById("textToModify").value;

    //  Retorno el contenido de CamelCase a texto
    document.getElementById("modifiedText").value = prepareText(text);
}

//  Esta funcion fue creada para copiar en el portapapeles el texto procesado
function copyClipboard(){
    const clipboard = document.getElementById("modifiedText");
    clipboard.select();
    clipboard.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied in clipboard!");
}