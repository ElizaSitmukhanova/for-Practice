function* generator() {
  yield 'S';
  yield 'k';
  yield 'm';
  yield 'n';
  yield 'So';
}

const str = generator();

console.log(str.next());
console.log(str.next().value); 
/* console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next()); */

function* count(n) {
  for (let i = 0; i<n; i++) {
    yield i;
  }
}

const counter = count(7);

/* console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
 */

for (let k of count(7)) {
  console.log(k);
}
