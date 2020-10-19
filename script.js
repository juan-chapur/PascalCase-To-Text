/* 
    - Banderas -
    g: Global, busca de manera global
    i: Insensitive, no distingue entre mayusculas y minusculas

    - Comodines -
    Sustitucion:
    Ej: Foto001.jp  ----> Foto...\.jpg   (el punto luego de la barra representa un punto real)

    Listado de caracteres validos:
    Ej: [aeiou]     ----> Con esto tomariamos todas las vocales, tambien funciona con numeros

    Rangos:
    Ej: [a-z]       ----> Con esto tomariamos todos los caracteres que se encuentren entre estos
    Ej: [a-eou]     ----> Con esto tomariamos todos los caracteres que hay entre a y e y ademas o y u

    Cadenas completas:
    Ej: (cadenaABuscar)                 ----> Con esto tomariamos la cadena ingresada
    Ej: (cadenaABuscar1|cadenaABuscar2) ----> Con esto tomariamos las cadenas ingresadas

    - Operadores -
    Delimitadores: ^palabraABuscar$     ----> Con esto conseguiriamos una palabra en especifico

    Cantidad: 
    Llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles. 
        {n} Se tiene que repetir n veces
        {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
        {n,} Se tiene que repetir como mínimo n veces y sin máximo
        ^[a-zA-Z]{1,3}@{1}$

    Asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.  .*@.*\..*

    Interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
        ^[ae]?$ 

    Operador +: lo que está antes del + tiene que estár una vez como mínimo
        A-[0-9]+

    Caracteres:
        \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de linea y retorno de carro. ^[a-zA-Z]+\s[a-zA-Z]+$
        \S: Coincide con todo menos caracteres de espacio ^\S{5}$
        \d: Coincide con un carácter de número. Equivalente a [0-9] ^\d{5}$
        \D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9] ^\D{5}$
        \w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_] ^\w+@$
        \W: Coincide con todo menos caracteres de palabra. ^\W+$

    - Formas de crear expresiones regulares - 
    const regEx = /lorem/gi
    const regEx = new regExp('palabraABuscar', 'banderas')
    const regEx = new regExp('/palabraABuscar/', 'banderas')
*/

/* 
    VER
        AGREGAR VOCALES MAYUSCULAS CON TILDES
        VER EL TEMA DE PARENTESIS
        VER ELE TEMA DE SIGLOS
        INTENTAR HACER CODIGO MAS LINDO
 */
function capitalFirstLetter(sentence) {
    return sentence.charAt(1).toUpperCase() + sentence.slice(2);
}

function prepareText(text) {
    const regExpForWords = /([A-Z]|\É)/g;    //  poner el resto
    const regExpForDigits = /\d{1,}/g;
    
    //  $&    inserts the whole match
    const spaceBetweenWords = text.replace(regExpForWords, ' $&');
    const spaceBetweenDigitsAndWords = spaceBetweenWords.replace(regExpForDigits, ' $&');

    const sentences = spaceBetweenDigitsAndWords.split(".");
    for (let sentence in sentences) {
        sentences[sentence] = sentences[sentence].toLowerCase();
        sentences[sentence] = capitalFirstLetter(sentences[sentence]);
        console.log(sentences[sentence]);
    }

    const finalResult = sentences.join(". ");
    console.log(finalResult);
    return finalResult;
}

function sendText() {
    const text = document.getElementById("textToModify").value;
    document.getElementById("modifiedText").value = prepareText(text);
}