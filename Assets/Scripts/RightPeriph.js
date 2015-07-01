#pragma strict

var rightPeriph : GUITexture;
public static var rightTransparency : float;
var EnemySpawnAudio : AudioSource;

function Start(){
	//rightPeriph.enabled = false;
	rightTransparency = 0.0;
}

function Update(){
	if (rightTransparency > 0){
		rightTransparency -= Time.deltaTime * .7;
	}
	rightPeriph.GetComponent.<Renderer>().material.color.a = rightTransparency;
	rightPeriph.GetComponent.<GUITexture>().color.a = rightTransparency;
}

function OnTriggerEnter(other : Collider){
	if (other.tag == "EnemyShip"){
		rightPeriph.enabled = true;
		rightTransparency = 1.0;
		EnemySpawnAudio.Play();
		yield WaitForSeconds (2);
		//rightPeriph.enabled = false;
	}
}
