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

## Usage

### You can use all functions available in x2js:

x2js.xml2json - Convert XML specified as DOM Object to JSON

x2js.json2xml - Convert JSON to XML DOM Object

x2js.xml_str2json - Convert XML specified as string to JSON

x2js.json2xml_str - Convert JSON to XML string

x2js.asArray - Utility function for working with JSON field always in array form

x2js.asDateTime - Utility function for convert the specified parameter from XML DateTime to JS Date

x2js.asXmlDateTime - Utility function for convert the specified parameter to XML DateTime from JS Date or timestamp

### Complete documentation available in:

https://code.google.com/p/x2js/

## TODO

### Support configs

## License

MIT.

Please see the LICENSE file.