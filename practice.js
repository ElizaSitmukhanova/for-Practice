'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/12/1998',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

//console.log(typeof(Object.keys(user)[0]));
// получаем карты из объекта
const userMap = new Map(Object.entries(user)); 

// получаем объект из карты
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);


const shops = [
    {rise: 500},
    {oil: 200},
    {bread: 50},
];
const budget= [5000, 1500, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

/* map.set(shops[0], 5000);
map.set(shops[1], 25000);
map.set(shops[2], 35000); */
console.log(map);
/* console.log(map.get(shops[0]));
console.log(map.has(shops[0])); */
/* map.delete(key);
map.clear();
map.size;
map.key() */
/* const gooods = []; получить ключи массива
for (let shop of map.keys()) {
    gooods.push(Object.keys(shop)[0]);
}

console.log(gooods); */

/* for (let price of map.values()) { получить значения
    console.log(price);
} */
/* 
for (let [shop, price] of map.entries()) { получить значения или ключи и вместе
    console.log(price);
} */

/* map.forEach((value, key, map) => {
    console.log(key, value);
}); */