#pragma strict

var satSalvageCost : int;
var satSalvageDescrip = "Press H to salvage sats";
var CostText : GUIText;
var DescripText : GUIText;

var button1Up : Texture2D;
var button1Down : Texture2D;
var button1Over : Texture2D;
var button1Selected : boolean;

//var button11 : GameObject;
//var button12 : GameObject;


function Start(){
button1Selected = false;
}

function OnMouseEnter(){
if (!button1Selected){
GetComponent.<Renderer>().material.mainTexture = button1Over;
CostText.enabled = true;
DescripText.enabled = true;
}
GameController.techCost = satSalvageCost;
GameController.descripText = satSalvageDescrip;
}

function OnMouseExit(){
if (!button1Selected){
GetComponent.<Renderer>().material.mainTexture = button1Up;
}
CostText.enabled = false;
DescripText.enabled = false;
}

function OnMouseDown(){
if (DestroyByContact.money >= satSalvageCost){
GetComponent.<Renderer>().material.mainTexture = button1Down;
if (!button1Selected){
 	 GameController.satSalvage = true;
 	 GameController.techsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - satSalvageCost;
 	 }
button1Selected = true;
}
GameController.techCost = satSalvageCost;
GameController.descripText = satSalvageDescrip;
}