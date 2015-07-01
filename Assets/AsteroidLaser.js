#pragma strict

var target : Transform;
var enemySpotted : boolean = false;
var asteroidLaser : ParticleSystem;

function Update(){
	if (enemySpotted){
		transform.LookAt(target);
	}
}

function OnTriggerStay(other : Collider){
	if (target == null){
		if (other.tag == "EnemySat"){
			target = other.transform;
			enemySpotted = true;
			asteroidLaser.enableEmission = true;
		}
	}
}

function OnTriggerExit (other : Collider){
	if (other.tag == "EnemySat"){
		target == null;						// should be '='?
	}
}