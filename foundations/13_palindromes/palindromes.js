const palindromes = function (array) {
    let cleanArray = (array.replace(/[^a-zA-Z0-9]/g, "")).toLowerCase();
    let rightSideArray = cleanArray.length - 1;

    for(let i = 0; i < cleanArray.length / 2; i++){
        if(cleanArray[i] !== cleanArray[rightSideArray]){
            return false;
        }
        rightSideArray--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
