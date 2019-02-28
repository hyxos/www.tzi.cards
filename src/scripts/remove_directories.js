const rimraf = require('rimraf')
const path = require('path')
const tzi = require('./tzi.json')

const rmDirSync = function (dirPath) {
  try {
    rimraf.sync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

for (i = 0; i < 12; i++) {
    let dirPath = path.resolve(`../../content/entries/${tzi[i][6]}`)
    rmDirSync(dirPath)
}

for (let data of tzi) {
    let dirName = data[3] + "-" + data[6]
    let dirPath = path.resolve(`../../content/entries/${dirName}`)
    rmDirSync(dirPath)
}
