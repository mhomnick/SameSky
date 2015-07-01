#pragma strict

var slowDownSpeed : float;
var speed : float;
var accel : float;
var decel : float;
var maxSpeed : float;
var minSpeed : float;

function Start(){	
	speed = 0;
}

function Update(){
	if (!BuildingControl.isZoomed){
		transform.Rotate(0,0,Time.deltaTime*speed);
		if (Input.GetKey("d")){
			//emit fire particles from left
			if ((speed < maxSpeed) && (speed < 0)){
				speed += decel;
			}
			if ((speed < maxSpeed) && (speed >= 0)){
				speed += accel;
			}
		}
		if (Input.GetKey("a")){
		//emit fire particles from right

			if ((speed > minSpeed) && (speed > 0)){
				speed -= decel;	
			}
			if ((speed > minSpeed) && (speed <= 0)){
				speed -= accel;
			}
		}
		if ((!Input.GetKey("d")) && (!Input.GetKey("a"))){
			speed = Mathf.Lerp(speed,0,Time.deltaTime*slowDownSpeed);
		}
	}
}