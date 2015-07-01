#pragma strict

var speed : float;
var rotateSpeed : float;

function Start () {

}

function Update () {
	if (!GameController.isPaused){
		transform.Translate(Vector3.up * Time.deltaTime * speed);
	}
	transform.Rotate(0,Time.deltaTime * rotateSpeed,0);
}




