'use strict';

console.log('Request of data');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Data is being prepared');

        const product = {
            name: 'TV',
            price: 25000
        };

         resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
             reject();
        }, 2000);
    });

}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {
    console.error('Error occurred');
});
 