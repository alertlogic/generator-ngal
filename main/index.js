'use strict';
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var fs     = require('fs');

var MainGenerator = module.exports = function MainGenerator(args, options) {
    
    try {
        yeoman.generators.NamedBase.apply(this, arguments);

        var lowerCase = this.name.charAt(0).toLowerCase() + this.name.slice(1);
        var upperCase = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    
        console.log(chalk.yellow('Generating Main Application: ' + upperCase + '.'));        
        
        var writePath;
        
        var exists = fs.existsSync(path.resolve(lowerCase));
        if (exists) {
            writePath = lowerCase + '/';
        } else {
            writePath = '';
        }
        
        var appFile    = writePath + 'app.js';
        var indexFile  = writePath + 'index.html';
        var mainFile   = writePath + 'main.js';
        var sampleHtml = writePath + lowerCase + '.html';
        var sampleJs   = writePath + lowerCase + '.js';
                        
        fs.readFile(path.join(__dirname, '/templates/_app.js'), function (err, data) {
            var appData = String(data);
            appData = appData.replace(/sample/g, lowerCase);
            appData = appData.replace(/Sample/g, upperCase);
            fs.writeFile(appFile, appData, function (err) {
                console.log('Created: ' + appFile);
            });
        });
        
        fs.readFile(path.join(__dirname, '/templates/_index.html'), function (err, data) {
            var indexData = String(data);
            indexData = indexData.replace(/sample/g, lowerCase);
            indexData = indexData.replace(/Sample/g, upperCase);
            fs.writeFile(indexFile, indexData, function (err) {
                console.log('Created: ' + indexFile);
            });
        });
        
        fs.readFile(path.join(__dirname, '/templates/_main.js'), function (err, data) {
            var mainData = String(data);
            mainData = mainData.replace(/sample/g, lowerCase);
            mainData = mainData.replace(/Sample/g, upperCase);
            fs.writeFile(mainFile, mainData, function (err) {
                console.log('Created: ' + mainFile);
            });
        });
        
        fs.readFile(path.join(__dirname, '/templates/_sample.html'), function (err, data) {
            var sampleHtmlData = String(data);
            sampleHtmlData = sampleHtmlData.replace(/sample/g, lowerCase);
            sampleHtmlData = sampleHtmlData.replace(/Sample/g, upperCase);
            fs.writeFile(sampleHtml, sampleHtmlData, function (err) {
                console.log('Created: ' + sampleHtml);
            });
        });
        
        fs.readFile(path.join(__dirname, '/templates/_sample.js'), function (err, data) {
            var sampleJsData = String(data);
            sampleJsData = sampleJsData.replace(/sample/g, lowerCase);
            sampleJsData = sampleJsData.replace(/Sample/g, upperCase);
            fs.writeFile(sampleJs, sampleJsData, function (err) {
                console.log('Created: ' + sampleJs);
            });
        });
        
    } catch (e) {
        console.log(e);
        console.log(chalk.magenta('You must provide an Application name.'));
        process.exit(1);
    }
  
};

util.inherits(MainGenerator, yeoman.generators.Base);