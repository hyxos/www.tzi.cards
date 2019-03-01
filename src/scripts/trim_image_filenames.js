var fs = require('fs');
const path = require('path')

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}

var dirPath = process.argv[2];

fs.readdir(dirPath, function (err, items) {
  console.log(items);

  for (var i = 0; i < items.length; i++) {
    let oldName = path.resolve(dirPath + items[i])
    let newName = path.resolve(dirPath + items[i].substring(3))
    fs.rename(oldName, newName, (err) => {
      if (err) throw err;
      console.log('Rename complete!');
    });
  }
});