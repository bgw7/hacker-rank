var arr = [1,2,3,4,7,8,9,10,5,6];
    var swapCount = 0; 
            var tmp;
            for(var i = 0; i < arr.length - 1; i++) {
                console.log('value: ', arr[i], 'index: ', i);
                while(arr[i] != i + 1) {
                    console.log('value: ', arr[i], 'index: ', i);
                    tmp = arr[arr[i] - 1];
                    arr[arr[i] - 1] = arr[i];
                    arr[i] = tmp;
                    swapCount++;
                }
            }
            return console.log(swapCount);