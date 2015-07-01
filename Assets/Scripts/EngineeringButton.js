#pragma strict

var engineeringCost : int;
var engineeringDescrip = "Can build mines";
var CostText : GUIText;
var DescripText : GUIText;

var button1Up : Texture2D;
var button1Down : Texture2D;
var button1Over : Texture2D;
var button1Selected : boolean;

var button11 : GameObject;
var button12 : GameObject;


function Start(){
	button1Selected = false;
	button11.SetActive(false);
	button12.SetActive(false);
}

function OnMouseEnter(){
	if (!button1Selected){
		GetComponent.<Renderer>().material.mainTexture = button1Over;
		CostText.enabled = true;
		DescripText.enabled = true;
	}
	GameController.techCost = engineeringCost;
	GameController.descripText = engineeringDescrip;
}

function OnMouseExit(){
	if (!button1Selected){
		GetComponent.<Renderer>().material.mainTexture = button1Up;
	}
	CostText.enabled = false;
	DescripText.enabled = false;
}

function OnMouseDown(){
	if (DestroyByContact.money >= engineeringCost){
		GetComponent.<Renderer>().material.mainTexture = button1Down;
		button11.SetActive(true);
		button12.SetActive(true);
		if (!button1Selected){
 			GameController.canBuildMines = true;
 			GameController.techsResearched += 1;
 			DestroyByContact.money = DestroyByContact.money - engineeringCost;
 		}
		button1Selected = true;
	}
	GameController.techCost = engineeringCost;
	GameController.descripText = engineeringDescrip;
}