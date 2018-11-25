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
        newWay += thisShortLine;
    }
    return newWay;
}

module.exports = {
    getFormatter: function() {
        return formatByColumns;
    },
    getColumnizer: function() {
        return columnizer;
    }
}