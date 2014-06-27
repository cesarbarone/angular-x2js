'use strict';

describe('angular-x2js', function() {
  
  var x2js;

  beforeEach(module('cb.x2js'));

  beforeEach(inject(function(_x2js_){
    x2js = _x2js_;
  }));

  it('smokes like a rockstart', function(){
    expect(true).toBeTruthy();
  });
  
  it('smokes like a rockstart', function(){
    expect(x2js instanceof X2JS).toBeTruthy();
  });

});
