// Problem - 05
function canPay(items, totalCost) {
    // Check if the first input is an array and not empty
    if (!Array.isArray(items) || items.length === 0) {
        return "Missing items. Please provide valid items.";
    }

    // Checking if the second input is a number
    if (typeof totalCost !== 'number') {
        return "Invalid total cost. Please provide a valid number.";
    }

    // Calculate the sum of the items
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
            sum += items[i];
            console.log(sum);
        
    }

    // Check if the sum is greater than or equal to the total cost
    return sum >= totalCost;
}


// Test
console.log(canPay([1, 2, 2], 8)); 
console.log(canPay([1, 2, 5], 10)); 
console.log(canPay([1, 2, 5], 12));  
console.log(canPay([1, 2, 5], 6));   
console.log(canPay([3, 5], 5));
console.log(canPay([], 5));
console.log(canPay([1, 2, 5], "abc"));
