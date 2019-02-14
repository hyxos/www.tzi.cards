const fs = require('fs')
const path = require('path')
const data = require('./tzi.json')
const DD = require('./dd')

const dd = new DD

for (i = 0; i < 12; i++) {
  let fileName = dd.dd(i+1) + "_" + data[i][6] + ".json"
  let oldPath = path.resolve(`./cards/${fileName}`)
  let newPath = path.resolve(`../../content/entries/${data[i][6]}/${fileName}`)

  fs.rename(oldPath, newPath, (err) => {
      if (err) throw err;
      console.log('Rename complete!');
    });
}

for (let card of data) {
    let fileName = dd.dd(card[0]) + "_" + card[3] + "_" + card[6] + ".json"
    let dirName = card[3] + "_" + card[6]
    let oldPath = path.resolve(`./cards/${fileName}`)
    let newPath = path.resolve(`../../content/entries/${dirName}/${fileName}`)

    fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });
}
