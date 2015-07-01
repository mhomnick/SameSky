#pragma strict

var rotateSpeed : float;

function Update(){
	if (!GameController.isPaused){
		transform.Rotate(0,0,Time.deltaTime * rotateSpeed);
	}
}