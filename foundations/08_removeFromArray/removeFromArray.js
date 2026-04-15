const removeFromArray = function(array,...value) {

    return array.filter(function(remove){
        return !value.includes(remove);
    })
};

// Do not edit below this line
module.exports = removeFromArray;
