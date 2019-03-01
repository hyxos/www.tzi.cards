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

const buildNiandai = (niandai) => {
  let yearsArray = []
  let begins1, begins2, begins3, begins4, ends1, ends2, ends3, ends4
  for (let item of niandai) {
    begins1 = item.begins1
    begins2 = item.begins2
    begins3 = item.begins3
    begins4 = item.begins4 
    ends1 = item.ends1
    ends2 = item.ends2
    ends3 = item.ends3
    ends4 = item.ends4 
    let tempArray = []
    tempArray.push([begins1, ends1], [begins2, ends2], [begins3, ends3], [begins4, ends4])
    tempArray[3][0] ? tempArray : tempArray.pop()
    yearsArray.push(...tempArray)
  }
  return yearsArray.sort()
}

const buildYears = (animal, element = '') => {
  element = capitalizeFirstLetter(element)
  animal = capitalizeFirstLetter(animal)
  let years = yearsObject
  let niandai
  if (element) {
    niandai = (filterIt(filterIt(years, element), animal))
    return buildNiandai(niandai)
  }
  else {
    niandai = (filterIt(filterIt(years, element), animal))
    return buildNiandai(niandai)
  }
}
console.log(buildYears("rat"))
console.log(buildYears("Wood", "Rabbit"))
module.exports = buildYears
