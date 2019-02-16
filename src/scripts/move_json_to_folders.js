const fs = require('fs')
const path = require('path')
const data = require('./tzi.json')

for (i = 0; i < 12; i++) {
  let fileName = data[i][6] + ".json"
  let oldPath = path.resolve(`./animals/${fileName}`)
  let newPath = path.resolve(`../../content/entries/${data[i][6]}/${fileName}`)

  fs.rename(oldPath, newPath, (err) => {
      if (err) throw err;
      console.log('Rename complete!');
    });
}

for (let card of data) {
    let fileName = card[3] + "_" + card[6] + ".json"
    let dirName = card[3] + "_" + card[6]
    let oldPath = path.resolve(`./animals/${fileName}`)
    let newPath = path.resolve(`../../content/entries/${dirName}/${fileName}`)

    fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });
}
