#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;
var ResearchSound : AudioSource;

var asteroidRedirectCost : int;
var asteroidRedirectCostDescrip = "Capture and pilot asteroids!";
var CostText : GUIText;
var DescripText : GUIText;
public static var asteroidRedirecting : boolean = false;

//var button11 : GameObject;
//var button12 : GameObject;

function Start(){
	button2Selected = false;
	//button11.SetActive(false);
	//button12.SetActive(false);
}

function OnMouseEnter(){
	if (!button2Selected){
		GetComponent.<Renderer>().material.mainTexture = button2Over;
		CostText.enabled = true;
		DescripText.enabled = true;
	}
	GameController.techCost = asteroidRedirectCost;
	GameController.descripText = asteroidRedirectCostDescrip;
}

function OnMouseExit(){
	if (!button2Selected){
		GetComponent.<Renderer>().material.mainTexture = button2Up;
	}
	CostText.enabled = false;
	DescripText.enabled = false;
}

function OnMouseDown(){
	if (DestroyByContact.money >= asteroidRedirectCost){
		//button11.SetActive(true);
		//button12.SetActive(true);
		GetComponent.<Renderer>().material.mainTexture = button2Down;
		if (!button2Selected){
 	 		asteroidRedirecting = true;
 	 		DestroyByContact.money = DestroyByContact.money - asteroidRedirectCost;
 	 		//ResearchSound.Play();
 	 	}
		button2Selected = true;
	}
	GameController.techCost = asteroidRedirectCost;
	GameController.descripText = asteroidRedirectCostDescrip;
}
