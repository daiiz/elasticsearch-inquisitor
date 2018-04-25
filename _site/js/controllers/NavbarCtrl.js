
function NavbarCtrl($scope, $rootScope, $route, $location, Data) {
    $scope.data = Data;

    // $scope.data.host = window.location.protocol + '//' + window.location.host;
    $scope.data.host = "http://localhost:9200"

    $scope.isActive = function(route) {

        var path = $location.path();


        if (path === '/')
            path = '/queries';

        return (('/' + route.toLowerCase()) === path);
    }


}
