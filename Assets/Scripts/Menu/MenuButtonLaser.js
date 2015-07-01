#pragma strict

var button3Up : Texture2D;
var button3Down : Texture2D;
var button3Over : Texture2D;
var button3Selected : boolean;


function Start(){
button3Selected = false;
}

function OnMouseEnter(){
if (!button3Selected){
GetComponent.<Renderer>().material.mainTexture = button3Over;
}
}

function OnMouseExit(){
if (!button3Selected){
GetComponent.<Renderer>().material.mainTexture = button3Up;
}
}

function OnMouseDown(){
if (DestroyByContact.money >= 100){
GetComponent.<Renderer>().material.mainTexture = button3Down;
if (!button3Selected){
	LaserSight.laserActive = true;
	GameController.techsResearched += 1;
	DestroyByContact.money = DestroyByContact.money -100;
	}
button3Selected = true;
}
}