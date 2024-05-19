const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'build', 'index.html');

fs.readFile(indexPath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\/social-behav-tool-new\//g, './');

  fs.writeFile(indexPath, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
