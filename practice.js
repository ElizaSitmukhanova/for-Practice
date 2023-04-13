const arr = [1, 6, 30, 4, 5];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a-b
}
//arr[99] = 0;
//console.log(arr.length);
//console.log(arr)
//arr.pop()
//arr.push(15)
//console.log(arr);

/* arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} inside array ${arr}`)
});
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for ( let value of arr) {
    console.log(value)
} */

/* const str = prompt("", '');
const products = str.split(', ');

console.log(products.sort()) */
/* console.log(products.join('!')); */