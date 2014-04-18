'use strict';
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var fs     = require('fs');

var VersionGenerator = module.exports = function VersionGenerator(args, options) {
    
    try {
        yeoman.generators.NamedBase.apply(this, arguments);

        var lowerCase = this.name.charAt(0).toLowerCase() + this.name.slice(1);
        var upperCase = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    
        console.log(chalk.yellow('Generating Versioning Files.'));        
        
        var writePath;
        
        var exists = fs.existsSync(path.resolve(lowerCase));
        if (exists) {
            writePath = lowerCase + '/';
        } else {
            writePath = '';
        }
        
        var bowerFile   = writePath + 'bower.json';
        var packageFile = writePath + 'package.json';
        var readmeFile  = writePath + 'README.md';
                
        fs.readFile(path.join(__dirname, '/templates/_bower.json'), function (err, data) {
            var bowerData = String(data);
            bowerData = bowerData.replace(/sample/g, lowerCase);
            bowerData = bowerData.replace(/Sample/g, upperCase);
            fs.writeFile(bowerFile, bowerData, function (err) {
                console.log('Created: ' + bowerFile);
            });
        });
        
        fs.readFile(path.join(__dirname, '/templates/_package.json'), function (err, data) {
            var packageData = String(data);
            packageData = packageData.replace(/sample/g, lowerCase);
            packageData = packageData.replace(/Sample/g, upperCase);
            fs.writeFile(packageFile, packageData, function (err) {
                console.log('Created: ' + packageFile);
            });
        });
        
        fs.readFile(path.join(__dirname, '/templates/_README.md'), function (err, data) {
            var readmeData = String(data);
            readmeData = readmeData.replace(/sample/g, lowerCase);
            readmeData = readmeData.replace(/Sample/g, upperCase);
            fs.writeFile(readmeFile, readmeData, function (err) {
                console.log('Created: ' + readmeFile);
            });
        });
        
    } catch (e) {
        console.log(e);
        console.log(chalk.magenta('You must provide a Version name.'));
        process.exit(1);
    }
  
};

util.inherits(VersionGenerator, yeoman.generators.Base);