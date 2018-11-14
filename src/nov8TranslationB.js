let eighthNovemberStringToTranslateB = `JKYRMGHJ WDMDI YNZ GLZ HE KJLX KD RCYHTR YR WZGKYZI ZK NZA JNZYV HYZPYR SD CYR HIDMGHJ WDMDI HAK ZKYD PGDLFYH SZ YZDJJDXXZI JDA CHCLWIYZI PWKYHIHG JRA HA GDRSPRWB YZGRE XZGS HIDMCR GZS VJR ZK YRWB D JDAK YZ CYR YZDJLSYZI NZJ ZK HE KJLX PTHKRGKJ GLZ JPRNWR JR HXZIKLZ HAK HIYHLWSYD ZK YRWB R CHHY D CYR JDJDGI HAK ZK HJYZBJHG HAK HYDXGHKHC ZK YZZJ KCRKJAIDHG YD TYDKHHX HE WWDN JPZMYH JGZGHBXH HAKPWWLSHGRI CRHGK KJLX HN CYR HBZGLH YGHAKGZY YD HIYHLWSYD JKD SZ AKCRHGE HAK YHMDT HGDBXH HAK ZK KRHGAK XGHK GHTYZW R KYHJHGB PRX SWHJKD HLTRHW HAK CYRA GHAKZ HAK YZYZDJDM PGRYZDJYRBOH JRDJJLG YD YDHG ZK XDA YZ PWHG YRI HN VYDAK D ZJ HTRKYRMCR JDA ZK KZY JD RDJJLG CHWCDGEYL YR KRAK CHIYDMYZI HE ZK CHHY KZY WWDN HA CYR GRN GHAKGLS CDZMR ZK CYR YZDTHG HAK YD GHNZB SZ HIYRWRE R YDRKYDRX ZK YHHV PWGRWLIDKGRB JD VIGRXJDEHJLRI GLZ ZK JGZGHBXH HHGAK HAK SZ HLTRHW HAK HTRTYH ZK HWEDJJZB HE PRX KD JKATDWKZZS HAK SZ HGRWT HAK XZGS PRNR PRWB HAK KIHGDC ZK CYR JGZKIR HAK HIYHLWSYD ZK PGK ZK YZDKHGIJDC AKDN CHHIZGB ZK JL NZWWR PRX JDAK KYHCLGB KHP CYR CHTRTYH PWWRGZX HXDK HXRJ HAK KR HGDBXH HAK SZ JHIRS ZNK HAK CWGZN HAK ZK JHKRGKJYZXHC JJHGB HAK CYR KYHXRDWGRB YD CHKILCYZI HKLBJDC GDHAK PKDYLKGZBBZ YR JKYHJHGB DWHRGJDC CYR HYZKJCRWT YHHNKHE KYHXHHGTRJDC IDWELB HAK KRAK VYDAK D YZDKIHWSHG YZ KLE JXDR GLZ KLZER YZDJLSYZI ZK CRHW CWLZI JDAK KRAK HLGK JD KD CYR JIDKIRK GZ PTHKRGKJ PIDWZB YZ HHGTR ZK HWERYL HGR JGHCRHW WRIDKDWZB GLZ KRAK HKRYLKGZSYL GRHBBR PRX KD CRZGER CYR HXZA KR JLZWWRI CYR VRHN TYDGRHBBR VJDG HA YHAK YZDKIRYD JWHJYLZI HA SD HIYHGHSGHKYD YRDJJLG YXHCYZI ZK KWLIDSSDC HE WWDN KD YHAK YZDKIR JKGZBBLJ HA SD VGZS JYZKGZX AKDN CHIRS JD HA GHKJDYDX HXDGB HAK GZS KWLIDSSDC JTYDAK HVRX CYR YZDKYHMGHKYD GZS KGZBBLJ ZK CRHW CWLZI AIDAN YZDKIR GZS HKDKHBBR IDWELB R CHGGDKJ JRA KJRH HAK SZ YZDKJHLF HAK CYR JGZGGZA YRDGRTWLE KHWABXRB JHYZKJCRWT HXZA KRKRHGAK GHCYL HE WWDN RDCYD ZK JHKLZG TYDCRGK GLZ YHAK HWBZYDKYRKJYZI HVRK CYR KIR PHAK SD CYR JYRXZKKZ HAK HTRTYH ZK JVHHJ KD HJLIOH HAK JR JDAK HVRK WWDN RDJJLG KRAK VJDG R JD HGHAK HBZGLH SZ JHDGHWWHIYRAI HAK YD HTRGKLZ CHJLRI JRA JVGLK HAK PE YZDJJHGBBLJ WRKLGE JKD CYR RDGRTWLE YD TYDJDGBL WDGBR HAK`;

