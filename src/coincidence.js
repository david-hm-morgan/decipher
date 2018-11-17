const frequencyTools = require('./freqAnalysis');

function indexOfCoincidence(xString) {
    let countingFunction = frequencyTools.getSingleFreqAnalyser();
    let counts = countingFunction(xString);

    let numerator = 0.0;
    let denominator = 0.0;

    for (var current in counts) {
        let thisOne = counts[current];
        numerator += thisOne * (thisOne - 1);
        denominator += thisOne;
    };

    if (denominator == 0.0) {
        return denominator;
    } else {
        return (numerator / (denominator * (denominator-1))).toFixed(5);
    }
}

module.exports = {
    getindexOfCoincidence: function() {
        return indexOfCoincidence;
    }
}