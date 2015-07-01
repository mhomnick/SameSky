#pragma strict

var speed : float;

function Update(){
    transform.Rotate(Vector3.back * Time.deltaTime * speed);
}