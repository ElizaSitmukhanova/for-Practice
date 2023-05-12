/* const compose = (a, b, c) => (x) => a(b(c(x)));
const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const discount = compose(normalizePrice, divide100, multiply20);
console.log(discount(200.0)); */


const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

const discount = compose(normalizePrice, divide100, multiply20);
console.log(discount(200.0));

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const newComp = (...fns) =>
  (x) => {
    return fns.reduceRight(function(res, fn) {
      return fn(res), x);
  }
};

const disc = newComp(normalizePrice, divide100, multiply20);
console.log(disc(200.0));






const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c};

const composeWithArgs = (...fns)  => fns.reduceRight((f,g) => (...arg) => g(f(...arg)));
console.log(composeWithArgs(add1,addAll3)(1,2,3));

const newcompose = (...fns) => {
  return fns.reduceRight((f,g) => (...arg) => g(f(...arg)));
};
console.log(newcompose(add1,addAll3)(1,2,3));

/* Метод reduceRight принимает коллбэк функцию с
previousValue -Значение, возвращённое предыдущим выполнением функции callback, 
либо значение initialValue, если оно предоставлено.
currentValue- Текущий обрабатываемый элемент массива.
Что в наших реалиях называется res и fn.  Теперь перейдем к fns. Это массив с функциями.
При первом запуске res будет равен х, так как второй аргумент у reduceRight есть. 
То есть, это начальное значение, тот аргумент, который передавался в первую функцию. 
fn - это первая функция в массиве. Получается, что
fn(res) - это запуск первой переданной (вызванной, той что справа) функции с начальным аргументом.
 А каждые последующие запуски в res помещается полученный результат.

 composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));
изначально мы передаём только массив с функциями ...fns.
с ним начинает работать fns.reduceRight в которой g это текущий элемент массива, f предыдущий. */