let translation = {};

function firstCodeTranslation() {
    translation.A = "B";
    translation.B = "C";
    translation.C = "D";
    translation.D = "E";
    translation.E = "F";
    translation.F = "G";
    translation.G = "H";
    translation.H = "I";
    translation.I = "J";
    translation.J = "K";
    translation.K = "L";
    translation.L = "M";
    translation.M = "N";
    translation.N = "O";
    translation.O = "P";
    translation.P = "Q";
    translation.Q = "R";
    translation.R = "S";
    translation.S = "T";
    translation.T = "U";
    translation.U = "V";
    translation.V = "w";
    translation.W = "x";
    translation.X = "Y";
    translation.Y = "Z";
    translation.Z = "A";
    translation[" "] = " ";
    translation["?"] = "?";
}

let stringToTranslate20181019 = "FTNPTQP RDF TGOBTLFKX HPPQ IYDI B FYTLKM HQTR DGTLI MTLVKDF GKDJH GLI B RDF KPSI RTQMPCBQV RYDI YP YDM IT MT RBIY IYP FYDMTR DCJYBOP. B STLQM FTNP ICDJPF TS YBN BQ GTFITQ QPRFWDWPC JKBWWBQVF SCTN IYP WPCBTM. IYP FITCBPF FITWWPM BQ 1873, DCTLQM IYP MDIP TS IYP KPIIPCF GPIRPPQ OBJITCBD DQM FBC JYDCKPF, FT B DFFLNP YP CPILCQPM IT PQVKDQM IYPQ, GLI B JTLKMQ’I SBQM DQX CPJTCM TS YBN BQ IYP BNNBVCDIBTQ SBKPF DQM IYPCP RDF QTIYBQV BQ IYP TSSBJBDK CPJTCM IT FLVVPFI IYDI YP NPI RBIY FBC JYDCKPF, KPI DKTQP RBIY YPC NDEPFIX. IYP ICDBK YDM VTQP JTKM DQM B NBVYI YDOP NTOPM TQ DI IYDI WTBQI, GLI IYPQ B VTI IYP IYBCM PNDBK. IYBF IBNP BI RDF D HPXRTCM JBWYPC DQM BI ITTH D KBIIKP KTQVPC IT GCPDH, IYTLVY IYP RTCM FICLJILCP YPKWPM D KTI. BI JTQSBCNPM POPCXIYBQV B YDM VLPFFPM FT SDC DGTLI GKDJH, DQM CDBFPM D RYTKP KTDM TS QPR ZLPFIBTQF! BI DKFT FLVVPFIPM IYDI B NBVYI SBQM DQFRPCF BQ IYP FYDMTR DCJYBOP, GLI SBCFI B YDM IT SBVLCP TLI RYPCP BI RDF, DQM YTR B JTLKM VPI BQ. B FIBKK JDQ’I GPKBPOP BI, GLI IYP DQFRPC JDNP SCTN D VTTVKP FPDCJY. B RDF KTTHBQV STC D KTJDIBTQ IYDI RTLKM YDOP WCTOBMPM GKDJH RBIY JTOPC STC D FICPDN TS OBFBITCF, WCPSPCDGKX BQ D JPQICDK KTQMTQ KTJDIBTQ, DQM RBIY SDJBKBIBPF STC FPJLCP FITCDVP TS TSSBJBDK CPJTCMF, DQM BI FYTLKM YDOP GPPQ TWPQPM BQ 1873 TC 1874. B FPDCJYPM STC “GKDJH, KTQMTQ, 1874” DQM B KBHPM RYDI B STLQM. DQM IYDI BF RYX B STLQM NXFPKS KXBQV TQ IYP CTTS TS IYP QTCNDQ FYDR GLBKMBQVF BQ IYP NBMMKP TS IYP QBVYI DQM BQ WTLCBQV CDBQ! B YDM IT SBVLCP TLI D RDX TS VPIIBQV BQFBMP TQP TS IYP NTFI FPJLCP KTJDIBTQF BQ PQVKDQM!";

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

    // for (var k =0; k < key.length; k++) {

    // }

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

