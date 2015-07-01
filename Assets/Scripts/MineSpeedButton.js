#pragma strict

var mineSpeedCost : int;
var mineSpeedDescrip = "Mines make money faster";
var buttonPick : int = 1;
var CostText : GUIText;
var DescripText : GUIText;

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2OVER1 : Texture2D;
var button2OVER2 : Texture2D;
var button2OVER3 : Texture2D;
var button2UP1 : Texture2D;
var button2UP2 : Texture2D;
var button2UP3 : Texture2D;
var button2Selected : boolean;


function Start(){
	button2Selected = false;
}

function OnMouseEnter(){
	switch (buttonPick) {
		case 1:
			GetComponent.<Renderer>().material.mainTexture = button2Over;
			break;
		case 2:
			GetComponent.<Renderer>().material.mainTexture = button2OVER1;
			break;
		case 3:
			GetComponent.<Renderer>().material.mainTexture = button2OVER2;
			break;
		case 4:
			GetComponent.<Renderer>().material.mainTexture = button2OVER3;
			break;
	}
	CostText.enabled = true;
	DescripText.enabled = true;
	GameController.techCost = mineSpeedCost;
	GameController.descripText = mineSpeedDescrip;
}

function OnMouseExit(){
	switch (buttonPick) {
		case 1:
			GetComponent.<Renderer>().material.mainTexture = button2Up;
			break;
		case 2:
			GetComponent.<Renderer>().material.mainTexture = button2UP1;
			break;
		case 3:
			GetComponent.<Renderer>().material.mainTexture = button2UP2;
			break;
		case 4:
			GetComponent.<Renderer>().material.mainTexture = button2UP3;
			break;
	}
	CostText.enabled = false;
	DescripText.enabled = false;
}

function OnMouseDown(){
	if ((DestroyByContact.money >= mineSpeedCost) && (!button2Selected)){
		buttonPick += 1;
		GetComponent.<Renderer>().material.mainTexture = button2Down;
 	 	GameController.mineSpeed -= .75;
 	 	GameController.techsResearched += 1;
 	 	DestroyByContact.money = DestroyByContact.money - mineSpeedCost;
 	 	mineSpeedCost += mineSpeedCost;
 	 	if (buttonPick > 3){
			button2Selected = true;
		}
	}
	GameController.techCost = mineSpeedCost;
	GameController.descripText = mineSpeedDescrip;
}

function OnMouseUp(){
	switch (buttonPick) {
		case 1:
			GetComponent.<Renderer>().material.mainTexture = button2Over;
			break;
		case 2:
			GetComponent.<Renderer>().material.mainTexture = button2OVER1;
			break;
		case 3:
			GetComponent.<Renderer>().material.mainTexture = button2OVER2;
			break;
		case 4:
			GetComponent.<Renderer>().material.mainTexture = button2OVER3;
			break;
	}
}