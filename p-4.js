// problem - 04
function findAddress(obj) {
    const name = obj.name || "__";
    const age = obj.age || "__";
    const address = obj.address || "__";

    return `${name},${age},${address}`;
}

const person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St, City"
};
const person1 = {
    name: "John Doe",
    address: "123 Main St, City"
};

console.log(findAddress(person1));
