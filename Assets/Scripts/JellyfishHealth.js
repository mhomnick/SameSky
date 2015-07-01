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
var SatLaserHitAudio : AudioSource;
var isBeingLasered : boolean = false;
var particleHolder : GameObject;
var colliderHolder : GameObject;
var missileSplode : ParticleSystem;
var satSplode : ParticleSystem;
var SplodeAsteroid : ParticleSystem;
var isDestroyed : boolean = false;
var spawnChance : int;
var module : GameObject;
var asteroidLaserDPS : int = 3;


function Start(){
	if (transform.parent.gameObject.tag != "EaterEnemyOrient"){
		health = Random.Range(1,GameController.jellyfishMaxHealth);
	}
	if (transform.parent.gameObject.tag == "EaterEnemyOrient"){
		health = GameController.eaterJellyfishStartHealth;
	}
	isDraining = false;
	isPumping = false;
	onRight = false;
	GetComponent.<Animation>()["LegsAction_002"].speed = .6;
	//print("Jelly Health is " + health);
}

function DestroyJellyMissile(){
	MissileHitAudio.Play();
	yield WaitForSeconds (.05);
	if (health <= 0 && !isDestroyed){
		isDestroyed = true;
		transform.GetComponent.<Collider>().enabled = false;
		if (!isDraining && !isPumping){
			GetComponent.<Animation>()["LegsAction_002"].speed = .3;
		}
		//if (isDraining && !isPumping){
			//animation["Turnaround"].speed = .5;
		//}
		if (isPumping){
			GetComponent.<Animation>()["Pump"].speed = .2;
		}
		missileSplode.Play();
		yield WaitForSeconds (2);
		EnemyKillAudio.Play();
		//spawn module
		spawnChance = Random.Range(1,5);
		//print("module number is " + spawnChance);
		if (spawnChance == 1){
			yield WaitForSeconds (1);
			Instantiate(module,transform.position,transform.rotation);
		} 
		Destroy(gameObject);
	}
}

function DestroyJellySat(){
	yield WaitForSeconds (.05);
	if (health <= 0 && !isDestroyed){
		isDestroyed = true;
		transform.GetComponent.<Collider>().enabled = false;
		if (!isDraining && !isPumping){
			GetComponent.<Animation>()["LegsAction_002"].speed = .3;
		}
		//if (isDraining && !isPumping){
			//animation["Turnaround"].speed = .5;
		//}
		if (isPumping){
			GetComponent.<Animation>()["Pump"].speed = .2;
		}
		satSplode.Play();
		yield WaitForSeconds (2);
		EnemyKillAudio.Play();
		//spawn module
		spawnChance = Random.Range(1,5);
		//print("module number is " + spawnChance);
		if (spawnChance == 1){
			yield WaitForSeconds (1);
			Instantiate(module,transform.position,transform.rotation);
		} 
		Destroy(gameObject);
	}
}

function AsteroidLaserHit(){
	//health -= 50;
	health -= Time.deltaTime*asteroidLaserDPS;
	DestroyJellySat();
}

function Update(){
	if (health <= 0){
		//missileSplode.Play();
		//Destroy(gameObject);
		//play kill sound
		//EnemyKillAudio.Play();
		transform.parent.GetComponent.<Collider>().enabled = false;

		transform.parent.gameObject.tag = "EnemyOrient";
		transform.parent.GetComponent(JellyfishMover).isDraining = false;
		transform.parent.GetComponent(JellyfishMover).jellyDestroyed = true;
	}
	if ((isBeingLasered) && (GameController.laserSlowDown)){
		transform.parent.GetComponent(JellyfishMover).isBeingLasered = true;
	}
}

function OnTriggerEnter(other : Collider) 
{
	if (other.tag == "RightCollider"){
		onRight = true;
	}
	if (other.tag == "Missile"){
		health -= GameController.missileDamage;
		DestroyJellyMissile();
		//MissileHitAudio.Play();
		transform.parent.GetComponent(JellyfishMover).missileExplosion.Play();
		if (GameController.missileSlowDown){
			transform.parent.GetComponent(JellyfishMover).speed -= 0.04;
		}
		if (GameController.piercingActive){
			transform.parent.GetComponent(JellyfishMover).speed -= 0.05;
		}
		if (GameController.missileClusters){
			clusterParticle.Play();
		}
	}
	if ((other.tag == "Atmo") && (!isPumping)){
		var jellyCollider = gameObject.GetComponent(CapsuleCollider);
		var jellySphereCollider = gameObject.GetComponent(SphereCollider);
		isDraining = true;
		//missileExplosion.position = Vector3(0,0,.3);
		GetComponent.<Animation>().Play("TurnAround");
		yield WaitForSeconds (3);
		jellyCollider.center = Vector3(0,6.3,0);
		jellyCollider.height = 6.4;
		//jellySphereCollider.center.y = 7.85;
		particleHolder.transform.localPosition = Vector3(0,0,.36);
		colliderHolder.transform.localPosition = Vector3(0,7.7,0);
		yield WaitForSeconds (2.875);
		isPumping = true;
		GetComponent.<Animation>().Play("Pump");
		GetComponent.<Animation>()["Pump"].speed = 0.5;
		//play sucking animation
	}
	if ((other.tag == "AsteroidRight") || (other.tag == "OrbitingAsteroidRight")){
		//health = 0;
		transform.parent.GetComponent(JellyfishMover).isDraining = false;
		transform.parent.GetComponent.<Collider>().enabled = false;
		transform.GetComponent.<Collider>().enabled = false;
		transform.parent.gameObject.tag = "EnemyOrient";
		//spawn module
		spawnChance = Random.Range(1,5);
		//print("module number is " + spawnChance);
		if (spawnChance == 1){
			yield WaitForSeconds (1);
			Instantiate(module,transform.position,transform.rotation);
		} 
		Destroy(gameObject);
		transform.parent.GetComponent(JellyfishMover).jellyDestroyed = true;
		//play kill sound
		EnemyKillAudio.Play();
		if (onRight){
			atmoSplodeLeft.Play();
			SplodeAsteroid.Play();
			print("ASTEROID HIT");
		}
		if (!onRight){
			atmoSplodeRight.Play();
			SplodeAsteroid.Play();
			print("ASTEROID HIT");
		}
	}
	if ((other.tag == "AsteroidLeft") || (other.tag == "OrbitingAsteroidLeft")){
		//health = 0;
		transform.parent.GetComponent(JellyfishMover).isDraining = false;
		transform.parent.GetComponent.<Collider>().enabled = false;
		transform.GetComponent.<Collider>().enabled = false;
		transform.parent.gameObject.tag = "EnemyOrient";
		//spawn module
		spawnChance = Random.Range(1,5);
		print("module number is " + spawnChance);
		if (spawnChance == 1){
			yield WaitForSeconds (1);
			Instantiate(module,transform.position,transform.rotation);
		} 
		Destroy(gameObject);
		transform.parent.GetComponent(JellyfishMover).jellyDestroyed = true;
		//play kill sound
		EnemyKillAudio.Play();
		if (onRight){
			atmoSplodeRight.Play();
			SplodeAsteroid.Play();;
			print("ASTEROID HIT");
		}
		if (!onRight){
			atmoSplodeLeft.Play();
			SplodeAsteroid.Play();
			print("ASTEROID HIT");
		}
	}
}

function OnTriggerExit(other : Collider){
	if (other.tag == "Atmo"){
		//isDraining = false;
	}
}




