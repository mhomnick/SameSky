#pragma strict

var line : LineRenderer;
var target : Transform;
var enemySpotted : boolean = false;
var enemyLine : LayerMask;

function Start () {
	line = gameObject.GetComponent(LineRenderer);
	line.enabled = false;
}


function Update(){
	if (target != null){
		transform.LookAt(target);
		//line.SetPosition(1,Vector3.Lerp(Vector3.zero,Vector3(0,0,10),Time.deltaTime*2));
		var distance = Vector3.Distance(transform.position,target.position);
		line.SetPosition(1,Vector3(0,0,distance*5));
		Debug.DrawLine(transform.position,target.position);
		var hit : RaycastHit;
		if (Physics.Linecast(transform.position, target.position, hit, enemyLine)) {
    		hit.transform.SendMessage("AsteroidLaserHit",SendMessageOptions.DontRequireReceiver);
		}
	}
	if (target == null){
	line.enabled = false;
	}
}

function OnTriggerStay(other : Collider){
	if (target == null){
		if (other.tag == "EnemyShip"){
			target = other.transform;
			//enemySpotted = true;
			line.enabled = true;
		}
	}
}

function OnTriggerExit (other : Collider){
	if (other.tag == "EnemyShip"){
		target = null;
		line.enabled = false;
	}
}