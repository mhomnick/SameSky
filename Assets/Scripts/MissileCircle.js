#pragma strict

var transparency : float = 1;

function Start () {
}

function Update () {
	GetComponent.<Renderer>().material.SetFloat("_Cutoff",transparency);
}