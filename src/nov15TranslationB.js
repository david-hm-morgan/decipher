let eighthNovemberStringToTranslateB = `(BBBBBBBBBBBBBBReplace this text with part B's text to decipher)`;

function eighthNovemberTranslationB() {
    let translation = {};
    
    translation.K = "_";
    translation.R = "_";
    translation.E = "_";
    translation.A = "_";
    translation.L = "_";
    translation.P = "_";
    translation.O = "_";

    translation.I = "_";

    translation.T = "_";
    translation.U = "_";
    translation.V = "_";
    translation.W = "_";
    translation.X = "_";
    translation.Y = "_";
    translation.Z = "_";
    translation.B = "_";
    translation.C = "_"; 
    translation.D = "_";
    translation.F = "_";
    translation.G = "_";
    translation.H = "_";
    translation.J = "_";
    translation.M = "_";

    translation.N = "_";
    translation.Q = "_";
    translation.S = "_";



    // punctuation
    translation["'"] = "'";
    translation[","] = ",";
    translation["."] = ".\n";
    translation["!"] = "!";
    translation["?"] = "?";
    translation["’"] = "’";
    translation[")"] = ")";
    translation["("] = "(";
    translation["“"] = "“";
    translation["”"] = "”";
    translation["-"] = "-";
    translation[":"] = ":";
    
    return translation;
}

module.exports = {
    getEncryptedText: function() {
        return eighthNovemberStringToTranslateB;
    },
    getKey: function() {
        return eighthNovemberTranslationB();
    }
}