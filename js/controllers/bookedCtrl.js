angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainService, $state){
	

for (var i = 0; i < mainService.travelInfo.length; i++){
	if (mainService.travelInfo[i].id === $state.params.id){
	  $scope.currentCity = mainService.travelInfo[i];
	}
}	
	
	
	
	
})