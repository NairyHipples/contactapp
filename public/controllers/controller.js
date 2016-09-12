var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World");

    //dummy data
    person1 = {
      name: 'Johan',
      email: 'johan@email.com',
      number: '0700-00 00 00'
    };

    person2 = {
      name: 'Lisa',
      email: 'lisa@email.com',
      number: '0701-00 00 01'
    };

    person3 = {
      name: 'Karin',
      email: 'karin@email.com',
      number: '0702-00 00 02'
    };

    var contactlist = [person1, person2, person3];
    $scope.contactlist = contactlist;
}]);
