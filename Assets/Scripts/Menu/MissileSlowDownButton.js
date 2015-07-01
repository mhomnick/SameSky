#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;

var missileSlowDownCost : int;
var CostText : GUIText;

var button31 : GameObject;


function Start(){
button2Selected = false;
button31.SetActive(false);
}

function OnMouseEnter(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Over;
CostText.enabled = true;
}
GameController.techCost = missileSlowDownCost;
}

function OnMouseExit(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Up;
}
CostText.enabled = false;
}

function OnMouseDown(){
if (DestroyByContact.money >= missileSlowDownCost){
GetComponent.<Renderer>().material.mainTexture = button2Down;
if (!button2Selected){
	 //button31.SetActive(true);
 	 GameController.missileSlowDown = true;
 	 GameController.techsResearched += 1;
 	 GameController.city1TechsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - missileSlowDownCost;
 	 }
button2Selected = true;
}
GameController.techCost = missileSlowDownCost;
}