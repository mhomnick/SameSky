#pragma strict

var zoomLab : boolean = false;
var isZoomed : boolean = false;

function LabZoom(){

    if (!zoomLab){
    	zoomLab = true;
    	GameController.isPaused = true;
    } else {
    	zoomLab = false;
    	GameController.isPaused = false;
    }
    if (!isZoomed){
		isZoomed = true;
		CameraRotateNew.speed = 0;
    } else {
		isZoomed = false;
	}
}

