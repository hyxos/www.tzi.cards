const tzi = require('./tzi.json')
const Crud = require('./crud')

function doubleDigits(num) {
    if (num < 10 ) {
        return '0' + num
    }
    else {
        return num
    }
}

const crud = new Crud

for (let data of tzi) {
    let tziObject = {
        "order": data[0],
        "seniority": data[1],
        "color": data[2],
        "element": data[3],
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
        "earthly_branch_letter": data[14]
    }
    let fileName = data[3] + "_" + data[6]
    crud.create(fileName, tziObject)
}
