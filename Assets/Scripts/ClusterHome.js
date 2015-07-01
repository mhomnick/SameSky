#pragma strict

var acceleration : float;
var accel : float = .05;
var maxSpeed : float;
var enemy : Transform;
var direction : Vector3;
var lookRotation : Quaternion;
//var missileHome : MissileHome;

function Start(){
	//missileHome = GetComponentInChildren(MissileHome);
}
 
function Update() {
	//homing
	if (!GameController.isPaused){
		homing();
	}
}


function homing() {
	if (enemy == null){
		transform.Translate(0, 0, acceleration * Time.deltaTime);
		if (acceleration < maxSpeed) {
			acceleration += accel;
		}
	}
	if (enemy != null){
		direction = (enemy.transform.position - transform.position).normalized;
		lookRotation = Quaternion.LookRotation(direction);
		transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation, Time.deltaTime * 2);
		transform.Translate(0, 0, acceleration * Time.deltaTime);
		if (acceleration < maxSpeed) {
			acceleration += accel;
		}
	}
}

function OnTriggerEnter(other : Collider){
	if (enemy == null){
		if (other.tag == "EnemyShip"){
			enemy = other.transform;
		}
	}
}

