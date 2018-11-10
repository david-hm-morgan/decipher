let eighthNovemberStringToTranslateA = `UAYHJ UXXZB JHKGN MTUIT BEJTN JMBIA YNKCM UJTJT NUDNA BEJTN KZDNG SGBKZ DAGIT ULNUJ MUXXT ALNAC CNAXN DJBRX AIWAH AMAPJ BCGBL UDNHN IKGUJ PJBTU HBCNG AJUBZ RKJAI ULUXN ZSUZN NGUZS CGBVN IJBEJ TUHHI AXNDB NHZJH NNYXU WNTUH HBGJB EJTUZ SHBUJ TUZWU JYKHJ TALNR NNZIB ZINUL NDRPI TAGXN HSGNP JTNEU GHJJK RNXUZ NTADR NNZBC NZNDU ZAZDX BZDBZ MAHEK XXBEX ARBKG NGHAZ DNZSU ZNNGH MUJTJ TNHWU XXHZN NDNDJ BRKUX DJTNH TADBM AGITU LNDNN CRNZN AJTZN MHIBJ XAZDP AGDSN JJUZS AIINH HMAHZ BJSBU ZSJBR NNAHP MUJTB KJTAG GPHTN XCRKJ UHJUX XDUDZ JTALN NZBKS TJBSU LNTUY JTNNO IKHNT NMBKX DZNND JBSNJ BCNZX PUZLB XLNDY PGNIB ZZAUH HAZIN TADTN XCNDY NJBEU ZDJTN AGITU LNRKJ UJDUD ZJSUL NYNAZ PBRLU BKHMA PUZJT NDKIJ JTAJT ADIBH JYNJT NXUDA GMAHE AGJBB ZAGGB MEBGY NJBHI AXNAZ DAIIN HHJTG BKSTJ TNEGB ZJDBB GMAHJ BBGUH WPHBU JBBWA SAYRX NAZDH CNZJA ZBJTN GYUHN GARXN EBGJZ USTJN OCXBG UZSJT NXARP GUZJT BEHNM NGHAZ DJKZZ NXHPH JNYHA GBKZD JTNZN USTRB KGTBB DSCHM AHKHN XNHHD BMZJT NGNAZ DUIBK XDNAH UXPTA LNSBJ XBHJR KJUYA GWNDJ TNJKZ ZNXHA ZDBZB IIAHU BZHKH NDJTN HNKHJ GUIWB EARAX XBEJM UZNJB TNXCY NZALU SAJNR AIWUY BLNDF KUNJX PAZDW NCJAZ NPNBK JEBGH NZHBG HUTAD ZBUDN AMTNJ TNGJT NHTAD BMAGI TULNM AHHJU XXBCN GAJUB ZAXBG ZBJRK JUEUJ MAHJT NZHNI KGUJP MBKXD RNJUS TJAZD UIBKX DZJRN HKGNU EJTNP MNGNK HUZSU ZEGAG NDBGH NUHYB YNJNG HEBGU ZJGKH UBZDN JNIJU BZHBU XAPNG NDKCM UJTUZ HKXAJ UBZAZ DYBLN DHXBM XPUJM AHTBG GURXN UMAHT BJDAY CAZDJ TNAUG HYNXX NDBEH NMASN AZDYB KXDUM AHVKH JARBK JJBSU LNKCM TNZUE BKZDA HJNNX DBBGY AGWND MUJTJ TNUZU JUAXH LGULU IJBGU AGNSU ZAUYC NGAJG UOUJM AHUZI BZSGK BKHUZ JTAJD AGWAZ DDAZW JKZZN XRKJY BGNHU SZUEU IAZJX PUJIA GGUND JTNJG ADNYA GWJAZ ZBZJT NXBIW VBTZJ AZZMA HBZNB EJTNJ BCHAE NYAWN GHUZL UIJBG UAZXB ZDBZA ZDUTA DIGAI WNDBZ NBGJM BBETU HHAEN HUZYP BJTNG XUENA HAIAJ RKGSX AGJTU HMAHR USAZD TNALP AZDLN GPGKH JPJTA JJBXD YNJMB JTUZS HZBBZ NTADK HNDUJ UZALN GPXBZ SJUYN AZDZB BZNTA DKCSG ADNDU JUZVK HJAHX BZSUE JTNGB BYRNT UZDUJ MAHHJ UXXUZ KHNJT NZHBY NBZNM BKXDT ALNRN NZYAU ZJAUZ UZSJT NXBIW HBAXX YPCGN IAKJU BZHMN GNCGB RARXP KZZNI NHHAG PRKJZ BBZNT ADCAU DEBGA JAZZH AENMU JTBKJ HBYNJ TUZSU YCBGJ AZJJB TUDNH BUDNI UDNDJ BJAIW XNJTN XBIWA ZDAEJ NGAZB JTNGN USTJN NZTBK GHBES GUYMB GWUMA HUZUT ADEBK ZDJTN HTADB MAGIT ULN`;

