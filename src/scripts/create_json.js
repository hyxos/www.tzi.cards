const Crud = require('./crud')
const years = require('./exctract_years')
const tzi = require('../data/tzi.json')

const crud = new Crud

for (let data of tzi) {
    let tziObject = {
        "seniority": data[0],
        "order": data[1],
        "color": data[2],
        "element": data[3],
        "polarity": data[0] % 2 === 0 ? 'yin': 'yang',
        "element_chinese": data[4],
        "element_pinyin": data[5],
        "animal": data[6],
        "animal_chinese": data[7],
        "animal_pinyin": data[8],
        "heavenly_stem_chinese": data[9],
        "heavenly_stem_pinyin": data[10],
        "heavenly_stem_meaning": data[11],
        "earthly_branch_chinese": data[12],
        "earthly_branch_pinyin": data[13],
        "earthly_branch_letter": data[14],
        "years": years(data[3], data[6])
    }
    let fileName = data[3] + "_" + data[6]
    crud.create(fileName, tziObject)
}

let data = tzi

for (i = 0; i < 12; i++) {
    let animalObj = {
        "order": i+1,
        "animal": data[i][6],
        "animal_chinese": data[i][7],
        "animal_pinyin": data[i][8],
        "earthly_branch_chinese": data[i][12],
        "earthly_branch_pinyin": data[i][13],
        "earthly_branch_letter": data[i][14],
        "years": years(data[i][6])
    }
    let fileName = data[i][6]
    crud.create(fileName, animalObj)
}

