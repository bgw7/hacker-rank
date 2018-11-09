findCombinations = (cups, jar, combination) => {
    var sumOfCups,
        counter = 0;
        combination = combination || [],
        sum = (num1, num2) => num1 + num2;
  
    sumOfCups = combination.reduce(sum, 0);
  
    if (sumOfCups === jar) {
        // console.log(combination) print or return combination used to get sum
        return 1;
    }
  
    if (sumOfCups >= jar) {
      return 0;
    }
  
    for (var i = 0; i < cups.length; i++) {
      var cup = cups[i];
      var remaining = cups.slice();
      counter = counter + findCombinations(remaining, jar, combination.concat([cup]));
    }
    return counter;
  };

  console.log(findCombinations([1,2],6));  