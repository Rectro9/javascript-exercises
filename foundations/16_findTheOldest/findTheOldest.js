const findTheOldest = function(people) {
    return people.reduce((accumulate, current) => {
        const missingYear = new Date().getFullYear()

        let accumulateAge = accumulate.yearOfDeath - accumulate.yearOfBirth
        let currentAge = current.yearOfDeath - current.yearOfBirth

        if(!accumulate.yearOfDeath){
            accumulateAge = missingYear - accumulate.yearOfBirth
        }
        
        if(!current.yearOfDeath){
            currentAge = missingYear - current.yearOfBirth
        }

        if(currentAge > accumulateAge){
            return current
        }
        else {
            return accumulate
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
