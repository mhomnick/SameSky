#pragma strict

public static var pumpCount : float;
var drainArray : GameObject[];
public static var atmoHealth : float;
public static var atmoDrain : float;
public static var atmoSalvage : float;
var SalvageAudio : AudioSource;
public static var maxAtmo : float;

function Start(){
	atmoSalvage = 3;
	atmoHealth = 1000;
	maxAtmo = 1000;
	pumpCount = 0;
}

function PrintAtmo(){
	print(atmoHealth);
}

//InvokeRepeating("PrintAtmo",1,1);

function Update(){
	//Mathf.Round(atmoHealth);
	drainArray = GameObject.FindGameObjectsWithTag("EnemyDraining");
	atmoDrain = (drainArray.length) * -1;
	//atmoHealth = transform.localScale.x * 100;
}

function FixedUpdate(){
	if (!GameController.isPaused){
		transform.localScale -= Vector3(.000008 * -atmoDrain - pumpCount,.000008 * -atmoDrain - pumpCount,.000008 * -atmoDrain - pumpCount);
	}
}

function OnParticleCollision(other : GameObject){
	DestroyByContact.money += atmoSalvage;
	SalvageAudio.Play();
}