function oldCodeTranslation() {
    let translation20181019 = {};
    translation20181019.A = "z";
    translation20181019.B = "I";
    translation20181019.C = "R";
    translation20181019.D = "A";
    translation20181019.E = "J";
    translation20181019.F = "S";
    translation20181019.G = "B";
    translation20181019.H = "K";
    translation20181019.I = "T";
    translation20181019.J = "C";
    translation20181019.K = "L";
    translation20181019.L = "U";
    translation20181019.M = "D";
    translation20181019.N = "M";
    translation20181019.O = "V";
    translation20181019.P = "E";
    translation20181019.Q = "N";
    translation20181019.R = "W";
    translation20181019.S = "F";
    translation20181019.T = "O";
    translation20181019.U = "X";
    translation20181019.V = "G";
    translation20181019.W = "P";
    translation20181019.X = "Y";
    translation20181019.Y = "H";
    translation20181019.Z = "Q";
}

// next part 20:00 19-Oct-2018
let stringToTranslate2000 = `CTN HLETPQW DP NDBCQ, GDZT DI OJPQJI DP ARGG, ORQ IJQ ARGG TIJRBC QJ KTNPRLAT HT QCLQ UJNFDIB ZJN CTN UJRGA OT UJNQC QCT NDPF. ORQ JZ YJRNPT PCT CLA LI LIPUTN ZJN QCLQ. PCT KJDIQTA JRQ QCLQ NTQRNIDIB QJ QCT RIDQTA PQLQTP YLNNDTA DQP JUI NDPFP.
D CLA FTKQ HWPTGZ LHRPTA ZJN QCT GLPQ ZTU WTLNP PTKLNLQDIB QCT BNTTAW LIA STILG ZNJH QCTDN HJITW OW L SLNDTQW JZ HTLIP, IJQ LGG JZ QCTH TIQDNTGW LKKNJSTA OW QCT GLU. D ULP GTZQ UJIATNDIB CJU QCT MRTTI FITU LOJRQ QCLQ, LIA UCTQCTN HW YJRPDI CLA OTTI DIPQNRYQTA QJ QTGG QCT ZTATNLG HLNPCLGGP LOJRQ HW LYQDSDQDTP. ADPYNTQDJI PTTHTA QCT UDPT YJRNPT, LIA LIWULW, CJU JZQTI AJ WJR BTQ L EJO JZZTN ZNJH L MRTTI?
YCLNGTP CLP AJIT L PQTNGDIB EJO ATSTGJKDIB L ITQUJNF JZ LBTIQP LIA CDP DIQTGGDBTIYT JKTNLQDJIP CLST OTYJHT L FTW KLNQ JZ ONDQDPC ADKGJHLYW. QCT BNJUDIB DIPQLODGDQW LYNJPP TRNJKT QCNTLQTIP QCT THKDNT, LIA DQ DP CTN HLETPQW’P OTGDTZ QCLQ UT UDGG ITTA QJ NTPKJIA DI FDIA QJ ATPQLODGDPT JRN TITHDTP OTZJNT QCTW BNJU QJJ PQNJIB. QCDP DP L ITU LIA ALIBTNJRP FDIA JZ ULNZLNT, ORQ YJRGA, D PRKKJPT, PLST GDSTP, LIA UT UDGG, DI LIW YLPT, ITTA QJ HLQYC JRN TITHDTP DZ UT LNT QJ PQLW LCTLA.
QCDP TIQDNT JKTNLQDJI HRPQ OT FTKQ PTYNTQ. ZDNPQ ZNJH JRN TITHDTP, ORQ PTYJIA, LIA ERPQ LP DHKJNQLIQ, ZNJH QCT JZZDYDLG HLYCDITNW JZ PQLQT. CTN HLETPQW YLIIJQ LZZJNA QCT NDPF QCLQ CTN BJSTNIHTIQ YJRGA OT DHKGDYLQTA DI QCTPT JKTNLQDJIP, LIA PDN YCLNGTP CLP NTLPJI QJ OTGDTST QCLQ QCT ZJNTDBI JZZDYT HLW CLST OTTI YJHKNJHDPTA. ZJN QCDP NTLPJI UT ITTA QJ HJST PDN YCLNGTP’ DIQTGGDBTIYT JKTNLQDJI QJ L HJNT PTYRNT GJYLQDJI. LIA D QCDIF D CLST LI DATL UCTNT QCLQ YJRGA OT!
`;

