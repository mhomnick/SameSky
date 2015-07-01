#pragma strict

var speed : float;

function Start () {

}

function Update () {
	ModuleDrop();
}

function ModuleDrop(){
	//yield WaitForSeconds (1);
	if (speed < 0.5 && Vector3.Distance(transform.position, Vector3(0,0,.45)) > 3){
		speed += Time.deltaTime * .22;
	}
	if (Vector3.Distance(transform.position, Vector3.zero) > 2.35){
		transform.position = Vector3.MoveTowards(transform.position,Vector3.zero,speed*Time.deltaTime);
	}
	if (Vector3.Distance(transform.position, Vector3.zero) < 3 && speed >= 0){
		speed -= Time.deltaTime * .23;
	}
}