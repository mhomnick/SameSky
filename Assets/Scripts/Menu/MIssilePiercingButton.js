#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;

var missilePiercingCost : int;
var CostText : GUIText;



function Start(){
button2Selected = false;
}

function OnMouseEnter(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Over;
CostText.enabled = true;
}
GameController.techCost = missilePiercingCost;
}

function OnMouseExit(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Up;
}
CostText.enabled = false;
}

function OnMouseDown(){
if (DestroyByContact.money >= missilePiercingCost){
GetComponent.<Renderer>().material.mainTexture = button2Down;
if (!button2Selected){
 	 GameController.piercingActive = true;
 	 GameController.techsResearched += 1;
 	 GameController.city1TechsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - missilePiercingCost;
 	 }
button2Selected = true;
}
GameController.techCost = missilePiercingCost;
}