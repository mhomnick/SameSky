#pragma strict

var tank : GameObject;

function DestroyTankSat(){
	yield WaitForSeconds (.05);
	if (transform.parent.GetComponent(TankHealth).health <= 0 && !transform.parent.GetComponent(TankHealth).isDestroyed){
		transform.parent.GetComponent(TankHealth).isDestroyed = true;
		transform.parent.GetComponent(TankMover).speed = 0.05;
		print("KILLED");
		transform.GetComponent.<Collider>().enabled = false;
		if (!transform.parent.GetComponent(TankHealth).isDraining && !transform.parent.GetComponent(TankHealth).isPumping){
			tank.GetComponent.<Animation>()["TankTentacles"].speed = .8;
		}
		transform.parent.GetComponent(TankHealth).tankSatSplode.Play();
		yield WaitForSeconds (4);
		transform.parent.GetComponent(TankHealth).EnemyKillAudio.Play();
		Destroy(tank);
	}
}

function OnParticleCollision(other : GameObject){
	if (other.tag == "SatLaser"){
		transform.parent.GetComponent(TankHealth).health -= GameController.satDamage;
		DestroyTankSat();
		if (!transform.parent.GetComponent(TankHealth).isBeingLasered){
			transform.parent.GetComponent(TankHealth).isBeingLasered = true;
		}
	}
	if (other.tag == "SatLaserLinked"){
		transform.parent.GetComponent(TankHealth).health -= GameController.satDamage * 1.5;
		DestroyTankSat();
		if (!transform.parent.GetComponent(TankHealth).isBeingLasered){
			transform.parent.GetComponent(TankHealth).isBeingLasered = true;
		}
		//SatLaserHitAudio.Play();
		//audio
	}
	if (other.tag == "AsteroidLaser"){
		transform.parent.GetComponent(TankHealth).health -= 100;
		DestroyTankSat();
	}
	if (other.tag == "Cluster"){
		transform.parent.GetComponent(TankHealth).health -= GameController.clusterDamage;
		DestroyTankSat();
		//print("CLUSTER HIT");
	}
}