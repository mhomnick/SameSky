#pragma strict

var speed : float;
var rotateSpeed : float;
var targetPosition : Vector3;
var pingPongSpeed : float;
var isDraining : boolean;

function Start () {
	transform.LookAt(targetPosition);
	isDraining = false;
}

function Update () {
		
	//Move towards the center of the earth
	if (!GameController.isPaused){
		transform.position = Vector3.MoveTowards(transform.position, targetPosition, speed*Time.deltaTime);
	}
		
	//Slow down when hit atmo
	if (gameObject.tag == "EnemyDraining" && speed > 0){
		speed = Mathf.Lerp(speed,0,Time.deltaTime);
	}
		
	transform.Rotate(0,0,rotateSpeed*Time.deltaTime);
		
	//ping pong between -30 and 30
	rotateSpeed = Mathf.PingPong(Time.time*pingPongSpeed,60) -30;
}

function AtmoDrain () {
	if ((!GameController.isPaused) && (isDraining)){
		AtmoHealth.atmoHealth -= 1;
	}
}
	
InvokeRepeating("AtmoDrain",1,1);

function OnTriggerEnter(other : Collider){
	if (other.tag == "Atmo"){
		gameObject.tag = "EnemyDraining";
		isDraining = true;
	}
}
	
function OnTriggerExit(other : Collider){
	//Move toward receding atmo
	if (other.tag == "Atmo"){
		speed = .1;
	}
}