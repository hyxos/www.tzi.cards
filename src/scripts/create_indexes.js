const fs = require('fs')
const path = require('path')
const tzi = require('../data/tzi.json')

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const indexMD = function (dirName, animalName, iconName, order = '', seniority = '') {
    return `---
slug: '${dirName}'
title: '${animalName}'
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
    let dirName = tzi[i][6]
    let iconName = tzi[i][6] + "_icon"
    let animalName = capFirst(tzi[i][6])
    let order = tzi[i][1]
    mkIndexFile(parentDir, dirName, indexMD(dirName, animalName, iconName, order))
}

for (let data of tzi) {
    let parentDir = 'niandai'
    let dirName = data[3] + "-" + data[6]
    let iconName = data[3] + "_" + data[6] + "_icon"
    let animalName = capFirst(data[3]) + " " + capFirst(data[6])
    let order = ''
    let seniority = data[0]
    mkIndexFile(parentDir, dirName, indexMD(dirName, animalName, iconName, order, seniority))
}