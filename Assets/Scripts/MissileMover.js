#pragma strict

var acceleration : float;
public static var accel : float = .05;
public static var maxSpeed : float;
public static var oldMaxSpeed : float;
var enemy : Transform;
var direction : Vector3;
var lookRotation : Quaternion;
var missileHome : MissileHome;

function Start(){
	missileHome = GetComponentInChildren(MissileHome);
	maxSpeed = 1.7;
}
 
function Update() {
	if ((!GameController.isPaused) && (!GameController.homingMissiles)){
		transform.Translate(0, 0, -acceleration * Time.deltaTime);
		if (acceleration < maxSpeed) {
			acceleration += accel;
		}
	}
	//homing
	if ((!GameController.isPaused) && (GameController.homingMissiles)){
		homing();
	}
}


function homing() {
	enemy = missileHome.enemy;
	if (enemy == null){
		transform.Translate(0, 0, -acceleration * Time.deltaTime);
		if (acceleration < maxSpeed) {
			acceleration += accel;
		}
	}
	if (enemy != null){
		direction = (enemy.transform.position - transform.position).normalized;
		lookRotation = Quaternion.LookRotation(-direction);
		transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation, Time.deltaTime * 2);
		transform.Translate(0, 0, -acceleration * Time.deltaTime);
		if (acceleration < maxSpeed) {
			acceleration += accel;
		}
	}
}

