#pragma strict

var slowDownSpeed : float;
public static var speed : float;
public static var accel : float;
public static var decel : float;
public static var oldAccel : float;
public static var oldDecel : float;
public static var maxSpeed : float;
public static var minSpeed : float;
public static var oldMaxSpeed : float;
public static var oldMinSpeed : float;

var thrusterRight : ParticleSystem;
var thrusterLeft : ParticleSystem;

function Start(){	
	speed = 0;
	maxSpeed = 23;
	minSpeed = -23;
	accel = 0.2;
	decel = 0.7;
}

function Update(){
	if (!GameController.asteroidRedirect){
		if (!GameController.isPaused){
			if (!BuildingControl.isZoomed){
				transform.Rotate(0,0,Time.deltaTime*speed);
				if (Input.GetKey("d")){
					//emit fire particles from left
					thrusterLeft.Play();
					thrusterRight.Stop();
					if ((speed < maxSpeed) && (speed < 0)){
						speed += decel;
					}
					if ((speed < maxSpeed) && (speed >= 0)){
						speed += accel;
					}
				}
				if (Input.GetKey("a")){
					//emit fire particles from right
					thrusterRight.Play();
					thrusterLeft.Stop();
					if ((speed > minSpeed) && (speed > 0)){
						speed -= decel;	
					}
					if ((speed > minSpeed) && (speed <= 0)){
						speed -= accel;
					}
				}
				if ((!Input.GetKey("d")) && (!Input.GetKey("a"))){
					speed = Mathf.Lerp(speed,0,Time.deltaTime*slowDownSpeed);
					thrusterLeft.Stop();
					thrusterRight.Stop();
				}
				if ((Input.GetKey("d")) && (Input.GetKey("a"))){
					thrusterLeft.Play();
					thrusterRight.Play();
				}
			}
		}
	}
}