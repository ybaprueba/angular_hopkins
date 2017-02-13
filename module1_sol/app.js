( function () {

    'use strict';

    //name, dependencies list
    angular.module('LunchCheck',[])

      .controller('LunchCheckController', LunchCheckFunction);


    //inject dependencies
    LunchCheckFunction.$inject =['$scope'];
    //controller (view model) functionality
    function LunchCheckFunction($scope){
      $scope.userInputList = "";
      $scope.checkTooMany = function(){

        var lista=$scope.userInputList;
        if (lista=='') {
           $scope.messageTooMany = 'Please enter data first';
        } else {
            var numItems = lista.split(',').length;
            switch (true) {
              case (numItems < 4 ):  $scope.messageTooMany = 'Enjoy!!';
                break;
              default:  $scope.messageTooMany = 'Check if too much!!';
            }
        }

      }

    };
  }

)();
