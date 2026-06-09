const findTheOldest = function(people) {
    function ageCal(person){
        let endYear = person.yearOfDeath ?? new Date().getFullYear()

        return endYear - person.yearOfBirth 
    }

    return people.reduce((accumulate, current) => {
        let accumulateAge = ageCal(accumulate)
        let currentAge = ageCal(current)

        return currentAge > accumulateAge ? current : accumulate
    })
};

// Do not edit below this line
module.exports = findTheOldest;
