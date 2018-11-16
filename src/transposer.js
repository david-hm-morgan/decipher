function transpose(xStringToTranslate, key) {
    let transposedString = "";

    let order = [];
    // convert the key into indices to use
    for (var k = 0; k < key.length; k++) {
        order.push(parseInt(key.charAt(k)));
    }

    xStringToTranslate = xStringToTranslate.replace(/ /g, "");

    for (var x = 0; x < xStringToTranslate.length; x += key.length) {
        let translated = "";
        for (let y = 0; y < key.length; y++) {
            translated += xStringToTranslate.charAt(x+order[y]-1);
        }
        transposedString += translated + " ";
    }
    return transposedString.toLowerCase();
}

module.exports = {
    getTransposer: function() {
        return transpose;
    }
}