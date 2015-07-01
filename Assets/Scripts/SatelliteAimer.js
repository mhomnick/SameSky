#pragma strict

public static var wait : float;
public static var shotTimer = 0.0;
var guides : GameObject;

function ShootSatellite(){
	if (CannonControl.isSatellite){
		if (Input.GetKey(KeyCode.Space)){
			//Time.timeScale = .5;
			var newGuides = Instantiate (guides, transform.position, transform.rotation);
			newGuides.transform.parent = GameObject.Find("PivotPoint1").transform;
			shotTimer += Time.deltaTime;
			print(shotTimer);
		} else {
			//Time.timeScale = 1;
			Destroy (GameObject.FindWithTag("Guides"));
		}
		if (Input.GetKeyUp ("space")){
			wait = shotTimer;
			yield WaitForSeconds(wait);
			shotTimer = 0;
		}
	}
}

function Update(){
	ShootSatellite();
}
