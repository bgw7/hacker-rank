var bribesCount = 0;

for(var i = q.length; i--;) {
    if (q[i]-1-i > 2 || q[i] < 0) {
        return console.log('Too chaotic');
    } 
        for(var j = Math.max(0, q[i]-2); j < i; j++) {
            if (q[j] > q[i]) {
                bribesCount++;
            }
        }
    
}
console.log(bribesCount);