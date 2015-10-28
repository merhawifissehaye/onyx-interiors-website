/**
 * Created by mfissehaye on 10/13/15.
 */
app = angular.module('malam', ['ngRoute', 'angular-spinkit'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.tmp.html'
            })
            .when('/who', {
                templateUrl: 'views/who.tmp.html'
            })
            .when('/what/:serviceName', {
                templateUrl: function(params) {
                    var serviceName = params.serviceName ? params.serviceName : 'what';
                    return 'views/' + serviceName + '.tmp.html'
                }
            })
            .when('/where', {
                templateUrl: 'views/where.tmp.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]).
    controller('BankController', ['$scope', function($scope) {
        $scope.operations = [
            {
                id: 1,
                name: 'Withdrawals'
            },
            {
                id: 2,
                name: 'Transactions'
            },
            {
                id: 3,
                name: 'Reports'
            },
            {
                id: 4,
                name: 'Messages'
            }
        ]
        $scope.banks = [
            {
                id: 1,
                name: 'Commercial Bank of Ethiopia',
                branch: 'Mexico',
                initial_deposit: 1000,
                primary_account: '12345678'
            },
            {
                id: 2,
                name: 'Awash International Bank',
                branch: 'Mexico',
                initial_deposit: 1000,
                primary_account: '12345678'
            },
            {
                id: 3,
                name: 'Wegagen Bank',
                branch: 'Mexico',
                initial_deposit: 1000,
                primary_account: '12345678'
            },
            {
                id: 4,
                name: 'Oromia International Bank',
                branch: 'Mexico',
                initial_deposit: 1000,
                primary_account: '12345678'
            },
        ]
        function Bank(name, branch, initial_deposit, primary_account) {
            return {
                name: name,
                branch: branch,
                inital_deposit: initial_deposit,
                primary_account: primary_account
            };
        }
        $scope.createBankForm = function() {
            $scope.banks.push(new Bank($scope.name, $scope.branch, $scope.inital_deposit, $scope.pprimary_account));
            console.debug($scope.banks);
            return false;
        }
    }]);