// JKTNLQDJI OPERATION
// PTYNTQ SECRET

let translation2000 = {};
// TODO update with code
translation2000.A = "D"; // confidence from L&C
translation2000.D = "I";
translation2000.I = "N";
translation2000.J = "O";
translation2000.L = "A";
translation2000.N = "R";
translation2000.P = "S";
translation2000.Z = "F";
translation2000["'"] = "'";
translation2000[","] = ",";
translation2000["."] = ".\n";
translation2000["!"] = "!";
translation2000["?"] = "?";
translation2000["’"] = "’";
// JZZDYT
// OFFICE

// ZJNTDBI
// FOREIGN

translation2000.C = "_";
translation2000.E = "_";
translation2000.F = "_";
translation2000.G = "_";
translation2000.H = "_";
translation2000.K = "_";
translation2000.M = "_";
translation2000.O = "_";
translation2000.R = "_";
translation2000.S = "_";
translation2000.U = "_";
translation2000.V = "_";
translation2000.W = "_";
translation2000.X = "_";
translation2000.Q = "_"; // we thought S but no

translation2000.Y = "_"; //C?
translation2000.B = "_"; //G?
translation2000.T = "_"; //E?

// ..r .a..ts. it ri..s, .if. in .otson it d..., ..s nos d... .no... so ..rt.ad. .. s.as .or.in. for ..r .o..d .. .ors. s.. rit._._ ..s of .o.rt. t.. .ad
// an ant..r for s.as_._ t.. .oins.d o.s s.as r.s.rnin. so s.. .nis.d tsas.t .arri.d ist o.n rit.t_._  i .ad ...s ..t..f a..t.d for s.. .ats f.. ..art t..arasin. s.. .r..d. and ..na. fro. s..ir .on.. .. a .ari.s. of ..ant, nos a.. of s... .nsir... a..ro..d .. s.. .a._._ i .at ..fs .ond.rin. .o. s.. ....n .n.. a.o.s s.as, and ...s..r .. .o.tin .ad ...n intsr..s.d so s... s.. f.d.ra. .art.a..t a.o.s .. a.si.isi.t_._ dit.r.sion t....d s.. .it. .o.rt., and an..a., .o. ofs.n do .o. ..s a .o. off.r fro. a ....n?  ..ar..t .at don. a ts.r.in. .o. d....o.in. a n.s.or. of a..nst and .it ins...i..n.. o..rasiont .a.. ...o.. a ... .ars of .risit. di..o.a.._._ s.. .ro.in. intsa.i.is. a.rott ..ro.. s.r.as.nt s.. ...ir., and is it ..r .a..ts.’t ...i.f s.as .. .i.. n..d so r.t.ond in .ind so d.tsa.i.it. o.r .n..i.t ..for. s... .ro. soo tsron._._ s.it it a n.. and dan..ro.t .ind of .arfar., ..s .o..d, i t...ot., ta.. .i..t, and .. .i.., in an. .at., n..d
// so .as.. o.r .n..i.t if .. ar. so tsa. a..ad_._  s.it .nsir. o..rasion ..ts .. ...s t..r.s_._ firts fro. o.r .n..i.t, ..s t..ond, and ..ts at i..orsans, fro.
// s.. offi.ia. .a..in.r. of tsas._._ ..r .a..ts. .annos afford s.. rit. s.as ..r .o..rn..ns .o..d .. i...i.as.d in s..t. o..rasiont, and tir ..ar..t .at r.aton
// so ...i... s.as s.. for.i.n offi.. .a. .a.. ...n .o..ro.it.d_._ for s.it r.aton .. n..d so .o.. tir ..ar..t’ ins...i..n.. o..rasion so a .or. t...r. .o.asion_._ and i s.in. i .a.. an id.a ...r. s.as .o..d ..!

// console.log(`${decode(stringToTranslate2000, translation2000)}`);

module.exports = {
    getEncryptedText: function() {
        return stringToTranslate2000;
    },
    getKey: function() {
        return translation2000;
    },
    getDecoder: function() {
        return decode;
    }
}