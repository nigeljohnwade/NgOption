var ngTestApp = angular.module('ngTestApp', []);

ngTestApp.controller('ngTestCtl', function ($scope) {
    $scope.myForm = {};
    $scope.myForm.industry_sector = {};
    $scope.myForm.turnovers = {};
    $scope.myForm.known_client_years = {};
    $scope.regex = "[0-9]";
    $scope.myForm.valid = function(){
        if($('.error').length > 0){
            return true;
        }else{
            return false;
        }
    };
    $scope.myForm.industry_sector_options = [
        { "id": 1, "name": "Agriculture" },
        { "id": 2, "name": "Banking" },9
        { "id": 3, "name": "Carpentry" },
        { "id": 4, "name": "Finance" }
    ];
    $scope.myForm.turnovers_options = [
        {"id": 1, "name": "less than £250,000", "lower_value": 0, "upper_value": 249999},
        {"id": 2, "name": "£250,000 ­ £1,000,000", "lower_value": 250000, "upper_value": 999999},
        {"id": 3, "name": "1M to 5M", "lower_value": 1000000, "upper_value": 4999999},
        {"id": 4, "name": "less than £250,000", "lower_value": 5000000, "upper_value": null}
    ];
    $scope.myForm.known_client_years_options = [
        {"id": 1, "name": "Less than one year"},
        {"id": 2, "name": "1 ­ 2 years"},
        {"id": 3, "name": "3 ­ 5 years"},
        {"id": 4, "name": "5 ­ 10 years"},
        {"id": 5, "name": "10+ years"}
    ];
    $scope.myForm.defaults = {
        "industry_sector": {
            displayText: "Select an industry sector"
        },
        "turnovers": {
            displayText: "Select a range"
        },
        "known_client_years": {
            displayText: "Select a time span"
        }
    };
    $scope.myForm.changeEvent = function(){
        ($scope.angularForm.sector.$viewValue > 0) ?
            $('#sector').closest('.form-group').removeClass('error'):
            $('#sector').closest('.form-group').addClass('error');
        ($scope.angularForm.money.$viewValue > 0) ?
            $('#money').closest('.form-group').removeClass('error'):
            $('#money').closest('.form-group').addClass('error');
        ($scope.angularForm.time.$viewValue > 0) ?
            $('#time').closest('.form-group').removeClass('error'):
            $('#time').closest('.form-group').addClass('error');
    }
    $scope.myForm.submitTheForm = function(){
        var submission = {
            company: {
                'industry_sector': $scope.myForm.industry_sector_options[$scope.myForm.industry_sector - 1],
                'turnovers': $scope.myForm.turnovers_options[$scope.myForm.turnovers -1],
                'known_client_years': $scope.myForm.known_client_years_options[$scope.myForm.known_client_years - 1]
            }
        }
        console.log(submission);
    }

});