// problem-02
function matchFinder(string1, string2) {
    // is perameter string
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Please make sure two perameter is string'
    }
    
    // check the match string
    if(string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }
}

const stringOne = 'Sakib Hossain';
const stringTwo = 'Hossain';
const result = matchFinder(stringOne, stringTwo);
// console.log(result);


