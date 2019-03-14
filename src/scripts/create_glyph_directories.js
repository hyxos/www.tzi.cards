const fs = require('fs')
const path = require('path')
let latin = ['tzi', 'cho', 'yeen', 'mao', 'chen', 'si', 'wu', 'wei', 'shen', 'yow', 'shu', 'hai']

const mkdirSync = function (dirPath) {
  try {
    fs.mkdirSync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

for (i = 0; i < 12; i++) {
    let dirPath = path.resolve(`../../content/glyphs/${latin[i]}`)
    mkdirSync(dirPath)
}

