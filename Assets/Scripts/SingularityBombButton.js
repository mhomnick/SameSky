#pragma strict

#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;
var singularityDescrip = "Adds a singularity bomb";
var DescripText : GUIText;
//var button211 : GameObject;

var singularityCost : int;
var CostText : GUIText;


function Start(){
	button2Selected = false;
	//button211.SetActive(false);
}

function OnMouseEnter(){
	if (!button2Selected){
		GetComponent.<Renderer>().material.mainTexture = button2Over;
		CostText.enabled = true;
	}
	DescripText.enabled = true;
	GameController.techCost = singularityCost;
	GameController.descripText = singularityDescrip;
}

function OnMouseExit(){
	//if (!button2Selected){
	GetComponent.<Renderer>().material.mainTexture = button2Up;
	//}
	CostText.enabled = false;
	DescripText.enabled = false;
}

function OnMouseDown(){
	if (DestroyByContact.money >= singularityCost){
		GetComponent.<Renderer>().material.mainTexture = button2Down;
		if (!GameController.singularityMissiles){
 			GameController.singularityMissiles = true;
 		}
 		GameController.singularityMissileCount += 1;
 		GameController.techsResearched += 1;
 		if (!button2Selected){
 			GameController.city1TechsResearched += 1;
 		}
 		DestroyByContact.money = DestroyByContact.money - singularityCost;
 		//button211.SetActive(true);
		button2Selected = true;
	}
	GameController.descripText = singularityDescrip;
	GameController.techCost = singularityCost;
}

function OnMouseUp(){
	GetComponent.<Renderer>().material.mainTexture = button2Up;
}