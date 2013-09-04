var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
  $scope.person = {name:"Ari Lerner"};
  var updateClock = function() {
    $scope.clock = new Date();
  };
  var timer = setInterval(function(){
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
  $scope.hello = function(){
    $scope.clock = "HELLO";
  };

  $scope.roommates = {
     'Ari': 'orange',
     'Q': 'purple',
     'Sean': 'green'
  };
});

app.controller('DemoController', function($scope) {
  $scope.counter = 0;
  $scope.add = function(num) {
    $scope.counter += num;
  };
  $scope.subtract = function(num){
    $scope.counter -= num;
  };
});

app.controller('PlayerController', ['$scope', function($scope){
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = '/media/npr.mp4';
  $scope.play = function(){
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function(){
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function(){
    $scope.$apply(function(){
      $scope.stop();
    });
  });
}]);

app.controller('RelatedController', ['$scope', function($scope){

}]);

$http({
  method: 'JSONP',
  url: 'http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK'
}).success(function(data, status, headers, config) {

}).error(function(data, status, headers, config) {

});