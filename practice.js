'use strict';
// 1) Обычная функция: this = window, but use strict - undefined;
function showThis(a, b) {
console.log(this);
function sum() {
    console.log(this); //undefined
    return this.a + this.b // do not work
}
console.log(sum());
}

showThis(5, 4); 

//2) контекст у методов объекта - сам объект
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();
// но например здесь вызвается обычняа функция и она теряет контекст 
const obj2 = {
    a: 20,
    b: 15,
    sum: function() {
       function showsNew() {
        console.log(this);
    } 
    showsNew();
    }
};
obj2.sum();

// 3) this в конструкторах и классах - это новый экземпляр объектаж

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.helloo= function() {
        console.log(`Hello ${this.name}`);
        
    };
}

let eliza = new User("Eliza", 25);
console.log(typeof(eliza));
//4)ручная привязка this: call, apply, bind;

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: "Kira",
};
//разница в синтаксисе
sayName.call(user, 'Smith'); 
sayName.apply(user, ['Smith']);

//создает новую функцию
function count(num) {
    return this*num;
}

const double = count.bind(2); //уходит в this
console.log(double(13)); // num 13