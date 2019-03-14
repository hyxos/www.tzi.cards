var fs = require('fs');
const path = require('path')

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}

var dirPath = process.argv[2];

fs.readdir(dirPath, function (err, items) {
  const animals = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "pig" ]
  let latin = ['tzi', 'cho', 'yeen', 'mao', 'chen', 'si', 'wu', 'wei', 'shen', 'yow', 'shu', 'hai']

  console.log(items);

  for (var i = 0; i < items.length; i++) {
    let itemIndex = animals.indexOf(items[i].substring(0, items[i].indexOf('_')))
    let regex = new RegExp(animals[itemIndex], "g")
    let nn = latin[itemIndex]
    let oldName = path.resolve(dirPath + items[i])
    let newName = path.resolve(dirPath + items[i].replace(regex, nn))
    fs.rename(oldName, newName, (err) => {
      if (err) throw err;
      console.log('Rename complete!');
    });
  }
});