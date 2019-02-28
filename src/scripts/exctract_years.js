const yearsObject = require('../data/new_years.json')

function filterIt(arr, searchKey) {
  return arr.filter(function(obj) {
    return Object.keys(obj).some(function(key) {
      return obj[key].includes(searchKey);
    })
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const buildYears = (animal, element = '') => {
  element = capitalizeFirstLetter(element)
  animal = capitalizeFirstLetter(animal)
  let years = yearsObject
  let niandai
  element ? niandai = filterIt(filterIt(years, element), animal) : niandai = filterIt(years, animal)
  let begins1 = niandai[0].begins1
  let begins2 = niandai[0].begins2
  let begins3 = niandai[0].begins3
  let begins4 = niandai[0].begins4 
  let ends1 = niandai[0].ends1
  let ends2 = niandai[0].ends2
  let ends3 = niandai[0].ends3
  let ends4 = niandai[0].ends4 
  let yearsArray = [[begins1, ends1], [begins2, ends2], [begins3, ends3], [begins4, ends4]]
  yearsArray[3][0] ? yearsArray : yearsArray.pop()
  return yearsArray
}

console.log(buildYears("rat"))
module.exports = buildYears
