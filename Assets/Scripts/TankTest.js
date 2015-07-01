#pragma strict

var speed : float;

function Start () {
	GetComponent.<Animation>().Play("TankTentacles");
	GetComponent.<Animation>()["TankTentacles"].speed = 2;
}

function Update(){
	transform.Rotate(0,0,Time.deltaTime*speed);
}
