// cстрелочные функции
const usdCurr = 28;
const eurCurr =32;
const discount =0.9
function convert(amount, cur) {
    return cur*amount;
}
function promotion (res) {
     console.log(res*discount);
}
const result = convert(500, usdCurr);

promotion(result);

function test(){
     for (let i=0; i<5; i++) {
          console.log(i);
          if (i === 0) return
     }
     console.log('done')
}
test()

let funr =()=> {

}

console.log(funr()===undefined)

function sayHello(name) {
     return console.log(`Привет, ${name}`);
}

sayHello("Антон");

function returnNeighboringNumbers(num) {
     return console.log([num-1, num, num+1])

}
returnNeighboringNumbers(5);

function getMathResult(num1, num2) {

     if (typeof (num2) !== 'number' || num2 <= 0) {
          return num1;
     }
     let res = '';
     for (let i = 1; i <= num2; i++) {
          if (i === num2) {
               res += `${num1 * i}`;
          } else {
               res += `${num1 * i}---`;
          }
     }
     return res
}
console.log(getMathResult(2, 3));

function calculateVolumeAndArea(num) {
     if( num < 0  ||  typeof(num) !== "number" || !Number.isInteger(num)) {
          return console.log('при вычислении проризошла ошибка')
     } else {
       let S = num*num*6;
       let V = num*num*num;
       return console.log(`'Объем куба: ${V}, площадь всей поверхности: ${S}`)
}}

calculateVolumeAndArea(5.1)

function getCoupeNumber(place) {
    if(place < 0 || !Number.isInteger(place)) {
     return console.log('Ошибка. Проверьте правильность введенного номера места')}

    if( place==0 || place > 36) {
     return console.log('Таких мест в вагоне не существует')
}

    return console.log(Math.ceil(place / 4) ) // округление в большую сторону
 
}

getCoupeNumber(33)