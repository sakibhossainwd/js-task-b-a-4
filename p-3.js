function sortMaker(arr){
    // loop for check in nagetive value in array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return 'Invalid Input';
        }
    }
    // make array value big to sort
    if (arr[0] < arr[1]) {
        return arr.sort(function(a, b) { return b - a; });
    }
    else if (arr[0] > arr[1]) {
        return arr.sort(function(a, b) { return a - b; });
    }
    else {
        return "equal";
        }
    }


const array1 = sortMaker([7,9,8,6,3,2,5]);
const array2 = sortMaker([5,5]);
const array3 = sortMaker([-5,9]);

console.log(array1);


