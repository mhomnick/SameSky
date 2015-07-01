#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;

var carbonCost : int;
var carbonCostDescrip = "Instantly add 50 to atmosphere";
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
	GameController.techCost = carbonCost;
	GameController.descripText = carbonCostDescrip;
}

function OnMouseExit(){
	if (!button2Selected){
		GetComponent.<Renderer>().material.mainTexture = button2Up;
	}
	CostText.enabled = false;
	DescripText.enabled = false;
}

function OnMouseDown(){
	if (DestroyByContact.money >= carbonCost){
		GetComponent.<Renderer>().material.mainTexture = button2Down;
		if (!button2Selected){
 	 		//AtmoHealth.atmoHealth += 15;
 	 		//GameController.techsResearched += 1;
 	 		DestroyByContact.money = DestroyByContact.money - carbonCost;
 	 	}
		//button2Selected = true;
	}
	GameController.techCost = carbonCost;
	GameController.descripText = carbonCostDescrip;
}

function OnMouseUp(){
	GetComponent.<Renderer>().material.mainTexture = button2Over;
}