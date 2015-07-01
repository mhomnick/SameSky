#pragma strict

function Start () {
	GetComponent.<Animation>().Play("TreeRotate");
	GetComponent.<Animation>()["TreeRotate"].speed = .05;
}
