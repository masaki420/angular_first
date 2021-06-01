// angular.module('my app',[])
// 	.controller('MainController',['$scope', function($scope){
// 		$scope.users = [
// 			{"name":"aihara","score":52.22},
// 			{"name":"aikawa","score":38.22},
// 			{"name":"aiue","score":11.11}
// 		];
// 	}]);

angular.module('myapp', [])
    .controller('MainController', ['$scope', function($scope) {
        $scope.users = [
            {"name":"taguchi", "score":52.22},
            {"name":"tanaka", "score":38.22},
            {"name":"yamada", "score":11.11}
        ];
    }]);