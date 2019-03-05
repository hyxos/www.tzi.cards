const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

const earthRat = require('../data/earth_rat.json')
const woodRabbit = require('../data/wood_rabbit.json')
const earthSheep = require('../data/earth_sheep.json')
const earthDog = require('../data/earth_dog.json')

const niandai = [earthRat, woodRabbit, earthSheep, earthDog]

const date = moment("1976-01-23")

const findNiandai = (date, nianling) => {
  let slug = ''
  for (let niandai of nianling) {
    let { element, animal, years } = niandai
    let match = false
    for ( let range of years) {
      console.log(range[0], range[1])
      range = moment.range(moment(range[0], moment.range[1]))
      if (range.contains(date)) {
        console.log(date.format("YYYY dd mm"))
        match = true
        break
      }
      else {
        continue
      }
    }
    if (match === true) {
      slug = element + "-" + animal
      break
    }
    else {
      
      continue
    }
  } 
  return slug
}

console.log(findNiandai(date, niandai))

var range2 = moment.range(moment("1948-02-10", "1949-01-28"))

console.log(range2.contains(date))