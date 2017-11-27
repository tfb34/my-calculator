/*
  Given: array
  Return: max
*/
function my_max(x){
	var max = null;
	if(Array.isArray(x)){
  	max = x.reduce(function(a,b){
    	return Math.max(a,b);
    });
  }

  return max;
}

/*
  Given: string
  Return: # of vowels
*/
function vowel_count(str){
  let num_vowels = 0;
  if(typeof str === 'string'){
    let i = 0;
    while(i<str.length){
      let char = str[i];
      if((char === 'a') || (char === 'e') || (char === 'i') || (char ==='o') || (char==='u') || (char==='y')){
        num_vowels+=1;
      }
      i++;
    }
  }
    return num_vowels;
  }
}

/*
  Given: "this is a string"
  Return: "gnirts a si siht"
*/
function reverse(x){
  var str= null;
  if(typeof x === 'string' ){
    str= x.split('').reverse().join('');
  }
  return str;
}


function add(a,b){
  let sum = null;
  if(Number.isInteger(a) && Number.isInteger(b)){
     sum = a + b;
  }
  return sum;
}

function multiply(a,b){
  let product = null;
  if(Number.isInteger(a) && Number.isInteger(b)){
    product = a*b;
  }
  return product;
}

function divide(a,b){
  let division = null;
  if(Number.isInteger(a) && Number.isInteger(b)){
    division = a/b;
  }
  return division;
}

function subtract(a,b){
  let difference = null;
  if(Number.isInteger(a) && Number.isInteger(b)){
    difference = a-b;
  }
  return difference;
}




