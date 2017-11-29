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

var arr=[0];

(function(){
   document.getElementById("0").onclick = function() { 
        console.log('0'); 
        if(parseInt(arr[arr.length-1])){//number cont'd
          arr[arr.length-1]+="0";

        }else{
          arr.push("0");
        }

    };
})();

(function() {
    document.getElementById("1").onclick = function() { 
        console.log('1'); 
        if(parseInt(arr[arr.length-1])){//number cont'd
          arr[arr.length-1]+="1";

        }else{
          arr.push("1");
        }

    };
})();

(function() {
    document.getElementById("2").onclick = function() { 
        console.log('2'); 
        if(parseInt(arr[arr.length-1])){
          arr[arr.length-1]+="2";
        }else{
          arr.push("2");
        }
    };
})();

(function() {
    document.getElementById("3").onclick = function() { 
        console.log('3');
        if(parseInt(arr[arr.length-1])){
          arr[length-1]+="3";
        }else{
          arr.push("3");
        }
    };
})();

(function() {
    document.getElementById("4").onclick = function() { 
        console.log('4'); 
        if(parseInt(arr[arr.length-1])){
          arr[arr.length-1]+="4";
        }else{
          arr.push("4");
        }
    };
})();

(function() {
    document.getElementById("5").onclick = function() { 
        console.log('5'); 
      if(parseInt(arr[arr.length-1])){
          arr[arr.length-1]+="5";
        }else{
          arr.push("5");
        }
    };
})();

(function() {
    document.getElementById("6").onclick = function() { 
        console.log('6'); 
      if(parseInt(arr[arr.length-1])){
          arr[arr.length-1]+="6";
      }else{
          arr.push("6");
      }
    };
})();

(function() {
    document.getElementById("7").onclick = function() { 
        console.log('7'); 
      if(parseInt(arr[arr.length-1])){
          arr[arr.length-1]+="7";
      }else{
          arr.push("7");
      }
    };
})();

(function() {
    document.getElementById("8").onclick = function() { 
        console.log('8'); 
      if(parseInt(arr[arr.length-1])){
          arr[arr.length-1]+="8";
      }else{
          arr.push("8");
      }
    };
})();

(function() {
    document.getElementById("9").onclick = function() { 
        console.log('9'); 
      if(parseInt(arr[arr.length-1])){
          arr[arr.length-1]+="9";
      }else{
          arr.push("9");
      }
    };
})();

(function() {
    document.getElementById("+").onclick = function() { 
        console.log('+'); 
      if(arr.length === 1){
        //do nothing
      }else if(parseInt(arr[arr.length-1])){
          arr.push("+");
      }else{//change operation
          arr[arr.length-1] = "+";
      }
    };
})();

(function() {
    document.getElementById("-").onclick = function() { 
        console.log('-'); 
      if(arr.length === 1){
        //do nothing
      }else if(parseInt(arr[arr.length-1])){
          arr.push("-");
      }else{//change operation
          arr[arr.length-1] = "-";
      }
    };
})();

(function() {
    document.getElementById("/").onclick = function() { 
        console.log('/'); 
      if(arr.length === 1){
        //do nothing
      }else if(parseInt(arr[arr.length-1])){
          arr.push("/");
      }else{//change operation
          arr[arr.length-1] = "/";
      }
    };
})();


(function() {
    document.getElementById("x").onclick = function() { 
        console.log('x'); 
      if(arr.length === 1){
        //do nothing
      }else if(parseInt(arr[arr.length-1])){
          arr.push("*");
      }else{//change operation
          arr[arr.length-1] = "*";
      }
    };
})();

(function() {
    document.getElementById("=").onclick = function() { 
        console.log('='); 
      if (parseInt(arr[arr.length-1]) || arr[arr.length-1] === "0") {
        console.log(eval(arr.slice(1).join('')));
      }else{//last element is a math operation
        console.log(eval(arr.slice(1,arr.length-1).join('')));
      }

      arr=[0];
    };
})();

(function() {
    document.getElementById("clear").onclick = function() { 
        console.log('clear'); 
      arr = [0];
    };
})();

(function() {
    document.getElementById(".").onclick = function() { 
        console.log('.'); 
      if(parseInt(arr[arr.length-1]) && !arr[arr.length-1].includes(".")){
         arr[arr.length-1]+=".";
      }else if(arr[arr.length-1].includes(".")){
          //do nothing
      }else{//
        arr.push(".");
      }
    };
})();