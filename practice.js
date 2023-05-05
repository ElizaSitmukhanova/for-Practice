//нарушение инкапсуляции
/* function User (name, age) {
    this.age = age;
    this.name = name;

    this.say = function () {
        console.log(`Это пользователь с именем ${this.name} и возрастом ${this.age}`);
    };
}

const ela = new User('Ela', 24);

console.log(ela.name);
ela.say();

ela.age = 25;
ela.name = 'Gafg';
ela.say(); */

//инкапсуляция в функциях конструкторах
/* function User (name, age) {
    this.age = age;
    let userName = name;

    this.say = function () {
        console.log(`Это пользователь с именем ${userName} и возрастом ${this.age}`);
    };
    this.getName = function () {
        return userName;
    };
    this.setName = function (name) {
        if(typeof name === 'string' && name.length > 0 && name.length < 5 ) {
          userName = name;  
        } else {
            console.log('Error');
        }   
    };
}

const ela = new User('Ela', 24);

console.log(ela.userName);

console.log(ela.getName());

ela.setName('dsjgidsjgkgjdf');
ela.setName('dc');
ela.say();
console.log(ela.getName()); */

//инкапсуляция в функциях классах

class User  {
    constructor (name, age) {
        this.age = age;
        this._userName = name;
    }
    #surName = 'Sit';
    say () {
        console.log(`Это пользователь с именем ${this._userName} ${this.#surName} и возрастом ${this.age}`);
    }
    get name () {
        return this._userName;
    }
    set name (name) {
        if(typeof name === 'string' && name.length > 0 && name.length < 5 ) {
          this._userName = name;  
        } else {
            console.log('Error');
        }   
    }
    get surName () {
        return this.#surName;
    }
    set surName (surName) {
        this.#surName = surName;
    }
}

const ela = new User('Ela', 24);
/* ela.userName = 'Greta';
console.log(ela.name);

ela.name = 'Wita'; */
/* console.log(ela.name); */
ela.surName = 'Sitmukhanova';
console.log(ela.surName);
ela.say();

