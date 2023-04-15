let number = 5; debugger

function getNumber() {
number= 8
    console.log(number);    debugger

}

number = 25;
console.log(number)
getNumber();debugger

function createCounter() {
    let counter = 0;

    const myFunc = function(){ debugger
        counter = counter + 1; debugger
        return counter; debugger
    }
    return myFunc
}debugger
const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3)


function makeCounter() {debugger

    function counter() { debugger
      return counter.count++; debugger
    };
  
    counter.count = 0;debugger
  
    return counter;debugger
  }
  
  let counter = makeCounter();debugger
  
  counter.count = 10;debugger
  alert( counter() ); debugger
console.log(0 || NaN || false || null)

