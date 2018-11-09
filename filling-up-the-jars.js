subsetSum = (numbers, target, partial, counter) => {
    var s, n, remaining;
    var counter = 0;
    partial = partial || [];
    sum = (num1, num2) => num1 + num2;
  
    s = partial.reduce(sum, 0);
  
    if (s === target) {
        // console.log(partial) print or return combination used to get sum
        return 1;
    }
  
    if (s >= target) {
      return 0;
    }
  
    for (var i = 0; i < numbers.length; i++) {
      n = numbers[i];
      remaining = numbers.slice();
      counter = counter + subsetSum(remaining, target, partial.concat([n]), counter);
    }
    return counter;
  };

  console.log(subsetSum([1,2],6));  