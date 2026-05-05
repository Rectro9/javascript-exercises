const fibonacci = function(n) {
    let previous1 = 0;
    let previous2 = 1;
    let current = 0;
    let a = Number(n);

    if(a === 1 || a === 2){
        return 1;
    }
    else if(a === 0){
        return 0;
    }
    else if(a < 0){
        return "OOPS";
    }

    for(let i = 1; i < a; i++){
        current = previous1 + previous2 
        previous1 = previous2
        previous2 = current
    }
    return current;

};

// Do not edit below this line
module.exports = fibonacci;
