#pragma strict

var backgroundSky : GameObject;
var isSky : boolean = false;
var cloudParticle : ParticleSystem;
var cloudSpawn1 : ParticleSystem;
var cloudSpawn2 : ParticleSystem;
var cloudSpawn3 : ParticleSystem;
var cloudSpawn4 : ParticleSystem;
var cloudSpawn5 : ParticleSystem;
var cloudSpawn6 : ParticleSystem;

function Update(){
	if (Camera.main.transform.position.z > 2.8){
		isSky = false;
	}
	if (Camera.main.transform.position.z < 2.8){
		isSky = true;
	}

	if (Camera.main.transform.position.z < 2.8 && Camera.main.transform.position.z > 2.75){
		cloudParticle.Play();
	}

	if (isSky){
		backgroundSky.GetComponent.<Renderer>().enabled = true;
		cloudSpawn1.Play();
		cloudSpawn2.Play();
		cloudSpawn3.Play();
		cloudSpawn4.Play();
		cloudSpawn5.Play();
		cloudSpawn6.Play();
	} else if (!isSky){
		backgroundSky.GetComponent.<Renderer>().enabled = false;
		cloudSpawn1.Clear();
		cloudSpawn2.Clear();
		cloudSpawn3.Clear();
		cloudSpawn4.Clear();
		cloudSpawn5.Clear();
		cloudSpawn6.Clear();
	}
}