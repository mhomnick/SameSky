#pragma strict

var asteroidSpeed = .2;
var startPosition : Vector3;
var blackHole : GameObject;
var killed : boolean = false;
var scale : float;

function Awake(){
	//startPosition = transform.position;
}

function Start(){
	scale = Random.Range(.1,.14);
	transform.localScale = Vector3(scale,scale,scale);
}

function FixedUpdate(){
	//if (!killed){
	if ((!GameController.isPaused)){
		transform.Translate(Vector3.left * Time.deltaTime * asteroidSpeed);
	}
	if ((blackHole != null) && (!GameController.isPaused)){
		/*var relativePos = blackHole.transform.position - transform.position;
		var rotation = Quaternion.LookRotation(relativePos);
		transform.rotation = Quaternion.Slerp(transform.rotation,rotation,Time.deltaTime);
		*/
		transform.LookAt(blackHole.transform.position);
		if (gameObject.tag == "AsteroidRight"){
			asteroidSpeed = Mathf.Lerp(asteroidSpeed,-2,Time.deltaTime);
		}
		if (gameObject.tag == "AsteroidLeft"){
			asteroidSpeed = Mathf.Lerp(asteroidSpeed,2,Time.deltaTime);
		}
		transform.position = Vector3.MoveTowards(transform.position,blackHole.transform.position,Time.deltaTime * .25);
	}
	//}
	if (killed){
		//shrink
		if ((transform.localScale.x > 0) && (transform.localScale.y > 0) && (transform.localScale.z > 0)){
		transform.localScale -= Vector3(.003,.003,.003);
		}
	}
}

function OnTriggerEnter(other : Collider) {	
	if (other.tag == "BlackHole"){
		blackHole = other.gameObject;
	}
	if (other.tag == "BlackHoleCenter"){
		killed = true;
		yield WaitForSeconds (1);
		Destroy(gameObject);
	}
}