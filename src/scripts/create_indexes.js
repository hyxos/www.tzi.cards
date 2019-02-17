const fs = require('fs')
const path = require('path')
const tzi = require('./tzi.json')

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const indexMD = function (dirName, animalName, fileName) {
    return `---
slug: '${dirName}'
title: '${animalName}'
---

import React from 'react'
import Animal from '../../../src/components/Animal'
import ${fileName} from './${fileName}.json'

<Animal data={${fileName}} />
`
}

const mkIndexFile = function (dirName, data) {
    let fullPath = path.resolve(`../../content/entries/${dirName}/index.md`)

    try {
        fs.writeFileSync(fullPath, data)
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
}

for (i = 0; i < 12; i++) {
    let animalName = tzi[i][6]
    mkIndexFile(animalName, indexMD(animalName, animalName, animalName))
}

for (let data of tzi) {
    let dirName = data[3] + "-" + data[6]
    let fileName = data[3] + "_" + data[6]
    let animalName = capFirst(data[3]) + " " + capFirst(data[6])
    mkIndexFile(dirName, indexMD(dirName, animalName, fileName))
}