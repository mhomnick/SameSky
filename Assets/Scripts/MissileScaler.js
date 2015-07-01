#pragma strict

var time : float = 0.0;


function Start () {

}

function FixedUpdate () {
	if (time < .4){
		transform.localScale.x += .0007;
	}
	if (time < .4){
		transform.localScale.y += .0001;
	}
	if (time < .4){
		transform.localScale.z += .0001;
	}
}

function Update(){
	time += Time.deltaTime;
}