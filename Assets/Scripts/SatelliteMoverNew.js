#pragma strict

var satCollider : SphereCollider;
var defenseCollider : CapsuleCollider;
var satelliteGuide : GameObject;
var speed : float;
//var distance : float;
//var guideDistance : float;
//var monorail : GameObject;
var shootForever : boolean;
var target : Vector3;
var isLinked : boolean;
var linkedSatPosition : Transform;
var otherSat : Transform;
var laser : ParticleSystem;
//var timer : float;
var isClone : boolean;
var script: SatelliteRotator;

var satSpawn : Transform;
//var guideToKill : GameObject;

var SatLinkAudio : AudioSource;

var sat : GameObject;

var linkedLaserMat : Material;
var laserMat : Material;

var satSelected : boolean = false;
var atmo : GameObject;

var debrisParticle : ParticleSystem;
var satReclaimed : boolean = false;

function Start(){
	isClone = false;
	shootForever = false;

	//timer = 0.0;

	//print ("Target is " + target);
	target = satelliteGuide.transform.position;

	if (CannonControl.isSatellite2){
		shootForever = true;
	}
	if (SatelliteShootNew.lowerSatZone){
		//shootForever = false;
	}
	isLinked = false;
}

function Update(){
	if (isClone){
		script = GetComponent(SatelliteRotator); 
		script.enabled = false;
	} else {
		script = GetComponent(SatelliteRotator); 
		script.enabled = true;
	}

	//timer += Time.deltaTime;

	if (!shootForever && !isLinked && !isClone /*&& gameObject.tag != "SatelliteStationary"*/){
		gameObject.tag = "SatelliteStationary";
		if (!GameController.isPaused){
			transform.position = Vector3.Lerp(transform.position, target, speed);
		}
	}

	if ((shootForever) || (isClone)){
		if (!GameController.isPaused){
			transform.Translate(Vector3.up * Time.deltaTime * speed * 25);
		}
		laser.enableEmission = false;
	}

	if ((shootForever) && (!isClone)){
		gameObject.tag = "CaptureSat";
		satCollider.radius = 2.5;
		defenseCollider.enabled = false;
		if (!GameController.isPaused){
			transform.Translate(Vector3.up * Time.deltaTime * speed * 20);
		}
		laser.enableEmission = false;
	}

	if (isLinked){
		if (laser.tag != "SatLaserLinked"){
			laser.tag = "SatLaserLinked";
		}
		if (gameObject.tag != "SatelliteStationaryLinked"){
			gameObject.tag = "SatelliteStationaryLinked";
		}
		if (satCollider.radius != 14){
			satCollider.radius = 14;
		}
		laser.GetComponent.<Renderer>().material = linkedLaserMat;
		if (!GameController.isPaused){
			transform.position = Vector3.Lerp(transform.position, otherSat.position, speed);
		}
	}
	SatReclaiming();
}

function OnTriggerEnter(other : Collider){
	if (tag == "SatelliteStationary" && other.tag == "SatelliteStationary"){
		//link up with other satellite
		yield WaitForSeconds (.8);
		isLinked = true;
		otherSat = other.transform;
		SatLinkAudio.Play();
		sat.GetComponent.<Renderer>().material.SetColor("_Color",Color.cyan);
	}
	if (other.tag == "SatCloneFixer"){
		isClone = true;
	}
}

function OnTriggerStay(other : Collider){
	if (other.tag == "Guide"){
		satSelected = true;
	}
	if ((other.tag == "Guide") && (satReclaimed)){
		satCollider.enabled = false;
		satSelected = false;
	}
}

function OnTriggerExit(other : Collider){
	if (other.tag == "Guide"){
		satSelected = false;
	}
	if ((other.tag == "Guide") && (satReclaimed)){
		satCollider.enabled = false;
	}
}

function SatReclaiming(){
	if ((Input.GetKeyDown (KeyCode.H) && (GameController.satSalvage) && (satSelected))){
		satReclaimed = true;
		GameController.activeSatellites -= 1;
		sat.GetComponent.<Renderer>().enabled = false;
		debrisParticle.Play();
		yield WaitForSeconds (10);
		Destroy(gameObject);
	}
}
