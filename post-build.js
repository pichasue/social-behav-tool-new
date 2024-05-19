const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'build', 'index.html');

fs.readFile(indexPath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  // Replace only the paths that are not already relative
  var result = data.replace(/\/social-behav-tool-new\//g, './')
                   .replace(/href="\/favicon.ico"/g, 'href="./favicon.ico"')
                   .replace(/href="\/manifest.json"/g, 'href="./manifest.json"')
                   .replace(/src="\/logo192.png"/g, 'src="./logo192.png"')
                   .replace(/src="\/static\/js\/main.[a-z0-9]+.js"/g, (match) => {
                     return match.replace('src="/', 'src="./');
                   })
                   .replace(/href="\/static\/css\/main.[a-z0-9]+.css"/g, (match) => {
                     return match.replace('href="/', 'href="./');
                   });

  fs.writeFile(indexPath, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
