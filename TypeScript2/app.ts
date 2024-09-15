function add(n1: number,n2: number,showResult: boolean,phrase: string){
    // console.log(typeof number1);
    // console.log(typeof number2); 
    const result = n1 + n2;
    if(showResult){
       
        console.log(phrase +result);
    }

    return n1+ n2;
   
}

const number1=5;
const number2 =2.8;
const printResults = true;
const resultPhrase= 'Result is : ';
add(number1,number2,printResults,resultPhrase);
