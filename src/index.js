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

let firstNovemberStringToTranslateA = `JUR DYKR NLH VB JUR BLZR. JUR IYLDX ZKHRKZ VH NCGYA SLZCKH LH JUR VB-UCKHR ZKHRKZ CS DGVZR LJ BRN HDCJYLBA PLGA. JUR UVHJCGP ICCXH (CG LJ YRLHJ, NVXVERAVL) JCYA ZR JULJ VJ ULA IRRB HRJ KE IP VBHERDJCG BRLZR LBA ED GLBALYY HCZR JVZR LSJRG LEGVY 1875 LH L NLP JC KHR JUR EGVHCBRGH’ EGCERGJP HJCGR JC VBHJGKDJ BRN GRDGKVJH VB JUR LGJ CS ARJRDJVCB. JUR BLZR SVGHJ LEERLGH VB EKIYVD VB LB LGJVDYR VB JUR CIHRGMRG BRNHELERG VB 1877, LBA JUR UVHJCGVLBH HLP VJ NLH DCVBRA LH L TGVHYP URLAYVBR IP L WCKGBLYVHJ NUC NLH HBKIIRA IP BRLZR, IKJ V LZ BCJ HC HKGR. VJ AVAB’J HRRZ LB LDDVARBJ JULJ ACKTYLH IYLDX NLH YCCXVBT JC HRJ KE L JCE HRDGRJ LGDUVMR VB YCBACB LJ JULJ JVZR, LBA HDCJYLBA PLGA TLMR UVZ JUR ERGSRDJ YCDLJVCB. VJ NLH DRBJGLY LBA RLHP JC LDDRHH. VJ ULA HRMRGLY RBJGLBDRH, NVJU L HJRLAP SYCN CS MVHVJCGH, BCJ LYY CS JURZ RBJVGRYP GREKJLIYR, JULJ NCKYA AVHTKVHR JUR DCZVBTH LBA TCVBTH CS JUR LTRBJH LBA CSSVDRGH CS IYLDX’H BRJNCGX. IRHJ CS LYY VJ ULA JUR RBJVGR ZRJGCECYVJLB ECYVDR SCGDR HJLBAVBT TKLGA, NUVDU NLH TGRLJ SCG IYLDX, LBA JCKTU CB ZR. VJ NCKYA IR JUR VARLY YCDLJVCB SCG JUR HULACN LGDUVMR.
HDCJYLBA PLGA ULA ZCMRA JC BRN EGRZVHRH HRMRGLY JVZRH HVBDR VJ NLH SVGHJ HRJ KE, IKJ V NLH IRJJVBT JULJ JUR HULACN LGDUVMR ULA ZCMRA NVJU VJ, LBA V HERBJ JUR IRHJ ELGJ CS JUGRR NRRXH HDCKJVBT JUR BCGZLB HULN IKVYAVBTH LBA JUR BRN “BRN HDCJYLBA PLGA” BROJ ACCG LJ JUR DKGJVH TGRRB IKVYAVBT. VJ VH BCJ RLHP JC AC JULJ NVJUCKJ IRVBT HECJJRA, URBDR JUR BVTUJ JVZR GRDCBBLVHHLBDR VB JUR GLVB. JUR NLJRG LBA JUR DCYA EYLPRA ULMCD NVJU ZP ZCCA, IKJ LYHC NVJU ZLBP ARJRDJCG HPHJRZH HC VJ NLH NCGJU JUR AVHDCZSCGJ.
BC-CBR NLH YVXRYP JC TVMR ZR JUR GRLY EYLBH CS JUR EYLDR, JUCKTU ULGGP NLH ULEEP JC EGCMVAR ZR NVJU L DCEP CS JUR CSSVDVLY YLPCKJ, LBA V KHRA L YVALG HPHJRZ JC ZLE LH ZKDU CS JUR CKJHVAR LH V DCKYA. DCZELGVBT JUR JNC HUCKYA ULMR GRMRLYRA KBZLGXRA HJCGLTR LGRLH LBA TVMRB ZR HCZR VARL UCN V ZVTUJ TRJ VB, IKJ BCJUVBT HUCNRA KE KBJVY V ULA L YKDXP IGRLX. YVJRGLYYP. V ULA YCNRGRA JUR YVALG ARJRDJCG ACNB L HULSJ CB JUR DKGJVH TGRRB GCCS, UCEVBT JC TRJ L TYVZEHR VBJC HCZR CS JUR BRLGIP GCCZH. VJ ULA WKHJ LICKJ GRLDURA TGCKBA YRMRY NURB JUR BPYCB YVBR HBLEERA. VJ ZLAR L URYY CS L GCN LH VJ DYLJJRGRA ACNB, LBA V EGRELGRA JC GKB, IKJ BC LYLGZH NRBJ CSS LBA, ZCGR VZECGJLBJYP, V BCJVDRA HCZRJUVBT HVTBVSVDLBJ. VJ ULA JLXRB LGCKBA SVMR HRDCBAH SCG JUR YVALG JC DGLHU ACNB, NUVDU, LJ L GCKTU RHJVZLJR, ZRLBJ VJ ULA SLYYRB SGRR SCG LGCKBA CBR UKBAGRA LBA JNRBJP ZRJGRH. JULJ NCKYA ULMR JLXRB VJ L YCBT NLP KBARGTGCKBA, LBA JURGR NRGR BC ILHRZRBJ GCCZH ZLGXRA CB JUR EYLBH VB JULJ YCDLJVCB. V NLH EGRJJP HKGR V ULA SCKBA JUR HULACN LGDUVMR: BCN V WKHJ ULA JC SVBA L NLP VB.`;


