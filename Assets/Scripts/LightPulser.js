#pragma strict

var star : GameObject;

var duration : float= 1.0;

function Update() {
	// argument for cosine
	var phi : float = Time.time / duration * 2 * Mathf.PI;
	// get cosine and transform from -1..1 to 0..1 range
	var amplitude : float = Mathf.Cos( phi ) * 1 + 1;
	var transparency : float = Mathf.Cos( phi ) * 1 + 1;
	// set light color
	GetComponent.<Light>().intensity = amplitude;
	//star.renderer.material.color.a = transparency;
}