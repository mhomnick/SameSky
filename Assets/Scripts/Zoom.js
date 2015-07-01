#pragma strict

var slowDownSpeed : float;
var speed : float;
public static var accel : float;
public static var decel : float;
public static var maxSpeed : float;
public static var minSpeed : float;
var minZoom : float;
var maxZoom : float;
public static var tiltSpeed : float;
var lookAt : Transform;
var zoomed : Transform;
var start: Transform;
var to : Transform;

function Start(){
	speed = 0;
	maxSpeed = 2.5;
	minSpeed = -2.5;
	accel = 0.2;
	decel = 0.3;
	tiltSpeed = 2.0;
}

function Update(){
	if (!GameController.asteroidRedirect){
		if (!BuildingControl.isZoomed){
			transform.Translate(0,0,Time.deltaTime * speed);
			if (Input.GetKey("s")){
				if ((speed < maxSpeed) && (speed < 0)){
					speed += decel;
				}
				if ((speed < maxSpeed) && (speed >= 0)){
					speed += accel;
				}
			}
			/*if (Input.GetAxis("Mouse ScrollWheel") < 0){
				if ((speed < maxSpeed) && (speed < 0)){
					speed += decel * 25;
				}
				if ((speed < maxSpeed) && (speed >= 0)){
					speed += accel * 25;
				}
			}
			*/
			if ((Input.GetKey("s")) && (transform.position.z > 3.6)){
			speed = Mathf.Lerp(speed,0,Time.deltaTime*slowDownSpeed*3);
			}
			if (Input.GetKey("w")){
				if ((speed > minSpeed) && (speed > 0)){
					speed -= decel;	
				}
				if ((speed > minSpeed) && (speed <= 0)){
					speed -= accel;
				}
			}
			/*if (Input.GetAxis("Mouse ScrollWheel") > 0){
				if ((speed > minSpeed) && (speed > 0)){
					speed -= decel * 25;	
				}
				if ((speed > minSpeed) && (speed <= 0)){
					speed -= accel * 25;
				}
			}
			*/
			if ((Input.GetKey("w")) && (transform.position.z < -1)){
				speed = Mathf.Lerp(speed,0,Time.deltaTime*slowDownSpeed*2);
			}
			if ((!Input.GetKey("s")) && (!Input.GetKey("w"))){
				speed = Mathf.Lerp(speed,0,Time.deltaTime*slowDownSpeed*2);
			}
   			transform.position.z = Mathf.Clamp(transform.position.z, minZoom, maxZoom);
   			if (transform.position.z > 1.2){
   				lookAt.transform.rotation = Quaternion.Lerp(lookAt.transform.rotation,to.rotation,Time.deltaTime * tiltSpeed);
   			}
  			if ((transform.position.z < 1.2) && (transform.position.z > .6)){ 
   				lookAt.transform.rotation = Quaternion.Lerp(lookAt.transform.rotation,start.rotation,Time.deltaTime * tiltSpeed);
   			}
   			if (transform.position.z < .6){
   				lookAt.transform.rotation = Quaternion.Lerp(lookAt.transform.rotation,zoomed.rotation,Time.deltaTime * tiltSpeed);
   			}
   		}
   	}
}