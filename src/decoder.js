function decode(xStringToTranslate, key) {
    let decodedString = "";

    // key.push(punctuationTranslation());

    for (var num=0; num < 10; num++) {
        if (key[`${num}`]) {
            console.log("already have it");
        } else {
            key[`${num}`] = num;
        }
    }

    for (var x = 0; x < xStringToTranslate.length; x++) {
        var c = xStringToTranslate.charAt(x);
        c = c.toUpperCase();
        var translated = key[c] ? key[c] : "  ";

        try {
            translated = translated.toLowerCase();
        }
        catch (exc) {
            // ignore it and leave as it was
        }
        // console.log(`${c} goes to ${translated}`);

        decodedString += translated;
    }
    return decodedString;
}


function encode(xStringToTranslate) {
    let encodedString = "emptyu";

    for (var x = 0; x < xStringToTranslate.length; x++) {
        var c = xStringToTranslate.charAt(x);
        c = c.toUpperCase(c);
        var translated = translation[c];
        console.log(`${c} goes to ${translated}`);
    }

    return encodedString;
};


function punctuationTranslation() {
    let puncMap = {};
    puncMap["'"] = "'";
    puncMap[","] = ",";
    puncMap["."] = ".\n";
    puncMap["!"] = "!";
    puncMap["?"] = "?";
    puncMap["’"] = "’";
    puncMap["“"] = "“";
    puncMap["”"] = "”";
    puncMap["!"] = "!";
    puncMap["’"] = "’";
    puncMap[" "] = " ";
    puncMap[":"] = ":";

    return puncMap;
}

module.exports = {
    getDecoder: function() {
        return decode;
    },
    getPunctuation: function() {
        return punctuationTranslation;
    }
}