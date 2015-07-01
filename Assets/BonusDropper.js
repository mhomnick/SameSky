#pragma strict


var bonusObject : GameObject;
var bonusPosAdjust : Transform;




function BonusDrop(){
	if (!GameController.isPaused){
		var number = Random.Range(1,4);
		print ("BONUS:" + number);
		if (number == 1){
 			var posAdjust = Vector3(bonusPosAdjust.position.x, bonusPosAdjust.position.y, bonusPosAdjust.position.z);
        	var spawnPosition = posAdjust + Random.insideUnitCircle.normalized * 2.35;
        	var spawnRotation : Quaternion = Quaternion.identity;
        	Instantiate (bonusObject, spawnPosition, spawnRotation);
        	print ("Spawned Bonus");
		}
	}
}

InvokeRepeating("BonusDrop",15,15);



function Start () {

}

function Update () {

}