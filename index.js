// Code your solution in this file!
const returnFirstTwoDrivers = (function (drivers) {
    return drivers.slice(0,2);
})

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number1) {
        const multiplier = function (number2) {
        return number1 * number2;
        }
    return multiplier
 }

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, cb) {
    return cb(arrayOfDrivers);
}
