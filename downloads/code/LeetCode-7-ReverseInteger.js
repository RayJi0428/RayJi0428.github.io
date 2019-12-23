var reverse = function (x) {

    let negative = x < 0;
    let result = x < 0 ? "-" : "+";
    x = Math.abs(x).toString();
    for (let i = x.length - 1; i > -1; --i) {
        if (result.length == 0 && x[i] == 0) {
            continue;
        }
        if (x[i] == '-') {
            continue;
        }
        result += x[i];
    }

    result = parseInt(result);

    if (result < -Math.pow(2, 31) || result >= Math.pow(2, 31))
        return 0;
    else
        return result;
};