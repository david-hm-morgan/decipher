const express = require('express')
const app = express()
const port = 3000
const index = require('./index')

var key = index.getKey();
var encryptedText = index.getEncryptedText();
var decoderFunction = index.getDecoder();

var decoderOutptut = decoderFunction(encryptedText, key);

var htmlOutput = "<meta http-equiv=\"refresh\" content=\"5\">";
htmlOutput += "<table><th>Encrypted Text</th><th>Decrypted Text</th>";
htmlOutput += `<tr><td><code>${encryptedText}</code></td>`
htmlOutput += `<td><code>${decoderOutptut}</code></td></tr>`
htmlOutput += "</table>";

app.get('/', (req, res) => res.send(`${htmlOutput}`))

app.listen(port, () => console.log(`Decryption listening on port ${port}!`))