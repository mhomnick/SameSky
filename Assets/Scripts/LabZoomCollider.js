#pragma strict

public static var zoomLab2 : boolean = false;

function OnTriggerEnter(other : Collider) {
	if (other.tag == "MainCamera"){
		zoomLab2 = true;
		print(zoomLab2);
	}
}