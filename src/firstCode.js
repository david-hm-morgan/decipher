function firstCodeTranslation() {
    let translation = {};
    translation.A = "T";
    translation.B = "U";
    translation.C = "V";
    translation.D = "W";
    translation.E = "X";
    translation.F = "Y";
    translation.G = "Z";
    translation.H = "A";
    translation.I = "B";
    translation.J = "C";
    translation.K = "D";
    translation.L = "E";
    translation.M = "F";
    translation.N = "G";
    translation.O = "H";
    translation.P = "I"; // A or I

    translation.Q = "J";

    translation.R = "K";

    translation.S = "L";
    translation.T = "M";
    translation.U = "N";

    translation.V = "O";

    translation.W = "P";
    translation.X = "Q";
    translation.Y = "R";
    translation.Z = "S";
    translation[" "] = " ";
    translation["?"] = "?";
    translation["."] = ".";
    translation[":"] = ":";
    translation["’"] = "’";
    translation[","] = ",";

    // o or s is wrong cos we can't have a word o_s

    return translation;
}
let firstStringToTranslate = "AOL ZPNUZ DLYL ZBIASL, HUK PA AVVR TL H DOPSL AV ZWVA AOLT, IBA NYHKBHSSF P ZAHYALK AV THRL AOLT VBA, HUK SPRL VUL VM AOVZL VSK MHZOPVULK 3K WPJABYLZ, AOHA ZWYPUNZ PUAV MVJBZ DOLU FVB JYVZZ FVBY LFLZ HUK JVBUA AV H OBUKYLK, AOL AYBAO JYFZAHSSPZLK HUK P YLHSPZLK AOHA P OHK ILLU ZLHYJOPUN MVY PA HSS HSVUN. PA DHZU’A AOHA P MVBUK ZVTLAOPUN WHYAPJBSHY. DOHA P UVAPJLK DHZ HJABHSSF HU HIZLUJL, H DOVSL JVSSLJAPVU VM HWWHYLUASF BUYLSHALK AOPUNZ AOHA ZOVBSK OHCL LEPZALK IBA KPKU’A. HUK QBZA HZ P OHK MPNBYLK AOHA VBA, ZVTLVUL, HUK IHJR AOLU P KPKU’A RUVD DOV, DYVAL AV ALSS TL HIVBA PA. AOLF VICPVBZSF OHK H ZLUZL VM AOL KYHTHAPJ, HUK HU LEJLSSLUA ZLUZL VM APTPUN. PM AOLF OHK ZLUA PA AV TL LCLU H MLD KHFZ ILMVYL P DVBSK OHCL HZZBTLK PA DHZ ZVTL RPUK VM JYHGF HKCLYAPZPUN ZABUA, IBA DOLU AOL WVZAJHYK HYYPCLK, PA DHZ PTTLKPHALSF VICPVBZ AV TL DOHA PA YLMLYYLK AV. PA JHYYPLK QBZA AOYLL DVYKZ, HUK PA KLZJYPILK WLYMLJASF AOL TPZZPUN WPLJLZ PU TF WBGGSL. PA QBZA ZHPK: AOL ZOHKVD HYJOPCL.";


module.exports = {
    getEncryptedText: function() {
        return firstStringToTranslate;
    },
    getKey: function() {
        return firstCodeTranslation();
    }
}