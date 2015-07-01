#pragma strict

function SatelliteUpdate(){
	if (!GameController.isPaused){
		GameController.satellites += 1;
	}
}

InvokeRepeating("SatelliteUpdate",GameController.satelliteBuildSpeed,GameController.satelliteBuildSpeed);