function eighthNovemberTranslationB() {
    let translation = {};
    
    // Looks like , for part A at least, frequency analysis is your best bet, though you need a little extra to get part B this week
    // this tells me that there will be maybe some thing else like a shift too.
    // also there is a word appearing as  TATAE__T which will need something else. but if the other way around its EAEAT__E so the alliteration and ending the same perhaps holds some clue

    // since we have the word boundaries in the cipher we should be able to identify AND and THE to match these.
    // i.e. H K re the most common singles, so let's assume these are T and E (whichever way around, then )

    // what if the words are backwards or something... HAK is the most common triple... so assume its "the" or "and" but then the text ends in HAK, so perhaps the words are reversed?!
    // perhaps we can tokenize by whitespace to see something like this?
    // or it could be completely reversed meaning HAK is "eht" or "dna"

    translation.H = "E"; // single letter freq E or T
    translation.A = "H";
    translation.K = "T";// single letter freq E or T

    translation.C = "D"; 
    translation.Y = "N";
    translation.R = "A"; // Initially thought I or A + plus single letter freq

    translation.Z = "O";

    translation.D = "I"; // Initially thought I or A or O
    translation.I = "C";

    translation.E = "B";
    translation.L = "U";
    translation.P = "Y";
    translation.O = "X";


    translation.T = "G";
    translation.U = "_";
    translation.V = "K";
    translation.W = "L";
    translation.X = "M";
    translation.B = "P";
    translation.F = "Q";
    translation.G = "R";
    translation.J = "S";
    translation.M = "V";

    translation.N = "W";
    translation.Q = "_";
    translation.S = "F";



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

function reverser(stringToReverse) {
    var reversed = "";

    for (var x=stringToReverse.length-1; x >= 0; x--) {
        
        var cur = stringToReverse.charAt(x);

        reversed += cur;
    }

    return reversed;
}

module.exports = {
    getEncryptedText: function() {
        return reverser(eighthNovemberStringToTranslateB);
    },
    getKey: function() {
        return eighthNovemberTranslationB();
    }
}

let decryptedB = `the april uprising in bulgaria and its brutal suppression by the turks has caused outrage in the chancelleries of europe there is a risk that russia will take this as the excuse it seeks to engage the ottomans and if they act and take constantinople then our trading routes to india will be under threatat home gladstones pamphlet bulgarian horrors and the question of the east has stirred a public appetite for action which could lead to support for intervention and make things difficult for the prime minister he is faced with mortons fork if he supports action then it will be difficult to condemn russian interference if he counsels inaction then he risk appearing weak and callous at home and abroad it may appear unfortunate that our political leaders are unable to agree on policy strategy or tactics and it is true that this could lead to confusion about our aims but on reflection i think that the public disagreement between gladstone and disraeli presents an opportunity their dispute conducted in parliament and the press demonstrates to the world the two faces of the empire at the same time morally engaged and yet prudent this may allow us to proceed with discretion to try to influence the actors and to direct the play away from the glare of the footlights it may be possible to engage the league of the three emperors to our causebismarck is particularly keen to maintain a balance of power in the region and to avoid further war and he will not need to be convinced that an unbridled russia is not to his advantage so i think we can rely on him to rein in russias expansionary visionon the other hand the league itself may present a longer term threat to the empire given the breadth of its influence in northern europe and we must tread carefullythe emperors envoys will be meeting in reichstadt soon to determine the response to the crisis and i need a plan to influence the outcome as always our strategy must be to sow confusion and on this i plan to ask for advice from baron playfair he has recently concluded his commission of enquiry into the civil service and if anyone knows how to control an agenda it must be our own civil servants`;
