const express = require('express');
const app = express();
const port = 3000;
const index = require('./index');
const currentPuzzle = require('./nov8Translation');
const currentPuzzleB = require('./nov8TranslationB');
const frequencyTools = require('./freqAnalysis');

var decoderFunction = index.getDecoder();

var keyA = currentPuzzle.getKeyA();
var keyB = currentPuzzleB.getKeyB();
let encryptedTextA = currentPuzzle.getEncryptedTextA();
let encryptedTextB = currentPuzzleB.getEncryptedTextB();

var decoderOutputA = decoderFunction(encryptedTextA, keyA);
var decoderOutputB = decoderFunction(encryptedTextB, keyB);

var frequency = frequencyTools.sorter();
var frequencyOfClear = frequencyTools.clearSorter();

var htmlOutput = "<meta http-equiv=\"refresh\" content=\"5\">";
htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";
htmlOutput += `<tr><td><code>${encryptedTextA}</code></td>`
htmlOutput += `<td><code>${decoderOutputA}</code></td></tr>`

htmlOutput += "</table>";


htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";
htmlOutput += `<tr><td><code>${encryptedTextB}</code></td>`
htmlOutput += `<td><code>${decoderOutputB}</code></td></tr>`

htmlOutput += `<td><code>${frequency}</code></td>`;
htmlOutput += `<td><code>${frequencyOfClear}</code></td>`;

htmlOutput += "</table>";

app.get('/', (req, res) => res.send(`${htmlOutput}`))

app.listen(port, () => console.log(`Decryption listening on port ${port}!`))