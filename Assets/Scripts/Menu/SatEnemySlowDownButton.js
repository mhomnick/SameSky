#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;
var laserSlowDownDescrip = "Enemies slow when hit";
var DescripText : GUIText;

var laserSlowDownCost : int;
var CostText : GUIText;


function Start(){
button2Selected = false;
}

function OnMouseEnter(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Over;
CostText.enabled = true;
}
DescripText.enabled = true;
GameController.techCost = laserSlowDownCost;
GameController.descripText = laserSlowDownDescrip;
}

function OnMouseExit(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Up;
}
CostText.enabled = false;
DescripText.enabled = false;
}

function OnMouseDown(){
if (DestroyByContact.money >= laserSlowDownCost){
GetComponent.<Renderer>().material.mainTexture = button2Down;
if (!button2Selected){
 	 GameController.laserSlowDown = true;
 	 GameController.techsResearched += 1;
 	 GameController.city2TechsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - laserSlowDownCost;
 	 }
button2Selected = true;
}
GameController.descripText = laserSlowDownDescrip;
GameController.techCost = laserSlowDownCost;
}