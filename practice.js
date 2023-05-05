const number = 123;

(function () {
    let number = 56;
    console.log(number);
    number = number + 25;
    console.log(number);
}());

console.log(number);

const user = (function() {
    const privat = function() {
        console.log('Hello, i am privat');
    };
    return {
        sayHello: privat
    };
}());
user.sayHello();