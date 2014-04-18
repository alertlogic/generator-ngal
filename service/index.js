'use strict';
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var fs     = require('fs');

var ServiceGenerator = module.exports = function ServiceGenerator(args, options) {
    
    try {
        yeoman.generators.NamedBase.apply(this, arguments);

        var lowerCase = this.name.charAt(0).toLowerCase() + this.name.slice(1);
        var upperCase = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    
        console.log(chalk.yellow('Generating Service: ' + upperCase + 'Service.'));        
        
        var writePath;
        
        var exists = fs.existsSync(path.resolve(lowerCase));
        if (exists) {
            writePath = lowerCase + '/';
        } else {
            writePath = '';
        }
        
        var targetService = writePath + upperCase + 'Service.js';
        var targetTest    = writePath + upperCase + 'ServiceTest.js'
                
        fs.readFile(path.join(__dirname, '/templates/_Service.js'), function (err, data) {
            var serviceData = String(data);
            serviceData = serviceData.replace(/sample/g, lowerCase);
            serviceData = serviceData.replace(/Sample/g, upperCase);
            fs.writeFile(targetService, serviceData, function (err) {
                console.log('Created: ' + targetService);
            });
        });
        
        fs.readFile(path.join(__dirname, '/templates/_ServiceTest.js'), function (err, data) {
            var testData = String(data);
            testData = testData.replace(/sample/g, lowerCase);
            testData = testData.replace(/Sample/g, upperCase);
            fs.writeFile(targetTest, testData, function (err) {
                console.log('Created: ' + targetTest);
            });
        });
        
    } catch (e) {
        console.log(e);
        console.log(chalk.magenta('You must provide a Service name.'));
        process.exit(1);
    }
  
};

util.inherits(ServiceGenerator, yeoman.generators.Base);