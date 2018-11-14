
let thirdStringToTranslate = `CTN HLETPQW DP NDBCQ, GDZT DI OJPQJI DP ARGG, ORQ IJQ ARGG TIJRBC QJ KTNPRLAT HT QCLQ UJNFDIB ZJN CTN UJRGA OT UJNQC QCT NDPF. ORQ JZ YJRNPT PCT CLA LI LIPUTN ZJN QCLQ. PCT KJDIQTA JRQ QCLQ NTQRNIDIB QJ QCT RIDQTA PQLQTP YLNNDTA DQP JUI NDPFP.
D CLA FTKQ HWPTGZ LHRPTA ZJN QCT GLPQ ZTU WTLNP PTKLNLQDIB QCT BNTTAW LIA STILG ZNJH QCTDN HJITW OW L SLNDTQW JZ HTLIP, IJQ LGG JZ QCTH TIQDNTGW LKKNJSTA OW QCT GLU. D ULP GTZQ UJIATNDIB CJU QCT MRTTI FITU LOJRQ QCLQ, LIA UCTQCTN HW YJRPDI CLA OTTI DIPQNRYQTA QJ QTGG QCT ZTATNLG HLNPCLGGP LOJRQ HW LYQDSDQDTP. ADPYNTQDJI PTTHTA QCT UDPT YJRNPT, LIA LIWULW, CJU JZQTI AJ WJR BTQ L EJO JZZTN ZNJH L MRTTI?
YCLNGTP CLP AJIT L PQTNGDIB EJO ATSTGJKDIB L ITQUJNF JZ LBTIQP LIA CDP DIQTGGDBTIYT JKTNLQDJIP CLST OTYJHT L FTW KLNQ JZ ONDQDPC ADKGJHLYW. QCT BNJUDIB DIPQLODGDQW LYNJPP TRNJKT QCNTLQTIP QCT THKDNT, LIA DQ DP CTN HLETPQW’P OTGDTZ QCLQ UT UDGG ITTA QJ NTPKJIA DI FDIA QJ ATPQLODGDPT JRN TITHDTP OTZJNT QCTW BNJU QJJ PQNJIB. QCDP DP L ITU LIA ALIBTNJRP FDIA JZ ULNZLNT, ORQ YJRGA, D PRKKJPT, PLST GDSTP, LIA UT UDGG, DI LIW YLPT, ITTA QJ HLQYC JRN TITHDTP DZ UT LNT QJ PQLW LCTLA.
QCDP TIQDNT JKTNLQDJI HRPQ OT FTKQ PTYNTQ. ZDNPQ ZNJH JRN TITHDTP, ORQ PTYJIA, LIA ERPQ LP DHKJNQLIQ, ZNJH QCT JZZDYDLG HLYCDITNW JZ PQLQT. CTN HLETPQW YLIIJQ LZZJNA QCT NDPF QCLQ CTN BJSTNIHTIQ YJRGA OT DHKGDYLQTA DI QCTPT JKTNLQDJIP, LIA PDN YCLNGTP CLP NTLPJI QJ OTGDTST QCLQ QCT ZJNTDBI JZZDYT HLW CLST OTTI YJHKNJHDPTA. ZJN QCDP NTLPJI UT ITTA QJ HJST PDN YCLNGTP’ DIQTGGDBTIYT JKTNLQDJI QJ L HJNT PTYRNT GJYLQDJI. LIA D QCDIF D CLST LI DATL UCTNT QCLQ YJRGA OT!
`;

function thirdCodeTranslation() {
    let translation = {};
    translation.L = "A";
    translation.O = "B";
    translation.Y = "C";
    translation.A = "D";
    translation.T = "E";

    translation.Z = "F";

    translation.B = "G";
    translation.C = "H";
    translation.D = "I";
    translation.E = "J";
    translation.F = "K";
    translation.G = "L";
    translation.H = "M";
    translation.I = "N";
    translation.J = "O";
    translation.K = "P";
    translation.M = "Q";
    translation.N = "R";
    translation.P = "S";
    translation.Q = "T";
    translation.R = "U";
    translation.S = "V";
    translation.U = "W";
    translation.V = "X";//////
    translation.W = "Y";
    translation.X = "Z";/////
    translation.Z = "F";

    // punctuation
    translation["'"] = "'";
    translation[","] = ",";
    translation["."] = ".\n";
    translation["!"] = "!";
    translation["?"] = "?";
    translation["’"] = "’";
    
    return translation;
}

module.exports = {
    getEncryptedText: function() {
        return thirdStringToTranslate;
    },
    getKey: function() {
        return thirdCodeTranslation();
    }
}