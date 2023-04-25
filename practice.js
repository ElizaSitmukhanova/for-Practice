'use strict';

const person = {
    name: 'Eliza',
    age: 24,
    parents: {
        mom: 'Venera',
        dad: 'Abdel'
    }
};

let deepClone = JSON.parse(JSON.stringify(person));
deepClone.parents.mom = 'Venerocha';

console.log(person);
console.log(deepClone);



/*  
let elem = document.getElementById('elem');

function func(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}


let newFunc = func.bind(elem);
newFunc('fgf', 'f');

function solution(str){
    let arr = str.split('');
      let newStr =arr.reverse().join('');
      return console.log(newStr);
  }
  solution('привет');

  function descendingOrder(num){

   let arrayOfStrings = Array.from(String(num))

         arrayOfStrings.sort(function(a, b){
            return a-b;
         });
  }
  console.log(descendingOrder(4587123));


func(); 
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);


const urlObj = {
    protocol: 'https',
    domain: 'mysite.com'
}
 
function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain;
    }
    const extractCurrProtocol = () => {
        return this.protocol;
    }
 
    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
}
 
const url = showCurrentURL.bind(urlObj);
 
console.log(url());


function isPangram(string){
    let arr = string.split('');
    let uniqueArr = Array.from(new Set(string));
    console.log(uniqueArr);
    console.log(arr);
    if(arr.length == uniqueArr.length) {
      return console.log(true);
    } else{
      return console.log(false);
    }
  }
isPangram('The quick brown fox jumps over the lazy dog');



const log = function(a, b, ...rest) {
    console.log(a, b, rest);

};

log('bacidi', 'vdv', 'dsjdj','dgdg');

function calc( num, basis=4) {
    console.log(num*basis);
}

calc(2);

 
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5); */