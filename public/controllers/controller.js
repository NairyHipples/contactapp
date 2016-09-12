var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    var refresh = function(){
      $http.get('/contactlist').success(function (response){
        console.log("I got the data I requested");
        $scope.contactlist = response;
        //clear input boxes after calling refresh function
        $scope.contact = "";
      });

    };
    //calling function to get data when loading the page
    refresh();

    //fetch data from input field
    $scope.addContact = function(){
      console.log($scope.contact);
      //sending data to server
      $http.post('/contactlist', $scope.contact).success(function(response){
        console.log(response);
        //refreshing page when clicking add contact
        //button and data has been sent to server
        refresh();
      });

    };

}]);
