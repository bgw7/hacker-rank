var s = 'aabbcd';
var uniqueStrings = [...new Set(s)];
var tmpCount;
var stringCounts = [];
var valid = 'NO';
for(var i = 0; i < uniqueStrings.length; i++) {
    if (uniqueStrings.length === 1) {
        valid = 'YES';
        return valid;
    }
    tmpCount = s.match(new RegExp(uniqueStrings[i],'g')).length;
    stringCounts.push(tmpCount);
}

var uniqueCounts = [... new Set(stringCounts)];
uniqueCounts.forEach(c => {
    if (stringCounts.toString().match(new RegExp(c, 'g')).length === 1) {
        valid = 'YES';
    }
});

return valid;