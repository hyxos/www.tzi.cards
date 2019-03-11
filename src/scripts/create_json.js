const Crud = require('./crud')
const years = require('./exctract_years')
const tzi = require('../data/tzi.json')

const crud = new Crud

function calculateCohort(seniority) {
  return Math.floor(((seniority - 1)/12) + 1)
}

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

for (let data of tzi) {
  let tziObject = {
    "title": capFirst(data[3]) + " " + capFirst(data[6]),
    "slug": data[3] + "-" + data[6],
    "snake": data[3] + "_" + data[6],
    "kind": 'niandai',
    "seniority": data[0],
    "cohort": calculateCohort(data[0]),
    "order": data[1],
    "color": data[2],
    "element": data[3],
    "polarity": data[0] % 2 === 0 ? 'yin' : 'yang',
    "element_chinese": data[4],
    "element_pinyin": data[5],
    "animal": data[6],
    "animal_chinese": data[7],
    "animal_pinyin": data[8],
    "earthly_branch_chinese": data[9],
    "earthly_branch_pinyin": data[10],
    "earthly_branch_meaning": data[11],
    "heavenly_stem_chinese": data[12],
    "heavenly_stem_pinyin": data[13],
    "heavenly_stem_letter": data[14],
    "years": years(data[3], data[6])
  }
  let fileName = data[3] + "_" + data[6]
  crud.create(fileName, tziObject)
}

let latin = ['tzi', 'cho', 'yeen', 'mao', 'chen', 'si', 'wu', 'wei', 'shen', 'yow', 'shu', 'hai']
let data = tzi

for (i = 0; i < 12; i++) {
  let animalObj = {
    "title": capFirst(data[i][6]),
    "slug": data[i][6],    
    "latin": latin[i],
    "kind": "animal",
    "order": i + 1,
    "polarity": data[i][1] % 2 === 0 ? 'yin' : 'yang',
    "animal": data[i][6],
    "animal_chinese": data[i][7],
    "animal_pinyin": data[i][8],
    "earthly_branch_chinese": data[i][9],
    "earthly_branch_pinyin": data[i][10],
    "earthly_branch_meaning": data[i][11],
    "years": years(data[i][6])
  }
  let fileName = data[i][6]
  crud.create(fileName, animalObj)
}

