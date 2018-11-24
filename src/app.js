const express = require('express');
const app = express();
const port = 80;
const currentPuzzleA = require('./nov22TranslationA');
const currentPuzzleB = require('./nov22TranslationB');
const frequencyTools = require('./freqAnalysis');
const decoderTools = require('./decoder');
const transposerTools = require('./transposer');
const coincidenceTools = require('./coincidence');
const reverserTools = require('./reverser');
const chartTools = require('./chart');
const formatter = require('./formatting');

var transposerFunction = transposerTools.getTransposer();

var reverserFunction = reverserTools.getReverser();

var decoderFunction = decoderTools.getDecoder();
var sorterFunction = frequencyTools.sorter();

var keyA = currentPuzzleA.getKey();
var keyB = currentPuzzleB.getKey();
let encryptedTextA = currentPuzzleA.getEncryptedText();
let encryptedTextB = currentPuzzleB.getEncryptedText();

var decoderOutputA = decoderFunction(encryptedTextA, keyA);
var decoderOutputB = transposerFunction(encryptedTextB, "21543");

var frequencyA = sorterFunction(encryptedTextA);
var frequencyB = sorterFunction(encryptedTextB);
var frequencyOfClear = frequencyTools.clearSorter();

var coincidence = coincidenceTools.getindexOfCoincidence();

var htmlOutput = "<meta http-equiv=\"refresh\" content=\"15\">";

htmlOutput += "<script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>"

htmlOutput += `<script type=\"text/javascript\">${chartTools.getPreppedData(frequencyTools.getSingleFreqAnalyser(), frequencyTools.clearComparisonText, encryptedTextA)};${chartTools.getCharter()}</script>`;

htmlOutput += "<script type=\"text/javascript\">google.charts.load('current', {packages: ['corechart', 'bar']});google.charts.setOnLoadCallback(drawMultSeries);</script>";

htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";

let lengthA = encryptedTextA.replace(/ /g, "").length;

htmlOutput += `<tr><td><code>${encryptedTextA}</code></td>`
htmlOutput += `<td><code>${decoderOutputA}</code></td></tr>`

htmlOutput += `<tr><td>Length = ${lengthA}<br>Index of coincidence = ${coincidence(encryptedTextA)}</td></td></tr>`;
htmlOutput += `<td><code>${frequencyA}</code></td>`;
htmlOutput += `<tr><td>Length = ${frequencyTools.clearComparisonText().length}<br>Index of coincidence = ${coincidence(frequencyTools.clearComparisonText())}</td></td></tr>`;
htmlOutput += `<td><code>${frequencyOfClear}</code></td>`;

let formattingFunction = formatter.getFormatter();
var formatted = formattingFunction(6, encryptedTextA);
htmlOutput += `<tr><td><code>${formatted}</code></td></tr>`;

htmlOutput += "</table>";

htmlOutput += "<div id=\"chart_div\"></div>";



htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";
htmlOutput += `<tr><td><code>${encryptedTextB}</code></td>`
htmlOutput += `<td><code>${decoderOutputB}</code></td></tr>`

htmlOutput += `<tr><td>Index of coincidence = ${coincidence(encryptedTextB)}</td></td></tr>`;
htmlOutput += `<td><code>${frequencyB}</code></td>`;
htmlOutput += `<td><code>${frequencyOfClear}</code></td>`;

htmlOutput += "</table>";

htmlOutput += `<a href="https://www.dcode.fr/frequency-analysis">Frequency Analysis website</a> `;
htmlOutput += `<a href="https://www.dcode.fr/index-coincidence">Index of coincidence</a>`;

app.get('/', (req, res) => res.send(`${htmlOutput}`))

app.listen(port, () => console.log(`Decryption listening on port ${port}!`))
