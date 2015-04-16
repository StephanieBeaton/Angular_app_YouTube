'use strict';

require('angular/angular');

var notesApp = angular.module('notesApp', []);

//directives
require('./directives/youtube_directive')(notesApp);

notesApp.controller('notesMainController', ['$scope', function($scope) {
  $scope.greeting = 'hello world';
}]);

notesApp.controller('YouTubeController', ['$scope', function($scope) {
   // initial settings

   $scope.yt = {
      width: 600,
      height: 480,
      videoid: "M7lc1UVf-VE"
   };

}]);
