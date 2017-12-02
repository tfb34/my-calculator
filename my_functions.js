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

// calculator stuff

var arr=[];

(function(){
   document.getElementById("0").onclick = function() { 
        console.log('0'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="0";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("0");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();


(function(){
   document.getElementById("1").onclick = function() { 
        console.log('1'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="1";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("1");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();

(function(){
   document.getElementById("2").onclick = function() { 
        console.log('2'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="2";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("2");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();

(function(){
   document.getElementById("3").onclick = function() { 
        console.log('3'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="3";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("3");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();


(function(){
   document.getElementById("4").onclick = function() { 
        console.log('4'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="4";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("4");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();

(function(){
   document.getElementById("5").onclick = function() { 
        console.log('5'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="5";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("5");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();


(function(){
   document.getElementById("6").onclick = function() { 
        console.log('6'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="6";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("6");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();


(function(){
   document.getElementById("7").onclick = function() { 
        console.log('7'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="7";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("7");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();

(function(){
   document.getElementById("8").onclick = function() { 
        console.log('8'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="8";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("8");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();

(function(){
   document.getElementById("9").onclick = function() { 
        console.log('9'); 
        if(arr.length !== 0){//not empty
          if(parseFloat(arr[arr.length-1]) || arr[arr.length-1].includes(".")){//5.5 or 0.
            arr[arr.length-1]+="9";
            document.getElementById("window").innerHTML = arr.join('');
            return;
          }
        }
        arr.push("9");
        document.getElementById("window").innerHTML = arr.join('');
    };
})();



(function() {
    document.getElementById("+").onclick = function() { 
        console.log('+'); 
      if(arr.length > 0){
        let last = arr[arr.length-1];
        if(!isMathOp(last)){
          arr.push("+");
        }else{
          arr[arr.length-1]="+";
        }
      }
      document.getElementById("window").innerHTML = arr.join('');
    };
})();

(function() {
    document.getElementById("-").onclick = function() { 
        console.log('-'); 
      if(arr.length > 0){
        let last = arr[arr.length-1];
        if(!isMathOp(last)){
          arr.push("-");
        }else{
          arr[arr.length-1]="-";
        }
        document.getElementById("window").innerHTML = arr.join('');
        return;
      }
      //allow user to enter this value first
      arr.push("-");
      document.getElementById("window").innerHTML = arr.join('');
    };
})();

(function() {
    document.getElementById("/").onclick = function() { 
        console.log('/'); 
      if(arr.length > 0){
        let last = arr[arr.length-1];
        if(!isMathOp(last)){
          arr.push("/");
        }else{
          arr[arr.length-1]="/";
        }
      }
      document.getElementById("window").innerHTML = arr.join('');
    };
})();


(function() {
    document.getElementById("x").onclick = function() { 
        console.log('x'); 
      if(arr.length > 0){
        let last = arr[arr.length-1];
        if(!isMathOp(last)){
          arr.push("*");
        }else{
          arr[arr.length-1]="*";
        }
      }
      document.getElementById("window").innerHTML = arr.join('');
    };
})();

function isMathOp(x){
  if(x==='+' || x==='-' || x==='/' || x==='*'){
    return true;
  }
  return false;
}

(function() {
    document.getElementById("=").onclick = function() { 
        console.log('='); 
      let result = null;
      if(arr.length === 0){
        console.log(eval(0));
        result = eval(0);
      }
      else if (isMathOp(arr[arr.length-1])) {
        console.log(eval(arr.slice(0,arr.length-1).join('')));
        result = eval(arr.slice(0,arr.length-1).join(''));
      }else{//last element is a math operation
        console.log(eval(arr.join('')));
        result = eval(arr.join(''));
      }
      document.getElementById("window").innerHTML = arr.join('') + "=" + result;
      arr=[];
    };
})();

(function() {
    document.getElementById("clear").onclick = function() { 
        console.log('clear'); 
      arr = [];
      document.getElementById("window").innerHTML = arr.join('');
    };
})();

(function() {
    document.getElementById(".").onclick = function() { 
        console.log('.'); 

      if(arr.length !== 0){
        let last = arr[arr.length-1];
        if(isMathOp(last)){
          arr.push("0.");
        }
        else if(  !last.includes(".") ){
          arr[arr.length-1]+=".";
        }
      }else{
         arr.push("0.");
      }
      document.getElementById("window").innerHTML = arr.join('');
    };
})();