/**
 * Created by vbudhram on 4/26/15.
 */
var app = angular.module('dlp');

app.controller('BuildController', ['$scope', '$http', function ($scope, $http) {
    $scope.contentArea = '';
    $scope.method = 'POST';
    $scope.sending = false;

    $scope.addValue = function addValue(count, type) {
        angular.element('#contentArea').trigger('focus');
        $scope.contentArea = $scope.contentArea + randomValue(count, type);
        angular.element('#contentArea').trigger('keydown');
    };

    $scope.sendRequest = function sendRequest() {
        var req = {
            method: 'POST',
            url: 'http://requestb.in/1n178fd1',
            headers: {
                'Content-Type': 'text/html'
            },
            data: $scope.contentArea
        };

        $scope.sending = true;
        $http(req)
            .success(function (data, status, headers, config) {
                $scope.headers = [];
                Object.keys(headers()).forEach(function (header) {
                    $scope.headers.push({
                        name: header,
                        value: headers()[header]
                    });
                    $scope.status = status;
                });
                console.log('Success');
                $scope.sending = false;
            }).
            error(function (data, status, headers, config) {
                $scope.headers = [];
                Object.keys(headers()).forEach(function (header) {
                    $scope.headers.push({
                        name: header,
                        value: headers()[header]
                    })
                });
                $scope.status = status;
                console.log('Error');
                $scope.sending = false;
            });
    };

    $scope.clearContent = function clearContent() {
        $scope.contentArea = '';
        angular.element('#contentArea').trigger('focus');
    };

    var randomValue = function (count, type) {
        var result = chance[type]();
        for (var i = 0; i < count - 1; i++) {
            result = result + ', ' + chance[type]();
        }
        return result;
    }
}]);


