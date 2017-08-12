var a = angular.module('npAdmin')
.controller('citycontroller', function PostController($scope) {
	$scope.City_name=" ";
	console.dir($scope.City_name);
	$scope.pincode=$scope.City_name;
})