/**
 * when adding $scope into the controller, the model is accessible once the
 * view declares which controller it is bound to, and thus the injected scope.
 */

 /*
  * added SimpleController as anonymous function
  * to module "app" in one line.
  */
angular.module('app', []).
  controller('SimpleController', ['$scope', function($scope) {
  alert("Scope injected");
  persons = [];
  persons.push({name:'Dave',city:'Pasadena',joinDate:'1288323623006',balance:5.00});
  persons.push({name:'Tom',city:'Annapolis',joinDate:'1288323623006',balance:4.99});
  persons.push({name:'Fred',city:'Georgetown',joinDate:'1288323623006',balance:6.54});
  persons.push({name:'Elliot',city:'Annapolis',joinDate:'1288323623006',balance:3.45});
  persons.push({name:'Christopher',city:'Annapolis',joinDate:'1288323623006',balance:5.23});
  persons.push({name:'Ann',city:'Frankfort',joinDate:'1288323623006',balance:10.23});
  $scope.persons = persons;
}]);
