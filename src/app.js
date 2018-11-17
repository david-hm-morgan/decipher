const express = require('express');
const app = express();
const port = 80;
const currentPuzzleA = require('./nov15TranslationA');
const currentPuzzleB = require('./nov15TranslationB');
const frequencyTools = require('./freqAnalysis');
const decoderTools = require('./decoder');
const transposerTools = require('./transposer');
const coincidenceTools = require('./coincidence');

var transposerFunction = transposerTools.getTransposer();

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
htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";
htmlOutput += `<tr><td><code>${encryptedTextA}</code></td>`
htmlOutput += `<td><code>${decoderOutputA}</code></td></tr>`

htmlOutput += `<tr><td>Index of coincidence = ${coincidence(encryptedTextA)}</td></td></tr>`;
htmlOutput += `<td><code>${frequencyA}</code></td>`;
htmlOutput += `<td><code>${frequencyOfClear}</code></td>`;

htmlOutput += "</table>";


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
