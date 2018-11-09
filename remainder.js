var n = 15
const isDivisible = num => {
    return !(num%3) && !(num%5) ? 'FuzzBuzz'
    : !(num%3) ? 'Fuzz'
    : !(num%5) ? 'Buzz'
    : num;
};


for(var v = 1; v <= n; v++) {
    console.log(isDivisible(v));
}
