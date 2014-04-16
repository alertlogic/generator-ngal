'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var NgalGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the absolutely fabulous Alert Logic ngModule generator.'));

    var prompts = [{
      name: 'installModule',
      message: 'What is the name of your module?'
    }];

    this.prompt(prompts, function (props) {
      this.installModule = props.installModule;

      done();
    }.bind(this));
  },

  app: function () {
    var folderName = this.installModule.charAt(0).toLowerCase() + this.installModule.slice(1);
    var appName    = this.installModule.charAt(0).toUpperCase() + this.installModule.slice(1);
    
    this.mkdir(folderName);
    this.mkdir(folderName + '/config');
    
    var newConfig         = this.readFileAsString(path.join(__dirname, '/templates/_config/_config.js'));
    newConfig             = newConfig.replace(/sample/g, folderName);
    newConfig             = newConfig.replace(/Sample/g, appName);
    this.write(folderName + '/config/config.js', newConfig);
    var newConfiguration  = this.readFileAsString(path.join(__dirname, '/templates/_config/_configuration.js'));
    newConfiguration      = newConfiguration.replace(/sample/g, folderName);
    newConfiguration      = newConfiguration.replace(/Sample/g, appName);
    this.write(folderName + '/config/configuration.js', newConfiguration);
    var newApp            = this.readFileAsString(path.join(__dirname, '/templates/_app.js'));
    newApp                = newApp.replace(/sample/g, folderName);
    newApp                = newApp.replace(/Sample/g, appName);
    this.write(folderName + '/app.js', newApp);
    var newController     = this.readFileAsString(path.join(__dirname, '/templates/_Controller.js'));
    newController         = newController.replace(/sample/g, folderName);
    newController         = newController.replace(/Sample/g, appName);
    this.write(folderName + '/' + appName + 'Controller.js', newController);
    var newControllerTest = this.readFileAsString(path.join(__dirname, '/templates/_ControllerTest.js'));
    newControllerTest     = newControllerTest.replace(/sample/g, folderName);
    newControllerTest     = newControllerTest.replace(/Sample/g, appName);
    this.write(folderName + '/' + appName + 'ControllerTest.js', newControllerTest);
    var newIndex          = this.readFileAsString(path.join(__dirname, '/templates/_index.html'));
    newIndex              = newIndex.replace(/sample/g, folderName);
    newIndex              = newIndex.replace(/Sample/g, appName);
    this.write(folderName + '/index.html', newIndex);
    var newMain           = this.readFileAsString(path.join(__dirname, '/templates/_main.js'));
    newMain               = newMain.replace(/sample/g, folderName);
    newMain               = newMain.replace(/Sample/g, appName);
    this.write(folderName + '/main.js', newMain);
    var newReadme         = this.readFileAsString(path.join(__dirname, '/templates/_README.md'));
    newReadme             = newReadme.replace(/sample/g, folderName);
    newReadme             = newReadme.replace(/Sample/g, appName);
    this.write(folderName + '/README.md', newReadme);
    var newHtml           = this.readFileAsString(path.join(__dirname, '/templates/_sample.html'));
    newHtml               = newHtml.replace(/sample/g, folderName);
    newHtml               = newHtml.replace(/Sample/g, appName);
    this.write(folderName + '/' + folderName + '.html', newHtml);
    var newModule         = this.readFileAsString(path.join(__dirname, '/templates/_sample.js'));
    newModule             = newModule.replace(/sample/g, folderName);
    newModule             = newModule.replace(/Sample/g, appName);
    this.write(folderName + '/' + folderName + '.js', newModule);
    
  },

  projectfiles: function () {
  }
});

module.exports = NgalGenerator;