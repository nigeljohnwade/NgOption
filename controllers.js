var ngTestApp = angular.module('ngTestApp', []);

ngTestApp.controller('ngTestCtl', function ($scope, $http) {
    $http.get('formData.json').success(function(data) {
        $scope.formData = data;
    });
    $http.get('companyData.json').success(function(data) {
        $scope.company = data;
    });
});