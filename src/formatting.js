const currentPuzzleA = require('./nov22TranslationA');
const coincidenceTools = require('./coincidence');

function formatByColumns(cols, inputString) {
    let formatted = "";
    inputString = inputString.replace(/ /g, "");

    for (let x=0; x < inputString.length; x+=cols) {
        formatted += inputString.substring(x, x+cols);
        formatted += " ";
    }

    return formatted;
}

function columnizer(cols, inputString) {
    let newWay = "";
    inputString = inputString.replace(/ /g, "");
    let stripeLength = inputString.length / cols;
    for (let stripe = 0; stripe < stripeLength; stripe++) {
        let thisShortLine = "";
        for (let c=0; c < cols; c++) {
            let offset = 0;
            offset += stripe;
            offset += stripeLength * c;
            thisShortLine += inputString.charAt(offset);
        }
        newWay += thisShortLine + "\n";
    }
    return newWay;
}

function getStringOfEveryXCharacters(count, inputString, offset = 0) {
    let newWay = "";
    inputString = inputString.replace(/ /g, "");

    for (let pos = 0; pos < inputString.length; pos += count) {
        newWay += inputString.charAt(pos+offset);
    }

    return newWay;
}

function eachColumnIOC(count, inputString) {

}

var coincidence = coincidenceTools.getindexOfCoincidence();
let encryptedTextA = currentPuzzleA.getEncryptedText();
// console.log(`2: ${coincidence(getStringOfEveryXCharacters(2, encryptedTextA))}`);
// console.log(`2: ${coincidence(getStringOfEveryXCharacters(2, encryptedTextA, 1))}`);
// console.log(`3: ${coincidence(getStringOfEveryXCharacters(3, encryptedTextA))}`);
// console.log(`3: ${coincidence(getStringOfEveryXCharacters(3, encryptedTextA,1))}`);
// console.log(`3: ${coincidence(getStringOfEveryXCharacters(3, encryptedTextA,2))}`);
// console.log(`4: ${coincidence(getStringOfEveryXCharacters(4, encryptedTextA))}`);
// console.log(`4: ${coincidence(getStringOfEveryXCharacters(4, encryptedTextA,1))}`);
// console.log(`4: ${coincidence(getStringOfEveryXCharacters(4, encryptedTextA,2))}`);
// console.log(`4: ${coincidence(getStringOfEveryXCharacters(4, encryptedTextA,3))}`);
// console.log(`5: ${coincidence(getStringOfEveryXCharacters(5, encryptedTextA))}`);
// console.log(`5: ${coincidence(getStringOfEveryXCharacters(5, encryptedTextA,1))}`);
// console.log(`5: ${coincidence(getStringOfEveryXCharacters(5, encryptedTextA,2))}`);
// console.log(`5: ${coincidence(getStringOfEveryXCharacters(5, encryptedTextA,3))}`);
// console.log(`5: ${coincidence(getStringOfEveryXCharacters(5, encryptedTextA,4))}`);
// console.log(`6: ${coincidence(getStringOfEveryXCharacters(6, encryptedTextA))}`);
// console.log(`6: ${coincidence(getStringOfEveryXCharacters(6, encryptedTextA,1))}`);
// console.log(`6: ${coincidence(getStringOfEveryXCharacters(6, encryptedTextA,2))}`);
// console.log(`6: ${coincidence(getStringOfEveryXCharacters(6, encryptedTextA,3))}`);
// console.log(`6: ${coincidence(getStringOfEveryXCharacters(6, encryptedTextA,4))}`);
// console.log(`6: ${coincidence(getStringOfEveryXCharacters(6, encryptedTextA,5))}`);

// console.log(`7: ${coincidence(getStringOfEveryXCharacters(7, encryptedTextA))}`);
// console.log(`7: ${coincidence(getStringOfEveryXCharacters(7, encryptedTextA,1))}`);
// console.log(`7: ${coincidence(getStringOfEveryXCharacters(7, encryptedTextA,2))}`);
// console.log(`7: ${coincidence(getStringOfEveryXCharacters(7, encryptedTextA,3))}`);
// console.log(`7: ${coincidence(getStringOfEveryXCharacters(7, encryptedTextA,4))}`);
// console.log(`7: ${coincidence(getStringOfEveryXCharacters(7, encryptedTextA,5))}`);
// console.log(`7: ${coincidence(getStringOfEveryXCharacters(7, encryptedTextA,6))}`);

// console.log(`8: ${coincidence(getStringOfEveryXCharacters(8, encryptedTextA))}`);
// console.log(`8: ${coincidence(getStringOfEveryXCharacters(8, encryptedTextA,1))}`);
// console.log(`8: ${coincidence(getStringOfEveryXCharacters(8, encryptedTextA,2))}`);
// console.log(`8: ${coincidence(getStringOfEveryXCharacters(8, encryptedTextA,3))}`);
// console.log(`8: ${coincidence(getStringOfEveryXCharacters(8, encryptedTextA,4))}`);
// console.log(`8: ${coincidence(getStringOfEveryXCharacters(8, encryptedTextA,5))}`);
// console.log(`8: ${coincidence(getStringOfEveryXCharacters(8, encryptedTextA,6))}`);
// console.log(`8: ${coincidence(getStringOfEveryXCharacters(8, encryptedTextA,7))}`);

// console.log(`9: ${coincidence(getStringOfEveryXCharacters(9, encryptedTextA))}`);
// console.log(`9: ${coincidence(getStringOfEveryXCharacters(9, encryptedTextA,1))}`);
// console.log(`9: ${coincidence(getStringOfEveryXCharacters(9, encryptedTextA,2))}`);
// console.log(`9: ${coincidence(getStringOfEveryXCharacters(9, encryptedTextA,3))}`);
// console.log(`9: ${coincidence(getStringOfEveryXCharacters(9, encryptedTextA,4))}`);
// console.log(`9: ${coincidence(getStringOfEveryXCharacters(9, encryptedTextA,5))}`);
// console.log(`9: ${coincidence(getStringOfEveryXCharacters(9, encryptedTextA,6))}`);
// console.log(`9: ${coincidence(getStringOfEveryXCharacters(9, encryptedTextA,7))}`);
// console.log(`9: ${coincidence(getStringOfEveryXCharacters(9, encryptedTextA,8))}`);

module.exports = {
    getFormatter: function() {
        return formatByColumns;
    },
    getColumnizer: function() {
        return columnizer;
    }
}