
/*/ <reference path = "http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"/>*/
/*/ <reference path = "http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"/>*/


var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'myCtrl'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('concerts', {
            url:'/concerts',
            templateUrl: '/views/concerts.html',
            controller: 'displaymyCtrl'    
        })

        .state('concerts.map', {
            url:'/map/:lat/:lng/:state',
            templateUrl: '/views/map.html',
            controller: 'mapCtrl'    
        })

        // $locationProvider.html5Mode(true);
        
});

//Service for http request to api
app.factory('dataFactory',['$http', function($http){
                var dataFactory={};
                dataFactory.getData=function(){
                      return $http.get('/listConcerts');
                };
                return dataFactory;
}]);

// Controllers for different views
app.controller('myCtrl',['$scope','$log', function($scope, $log){
    $scope.message = " Welcome to Home Page";

}]);

app.controller('displaymyCtrl', ['$scope', '$log', '$http','dataFactory', function($scope, $log, $http, dataFactory) {

        $scope.myWelcome='';
        getData();
        function getData(){
            dataFactory.getData()
            .then(function (response) {
                $scope.myWelcome = response.data;
                $log.log(response);
                
            },function(err){
                $scope.error = err.statusText || "Request Failed!";
                alert("Error" + err.status + err.statusText + $scope.error);
                $log.log(err);
            });
        }

}]);


app.controller('mapCtrl', ['$scope','$stateParams',function($scope,$stateParams){
        var lat = parseFloat($stateParams.lat);
        var lng = parseFloat($stateParams.lng);

        createMap(lat,lng,$stateParams.state);
    
        function createMap(lat, lng, state)
            {
                var myLatLng = {lat: lat, lng: lng};
                var state = state;

                // Create a map object and specify the DOM element for display.
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: myLatLng,
                    scrollwheel: false,
                    zoom: 4
                });

                // Create a marker and set its position.
                var marker = new google.maps.Marker({
                    map: map,
                    position: myLatLng,
                    title: state
                });
                $scope.showMap =true;
            };
               

}]);


