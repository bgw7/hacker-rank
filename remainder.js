var n = 15
for(var v = 1; v <= n; v++) {
    switch (v) {
        case v % 3 === 0 && v % 5 === 0:
            console.log('FizzBuzz');
            break;
        case v % 3 === 0:
            console.log('Fizz'); 
            break;
        case v % 5 === 0:
            console.log('Buzz');
            break;
        default:
            console.log('i');
}
}
