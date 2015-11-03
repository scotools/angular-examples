help from:
http://stackoverflow.com/questions/32572471/angular-1-4-5-uncaught-error-injectormodulerr-ngroute
Server help exclusively from:
https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
http://stackoverflow.com/questions/5869216/how-to-store-node-js-deployment-settings-configuration-files

Module -> Config -> Routes -> View -> directives
                           -> controller -> factories

Use the route to map the view to the controller and the $Scope

Instead of putting CRUD stuff in controllers, have them use:
 - factories
 - services
 - providers, etc.

 Views can then leverage directives

Module is an object container for all the following...
module      <html np-app="moduleName">
  - config
     - routes
  - Filter
  - Directive
  - data access
    - factory - creates an object and returns it
    - service - function using 'this'
    - provider - $get function
    - values - used to get config key/value info
  - controller

  To create a module:
  var demoApp = angular.module('demoApp',[]);
   - dependency injection via the array (can have dependencies on other modules)

   var demoApp = angular.module('demoApp',['helperModule']);
    - helperModule may just have filters and directives, etc that I am reusing

//define the module
var demoApp = angular.module('demoApp',[]);
...
  //add controller to the module
  demoApp.controller('SimpleController', function($scope) {
    ...
  });


Role of Routes
 - we need to load different views given different user interaction...
 View1 -> view2 -> view3....
