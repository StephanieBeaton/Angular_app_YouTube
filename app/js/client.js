'use strict';

require('angular/angular');

var notesApp = angular.module('notesApp', []);

//directives
require('./directives/youtube_directive')(notesApp);
//require('./directives/create_resource_directive')(notesApp);
//require('./notes/directives/create_note_directive_one')(notesApp);

notesApp.controller('notesMainController', ['$scope', function($scope) {
  $scope.greeting = 'hello world';
}]);
