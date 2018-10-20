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
let secondStringToTranslate = "FTNPTQP RDF TGOBTLFKX HPPQ IYDI B FYTLKM HQTR DGTLI MTLVKDF GKDJH GLI B RDF KPSI RTQMPCBQV RYDI YP YDM IT MT RBIY IYP FYDMTR DCJYBOP. B STLQM FTNP ICDJPF TS YBN BQ GTFITQ QPRFWDWPC JKBWWBQVF SCTN IYP WPCBTM. IYP FITCBPF FITWWPM BQ 1873, DCTLQM IYP MDIP TS IYP KPIIPCF GPIRPPQ OBJITCBD DQM FBC JYDCKPF, FT B DFFLNP YP CPILCQPM IT PQVKDQM IYPQ, GLI B JTLKMQ’I SBQM DQX CPJTCM TS YBN BQ IYP BNNBVCDIBTQ SBKPF DQM IYPCP RDF QTIYBQV BQ IYP TSSBJBDK CPJTCM IT FLVVPFI IYDI YP NPI RBIY FBC JYDCKPF, KPI DKTQP RBIY YPC NDEPFIX. IYP ICDBK YDM VTQP JTKM DQM B NBVYI YDOP NTOPM TQ DI IYDI WTBQI, GLI IYPQ B VTI IYP IYBCM PNDBK. IYBF IBNP BI RDF D HPXRTCM JBWYPC DQM BI ITTH D KBIIKP KTQVPC IT GCPDH, IYTLVY IYP RTCM FICLJILCP YPKWPM D KTI. BI JTQSBCNPM POPCXIYBQV B YDM VLPFFPM FT SDC DGTLI GKDJH, DQM CDBFPM D RYTKP KTDM TS QPR ZLPFIBTQF! BI DKFT FLVVPFIPM IYDI B NBVYI SBQM DQFRPCF BQ IYP FYDMTR DCJYBOP, GLI SBCFI B YDM IT SBVLCP TLI RYPCP BI RDF, DQM YTR B JTLKM VPI BQ. B FIBKK JDQ’I GPKBPOP BI, GLI IYP DQFRPC JDNP SCTN D VTTVKP FPDCJY. B RDF KTTHBQV STC D KTJDIBTQ IYDI RTLKM YDOP WCTOBMPM GKDJH RBIY JTOPC STC D FICPDN TS OBFBITCF, WCPSPCDGKX BQ D JPQICDK KTQMTQ KTJDIBTQ, DQM RBIY SDJBKBIBPF STC FPJLCP FITCDVP TS TSSBJBDK CPJTCMF, DQM BI FYTLKM YDOP GPPQ TWPQPM BQ 1873 TC 1874. B FPDCJYPM STC “GKDJH, KTQMTQ, 1874” DQM B KBHPM RYDI B STLQM. DQM IYDI BF RYX B STLQM NXFPKS KXBQV TQ IYP CTTS TS IYP QTCNDQ FYDR GLBKMBQVF BQ IYP NBMMKP TS IYP QBVYI DQM BQ WTLCBQV CDBQ! B YDM IT SBVLCP TLI D RDX TS VPIIBQV BQFBMP TQP TS IYP NTFI FPJLCP KTJDIBTQF BQ PQVKDQM!";

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

function secondCodeTranslation() {
    let translation = {};
    translation.A = "z";
    translation.B = "I";
    translation.C = "R";
    translation.D = "A";
    translation.E = "J";
    translation.F = "S";
    translation.G = "B";
    translation.H = "K";
    translation.I = "T";
    translation.J = "C";
    translation.K = "L";
    translation.L = "U";
    translation.M = "D";
    translation.N = "M";
    translation.O = "V";
    translation.P = "E";
    translation.Q = "N";
    translation.R = "W";
    translation.S = "F";
    translation.T = "O";
    translation.U = "X";
    translation.V = "G";
    translation.W = "P";
    translation.X = "Y";
    translation.Y = "H";
    translation.Z = "Q";
    translation["“"] = "“";
    translation["”"] = "”";
    translation["!"] = "!";
    translation["’"] = "’";
    return translation;
}

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
    getEncryptedText: function() {
        // return firstStringToTranslate;
        // return secondStringToTranslate;
        return thirdStringToTranslate;
    },
    getKey: function() {
        // return firstCodeTranslation();
        // return secondCodeTranslation();
        return thirdCodeTranslation();
    },
    getDecoder: function() {
        return decode;
    },
    getPunctuation: function() {
        return punctuationTranslation;
    }
}