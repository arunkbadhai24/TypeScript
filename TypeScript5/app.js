function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + ' ' + n2.toString();
    }
    return result;
}
var combineAges = combine(30, 20, 'as-number');
console.log(combineAges);
var conmbinedNames = combine('arun', 'kumar', 'as-text');
console.log(conmbinedNames);
