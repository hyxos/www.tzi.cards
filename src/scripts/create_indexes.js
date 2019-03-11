const fs = require('fs')
const path = require('path')
const tzi = require('../data/tzi.json')
let latin = ['tzi', 'cho', 'yeen', 'mao', 'chen', 'si', 'wu', 'wei', 'shen', 'yow', 'shu', 'hai']

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const indexMD = function (dirName, animalName, posttype, iconName = '', order = '', seniority = '') {
    return `---
slug: '${dirName}'
title: '${animalName}'
posttype: '${posttype}'
${order ? ("order: " + order) : "seniority: " + seniority}
icon: '${iconName}'
---
`
}

const mkIndexFile = function (parentDir, dirName, data) {
    let fullPath = path.resolve(`../../content/${parentDir}/${dirName}/index.md`)
    try {
        fs.writeFileSync(fullPath, data)
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
}

for (i = 0; i < 12; i++) {
    let parentDir = 'animals'
    let posttype = 'animal'
    let dirName = tzi[i][6]
    let iconName = tzi[i][6] + "_icon"
    let animalName = capFirst(tzi[i][6])
    let order = tzi[i][1]
    mkIndexFile(parentDir, dirName, indexMD(dirName, animalName, posttype, iconName, order))
}

for (i = 0; i < 12; i++) {
  let parentDir = 'earthly-branches'
  let posttype = 'earthly-branch'
  let dirName = latin[i]
  let animalName = capFirst(dirName)
  let iconName = dirName + "_eb"
  let order = tzi[i][1]
  mkIndexFile(parentDir, dirName, indexMD(dirName, animalName, posttype, iconName, order))
}

for (let data of tzi) {
    let parentDir = 'niandai'
    let posttype = 'niandai'
    let dirName = data[3] + "-" + data[6]
    let iconName = data[3] + "_" + data[6] + "_icon"
    let animalName = capFirst(data[3]) + " " + capFirst(data[6])
    let order = ''
    let seniority = data[0]
    mkIndexFile(parentDir, dirName, indexMD(dirName, animalName, posttype, iconName, order, seniority))
}