const sumAll = function(a, b) {
    let sum = 0;
    let start = Math.min(a, b)
    let end = Math.max(a, b)

    if(!Number.isInteger(a) || (a) < 0 || Array.isArray(a)){
        return "ERROR"
    }
    else if(!Number.isInteger(b) || (b) < 0 || Array.isArray(b)){
        return "ERROR"
    }

    for (let i = start; i <= end; i++){
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
