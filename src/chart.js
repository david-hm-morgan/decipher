
// const frequencyTools = require('./freqAnalysis');
// const currentPuzzleA = require('./nov22TranslationA');

function getData(countingFunction, clearText, encryptedTextA) {

    // let countingFunction = frequencyTools.getSingleFreqAnalyser();
    let countsClear = countingFunction(clearText);
    // let encryptedTextA = currentPuzzleA.getEncryptedText();

    let countsEnc = countingFunction(encryptedTextA);

    let arrayOfData = [];
    arrayOfData.push(['Letter', 'Cipher', 'Standard']);
    for (let c=0; c < 26; c++) {
        arrayOfData.push([c, countsEnc[c], countsClear[c]]);
    }
    return arrayOfData;
}

function drawMultSeries() {


    var data = google.visualization.arrayToDataTable(
        getData()
    );

    var options = {
        title: 'Comparison',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Frequency',
            minValue: 0
        },
        vAxis: {
            title: 'Letter'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
  
module.exports = {
    getCharter: function() {
        return drawMultSeries;
    },
    getPreppedData: function() {
        return getData;
    }
}