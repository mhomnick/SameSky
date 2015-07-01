#pragma strict

var speed : float;

function Update(){
    transform.Rotate(Vector3.left * Time.deltaTime * speed);
}