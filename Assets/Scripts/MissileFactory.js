#pragma strict

var missileParticle : ParticleSystem;

function Start (){
	missileParticle.Stop();
}

function MissileUpdate(){
	if ((!GameController.isPaused) && (GameController.missiles < GameController.missileCap)){
		GameController.missiles += 1;
		ResourceController.newMissile = true;
		//missileParticle.Play();
	}
}

InvokeRepeating("MissileUpdate",GameController.missileBuildSpeed,GameController.missileBuildSpeed);