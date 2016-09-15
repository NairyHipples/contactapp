var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    var refresh = function(){
      $http.get('/contactlist').success(function (response){
        console.log("Refresh");
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
    //remove function
     $scope.remove = function(id){
       console.log(id);
       //identify chosen contact to remove
       $http.delete('/contactlist/' + id).success(function(response){
         //refreshing the page after clicking remove button
         refresh();
       });
     };

     //edit function
     $scope.edit = function(id) {
       console.log(id);
       //identify chosen contact to edit
       $http.get('/contactlist/' + id).success(function(response){
         //put response in input boxes
         $scope.contact = response;
       });
     };

     //update function
     $scope.update = function(){
       console.log($scope.contact._id);
       //send everything in the input boxes to the server
       //and refresh the page when update btn is clicked
       $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
         refresh();
       });
     };

     //clear function
     $scope.deselect = function(){
       //clear input boxes after calling deselect function
      $scope.contact = "";
     };

}]);
