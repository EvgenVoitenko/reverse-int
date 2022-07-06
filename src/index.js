module.exports = function reverse (n) {
let result = '';
let nString = Math.abs(n).toString();
let i = (nString.length - 1);
while (i >= 0) {
    result = `${result}${nString[i]}`;
    i = i - 1;
}
return +result;
}
