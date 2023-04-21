'use strict';

/* const arr = [1, 2, 2, 3, 5, 8, 8, 10, 4, 3, 2];

const set = new Set(arr); // получение уникальных чисел
console.log(set); */

const arr = ['Alex', 'Masha', "Alex", "Roi", 'Alex'];

const set = new Set(arr); 
console.log(set); // to get set with unique elements

function unique(arr) {
    return Array.from(new Set(arr)); // to get Array 
}
console.log(unique(arr));

/* set.add('Ivan');
set.add('Masha');
console.log(set); */

/* const newArr = [];

newArr.push(set.add('Ela'));
console.log(newArr); */

/* set.delete(value);
set.has(value);
set.clear();
set.size; */

/* for (let value of set) {
    console.log(value)
} */

/* set.forEach((value, valueAgaing, set) =>{
console.log(value, valueAgaing);
}); */

/* console.log(set.values());
console.log(set.keys());
console.log(set.entries());
 */

 