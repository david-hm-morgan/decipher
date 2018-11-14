const express = require('express');
const app = express();
const port = 3000;
const currentPuzzleA = require('./nov15TranslationA');
const currentPuzzleB = require('./nov15TranslationB');
const frequencyTools = require('./freqAnalysis');
const decoderTools = require('./decoder');

var decoderFunction = decoderTools.getDecoder();
var sorterFunction = frequencyTools.sorter();

var keyA = currentPuzzleA.getKey();
var keyB = currentPuzzleB.getKey();
let encryptedTextA = currentPuzzleA.getEncryptedText();
let encryptedTextB = currentPuzzleB.getEncryptedText();

var decoderOutputA = decoderFunction(encryptedTextA, keyA);
var decoderOutputB = decoderFunction(encryptedTextB, keyB);

var frequencyA = sorterFunction(encryptedTextA);
var frequencyB = sorterFunction(encryptedTextB);
var frequencyOfClear = frequencyTools.clearSorter();

var htmlOutput = "<meta http-equiv=\"refresh\" content=\"5\">";
htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";
htmlOutput += `<tr><td><code>${encryptedTextA}</code></td>`
htmlOutput += `<td><code>${decoderOutputA}</code></td></tr>`

htmlOutput += `<td><code>${frequencyA}</code></td>`;
htmlOutput += `<td><code>${frequencyOfClear}</code></td>`;

htmlOutput += "</table>";


htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";
htmlOutput += `<tr><td><code>${encryptedTextB}</code></td>`
htmlOutput += `<td><code>${decoderOutputB}</code></td></tr>`

htmlOutput += `<td><code>${frequencyB}</code></td>`;
htmlOutput += `<td><code>${frequencyOfClear}</code></td>`;

htmlOutput += "</table>";

app.get('/', (req, res) => res.send(`${htmlOutput}`))

app.listen(port, () => console.log(`Decryption listening on port ${port}!`))