/*eslint-env browser*/

// row1 = [el0, el1, ...]
// row1 = new Array();
// row[1];
// 1, 2, 3, ...
// 0, 1, 2

var row1 = new Array("el0", "el1", "el2");  // 00, 01, 02
var row2 = new Array("el3", "el4", "el5");  // 10, 11, 12
var row3 = new Array("el6", "el7", "el8");  // 20, 21, 22

var mat = new Array(row1, row2, row3);

var el = mat[0][2];

document.write(el);

// ...

/*

      v
->  [el0, el1, el2]
    [el3, el4, el5]
    [el6, el7, el8]

*/