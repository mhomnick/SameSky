#pragma strict

var horizSpeed : float;
var accel : float;
var decel : float;
var maxHorizSpeed : float;
var minHorizSpeed : float;
var slowDownSpeed : float;

var vertSpeed : float;
var maxVertSpeed : float;
var minVertSpeed : float;

var asteroidHealth : int = 4;
var timer : float = 0.0;

var cameraPosition : GameObject;


function OnTriggerEnter(other:Collider){
	if (other.tag == "EnemyShip"){
		asteroidHealth -= 1;
	}
	if (other.tag == "Atmo"){
		GameController.asteroidRedirect = false;
		Destroy(gameObject);
	}
}

function Update(){

	timer += Time.deltaTime;

	if ((asteroidHealth <= 0) || (timer > 20)){  
		GameController.asteroidRedirect = false;
		Destroy(gameObject);
	}

	if (GameController.asteroidRedirect){
		transform.Translate(Time.deltaTime*horizSpeed,0,0,Space.World);
		transform.Translate(0,Time.deltaTime*vertSpeed,0,Space.World);

		if (Input.GetKey("a")){
			if ((horizSpeed < maxHorizSpeed) && (horizSpeed < 0)){
				horizSpeed += decel;
			}
			if ((horizSpeed < maxHorizSpeed) && (horizSpeed >= 0)){
				horizSpeed += accel;
			}
		}

		if (Input.GetKey("d")){
			if ((horizSpeed > minHorizSpeed) && (horizSpeed > 0)){
				horizSpeed -= decel;	
			}
			if ((horizSpeed > minHorizSpeed) && (horizSpeed <= 0)){
				horizSpeed -= accel;
			}
		}

		if (Input.GetKey("w")){
			if ((vertSpeed < maxVertSpeed) && (vertSpeed < 0)){
				vertSpeed += decel;
			}
			if ((horizSpeed < maxVertSpeed) && (vertSpeed >= 0)){
				vertSpeed += accel;
			}
		}

		if (Input.GetKey("s")){
			if ((vertSpeed > minVertSpeed) && (vertSpeed > 0)){
				vertSpeed -= decel;	
			}
			if ((vertSpeed > minVertSpeed) && (vertSpeed <= 0)){
				vertSpeed -= accel;
			}
		}

		if ((!Input.GetKey("d")) && (!Input.GetKey("a"))){
			horizSpeed = Mathf.Lerp(horizSpeed,0,Time.deltaTime*slowDownSpeed);
			vertSpeed = Mathf.Lerp(vertSpeed,0,Time.deltaTime*slowDownSpeed);
		}
		Camera.main.transform.LookAt(transform);
		Camera.main.transform.position = Vector3.Lerp(Camera.main.transform.position,cameraPosition.transform.position,Time.deltaTime * 5);
		//Camera.main.transform.position = cameraPosition.transform.position;
	}
}