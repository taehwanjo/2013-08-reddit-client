var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    controller:'MainController',
    template: '<h2>We are home</h2>'
  })
  .when('/login', {
    controller: 'LoginController', 
    template: '<h2>Login</h2>'
  })
  .otherwise({redirectTo: '/'});
}]);

app.controller('LoginController', function(){

});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.score = {};

  $http({
    method: 'JSONP',
    url: 'http://api.reddit.com/r/funny.json?jsonp=JSON_CALLBACK'
  }).success(function(data, status, headers, config){
    console.log(data.data);
    $scope.articles = data.data.children;
    for (var i=0; i<data.data.children.length; i++) {
      $scope.articles[i].id = i;
      $scope.articles[i].score = 0;
    } //iterate through and push id/default score pairs
  }).error(function(data, status, headers, config) {
    console.log("error");
  });

  $scope.up = function(id) {
    $scope.articles[id].score += 1;
  };

  $scope.down = function(id) {
    $scope.articles[id].score -= 1;
  };

}]);

// app.controller('DemoController', function($scope) {
//   $scope.counter = 0;
//   $scope.add = function(num) {
//     $scope.counter += num;
//   };
//   $scope.subtract = function(num){
//     $scope.counter -= num;
//   };
// });

// app.controller('PlayerController', ['$scope', function($scope){
//   $scope.playing = false;
//   $scope.audio = document.createElement('audio');
//   $scope.audio.src = '/media/npr.mp4';
//   $scope.play = function(){
//     $scope.audio.play();
//     $scope.playing = true;
//   };
//   $scope.stop = function(){
//     $scope.audio.pause();
//     $scope.playing = false;
//   };
//   $scope.audio.addEventListener('ended', function(){
//     $scope.$apply(function(){
//       $scope.stop();
//     });
//   });
// }]);

// app.controller('RelatedController', ['$scope', function($scope){

// }]);

// $http({
//   method: 'JSONP',
//   url: 'http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK'
// }).success(function(data, status, headers, config) {

// }).error(function(data, status, headers, config) {

// });