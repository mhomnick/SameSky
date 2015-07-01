#pragma strict

var jelly : GameObject;

function DestroyJellySat(){
	yield WaitForSeconds (.05);
	if (transform.parent.GetComponent(JellyfishHealth).health <= 0 && !transform.parent.GetComponent(JellyfishHealth).isDestroyed){
		transform.parent.GetComponent(JellyfishHealth).isDestroyed = true;
		transform.GetComponent.<Collider>().enabled = false;
		if (!transform.parent.GetComponent(JellyfishHealth).isDraining && !transform.parent.GetComponent(JellyfishHealth).isPumping){
			jelly.GetComponent.<Animation>()["LegsAction_002"].speed = .8;
		}
		transform.parent.GetComponent(JellyfishHealth).satSplode.Play();
		yield WaitForSeconds (2);
		transform.parent.GetComponent(JellyfishHealth).EnemyKillAudio.Play();
		Destroy(jelly);
	}
}

function OnParticleCollision(other : GameObject){
	if (other.tag == "SatLaser"){
		transform.parent.GetComponent(JellyfishHealth).health -= GameController.satDamage;
		DestroyJellySat();
		if (!transform.parent.GetComponent(JellyfishHealth).isBeingLasered){
			transform.parent.GetComponent(JellyfishHealth).isBeingLasered = true;
		}
	}
	if (other.tag == "SatLaserLinked"){
		transform.parent.GetComponent(JellyfishHealth).health -= GameController.satDamage * 1.5;
		DestroyJellySat();
		if (!transform.parent.GetComponent(JellyfishHealth).isBeingLasered){
			transform.parent.GetComponent(JellyfishHealth).isBeingLasered = true;
		}
		//SatLaserHitAudio.Play();
		//audio
	}
	if (other.tag == "AsteroidLaser"){
		transform.parent.GetComponent(JellyfishHealth).health -= 100;
		DestroyJellySat();
	}
	if (other.tag == "Cluster"){
		transform.parent.GetComponent(JellyfishHealth).health -= GameController.clusterDamage;
		DestroyJellySat();
		//print("CLUSTER HIT");
	}
}