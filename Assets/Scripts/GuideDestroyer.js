#pragma strict

var transparency : float;

function Update (){
	if (transparency >= 0){
		transparency -= Time.deltaTime * .5;
	}
	GetComponent.<Renderer>().material.color.a = transparency;
	if (transparency <= 0){
		Destroy(gameObject);
	}
}

function Start (){
	transparency = 1.0;
}
