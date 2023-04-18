function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'Error';
    } else if( n <= 0) {
        return 1;
    } else {
        for (let i=1; i<=n; i++) {
            let res = 1;
            res *= n*factorial(n-1);
return res;
        }
        
    }
}

console.log(factorial(7));