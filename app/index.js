'use strict';
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var fs     = require('fs');

var NgalGenerator = module.exports = function NgalGenerator(args, options) {
    
    try {
        yeoman.generators.NamedBase.apply(this, arguments);

        var lowerCase = this.name.charAt(0).toLowerCase() + this.name.slice(1);
        var upperCase = this.name.charAt(0).toUpperCase() + this.name.slice(1);
        
        this.log(this.yeoman);
    
        console.log(chalk.yellow('Generating Module: ' + upperCase + '.'));
        
        this.mkdir(lowerCase);
        
        this.hookFor('ngal:main', {
            args: args
        });
        
        this.hookFor('ngal:config', {
            args: args
        });
        
        this.hookFor('ngal:version', {
            args: args
        });
        
        this.hookFor('ngal:controller', {
            args: args
        });
        
        this.hookFor('ngal:service', {
            args: args
        });
        
        this.hookFor('ngal:directive', {
            args: args
        });
            
    } catch (e) {
        console.log(e);
        console.log(chalk.magenta('You must provide a Module name.'));
        process.exit(1);
    }
    
    this.pkg = require('../package.json');
  
};

util.inherits(NgalGenerator, yeoman.generators.Base);