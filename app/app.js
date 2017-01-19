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
        $scope.gotoWather = () => $location.url(`/weather/${$scope.zip}`)

    })
    .controller('WeatherCtrl', function($scope, $routeParams, weatherFactory){
        console.log("Using WeatherCtrl");

        weatherFactory
            .getWeather($routeParams.zipcode)
            .then((weather) => {
                $scope.temperature = weather.temp_f
                $scope.city = weather.display_location.city
            })
    })
    .factory('weatherFactory', ($http) => {
        return {
            getWeather (zipcode) {
                return $http
                    .get(`http://api.wunderground.com/api/ed68b3362ec1df3c/conditions/q/${zipcode}.json`)
                    .then((response) => {
                        console.log(response.data);
                        return response.data.current_observation
                    })
            },
        }
    })
