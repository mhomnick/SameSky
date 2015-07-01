#pragma strict

var fireworks : GameObject;
var city1FireworksLocation : Transform;
public static var wasZoomed : boolean = false;
var earth : GameObject;



function Start(){
	BuildingControl.zoomLabMore1 = false;
}

function OnTriggerEnter(other : Collider){
	if (other.tag == "LabZoom2City1"){
		if (!BuildingControl.zoomLabMore1){
			BuildingControl.zoomLabMore1 = true;
			//wasZoomed = true;
			print("ZOOMED MUTHAFUCKA");
		}
	}
	if ((other.tag == "CameraPosition") && (wasZoomed)){
		earth.GetComponent.<Animation>()["Earth Doors"].speed = -1;
		earth.GetComponent.<Animation>()["Earth Doors"].time = earth.GetComponent.<Animation>()["Earth Doors"].length;
		earth.GetComponent.<Animation>().Play("Earth Doors");
		wasZoomed = false;
		//yield WaitForSeconds (4);
		//Destroy(fireworks.gameObject);
	}

	//City animations

	/////////////City 1////////////////

	if ((other.tag == "CameraPosition") && (GameController.city1Build1)){
		Instantiate(fireworks,city1FireworksLocation.position,city1FireworksLocation.rotation);
		GameController.city1Build1 = false;
	}
}

function OnTriggerExit(other:Collider){
	if (other.tag == "CameraPosition"){
		wasZoomed = true;
	}
}



