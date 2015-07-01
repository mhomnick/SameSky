#pragma strict

var target : Transform;
var dish : GameObject;
var isLooking : boolean;
var laser : ParticleSystem;
var normalRotation : Transform;
var satCollider : CapsuleCollider;
var isClone : boolean;
var script : SatelliteRotator;

//var direction : Vector3;
//var lookRotation : Quaternion;

function Start () {
	laser.enableEmission = false;
	isLooking = false;
	isClone = false;
}

function Update () {
	if (isClone){
		script = GetComponent(SatelliteRotator); 
		script.enabled = false;
	} else {
		script = GetComponent(SatelliteRotator); 
		script.enabled = true;
	}

	satCollider.radius = GameController.satRangeRadius;
	//satCollider.height = GameController.satRangeHeight;
	//satCollider.center = GameController.satRangeCenter;

	if ((GameController.isPaused) && (laser.isPlaying)){
		laser.Pause();
	}

	if ((!GameController.isPaused) && (laser.isPaused)){	
		laser.Play();
	}

	if (isLooking){
		dish.transform.LookAt(target);
		//laser.transform.LookAt(target);
		//direction = (target.position - transform.position).normalized;
		//lookRotation = Quaternion.LookRotation(direction);
		//transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation, Time.deltaTime * 2);
	}
	if (target == null){
		laser.enableEmission = false;
		laser.Clear();
		//dish reset to original position
		//transform.rotation = Quaternion.Slerp(transform.rotation, normalRotation.rotation, Time.deltaTime * .5);
	}
	if (!SatTurboButton.isTurbo){
		laser.emissionRate = GameController.laserEmissionRate;
	}
	if (SatTurboButton.isTurbo){
		laser.emissionRate = GameController.turboEmissionRate;
	}
}

function OnTriggerStay(other : Collider){
	if (target == null){
		if (other.tag == "EnemySat"){
			target = other.transform;
			isLooking = true;
			laser.enableEmission = true;
		}
	}
	if (other.tag == "SatCloneFixer"){
		isClone = true;
	}
}

function OnTriggerExit(other: Collider){
	if (other.tag == "EnemySat"){
		target = null;
	}
}