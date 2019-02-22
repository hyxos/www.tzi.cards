const fs = require('fs')
const path = require('path')
const tzi = require('./tzi.json')

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const indexMD = function (dirName, animalName, fileName, componentName) {
    return `---
slug: '${dirName}'
title: '${animalName}'
---

import React from 'react'
import ${componentName} from '../../../src/components/${componentName}'
import ${fileName} from './${fileName}.json'

<${componentName} data={${fileName}} />
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
    let dirName = tzi[i][6]
    let fileName = tzi[i][6]
    let animalName = capFirst(tzi[i][6])
    let componentName = 'Animal'
    mkIndexFile(animalName, indexMD(dirName, animalName, fileName, componentName))
}

for (let data of tzi) {
    let dirName = data[3] + "-" + data[6]
    let fileName = data[3] + "_" + data[6]
    let animalName = capFirst(data[3]) + " " + capFirst(data[6])
    let componentName = 'Card'
    mkIndexFile(dirName, indexMD(dirName, animalName, fileName, componentName))
}