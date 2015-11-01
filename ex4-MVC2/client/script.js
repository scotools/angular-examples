/**
 * when adding $scope into the controller, the model is accessible once the
 * view declares which controller it is bound to, and thus the injected scope.
 */
alert("loading");
var demoApp = angular.module('demoApp',["ngRoute"]);

demoApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'SimpleController',
        templateUrl: 'Partials/View1.html'
      })
    .when('/view2',
      {
        controller: 'SimpleController',
        templateUrl: 'Partials/View2.html'
      })
    .otherwise({ redirectTo: '/'});
});
alert("routes loaded");

// object to hold controllers
//var controllers = {};

// Add the SimpleController
demoApp.controller('SimpleController', ['$scope', function($scope) {

//controllers.SimpleController = function($scope) {
  alert("Scope injected");
  persons = [];
  persons.push({name:'Dave',city:'Pasadena',joinDate:'1288323623006',balance:5.00});
  persons.push({name:'Tom',city:'Annapolis',joinDate:'1288323623006',balance:4.99});
  persons.push({name:'Fred',city:'Georgetown',joinDate:'1288323623006',balance:6.54});
  persons.push({name:'Elliot',city:'Annapolis',joinDate:'1288323623006',balance:3.45});
  persons.push({name:'Christopher',city:'Annapolis',joinDate:'1288323623006',balance:5.23});
  persons.push({name:'Ann',city:'Frankfort',joinDate:'1288323623006',balance:10.23});
  $scope.persons = persons;

  $scope.now = new Date();

  $scope.addPerson = function() {
    alert("adding person");
    $scope.persons.push(
      {name: $scope.newPerson.name,
       city: $scope.newPerson.city,
       joinDate: $scope.now,
       balance: 0.00
      });
  }
}]);

//Add Controllers to the app
//demoApp.controller(controllers);
alert("adding controllers SimpleController to demoApp");
