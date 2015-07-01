#pragma strict

var speed: float = 0.12;
var adjustSpeed : float = .24;
var slowDown : boolean = false;
var targetPosition = Vector3(0, 0, .56);
var pivotTarget : GameObject;
var atmoSplodeLeft : ParticleSystem;
var atmoSplodeRight : ParticleSystem;
var missileExplosion : ParticleSystem;
var isDraining : boolean = false;
var enemyLayer : LayerMask;
var enemyDetector : LayerMask;
var isHitting : boolean = false;
var jellyDestroyed : boolean = false;
var move : boolean = true;
var thisJellySwivel : boolean = false;
var eatingSat : boolean = false;
var swivelNumber : int;
var blackHoleJelly : GameObject;
var blackHole : GameObject;
var killed : boolean = false;
var script : DestroyByContact;
var enemyCollider : GameObject;
var redDot : UnityEngine.UI.Image;
var detected : boolean = false;
var canvas : GameObject;
var dot : UnityEngine.UI.Image;
var isBeingLasered : boolean = false;

	
function Start(){
	enemyCollider = GameObject.Find("EnemyDetector");
	canvas = GameObject.Find("Canvas");
	script = GetComponentInChildren(DestroyByContact);
	swivelNumber = Random.Range(1,3);
	thisJellySwivel = GameController.jellySwivel;
	var number = Random.Range(1,3);
	if (number == 1){
	pivotTarget = GameObject.Find("PivotTargetChild1");
	}
	if (number == 2){
	pivotTarget = GameObject.Find("PivotTargetChild2");
	}
	dot = Instantiate(redDot,Vector3.zero,Quaternion.identity) as UnityEngine.UI.Image;
	dot.transform.SetParent(canvas.transform);
	dot.enabled = false;
}
	
function OnTriggerEnter(other : Collider){
	if (other.tag == "BlackHole"){
		blackHole = other.gameObject;
		killed = true;
		yield WaitForSeconds(3);
		//Destroy(gameObject);
		//script.enabled = false;
	}
	if (other.tag == "BlackHoleCenter"){
		//killed = true;
		//yield WaitForSeconds (1);
		//Destroy(gameObject);
	}
	if (other.tag == "Atmo"){
		slowDown = true;
		//yield WaitForSeconds (5.875);
		gameObject.tag = "EnemyDraining";
		isDraining = true;
	}
	if (other.tag == "Earth"){
		Destroy(gameObject);
	}
	/*if ((other.tag == "OrbitingAsteroidRight") || (other.tag == "OrbitingAsteroidLeft") || (other.tag == "AsteroidRight") || (other.tag == "AsteroidLeft")){
		collider.enabled = false;
		yield WaitForSeconds(15);
		Destroy(gameObject);
	}*/
}
	
function OnTriggerExit(other : Collider){
	if (other.tag == "Atmo"){
		slowDown = false;
		//Move toward receding atmo
		speed = .1;
	}
}
	
function AtmoDrain () {
	if ((!GameController.isPaused) && (isDraining)){
		AtmoHealth.atmoHealth -= 1;
	}
}
	
InvokeRepeating("AtmoDrain",1,1);
	
function Update () {
	PauseCheck();

	if (swivelNumber == 2){
		thisJellySwivel = false;
	}
		
	if (!jellyDestroyed){	
		var step = speed * Time.deltaTime;
	}
	if (jellyDestroyed || isBeingLasered){	
		step = speed * Time.deltaTime/2;
	}
		
	if (!slowDown){
		if (move){
			speed = Mathf.Lerp(speed,.4,Time.deltaTime*1.5);
		}
		if (!move){
			speed = Mathf.Lerp(speed,0,Time.deltaTime*1.5);
		}
	}
		
	//Move toward the center of earth
	if (((!GameController.isPaused) && (!thisJellySwivel)) || ((!GameController.isPaused) && (tag == "EaterEnemyOrient"))){
		transform.position = Vector3.MoveTowards(transform.position, targetPosition, step);
		transform.LookAt(targetPosition);
	}
		
	if (tag != "EaterEnemyOrient"){
		if (thisJellySwivel){
			if (!isDraining){
				if (!GameController.isPaused){
					transform.position = Vector3.MoveTowards(transform.position, pivotTarget.transform.position, step);
				}
				transform.LookAt(pivotTarget.transform.position);
			}
			if ((isDraining) || (jellyDestroyed)){
				thisJellySwivel = false;
			}
		}
	}
		
	//Slow down when hit atmo
	if (gameObject.tag == "EnemyDraining" && speed > 0){
		speed = Mathf.Lerp(speed,0,Time.deltaTime);
	}
		
	var hit : RaycastHit;
	Debug.DrawLine(transform.position,targetPosition);
	if (Physics.Linecast(transform.position, targetPosition,enemyLayer)){
		isHitting = true;
	} else {
		isHitting = false;
	}

	if (Physics.Linecast(transform.position, targetPosition,hit,enemyDetector)){
		//print("Hit at" + hit.point);
		var localPoint : Vector3 = enemyCollider.transform.InverseTransformPoint(hit.point);
		var localPointModified = new Vector3(localPoint.x * -50, localPoint.y * 50, 0);
		//print ("Local point is" + localPointModified);
		detected = true;
		if (dot != null){
			dot.rectTransform.localPosition = localPointModified;
			dot.enabled = true;
			dot.rectTransform.sizeDelta = Vector2.Lerp(dot.rectTransform.sizeDelta,new Vector2(22,22),Time.deltaTime*1.5);
			dot.rectTransform.localScale = Vector3(1,1,1);
		}
	}

	if (isHitting){
		transform.parent = GameObject.Find("EnemyHitPivot").transform;
	} else {
		transform.parent = null;
	}
	JellyDestroyed();
	//if (dotPoint != localPointModified)
}		
		
function FixedUpdate(){		
	if (killed){
		//shrink
		if ((transform.localScale.x > 0) && (transform.localScale.y > 0) && (transform.localScale.z > 0)){
			//transform.localScale -= Vector3(.05,.05,.05);
		}
	}
}
		
function MoveRight(){
	if (!GameController.isPaused){
		transform.parent = GameObject.Find("EnemyHitPivot").transform;
		yield WaitForSeconds(4);
		transform.parent = null;
	}
}

function PauseCheck (){
	if ((GameController.isPaused) && (atmoSplodeLeft.isPlaying)){
		atmoSplodeLeft.Pause();
	}
	if ((!GameController.isPaused) && (atmoSplodeLeft.isPaused)){
		atmoSplodeLeft.Play();
	}
	if ((GameController.isPaused) && (atmoSplodeLeft.isPlaying)){
		atmoSplodeRight.Pause();
	}
	if ((!GameController.isPaused) && (atmoSplodeLeft.isPaused)){
		atmoSplodeRight.Play();
	}
}

function JellyDestroyed(){
	if (jellyDestroyed){
		Destroy(dot);
		yield WaitForSeconds (10);
		Destroy(gameObject);
	}
}

function JellyMove(){
	if (!eatingSat){
		if (move){
			move = false;
		} else {
			move = true;
		}
	}
}

InvokeRepeating("JellyMove",.65,.65);	
		
	
	