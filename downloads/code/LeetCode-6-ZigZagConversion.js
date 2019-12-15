/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    let gap = Math.max(numRows * 2 - 2, 1);

    let idxList = [];
    for (let ri = 0; ri < numRows; ++ri) {

        let idx = 0;
        let p1 = ri + gap * idx;
        let p2 = (gap - ri) + gap * idx;

        while (true) {

            if (!s.charAt(p1))
                break;

            if (idxList.indexOf(p1) == -1) {
                idxList.push(p1);
            }

            if (!s.charAt(p2))
                break;

            if (idxList.indexOf(p2) == -1) {
                idxList.push(p2);
            }

            idx++;
            p1 = ri + gap * idx;
            p2 = (gap - ri) + gap * idx;
        }


        p1 += gap;
        p2 += gap;
    }

    let result = "";
    idxList.forEach((v) => {
        result += s.charAt(v);
    });

    return result;
};

//Testcase
console.log(convert("PAYPALISHIRING", 1) == "PAYPALISHIRING");
console.log(convert("PAYPALISHIRING", 2) == "PYAIHRNAPLSIIG");
console.log(convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR");
console.log(convert("PAYPALISHIRING", 4) == "PINALSIGYAHRPI");

/*
 Runtime: 116 ms, faster than 23.99% of JavaScript online submissions for ZigZag Conversion.
 Memory Usage: 41.2 MB, less than 61.11% of JavaScript online submissions for ZigZag Conversion.
 */