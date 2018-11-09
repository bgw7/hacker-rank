function rotLeft(a, d) {
if (a.length < 2) {
    return a.slice(0);
}
    const rotations = d % a.length;
    
    if (rotations === 0) {
        return a.slice(0);
    }
    if (rotations < 0) {
        return a.slice(rotations).concat(a.slice(0, a.length+rotations));
    } else {
        return a.slice(rotations).concat(a.slice(0, rotations));
    }

}

