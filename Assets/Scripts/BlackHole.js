#pragma strict

var isSucking : boolean = false;
var otherObject : GameObject;
var direction : Vector3;
var lookRotation : Quaternion;
var timer : float = 0;
var BHParticle : ParticleSystem;
var blackHoleLife : int;

function OnTriggerEnter(other:Collider){
	if (otherObject == null){
		if ((other.tag == "Missile") || (other.tag == "SatBH") || (other.tag == "EnemyOrient") || (other.tag == "EnemyDraining")){
			otherObject = other.gameObject;
			isSucking = true;
			yield WaitForSeconds (2);
			if (otherObject.gameObject.tag == "SatBH"){
				GameController.activeSatellites -= 1;
				Destroy(other.transform.parent.gameObject);
			}
			Destroy(other.gameObject);
		}
	}
}

function Update(){
	if (!GameController.isPaused){
		timer += Time.deltaTime;
		if (timer > blackHoleLife){
			if (BHParticle.emissionRate >= 0){
				BHParticle.emissionRate -= Time.deltaTime * 30;
			}
		}
		if (BHParticle.emissionRate <= 0){
			Destroy(gameObject);
		}
	}
}


function FixedUpdate(){

	if ((isSucking) && (otherObject != null)){
		direction = (transform.position - otherObject.transform.position).normalized;
		if (otherObject.gameObject.tag != "Missile"){
			lookRotation = Quaternion.LookRotation(direction);
		}
		if (otherObject.gameObject.tag == "Missile"){
			lookRotation = Quaternion.LookRotation(-direction);
		}
		otherObject.transform.rotation = Quaternion.Slerp(otherObject.transform.rotation, lookRotation, Time.deltaTime * 2);
		//otherObject.transform.LookAt(transform.position);
		//otherObject.transform.Translate(Vector3.right * Time.deltaTime * .2);
		if ((otherObject.gameObject.tag == "SatBH") || (otherObject.gameObject.tag == "EnemyOrient") || (otherObject.gameObject.tag == "EnemyDraining")){
			otherObject.transform.position = Vector3.Lerp(otherObject.transform.position,transform.position,Time.deltaTime);
		}
		if (otherObject.gameObject.tag != "EnemyOrient"){
			if (otherObject.transform.localScale.x > 0){
				otherObject.transform.localScale.x -= .001;
			}
			if (otherObject.transform.localScale.y > 0){
				otherObject.transform.localScale.y -= .001;
			}
			if (otherObject.transform.localScale.z > 0){
				otherObject.transform.localScale.z -= .001;
			}
		}
		if ((otherObject.gameObject.tag == "EnemyOrient") || (otherObject.gameObject.tag == "EnemyDraining")){
			if (otherObject.transform.localScale.x > 0){
				otherObject.transform.localScale.x -= .05;
			}
			if (otherObject.transform.localScale.y > 0){
				otherObject.transform.localScale.y -= .05;
			}
			if (otherObject.transform.localScale.z > 0){
				otherObject.transform.localScale.z -= .05;
			}
		}
	}
}