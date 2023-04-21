
/* let user = {
    name: 'Ivan'
}; */

/* let map = new Map();
map.set(user, 'data');

user = null;
console.log(map.keys()); */

/* let map = new WeakMap();
map.set(user, 'data');

user = null;
console.log(map.has(user)); //false
console.log(map);  */
/* const arr = [user];

console.log(user);
console.log(arr[0]); */  

let cache = new WeakMap();

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name: "Elena"};
let Tima = {name: "Tima"};

cacheUser(lena);
cacheUser(Tima);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(Tima));
