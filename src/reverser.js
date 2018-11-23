function reverser(stringToReverse) {
    var reversed = "";

    for (var x=stringToReverse.length-1; x >= 0; x--) {
        
        var cur = stringToReverse.charAt(x);

        reversed += cur;
    }

    return reversed;
}

module.exports = {
    getReverser: function() {
        return reverser;
    }
}