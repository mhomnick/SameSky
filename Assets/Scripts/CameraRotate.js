#pragma strict

public static var speed : float;

function Start(){
	speed = 30;
}
   
function Update(){
    var x=Input.GetAxis("Horizontal")*Time.deltaTime*speed;
    transform.Rotate(0,0,x);
};
