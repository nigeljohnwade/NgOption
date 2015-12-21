var ngTestApp = angular.module('ngTestApp', []);

ngTestApp.controller('ngTestCtl', function ($scope, $http) {
    $scope.industry_sector = [
        { "id": 0, "name": "Select an industry sector"},
        { "id": 1, "name": "Agriculture" },
        { "id": 2, "name": "Banking" },
        { "id": 3, "name": "Carpentry" },
        { "id": 4, "name": "Finance" }
    ];
    $scope.turnovers = [
        {"id": 0, "name": "Select a turnover range"},
        {"id": 1, "name": "less than £250,000", "lower_value": 0, "upper_value": 249999},
        {"id": 2, "name": "£250,000 ­ £1,000,000", "lower_value": 250000, "upper_value": 999999},
        {"id": 3, "name": "1M to 5M", "lower_value": 1000000, "upper_value": 4999999},
        {"id": 4, "name": "less than £250,000", "lower_value": 5000000, "upper_value": null}
    ];
    $scope.known_client_years = [
        {"id": 0, "name": "Select a time span"},
        {"id": 1, "name": "Less than one year"},
        {"id": 2, "name": "1 ­ 2 years"},
        {"id": 3, "name": "3 ­ 5 years"},
        {"id": 4, "name": "5 ­ 10 years"},
        {"id": 5, "name": "10+ years"}
    ]
    $scope.company = {
        "industry_sector": {},
        "known_client_years": null,
        "previous_year_turnover": {}
    };
});