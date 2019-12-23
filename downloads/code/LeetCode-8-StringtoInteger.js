/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let numberStr = "";
    let result = 0;
    for (let i = 0; i < str.length; ++i) {
        let char = str.charAt(i);

        if (numberStr.length == 0) {
            if (char == " ") {
                //開頭遇到空白掠過
                continue;
            }
            else if (/[\d+-]/.test(char) == false) {
                //第一個位只能是數字或+-
                break;
            }
        }
        else {
            if (/\d/.test(char) == false) {
                //其他位只能是數字，遇到其他一律中斷
                break;
            }
        }
        numberStr += char;
    }

    result = parseInt(numberStr);
    //防++42的狀況
    if (result) {
        result > 0 ? result = Math.min(result, Math.pow(2, 31) - 1) : result = Math.max(result, -Math.pow(2, 31));
    }
    else {
        result = 0;
    }
    return result;
};

//test code----
console.log(myAtoi("++42"));
console.log(myAtoi("42"));
console.log(myAtoi("  -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("4193-"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("   +0 123"));