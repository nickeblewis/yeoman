'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scopeyo angular
  beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
	
	it('should have a price of 35.99', function () {
		expect(scope.price).toBe(35);
	});
	
	it('should have a colour of red', function () {
		expect(scope.colour).toBe('Red');
	});
});
