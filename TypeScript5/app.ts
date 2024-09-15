type Combinable = number | string;

function combine(n1: Combinable,n2: Combinable, resultConversion:string){
   let result;
    if( typeof n1 == 'number' && typeof n2 == 'number'){
        result = n1 + n2;
    }else{
        result = n1.toString() +' '+ n2.toString();
    }
        
    
    return result;
   
}

const combineAges= combine(30,20,'as-number');
console.log(combineAges);

const conmbinedNames= combine('arun','kumar','as-text');
console.log(conmbinedNames);