function firstNovemberTranslationA() {
    let translation = {};

    translation.L = "A";
    translation.I = "B";
    translation.D = "C";
    translation.A = "D";
    translation.R = "E";

    translation.S = "F";
    translation.T = "G";
    translation.U = "H";
    translation.V = "I";
    translation.W = "J";
    translation.X = "K";
    translation.Y = "L";
    translation.Z = "M";
    translation.B = "N";
    translation.C = "O";
    translation.E = "P";
    translation.F = "_"; //Q
    translation.G = "R";
    translation.H = "S";
    translation.J = "T";
    translation.K = "U";
    translation.N = "W";
    translation.M = "V";
    translation.O = "X";
    translation.P = "Y";
    translation.Q = "_";//Z

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

let firstNovemberStringToTranslateB = `ATRDW PFKFD KITGG TPGTD PRGFG ZGTPP RFGRD PIDZM KYIEQ GTPLR QKYGT PFZHG TPDYD PIKZY GTPZG GZXRY FRDPD PFGWP FFRYL KYGTP YZDGT GTPGT DPPPX BPDZD FRDPR IDZMK YIGTD PRGGZ ZHDKY OWHPY APGTP OZDPK IYZOO KAPFP PXBRD RWQFP LOZAH FFPLP YGKDP WQZYO ZDXKY IRWWK RYAPF RYLHY REWPG ZLPGP DXKYP GTPKD EPFGF GDRGP IQKGT KYVGT PQRDP XKFGR VPYKY GTPKD ZHGWZ ZVGTP QOZAH FGZZX HATZY GDPRG KPFRY LYZGP YZHIT ZYDPR WBZWK GKVRF JZYDZ ATRHM DZGPG TPWRM ZOBZM PDIZJ PDYFG TPMZD WLZOF GRGPF UHFGR FGTPW RMZOI DRJKG QIZJP DYFGT PBTQF KARWM ZDWLR YLMPR DPBPD TRBFG ZZXHA TKYAW KYPLG ZZJPD WZZVG TPDPR WXKIT GZOGT PXZDP BZMPD OHWRY LGTPK YPJKG REKWK GQZOK GFBZW KGKAR WKYOW HPYAP ZHDGR FVYZM KFYZG GZATZ ZFPRO RJZHD PLBRD GYPDG ZAZYG DZWGT PZGTP DFGTR GMRQD KFVFM RDRYR WWKRY APMKW WPYAZ HDRIP RAZHY GPDRW WKRYA PRYLR LRYIP DZHFP FARWR GKZYK YFGPR LZHDF GDRGP IQFTZ HWLEP GZXRK YGRKY RYRLX KGGPL WQHYP RFQBP RAPEP GMPPY GTPPX BPDZD FGZIP GTPDG TPQRD PGTPE KIIPF GBZWK GKARW GTDPR GGZZH DPXBK DPEHG RFPYP XKPFZ OZYPR YZGTP DGTPQ RWFZG TDPRG PYZHD GDRLK YIDZH GPFMP YPPLG ZKYLH APGTP XGZMZ DVGZI PGTPD MTKWP BDPJP YGKYI GTPXO DZXOZ DXKYI RBZMP DEWZA RIRKY FGZHD KYGPD PFGZH DXZFG KXBZD GRYGM PRBZY KYGTK FKFAZ YOHFK ZYRYL XKWLL KFGDH FGGTP EPFGZ HGAZX PMZHW LEPGZ PYAZH DRIPR LQFOH YAGKZ YRWRW WKRYA PEPGM PPYRW WGTDP PGTRG XRVPF KGTRD LOZDG TPPXB PDZDF GZOKI TGZYP RYZGT PDZDH FRYLK YGTPZ GGZXR YADKF KFKGT KYVKF PYFPR YZBBZ DGHYK GQGZL ZUHFG GTRG`;

// charlesisrightthethreatstotheeastaregrowingbythedayinthesouthernregiontheottomansarerestlessandinthenorththethreeemperorsareagrowingthreattoourinfluencetheforeignofficeseemparalysedfocussedentirelyonformingalliancesandunabletodeterminetheirbeststrategyithinktheyaremistakenintheiroutlooktheyfocustoomuchontreatiesandnotenoughonrealpolitikasvonrochauwrotethelawofpowergovernstheworldofstatesjustasthelawofgravitygovernsthephysicalworldandweareperhapstoomuchinclinedtooverlooktherealmightofthemorepowerfulandtheinevitabilityofitspoliticalinfluenceourtasknowisnottochooseafavouredpartnertocontroltheothersthatwayriskswaranalliancewillencourageacounterallianceandadangerousescalationinsteadourstrategyshouldbetomaintainanadmittedlyuneasypeacebetweentheemperorstogethertheyarethebiggestpoliticalthreattoourempirebutasenemiesofoneanothertheyalsothreatenourtradingroutesweneedtoinducethemtoworktogetherwhilepreventingthemfromformingapowerblocagainstourinterestourmostimportantweaponinthisisconfusionandmilddistrustthebestoutcomewouldbetoencourageadysfunctionalalliancebetweenallthreethatmakesithardfortheemperorstofightoneanotherorusandintheottomancrisisithinkisenseanopportunitytodojustthat

function firstNovemberTranslationB() {
    let translation = {};
    
    translation.K = "I";
    translation.R = "A";
    translation.E = "B";
    translation.A = "C";
    translation.L = "D";
    translation.P = "E";
    translation.O = "F";

    translation.I = "G";

    translation.T = "H";
    translation.U = "J";
    translation.V = "K";
    translation.W = "L";
    translation.X = "M";
    translation.Y = "N";
    translation.Z = "O";
    translation.B = "P";
    translation.C = "Q"; //Q?
    translation.D = "R";
    translation.F = "S";
    translation.G = "T";
    translation.H = "U";
    translation.J = "V";
    translation.M = "W";

    translation.N = "_";
    translation.Q = "Y";
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
//the clue was in the name. the black museum is world famous as the in-house museum of crime at new scotland yard. the history books (or at least, wikipedia) told me that it had been set up by inspector neame and pc randall some time after april 1875 as a way to use the prisoners’ property store to instruct new recruits in the art of detection. the name first appears in public in an article in the observer newspaper in 1877, and the historians say it was coined as a grisly headline by a journalist who was snubbed by neame, but i am not so sure. it didn’t seem an accident that douglas black was looking to set up a top secret archive in london at that time, and scotland yard gave him the perfect location. it was central and easy to access. it had several entrances, with a steady flow of visitors, not all of them entirely reputable, that would disguise the comings and goings of the agents and officers of black’s network. best of all it had the entire metropolitan police force standing guard, which was great for black, and tough on me. it would be the ideal location for the shadow archive. scotland yard had moved to new premises several times since it was first set up, but i was betting that the shadow archive had moved with it, and i spent the best part of three weeks scouting the norman shaw buildings and the new “new scotland yard” next door at the curtis green building. it is not easy to do that without being spotted, hence the night time reconnaissance in the rain. the water and the cold played havoc with my mood, but also with many detector systems so it was worth the discomfort. no-one was likely to give me the real plans of the place, though harry was happy to provide me with a copy of the official layout, and i used a lidar system to map as much of the outside as i could. comparing the two should have revealed unmarked storage areas and given me some idea how i might get in, but nothing showed up until i had a lucky break. literally. i had lowered the lidar detector down a shaft on the curtis green roof, hoping to get a glimpse into some of the nearby rooms. it had just about reached ground level when the nylon line snapped. it made a hell of a row as it clattered down, and i prepared to run, but no alarms went off and, more importantly, i noticed something significant. it had taken around five seconds for the lidar to crash down, which, at a rough estimate, meant it had fallen free for around one hundred and twenty metres. that would have taken it a long way underground, and there were no basement rooms marked on the plans in that location. i was pretty sure i had found the shadow archive: now i just had to find a way in.

module.exports = {
    getEncryptedText: function() {
        // return firstStringToTranslate;
        // return secondStringToTranslate;
        // return thirdStringToTranslate;
        // return firstNovemberStringToTranslateA;
        return firstNovemberStringToTranslateB;
    },
    getKey: function() {
        // return firstCodeTranslation();
        // return secondCodeTranslation();
        // return thirdCodeTranslation();
        // return firstNovemberTranslationA();
        return firstNovemberTranslationB();
    },
    getDecoder: function() {
        return decode;
    },
    getPunctuation: function() {
        return punctuationTranslation;
    }
}