const data = require('./tzi.json')
const Crud = require('./crud')
const DD = require('./dd')

const crud = new Crud
const dd = new DD
console.log(dd)
for (i = 0; i < 12; i++) {
    let animalObj = {
        "order": i,
        "animal": data[i][6],
        "animal_chinese": data[i][7],
        "animal_pinyin": data[i][8],
        "earthly_branch_chinese": data[i][12],
        "earthly_branch_pinyin": data[i][13],
        "earthly_branch_letter": data[i][14]
    }
    let fileName = dd.dd(i+1) + "_" + data[i][6]
    crud.create(fileName, animalObj)
}

