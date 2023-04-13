const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'ddd'
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejounal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'ok'];  //spred 
      console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}

const num = [2, 5, 7];
log(...num);

const aray = ['a', 'b'];
const newArr = [...aray];
newArr[0] = "b";

console.log(aray); // [ 'a', 'b' ]

console.log(newArr); //[ 'b', 'b' ] 

const q = {
    one: 1,
    two: 2,
    three: {
        x: 4,
        y: 5
    }
};

const newObj2 = {...q}; 

/* newObj2.one = 26;
console.log(newObj2);
console.log(q); */

newObj2.three.x = 26; // поверхностная копия
console.log(newObj2);
console.log(q);
