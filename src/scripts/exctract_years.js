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
    begins1 = niandai[0].begins1
    begins2 = niandai[0].begins2
    begins3 = niandai[0].begins3
    begins4 = niandai[0].begins4 
    ends1 = niandai[0].ends1
    ends2 = niandai[0].ends2
    ends3 = niandai[0].ends3
    ends4 = niandai[0].ends4 
    let tempArray = []
    tempArray.push([begins1, ends1], [begins2, ends2], [begins3, ends3], [begins4, ends4])
    tempArray[3][0] ? tempArray : tempArray.pop()
    yearsArray.push(...tempArray)
  }
  return yearsArray
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

module.exports = buildYears
