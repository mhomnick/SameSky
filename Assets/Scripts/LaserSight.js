#pragma strict

public static var laserActive : boolean = false;
private var lr : LineRenderer;

function Start(){
	lr = GetComponent(LineRenderer);
}

function Update(){
	if ((laserActive) && (CannonControl.isMissile)){
		GetComponent(LineRenderer).enabled = true;
		var hit : RaycastHit; 
		if (Physics.Raycast(transform.position, transform.up, hit)){
			if (hit.collider){
				lr.SetPosition(1,new Vector3(0,hit.distance,0));
			} else {
				lr.SetPosition(1,new Vector3(0,5000,0));
			}
		}
	}
	if ((!laserActive) || (CannonControl.isSatellite)){
		GetComponent(LineRenderer).enabled = false;
	}
}