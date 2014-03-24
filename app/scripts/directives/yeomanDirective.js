'use strict';

angular.module('yeomanApp')
  .directive('yeomanDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the yeomanDirective directive');
      }
    };
  });
