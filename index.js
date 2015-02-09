var app = require('commander')
 , chalk = require('chalk')
 , path = require('path')
 , swig  = require('swig')
 , pkgs = require('./package.json')
 , file = require('file-utils');

// @todo custom
app
  .version('1.0.0')
  .on('--help', function () {
    var info = [
      '  Examples:'
      , ''
      , '    ' + pkgs.name + ' pkgName'
      , ''
    ];

    console.log(info.join('\n'));
  })
  .parse(process.argv);

var pkgName = app.args[0]

if (!pkgName) {
  console.error(
    '    '
    + chalk.green('pkgName')
    + '  pkg name is required'
  )
  process.exit(1)
}

var tplDir = path.resolve(__dirname, './template/');
var pkgDir = path.resolve(process.cwd(), pkgName)

file
  .expand(
    {dot: true}
    , tplDir + '/*'
  )
  .forEach(function (p) {
    var newp = path.join(pkgDir, p.substr(tplDir.length + 1))
      , str = render(p);

    file.write(newp, str)
  });

function render(str) {
  return swig.renderFile(str, {
    pkg: pkgName
  })
}

