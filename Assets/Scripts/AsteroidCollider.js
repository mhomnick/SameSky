#pragma strict

var rotateLeft : boolean;
var spawnPivot : GameObject;
var asteroidOrbiting : GameObject;
var asteroidDriving : GameObject;
var debrisParticle : ParticleSystem;
var asteroidCollider : SphereCollider;
var explosionParticle : ParticleSystem;




function OnTriggerEnter(other : Collider){	
	if (other.tag == "AsteroidSpawn"){
		gameObject.tag = "AsteroidLeft";
		rotateLeft = true;
	}
	if (other.tag == "CaptureSat") {
		Destroy(other.gameObject);
		Destroy(gameObject);
		var newAsteroid = Instantiate (asteroidOrbiting, transform.position, transform.rotation) as GameObject;
		newAsteroid.transform.localScale = transform.localScale;
		if (!rotateLeft){
			newAsteroid.transform.parent = GameObject.Find("SpawnPivot 1").transform;
			newAsteroid.tag = "OrbitingAsteroidRight";
		}
		if (rotateLeft){
			newAsteroid.transform.parent = GameObject.Find("SpawnPivotLeft").transform;
			newAsteroid.tag = "OrbitingAsteroidLeft";
		}
	}
	if (other.tag == "SatelliteRedirect"){
		GameController.asteroidRedirect = true;
		Destroy(other.gameObject);
		Destroy(gameObject);
		var newRedirectAsteroid = Instantiate (asteroidDriving,transform.position,asteroidDriving.transform.rotation) as GameObject;
	}
	if (other.tag == "Missile"){
		debrisParticle.Play();
		explosionParticle.Play();
		transform.GetComponent.<Renderer>().enabled = false;
		asteroidCollider.enabled = false;
		GetComponent(AsteroidMover).asteroidSpeed = .2;
		GetComponent(AsteroidRotator).speed = 0;
		yield WaitForSeconds (10);
		Destroy(gameObject);
	}
}