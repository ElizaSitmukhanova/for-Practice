
function copy (mainObj) {
let objCopy = {};
let key 
for (key in mainObj) {
    objCopy[key] = mainObj[key]
}
return objCopy;
}

const numbers = {
    a: 2,
    b: 3, 
    c: {
        x: 7, //вложенная структура поэтому сохраняе тся на нее ссылка и изменяется и в обоих объектах
        y: 20
    }
};

const newNumbers = copy(numbers);
newNumbers.c.x = 50; //поверхностная копия
console.log(newNumbers);
console.log(numbers);

 const add = {
    d: 12,
    e: 25
 };

 const clone = Object.assign({}, add); // поверхностная копия
 clone.d = 25;
 console.log(clone);
 console.log(add);
 
/*  console.log(Object.assign(numbers, add));
 console.log(Object.assign(add, numbers)); */


