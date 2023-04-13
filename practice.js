const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

const student = {
    name: 'egor',
    age: 15,
    sex: "m",
    hobby: {
       one: 'Music',
       two: 'Book'
    },
    makeTest: function() {
        console.log('Testik');
    }
};
student.makeTest();

const { border, bg} = options.colors; // деструктизация
console.log(border)
const { one, two} = student.hobby;
console.log(two)

console.log(Object.keys(student).length);
console.log(Object.keys(options).length);


/* console.log(options.name);
console.log(options['colors']['border'])
/* delete options.name;
console.log(options)
console.log(options.name); */

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    
} */