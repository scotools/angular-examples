/**
 * when adding $scope into the controller, the model is accessible once the
 * view declares which controller it is bound to, and thus the injected scope.
 */
//alert("loading");
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
//alert("routes loaded");

//Create factory
demoApp.factory('simpleFactory', function() {
  //alert("factory created");
  var persons = [
    {name:'Dave',city:'Pasadena',joinDate:'1288323623006',balance:5.00},
    {name:'Tom',city:'Annapolis',joinDate:'1288323623006',balance:4.99},
    {name:'Fred',city:'Georgetown',joinDate:'1288323623006',balance:6.54},
    {name:'Elliot',city:'Annapolis',joinDate:'1288323623006',balance:3.45},
    {name:'Christopher',city:'Annapolis',joinDate:'1288323623006',balance:5.23},
    {name:'Ann',city:'Frankfort',joinDate:'1288323623006',balance:10.23}
  ];
  //Init the factory obj
  var factory = {};
  //Getter method on the factory
  factory.getPersons = function() {
    //alert("getPersons");
    return persons;
  };
  factory.postPerson = function(person) {
    //alert("postPerson");
    persons.push(person);
  };
  // return the factory
  return factory;
});
// object to hold controllers
//var controllers = {};

// Add the SimpleController
// Controller needs you to specify the dependencies to inject into the
//function, a.k.a, $scope, simpleFactory
demoApp.controller('SimpleController', ['$scope', 'simpleFactory', function($scope, simpleFactory) {
  $scope.persons = simpleFactory.getPersons();
  $scope.now = new Date();
  $scope.addPerson = function() {
    //alert("adding person");
    simpleFactory.postPerson(
      {name: $scope.newPerson.name,
       city: $scope.newPerson.city,
       joinDate: $scope.now,
       balance: 0.00
      });
  }
}]);

//Add Controllers to the app
//demoApp.controller(controllers);
//alert("adding controllers SimpleController to demoApp");
