function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    };
}

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`);
};

const eliza = new User('Eliza', 2);
const timur = new User('Timur', 23);
console.log(eliza);
console.log(timur);
eliza.hello();
timur.hello();

eliza.exit();
