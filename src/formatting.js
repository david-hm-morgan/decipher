const currentPuzzleA = require('./nov22TranslationA');

function formatByColumns(cols, inputString) {
    let formatted = "";
    inputString = inputString.replace(/ /g, "");

    for (let x=0; x < inputString.length; x+=cols) {
        formatted += inputString.substring(x, x+cols);
        formatted += " ";
    }

    return formatted;
}

let encryptedTextA = currentPuzzleA.getEncryptedText();

// console.log(`${formatByColumns(6, encryptedTextA)}`);

module.exports = {
    getFormatter: function() {
        return formatByColumns;
    }
}