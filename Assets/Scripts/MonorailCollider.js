#pragma strict

var bonusGrab : AudioSource;

public static var cityNumber : int;

function OnTriggerEnter(other : Collider) {	
	if (other.tag == "Bonus"){
		if (GameController.missiles < GameController.missileCap){
			GameController.missiles += 1;
			ResourceController.newMissile = true;
		}
		bonusGrab.Play();
		Destroy(other.gameObject);
	}

	if (other.tag == "Module"){
		//increase modules
		GameController.modules += 1;
		ResourceController.newModule = true;
		bonusGrab.Play();
		Destroy(other.gameObject);
	}

	if (other.tag == "City1"){
		cityNumber = 1;
	}
	if (other.tag == "City2"){
		cityNumber = 2;
	}
	if (other.tag == "City3"){
		cityNumber = 3;
	}
	if (other.tag == "City4"){
		cityNumber = 4;
	}
}
	
function OnTriggerExit(other : Collider){
	if (other.tag == "City1"){
		cityNumber = 0;
	}
	if (other.tag == "City2"){
		cityNumber = 0;
	}
	if (other.tag == "City3"){
		cityNumber = 0;
	}
	if (other.tag == "City4"){
		cityNumber = 0;
	}
}
	
function OnTriggerStay(other : Collider){
	if (other.tag == "BottomCollider"){
		GameController.onBottom = true;
		//print("ON BOTTOM");
	} else {
		GameController.onBottom = false;
	}
}

