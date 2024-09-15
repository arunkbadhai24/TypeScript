function add(n1, n2, showResult, phrase) {
    // console.log(typeof number1);
    // console.log(typeof number2); 
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResults = true;
var resultPhrase = 'Result is : ';
add(number1, number2, printResults, resultPhrase);
