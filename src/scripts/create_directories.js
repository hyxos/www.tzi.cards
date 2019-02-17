const fs = require('fs')
const path = require('path')
const tzi = require('./tzi.json')

const mkdirSync = function (dirPath) {
  try {
    fs.mkdirSync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

for (i = 0; i < 12; i++) {
    let dirPath = path.resolve(`../../content/entries/${tzi[i][6]}`)
    mkdirSync(dirPath)
}

for (let data of tzi) {
    let dirName = data[3] + "-" + data[6]
    let dirPath = path.resolve(`../../content/entries/${dirName}`)
    mkdirSync(dirPath)
}
