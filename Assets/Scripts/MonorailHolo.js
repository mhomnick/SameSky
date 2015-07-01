#pragma strict

var rotateSpeed : float;

function Start() {
	GetComponent.<Renderer>().material.color.a = 0.3;
}



function Update(){
    transform.Rotate(Vector3.up * Time.deltaTime * rotateSpeed);
}