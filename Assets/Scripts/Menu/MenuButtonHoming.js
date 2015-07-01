#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;
var homingDescrip = "Homing Missiles";
var DescripText : GUIText;
var button211 : GameObject;

var homingCost : int;
var CostText : GUIText;


function Start(){
button2Selected = false;
button211.SetActive(false);
}

function OnMouseEnter(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Over;
CostText.enabled = true;
}
DescripText.enabled = true;
GameController.techCost = homingCost;
GameController.descripText = homingDescrip;
}

function OnMouseExit(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Up;
}
CostText.enabled = false;
DescripText.enabled = false;
}

function OnMouseDown(){
if (DestroyByContact.money >= homingCost){
GetComponent.<Renderer>().material.mainTexture = button2Down;
if (!button2Selected){
 	 GameController.homingMissiles = true;
 	 GameController.techsResearched += 1;
 	 GameController.city1TechsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - homingCost;
 	 button211.SetActive(true);
 	 }
button2Selected = true;
}
GameController.descripText = homingDescrip;
GameController.techCost = homingCost;
}