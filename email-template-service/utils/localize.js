/*wordend(111, 'став', 'ка', 'ки', 'ок')*/
module.exports.wordend = function(number, word, end1, end2, end3){
    if(Number(String(number).length) > 2) number = Number(String(number).substr(-2));
    if(number == 11 || number == 12 || number == 13 || number == 14){
        return word+end3;
    } else {
        switch(Number(String(number).substr(-1))){
            case 1: return word+end1; break;
            case 2:case 3:case 4: return word+end2; break;
            case 5:case 6:case 7:case 8:case 9:case 0: return word+end3; break;
        }
    }
};