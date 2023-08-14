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
    };

const array1 = sortMaker([7,9,8,6,3,2,5]);
const array2 = sortMaker([5,5]);
const array3 = sortMaker([-5,9]);

console.log(array1);


// Another way without using buil-in method
function sortMaker(arr) {
  
    // Check if both elements are numbers
    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid Input";
    }

    // Compare the two numbers and sort the array accordingly
    if (arr[0] < arr[1]) {
        return sortAscending(arr);
    } else if (arr[0] > arr[1]) {
        return sortDescending(arr);
    } else {
        return "equal";
    }
}

function sortAscending(arr) {
    const sorted = [arr[0], arr[1]];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] > sorted[i + 1]) {
                // Swap elements
                const temp = sorted[i];
                sorted[i] = sorted[i + 1];
                sorted[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped);

    return sorted;
}

function sortDescending(arr) {
    const sorted = [arr[0], arr[1]];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] < sorted[i + 1]) {
                // Swap elements
                const temp = sorted[i];
                sorted[i] = sorted[i + 1];
                sorted[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return sorted;
}

// Test cases
console.log(sortMaker([3, 7]));     // Output: [3, 7]
console.log(sortMaker([7, 3]));     // Output: [3, 7]
console.log(sortMaker([5, 5]));     // Output: "equal"
console.log(sortMaker(["a", "b"])); // Output: "Invalid Input"
console.log(sortMaker([5, "b"]));   // Output: "Invalid Input"



