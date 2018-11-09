var jar = 6;
var cups = [1,2];

var possible_ways_to_fill_jar;

cups.forEach(c => {
    if(jar%c === 0) {
        possible_ways_to_fill_jar++;
    }
});

for(var i = 0; i < jar;) {
    
}
