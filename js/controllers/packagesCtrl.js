angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){
	
	
	$scope.citiesArray = mainSrv.travelInfo;
	
	
	
})