// problem-02
function matchFinder01(string1, string2) {
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
};

const stringOne = 'Sakib Hossain';
const stringTwo = 'Hossain';
const result = matchFinder01(stringOne, stringTwo);
// console.log(result);

function matchFinder02(string01, string02) {
    // is perameter string
    if(typeof string01 !== 'string' || typeof string02 !== 'string'){
        return 'Please make sure two perameter is string'
    }

    // check the match string
    const test1 = string01.length;
    const test2 = string02.length;
    const maxIndex = test1 - test2;
    console.log(maxIndex);
    for (let i = 0; i <= maxIndex; i++) {
        let matched = true;
        for (let j = 0; j < test2; j++) {
            if (string01[i + j] !== string02[j]) {
                matched = false;
                break;
            }
        }
        if (matched) {
            return true;
        }
    }
    
    return false;
}


console.log(matchFinder02("Sakib Hossain", "Hossain"));  
// console.log(matchFinder02("abcdef", "xyz"));
// console.log(matchFinder02("abcdef", 123));

