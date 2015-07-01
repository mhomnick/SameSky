#pragma strict

var innerSatelliteZone : GameObject;
var outerSatelliteZone : GameObject;
var satelliteGuide : GameObject;
var guideStart : Transform;
public static var lowerSatZone : boolean;
public static var upperSatZone : boolean;

function Start (){
	//satelliteGuide.renderer.enabled = false;
	lowerSatZone = true;
	satelliteGuide.GetComponent.<Renderer>().enabled = true;
	innerSatelliteZone.GetComponent.<Renderer>().enabled = false;
	outerSatelliteZone.GetComponent.<Renderer>().enabled = false;
	innerSatelliteZone.GetComponent.<Renderer>().material.color.a = 0.4;
	outerSatelliteZone.GetComponent.<Renderer>().material.color.a = 0.4;
	satelliteGuide.GetComponent.<Renderer>().material.color.a = 0.5;
	//Back and forth
}

function Update (){
	if (CannonControl.isSatellite){
		//show the semi-transparent satellite zones
		//show the semi-transparent satellite projection
		if (innerSatelliteZone.GetComponent.<Renderer>().enabled == true){
		}
		if (Input.GetAxis ("Mouse Y")>.1){
			//highlight top satellite zone
			//print("up");
			//outerSatelliteZone.renderer.enabled = true;
			innerSatelliteZone.GetComponent.<Renderer>().enabled = false;
			//satelliteGuide.renderer.enabled = false;
			//upperSatZone = true;
			//lowerSatZone = false;
			//satellite shoots forever
		}
		if (Input.GetAxis ("Mouse Y")<-.1){
			//highlight bottomn satellite zone
			//print("down");
			//innerSatelliteZone.renderer.enabled = true;
			outerSatelliteZone.GetComponent.<Renderer>().enabled = false;
			satelliteGuide.GetComponent.<Renderer>().enabled = true;
			//upperSatZone = false;
			lowerSatZone = true;
			//satellite stops where the guide satellite is
		}
	}
	if (CannonControl.isMissile){
		outerSatelliteZone.GetComponent.<Renderer>().enabled = false;
		innerSatelliteZone.GetComponent.<Renderer>().enabled = false;
	}
	if (!CannonControl.isSatellite){
		satelliteGuide.GetComponent.<Renderer>().enabled = false;
	} else {
		satelliteGuide.GetComponent.<Renderer>().enabled = true;
	}
}





