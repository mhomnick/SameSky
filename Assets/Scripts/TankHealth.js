#pragma strict

var health : float;
var isDraining : boolean;
var isPumping : boolean;
var atmoSplodeLeft : ParticleSystem;
var atmoSplodeRight : ParticleSystem;
var clusterParticle : ParticleSystem;
var onRight : boolean;
var EnemyKillAudio : AudioSource;
var MissileHitAudio : AudioSource;
var isBeingLasered : boolean = false;
var tankSplode : ParticleSystem;
var tankSatSplode : ParticleSystem;
var tankSplodeAsteroid : ParticleSystem;
var isDestroyed : boolean = false;



function Start(){
	health = Random.Range(80,GameController.tankMaxHealth);
	isDraining = false;
	isPumping = false;
	onRight = false;
	print("Tank Health is " + health);
}

function DestroyTank(){
	MissileHitAudio.Play();
	yield WaitForSeconds (.05);
	if (health <= 0 && !isDestroyed){
		isDestroyed = true;
		transform.parent.GetComponent(TankMover).speed = 0.05;
		transform.GetComponent.<Collider>().enabled = false;
	if (!isDraining && !isPumping){
		GetComponent.<Animation>()["TankTentacles"].speed = .8;
	}
	//if (isDraining && !isPumping){
	//animation["Turnaround"].speed = .5;
	//}
	//if (isPumping){
	//animation["Pump"].speed = .2;
	//}
	tankSplode.Play();
	yield WaitForSeconds (2.2);
	EnemyKillAudio.Play();
	Destroy(gameObject);
	Destroy(transform.parent.GetComponent(TankMover).dot);
	}
}

function AsteroidLaserHit(){
	//health -= 50;
	health -= Time.deltaTime*3;
	DestroyTank();
}

function Update(){
	if (health <= 0){
		//Destroy(gameObject);
		//play kill sound
		//EnemyKillAudio.Play();
		//atmoSplodeLeft.Play();
		transform.parent.GetComponent.<Collider>().enabled = false;
		transform.parent.gameObject.tag = "EnemyOrient";
		transform.parent.GetComponent(TankMover).isDraining = false;
	}
	if ((isBeingLasered) && (GameController.laserSlowDown)){
		transform.parent.GetComponent(TankMover).speed = 0.05;
	}
}

function OnTriggerEnter(other : Collider) {
	if (other.tag == "RightCollider"){
		onRight = true;
	}
	if (other.tag == "Missile"){
		health -= GameController.missileDamage;
		DestroyTank();
		//MissileHitAudio.Play();
		transform.parent.GetComponent(TankMover).missileExplosion.Play();
		if (GameController.missileSlowDown){
			transform.parent.GetComponent(TankMover).speed -= 0.02;
		}
		if (GameController.piercingActive){
			transform.parent.GetComponent(TankMover).speed -= 0.03;
		}
		if (GameController.missileClusters){
			clusterParticle.Play();
		}
	}
	if ((other.tag == "Atmo") && (!isPumping)){
		isDraining = true;
		//animation.Play("TurnAround");
		yield WaitForSeconds (5.875);
		//jellyCollider.center = Vector3(0,9.1,0);
		isPumping = true;
		//animation.Play("Pump");
		//animation["Pump"].speed = 0.5;
		//play sucking animation
	}
	if ((other.tag == "AsteroidRight") || (other.tag == "OrbitingAsteroidRight")){
		//health = 0;
		Destroy(transform.parent.GetComponent(TankMover).dot);
		transform.parent.GetComponent.<Collider>().enabled = false;
		transform.parent.gameObject.tag = "EnemyOrient";
		Destroy(gameObject);
		//play kill sound
		EnemyKillAudio.Play();
		if (onRight){
			atmoSplodeLeft.Play();
			tankSplodeAsteroid.Play();
			//transform.parent.GetComponent(TankMover).missileExplosion.Play();
			print("ASTEROID HIT");
		}
		if (!onRight){
			atmoSplodeRight.Play();
			tankSplodeAsteroid.Play();
			//transform.parent.GetComponent(TankMover).missileExplosion.Play();
			print("ASTEROID HIT");
		}
	}
	if ((other.tag == "AsteroidLeft") || (other.tag == "OrbitingAsteroidLeft")){
		//health = 0;
		Destroy(transform.parent.GetComponent(TankMover).dot);
		transform.parent.GetComponent.<Collider>().enabled = false;
		transform.parent.gameObject.tag = "EnemyOrient";
		Destroy(gameObject);
		//play kill sound
		EnemyKillAudio.Play();
		if (onRight){
			atmoSplodeRight.Play();
			tankSplodeAsteroid.Play();
			//transform.parent.GetComponent(TankMover).missileExplosion.Play();
			print("ASTEROID HIT");
		}
		if (!onRight){
			atmoSplodeLeft.Play();
			tankSplodeAsteroid.Play();
			//transform.parent.GetComponent(TankMover).missileExplosion.Play();
			print("ASTEROID HIT");
		}
	}
}
