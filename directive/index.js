'use strict';
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var fs     = require('fs');

var DirectiveGenerator = module.exports = function DirectiveGenerator(args, options) {
    
    try {
        yeoman.generators.NamedBase.apply(this, arguments);

        var lowerCase = this.name.charAt(0).toLowerCase() + this.name.slice(1);
        var upperCase = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    
        console.log(chalk.yellow('Generating Directive: ' + upperCase + 'Directive.'));        
        
        var writePath;
        
        var exists = fs.existsSync(path.resolve(lowerCase));
        if (exists) {
            writePath = lowerCase + '/';
        } else {
            writePath = '';
        }
        
        var targetDirective = writePath + upperCase + 'Directive.js';
        
        fs.readFile(path.join(__dirname, '/templates/_Directive.js'), function (err, data) {
            var directiveData = String(data);
            directiveData = directiveData.replace(/sample/g, lowerCase);
            directiveData = directiveData.replace(/Sample/g, upperCase);
            fs.writeFile(targetDirective, directiveData, function (err) {
                console.log('Created: ' + targetDirective);
            });
        });
        
    } catch (e) {
        console.log(e);
        console.log(chalk.magenta('You must provide a Directive name.'));
        process.exit(1);
    }
  
};

util.inherits(DirectiveGenerator, yeoman.generators.Base);