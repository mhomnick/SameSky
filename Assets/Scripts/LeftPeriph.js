#pragma strict

var leftPeriph : GUITexture;
public static var leftTransparency : float;
var EnemySpawnAudio : AudioSource;

function Start(){
	//leftPeriph.enabled = false;
	leftTransparency = 0.0;
}

function Update(){
	if (leftTransparency > 0){
		leftTransparency -= Time.deltaTime * .7;
	}
	leftPeriph.GetComponent.<Renderer>().material.color.a = leftTransparency;
	leftPeriph.GetComponent.<GUITexture>().color.a = leftTransparency;
}

function OnTriggerEnter(other : Collider){
	if (other.tag == "EnemyShip"){
		leftPeriph.enabled = true;
		leftTransparency = 1.0;
		//play sound
		EnemySpawnAudio.Play();
		yield WaitForSeconds (2);
		//rightPeriph.enabled = false;
	}
}
