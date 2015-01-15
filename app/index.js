'use strict';

var util      = require('util');
var path      = require('path');
var yeoman    = require('yeoman-generator');
var notifier  = require('update-notifier');

var SuitLiteGenerator = module.exports = function SuitLiteGenerator( args, options, config ) {
  yeoman.generators.Base.apply(this, arguments);

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  this.on('initializing', function () {
    var opts = {
      pkg: this.pkg
    };

    notifier( opts ).notify();
  });
};

util.inherits( SuitLiteGenerator, yeoman.generators.Base );

SuitLiteGenerator.prototype.ask = function ask() {
  var done = this.async();
  
  var requirement = [
    {
      type: 'confirm',
      name: 'jquery',
      message: 'Include jQuery?'
    },
    {
      type: 'confirm',
      name: 'bootstrap',
      message: 'Include Bootstrap?'
    }
  ];

  this.prompt( requirement, function ( answers ) {
    this.includeJquery = answers.jquery;
    this.includeBootstrap = answers.bootstrap;

    done();
  }.bind(this));
};

SuitLiteGenerator.prototype.app = function app() {
  this.mkdir('js');
  this.mkdir('css');
  this.mkdir('img');

  if ( !this.includeBootstrap ) {
    this.copy('normalize.css', 'css/normalize.css');
  }
  
  this.copy('main.css', 'css/main.css');

  if ( this.includeBootstrap ) {
    this.mkdir('fonts');
    this.copy('glyphicons-halflings-regular.svg', 'fonts/glyphicons-halflings-regular.svg');
    this.copy('glyphicons-halflings-regular.ttf', 'fonts/glyphicons-halflings-regular.ttf');
    this.copy('glyphicons-halflings-regular.eot', 'fonts/glyphicons-halflings-regular.eot');
    this.copy('glyphicons-halflings-regular.woff', 'fonts/glyphicons-halflings-regular.woff');

    this.copy('index.bootstrap.html', 'index.html');

    this.copy('bootstrap.min.css', 'css/bootstrap.min.css');

    this.copy('jquery.js', 'js/jquery.js');
    this.copy('bootstrap.min.js', 'js/bootstrap.min.js');
    this.copy('main.with.jquery.js', 'js/main.js');
    this.copy('_bower.bootstrap.json', 'bower.json');
  } else if ( this.includeJquery && !this.includeBootstrap ) {
    this.copy('index.with.jquery.html', 'index.html');
    this.copy('jquery.js', 'js/jquery.js');
    this.copy('main.with.jquery.js', 'js/main.js');
    this.copy('_bower.with.jquery.json', 'bower.json');
  } else {
    this.copy('index.html', 'index.html');
    this.copy('main.js', 'js/main.js');
    this.copy('_bower.json', 'bower.json');
  }
};
