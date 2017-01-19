angular
    .module('anguweathar', ['ngRoute'])
    .config(($routeProvider) => {
        {
            $routeProvider.when('/', {
                controller: 'RootCtrl',
                templateUrl: '/partials/root.html'
            })
        }
    })
    .controller('RootCtrl', function(){
        
    })
