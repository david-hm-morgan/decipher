const express = require('express')
const app = express()
const port = 3000
const index = require('./index')
const currentPuzzle = require('./nov8Translation')

var decoderFunction = index.getDecoder();

var keyA = currentPuzzle.getKeyA();
var keyB = currentPuzzle.getKeyB();
var encryptedTextA = currentPuzzle.getEncryptedTextA();
var encryptedTextB = currentPuzzle.getEncryptedTextB();

var decoderOutputA = decoderFunction(encryptedTextA, keyA);
var decoderOutputB = decoderFunction(encryptedTextB, keyB);

var htmlOutput = "<meta http-equiv=\"refresh\" content=\"5\">";
htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";
htmlOutput += `<tr><td><code>${encryptedTextA}</code></td>`
htmlOutput += `<td><code>${decoderOutputA}</code></td></tr>`
htmlOutput += "</table>";


htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";
htmlOutput += `<tr><td><code>${encryptedTextB}</code></td>`
htmlOutput += `<td><code>${decoderOutputB}</code></td></tr>`
htmlOutput += "</table>";

app.get('/', (req, res) => res.send(`${htmlOutput}`))

app.listen(port, () => console.log(`Decryption listening on port ${port}!`))