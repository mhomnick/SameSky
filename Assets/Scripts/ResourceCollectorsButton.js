#pragma strict
#pragma strict

var resourceCollectorsCost : int;
var resourceCollectorsDescrip = "Increase asteroid salvage";
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

var button21 : GameObject;
var button22 : GameObject;

function Start(){
	button2Selected = false;
	//button21.SetActive(false);
	//button22.SetActive(false);
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
	GameController.techCost = resourceCollectorsCost;
	GameController.descripText = resourceCollectorsDescrip;
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
	if ((DestroyByContact.money >= resourceCollectorsCost) && (!button2Selected)){
		buttonPick += 1;
		//button21.SetActive(true);
		//button22.SetActive(true);
		GetComponent.<Renderer>().material.mainTexture = button2Down;
 	 	//AsteroidOrbit.asteroidMass += 200;
 	 	GameController.techsResearched += 1;
 	 	GameController.city2TechsResearched += 1;
 	 	DestroyByContact.money = DestroyByContact.money - resourceCollectorsCost;
 	 	resourceCollectorsCost += resourceCollectorsCost;
 	 	if (buttonPick > 3){
			button2Selected = true;
		}
	}
	GameController.techCost = resourceCollectorsCost;
	GameController.descripText = resourceCollectorsDescrip;
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