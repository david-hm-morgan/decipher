const baseKey = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

function createTranslationFromShift(xShift) {
    console.log(`${xShift}`)
    let output = "";
    for (let c=0; c < baseKey.length; c++) {
        let offset = (c + xShift) % baseKey.length;
        output += baseKey.charAt(offset);
    }
    return output;
}

// temp test
console.log(`${createTranslationFromShift(1)}`);
console.log(`${createTranslationFromShift(25)}`);
