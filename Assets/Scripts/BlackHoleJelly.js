#pragma strict

var blackHole : GameObject;
var rotateSpeed : float = 2;

function OnTriggerEnter(other : Collider) {	
	if (other.tag == "BlackHoleCenter"){
		Destroy(gameObject);
	}
}
	
function OnTriggerStay(other:Collider){
	if (other.tag == "BlackHole"){
		blackHole = other.gameObject;
	}
}

function Update(){
	if ((!GameController.isPaused)){
		transform.Translate(Vector3.left * Time.deltaTime * rotateSpeed);
	}
	transform.LookAt(blackHole.transform.position);
	transform.position = Vector3.MoveTowards(transform.position,blackHole.transform.position,Time.deltaTime * .2);
}