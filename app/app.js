angular
    .module('anguweathar', ['ngRoute'])
    .config(($routeProvider) => {
        {
            $routeProvider
                .when('/', {
                    controller: 'RootCtrl',
                    templateUrl: '/partials/root.html'
                })
                .when('/weather/:zipcode', {
                    controller: 'WeatherCtrl',
                    templateUrl: '/partials/weather.html'
                })
        }
    })
    .controller('RootCtrl', function($scope, $location){
        console.log("Using RootCtrl");
        $scope.gotoWather = () => {
            //change the url
            location.href = `/#!/weather/${$scope.zip}`
        }
    })
    .controller('WeatherCtrl', function($scope){
        console.log("WeatherCtrl");
    })
