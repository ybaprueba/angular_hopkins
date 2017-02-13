( function () {
  //force to use var
  //otherwise you could do
  //a=7; without the var, it will be in global scope
  'use strict';

  //name, dependencies list
  angular.module('myFirstAngularApp',[])

    .controller('MyFirstController', function ($scope) {
    //controller (view model) functionality
      $scope.name = 'pepe';
      $scope.sayHello = function(){
        return 'Afayaivos.......';

      };
    }
  );

  }


)();
