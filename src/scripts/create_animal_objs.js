const data = require('./tzi.json')
const Crud = require('./crud')

const crud = new Crud
for (i = 0; i < 12; i++) {
    let animalObj = {
        "order": i+1,
        "animal": data[i][6],
        "animal_chinese": data[i][7],
        "animal_pinyin": data[i][8],
        "earthly_branch_chinese": data[i][12],
        "earthly_branch_pinyin": data[i][13],
        "earthly_branch_letter": data[i][14]
    }
    let fileName = data[i][6]
    crud.create(fileName, animalObj)
}

