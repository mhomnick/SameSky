	#pragma strict

var speed : float = .00001;
var range : float;
var asteroidMass : int;
var atmoHitParticle : ParticleSystem;
var explosion : ParticleSystem;
var atmo : GameObject;
var orbitRange : float;

var spawnPivotLeft : GameObject;
var spawnPivotRight : GameObject;
var spawnPivotLeft2 : GameObject;
var spawnPivotRight2 : GameObject;

//size add on
var isBig : boolean = false;

//shield add on
var shield : GameObject;
var shielded : boolean = false;
var shieldHealth : int = 0;
var newShield : GameObject;

//laser add on
var laser : GameObject;
var laserParticle : GameObject;
var laserCollider : SphereCollider;
var hasLaser : boolean = false;

function Start(){
	atmo = GameObject.Find("Atmo");
	orbitRange = Random.Range(.5,.8);
	spawnPivotLeft = GameObject.Find("SpawnPivotLeft");
	spawnPivotRight = GameObject.Find("SpawnPivot 1");   //?
	spawnPivotLeft2 = GameObject.Find("SpawnPivotLeft2");
	spawnPivotRight2 = GameObject.Find("SpawnPivotRight2");
}

function FixedUpdate(){
	//slowly shrink when in orbit
	if (transform.localScale.x >= .05){
		//transform.localScale -= Vector3(.0005,.0005,.0005) * Time.deltaTime/2;
	}
}

function Update(){
	if (Vector3.Distance(transform.position, Vector3.zero) > (atmo.transform.localScale.x + orbitRange)){
		if (!GameController.isPaused){
			transform.position = Vector3.MoveTowards(transform.position,Vector3.zero,speed * Time.deltaTime);
		}
	}
	if (asteroidMass <= 0){
		Destroy(gameObject);
	}
}

function OnTriggerEnter(other : Collider) {	

	//Thruster add-on//

	if (other.tag == "ThrusterAddOn"){
		if (transform.parent == spawnPivotLeft.transform){
			transform.parent = GameObject.Find("SpawnPivotLeft2").transform;
		} else if (transform.parent == spawnPivotRight.transform){
			transform.parent = GameObject.Find("SpawnPivotRight2").transform;
		} else if (transform.parent == spawnPivotLeft2.transform){
			transform.parent = GameObject.Find("SpawnPivotLeft3").transform;
		} else if (transform.parent == spawnPivotRight2.transform){
			transform.parent = GameObject.Find("SpawnPivotRight3").transform;
		}
		Destroy(other.gameObject);
	}
	
	//Size add-on//
	
	if (other.tag == "SizeAddOn"){
		if (transform.localScale.x <= .3){
			transform.localScale = Vector3(.3,.3,.3);
			//change asteroid laser collider radius to 3.8
			if (laser != null){
				laserCollider.radius = 3.8;
			}
			isBig = true;
			/*transform.localScale.x += .1 * Time.deltaTime;
			transform.localScale.y += .1 * Time.deltaTime;
			transform.localScale.z += .1 * Time.deltaTime;
			*/
		}
		Destroy(other.gameObject);
	}
	
	//Mining add-on//
	
	if (other.tag == "MiningAddOn"){
		Destroy(other.gameObject);
	}
	
	//Shield add-on//
	
	if (other.tag == "ShieldAddOn"){
		if (!shielded){
			newShield = Instantiate(shield,transform.position,transform.rotation);
			newShield.gameObject.transform.parent = gameObject.transform;
			if (isBig){
				newShield.transform.localScale = Vector3(2,2,2);
			}
			asteroidMass += 900;
			shielded = true;
			shieldHealth = 5;
		}
		Destroy(other.gameObject);
	}
	
	//Laser add-on//
	
	if (other.tag == "LaserAddOn"){
		laser = Instantiate(laserParticle,transform.position,transform.rotation);
		laser.gameObject.transform.parent = gameObject.transform;
		laserCollider = laser.transform.GetComponent.<Collider>();
		hasLaser = true;
		Destroy(other.gameObject);
	}

	if (other.tag == "EnemyShip"){
		if (!shielded || !hasLaser){
			asteroidMass -= 150;
		}
		if (shielded && shieldHealth == 1){
			shielded = false;
			Destroy(newShield);
		}
		if (shielded && shieldHealth > 1){
			shieldHealth -= 1;
		}
	}
	if (other.tag == "Missile"){
		//asteroidMass -= 100;
	}

/*if (other.tag == "Atmo"){
	//atmoHitParticle.Play();
	explosion.Play();
	yield WaitForSeconds (5);
	//atmoHitParticle.Stop();
	renderer.enabled = false;
	DestroyByContact.money += asteroidMass;
	yield WaitForSeconds (1);
	Destroy(gameObject);
}*/
	
}