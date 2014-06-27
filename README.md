# angular-x2js &nbsp;[![Build Status](https://travis-ci.org/cesarbarone/angular-x2js.png?branch=master)](https://travis-ci.org/cesarbarone/angular-x2js)
## A simple wrapper of x2js library

## Dependencies
- required:
	x2js.js

## Install

### Inside your project directory, runs:
`bower install angular-x2js --save`

### Includes this lines in your index.html
`<script src="bower_components/x2js/xml2json.js"></script>`

`<script src="bower_components/angular-x2js/src/x2js.js"></script> `

### Add the module to your angular app:
`angular.app('myApp', ['cb.x2js'])`

## Usage

### Inject x2js service where you need:

`myApp.controller('MyController', ['$scope', 'x2js', function($scope, x2js) {
  ...
}])`

## Methods

### You can use all functions available by x2js:

[a link]([https://code.google.com/p/x2js/])

## TODO

### Support configs