function eighthNovemberTranslationA() {
    let translation = {};
    
    translation.K = "U"; //cerys thinks  U
    translation.R = "B"; // cerys thinks B
    translation.E = "F"; //cerys thinks F

    translation.A = "A"; // O according to freq but A according to triple freq
    translation.Z = "N"; // I according to freq but N according to triples
    translation.D = "D"; // D according to triples cerys thinks D too
    

    translation.L = "V"; // cerys thought this might be V
    translation.P = "Y";  //cerys thinks Y
    translation.O = "X";

    translation.I = "C"; //cerys thinks C

    translation.J = "T"; // according to freq
    translation.T = "H"; // according to pair freq
    translation.N = "E"; // concurs with freq analysis

    translation.U = "I"; // U according to freq cerys thinks I
    translation.V = "J";  // I filled this in after Cerys left
    translation.W = "K";  //cerys thinks W
    translation.X = "L"; // cerys thinks L
    translation.Y = "M"; // cerys thinks 
    translation.B = "O"; // A according to freq cerys thinks O
    translation.C = "P";  // U?  cerys thinks P
    translation.F = "Q";// I filled this in after Cerys left
    translation.G = "R"; // S possible  cerys thinks  R
    translation.H = "S"; // cerys thinks S
    translation.M = "W"; // H  cerys thinks W

    translation.Q = "_";
    translation.S = "G"; //cerys thinks G

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
    getEncryptedTextA: function() {
        return eighthNovemberStringToTranslateA;
    },
    getKeyA: function() {
        return eighthNovemberTranslationA();
    }
}

let decryptedA = `iamstillnotsurewhichofthetwocameupwiththeideaoftheundergroundarchiveitwillhaveappealedtoblackasawaytoprovidesecuritytohisoperationbutacivilengineering
projectofthisscaledoesntseemlikehissortofthingsoithinkitmusthavebeenconceivedbycharlesgreythefirsttubelinehadbeenopenedinandlondonwasfulloflabourersandengineerswiththe
skillsneededtobuildtheshadowarchivedeepbeneathnewscotlandyardgettingaccesswasnotgoingtobeeasywithoutharryshelpbutistilldidnthaveenoughtogivehimtheexcusehewouldneedtoget
openlyinvolvedmyreconnaissancehadhelpedmetofindthearchivebutitdidntgivemeanyobviouswayintheductthathadcostmethelidarwasfartoonarrowformetoscaleandaccessthroughthefront
doorwastooriskysoitookagambleandspentanothermiserablefortnightexploringthelabyrinthofsewersandtunnelsystemsaroundtheneighbourhoodgpswasuselessdownthereandicouldeasily
havegotlostbutimarkedthetunnelsandonoccasionsusedtheseustrickofaballoftwinetohelpmenavigatebackimovedquietlyandkeptaneyeoutforsensorsihadnoideawhethertheshadowarchive
wasstilloperationalornotbutifitwasthensecuritywouldbetightandicouldntbesureiftheywereusinginfraredorseismometersforintrusiondetectionsoilayeredupwithinsulationandmoved
slowlyitwashorribleiwashotdampandtheairsmelledofsewageandmouldiwasjustabouttogiveupwhenifoundasteeldoormarkedwiththeinitialsvrivictoriareginaimperatrixitwasincongruous
inthatdarkanddanktunnelbutmoresignificantlyitcarriedthetrademarktannonthelockjohntannwasoneofthetopsafemakersinvictorianlondonandihadcrackedoneortwoofhissafesinmyother
lifeasacatburglarthiswasbigandheavyandveryrustythattoldmetwothingsnoonehaduseditinaverylongtimeandnoonehadupgradeditinjustaslongiftheroombehinditwasstillinusethensomeone
wouldhavebeenmaintainingthelocksoallmyprecautionswereprobablyunnecessarybutnoonehadpaidforatannsafewithoutsomethingimportanttohidesoidecidedtotacklethelockandafteranother
eighteenhoursofgrimworkiwasinihadfoundtheshadowarchive`;
