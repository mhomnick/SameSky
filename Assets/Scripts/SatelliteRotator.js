#pragma strict

var speed : float;

function Update(){
    transform.Rotate(Vector3.up * Time.deltaTime * speed);
}