#pragma strict

var speed : float;

function Update () {
	if (!GameController.isPaused){
		transform.Translate(Vector3.up * Time.deltaTime * speed * 20);
	}
}