function alternatingCharacters(s) {
    var tmp;
    var deletionCounter = 0;
    for(var i = 0; i < s.length; i++) {   
        tmp === s[i] ? deletionCounter++ : tmp = s[i];
    }
    return deletionCounter;
    }