'use strict';
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var fs     = require('fs');

var ConfigGenerator = module.exports = function ConfigGenerator(args, options) {
    
    try {
        yeoman.generators.NamedBase.apply(this, arguments);

        var lowerCase = this.name.charAt(0).toLowerCase() + this.name.slice(1);
        var upperCase = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    
        console.log(chalk.yellow('Generating Configuration for: ' + upperCase + '.'));        
        
        var writePath;
        
        var exists = fs.existsSync(path.resolve(lowerCase));
        if (exists) {
            fs.mkdir(lowerCase + '/config')
            writePath = lowerCase + '/config/';
        } else {
            fs.mkdir('config')
            writepath = 'config/';
        }
        
        var targetConfig        = writePath + 'config.js';
        var targetConfiguration = writePath + 'configuration.js';
                
        fs.readFile(path.join(__dirname, '/templates/_config.js'), function (err, data) {
            var configData = String(data);
            configData = configData.replace(/sample/g, lowerCase);
            configData = configData.replace(/Sample/g, upperCase);
            fs.writeFile(targetConfig, configData, function (err) {
                console.log('Created: ' + targetConfig);
            });
        });
        
        fs.readFile(path.join(__dirname, '/templates/_configuration.js'), function (err, data) {
            var configurationData = String(data);
            configurationData = configurationData.replace(/sample/g, lowerCase);
            configurationData = configurationData.replace(/Sample/g, upperCase);
            fs.writeFile(targetConfiguration, configurationData, function (err) {
                console.log('Created: ' + targetConfiguration);
            });
        });
        
    } catch (e) {
        console.log(e);
        console.log(chalk.magenta('You must provide a Configuration name.'));
        process.exit(1);
    }
  
};

util.inherits(ConfigGenerator, yeoman.generators.Base);