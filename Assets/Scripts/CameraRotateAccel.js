#pragma strict

var speed = 0.0;
var accel = 0.0;
var maxSpeed = 50;

function Start(){

}

function Update(){
	//if (!BuildingControl.zoomLab){
	speed = Mathf.Clamp(speed,-maxSpeed,maxSpeed);
	var rotate : float = Input.GetAxis("Horizontal");
	if (!Input.GetAxis("Horizontal")){
		accel = Mathf.Lerp(accel,0,1);
	}
	if (rotate > 0){
		transform.Rotate(0,0,Input.GetAxis("Horizontal")*Time.deltaTime*speed);
		accel = accel + .5;
	}
	if (rotate < 0){
		transform.Rotate(0,0,Input.GetAxis("Horizontal")*Time.deltaTime*-speed);
		accel = accel - .5;
	}
    speed = accel + 1;
    //print(rotate);
}
//}