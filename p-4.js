// problem - 04
function findAddress(inputObj) {
    // return "Name: " + (inputObj.name || "__") + "\nAge: " + (inputObj.age || "__") + "\nAddress: " + (inputObj.address || "__");

    return (inputObj.name + inputObj.age  + inputObj.address);

}


const person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St, City"
};

console.log(findAddress(person));
