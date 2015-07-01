#pragma strict

	var speed: float;
	var targetPosition = Vector3(0, 0, .56);
	var atmoSplodeLeft : ParticleSystem;
	var atmoSplodeRight : ParticleSystem;
	var isDraining : boolean;
	var enemyLayer : LayerMask;
	var enemyDetector : LayerMask;
	var isHitting : boolean = false;
	var missileExplosion : ParticleSystem;
	var enemyCollider : GameObject;
	var tankDot : UnityEngine.UI.Image;
	var detected : boolean = false;
	var canvas : GameObject;
	var dot : UnityEngine.UI.Image;
	var tankDestroyed : boolean = false;
	//var lr : LineRenderer;
	
	
function Start(){
	transform.LookAt(targetPosition);
	enemyCollider = GameObject.Find("EnemyDetector");
	canvas = GameObject.Find("Canvas");
	speed = 0.2;
	isDraining = false;
	dot = Instantiate(tankDot,Vector3.zero,Quaternion.identity) as UnityEngine.UI.Image;
	dot.transform.SetParent(canvas.transform);
	dot.enabled = false;
	//lr = GetComponent(LineRenderer);
}
	
function OnTriggerEnter(other : Collider){
	if (other.tag == "Atmo"){
		gameObject.tag = "EnemyDraining";
		isDraining = true;
	}
}
	
function OnTriggerExit(other : Collider){
	if (other.tag == "Atmo"){
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

	//Move towards the center of the earth
	if (!GameController.isPaused){
		transform.position = Vector3.MoveTowards(transform.position, targetPosition, speed*Time.deltaTime);
	}
		
	//Slow down when hit atmo
	if (gameObject.tag == "EnemyDraining" && speed > 0){
		speed = Mathf.Lerp(speed,0,Time.deltaTime);
	}
		
	var hit : RaycastHit;
	Debug.DrawLine(transform.position,Vector3.zero);
	if (Physics.Linecast(transform.position, Vector3.zero,hit,enemyLayer)){
		isHitting = true;
	} else {
		isHitting = false;
	}

	if (Physics.Linecast(transform.position, targetPosition,hit,enemyDetector)){
		var localPoint : Vector3 = enemyCollider.transform.InverseTransformPoint(hit.point);
		var localPointModified = new Vector3(localPoint.x * -50, localPoint.y * 50, 0);
		detected = true;
		if (dot != null){
			dot.rectTransform.localPosition = localPointModified;
			dot.enabled = true;
			dot.rectTransform.sizeDelta = Vector2.Lerp(dot.rectTransform.sizeDelta,new Vector2(40,40),Time.deltaTime*1.5);
			dot.rectTransform.localScale = Vector3(1,1,1);
		}
	}

	if (isHitting){
		transform.parent = GameObject.Find("EnemyHitPivot").transform;
	} else {
		transform.parent = null;
	}
}
		
function MoveRight(){
	if (!GameController.isPaused){
		transform.parent = GameObject.Find("EnemyHitPivot").transform;
		yield WaitForSeconds(4);
		transform.parent = null;
	}
}	
	