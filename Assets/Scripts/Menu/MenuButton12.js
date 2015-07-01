#pragma strict

var button12Up : Texture2D;
var button12Down : Texture2D;
var button12Over : Texture2D;
var button12Selected : boolean;

var monoThruster1 : GameObject;
var monoThruster2 : GameObject;
var monoMaterial : Material;


function Start(){
button12Selected = false;
}

function OnMouseEnter(){
if (!button12Selected){
GetComponent.<Renderer>().material.mainTexture = button12Over;
}
monoThruster1.GetComponent.<Renderer>().material.color = Color.red;
monoThruster2.GetComponent.<Renderer>().material.color = Color.red;
}

function OnMouseExit(){
if (!button12Selected){
GetComponent.<Renderer>().material.mainTexture = button12Up;
}
monoThruster1.GetComponent.<Renderer>().material = monoMaterial;
monoThruster2.GetComponent.<Renderer>().material = monoMaterial;	
}

function OnMouseDown(){
if (DestroyByContact.money >= 100){
GetComponent.<Renderer>().material.mainTexture = button12Down;
if (!button12Selected){
 	CameraRotateNew.maxSpeed += 5;
 	CameraRotateNew.minSpeed -= 5;
 	DestroyByContact.money = DestroyByContact.money -100;
}
button12Selected = true;
}
}
