var xspans = require('xspans')

function zfill(num) {
    var s = "000000" + num;
    return s.substr(s.length-6);
}

function timeSpanMerge(str1,str2,operator) {
    if (operator!='or' && operator!='sub'){
        console.log('operator not valid: ',operator)
    }
    var s2 = str2.split('-')
    var s1list = str1.split(' ')
    var num1list = s1list.filter(
        function(x){
            return x.length == 17
        }
    ).map(function(x){
        var s1 = x.split('-')
        var num11 = parseInt(s1[0].replace(/:/g,''))
        var num12 = parseInt(s1[1].replace(/:/g,''))
        return [num11,num12]
    })

    var num21 = parseInt(s2[0].replace(/:/g,''))
    var num22 = parseInt(s2[1].replace(/:/g,''))

    var a = xspans(num1list);

    var b= [num21, num22]

    if (operator == 'or'){
        a = a.or(b)
    }
    if (operator == 'sub'){
        a = a.sub(b)
    }

    var aarrays = a.toArrays()

    var outstring = ''
    for (var i =0;i<aarrays.length;i++){
        var pairs = aarrays[i]
        var timestr1 = zfill(pairs[0])
        var timestr2 = zfill(pairs[1])
        outstring += timestr1.substr(0,2)+':'+timestr1.substr(2,2)+':'+ timestr1.substr(4,2)+'-'+
            timestr2.substr(0,2) + ':' + timestr2.substr(2,2) + ':' +timestr2.substr(4,2) +' '
    }

    return outstring.trim()
}


if (module){
    module.exports = timeSpanMerge
}

