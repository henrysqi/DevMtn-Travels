angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $state){
	
	
	$scope.getCity = function(){
		for (var i = 0; i < mainSrv.travelInfo.length; i++){
			if (Number($state.params.id) === Number(mainSrv.travelInfo[i].id)){
				$scope.currentCity = mainSrv.travelInfo[i];
			}
		}
	}
	
	$scope.getCity();
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
})