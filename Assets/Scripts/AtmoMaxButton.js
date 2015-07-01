#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;

var atmoMaxCost : int;
var atmoMaxCostDescrip = "Increase max atmo size";
var CostText : GUIText;
var DescripText : GUIText;


function Start(){
	button2Selected = false;
}

function OnMouseEnter(){
	if (!button2Selected){
		GetComponent.<Renderer>().material.mainTexture = button2Over;
		CostText.enabled = true;
		DescripText.enabled = true;
	}
	GameController.techCost = atmoMaxCost;
	GameController.descripText = atmoMaxCostDescrip;
}

function OnMouseExit(){
	if (!button2Selected){
		GetComponent.<Renderer>().material.mainTexture = button2Up;
	}
	CostText.enabled = false;
	DescripText.enabled = false;
}

function OnMouseDown(){
	if (DestroyByContact.money >= atmoMaxCost){
		GetComponent.<Renderer>().material.mainTexture = button2Down;
		if (!button2Selected){
 			AtmoHealth.maxAtmo += 500;
 			GameController.techsResearched += 1;
 			DestroyByContact.money = DestroyByContact.money - atmoMaxCost;
 			atmoMaxCost += atmoMaxCost;
 		}
		//button2Selected = true;
	}
	GameController.techCost = atmoMaxCost;
	GameController.descripText = atmoMaxCostDescrip;
}

function OnMouseUp(){
	GetComponent.<Renderer>().material.mainTexture = button2Over;
}