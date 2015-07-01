#pragma strict

var asteroidCaptureCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var satReclamationButton : UnityEngine.UI.Button;
var atmoExtendorsButton : UnityEngine.UI.Button;
public static var asteroidCapturing : boolean = true;
var disColor : Color;
var enabledColor : Color;
var captureSatsButton : GameObject;
var captureSatsButtonUI : UnityEngine.UI.Button;

function Update(){
if (GetComponent(UnityEngine.UI.Button).interactable == false){
GetComponent(UnityEngine.UI.Image).color = disColor;
}
else {
GetComponent(UnityEngine.UI.Image).color = enabledColor;
}
}


function AsteroidCaptureHover(){
	infoButtonHead.text = "ASTEROID CAPTURING";
	infoButtonDescrip.text = "Can capture asteroids for salvage.";
	infoButtonCost.text = "$" + asteroidCaptureCost;
}

function AsteroidCaptureButton(){
if ((DestroyByContact.money >= asteroidCaptureCost) && (!buttonSelected)){
	 buttonPick += 1;
 	 asteroidCapturing = true;
 	 captureSatsButtonUI.interactable = true;
 	 if (CannonControl.showMoreCannon){
 	 captureSatsButton.SetActive(true);
 	 }
 	 GameController.techsResearched += 1;
 	 GameController.city1TechsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - asteroidCaptureCost;
 	 asteroidCaptureCost += asteroidCaptureCost;
 if (buttonPick > 5){
		buttonSelected = true;
	}
	}
		if (satReclamationButton.interactable){
		atmoExtendorsButton.interactable = true;
		}
		//monoReloadButton.interactable = true;
		//asteroidCaptureButton.interactable = true;
		GameController.techCost = asteroidCaptureCost;
		infoButtonCost.text = "$" + asteroidCaptureCost;
	}
	
function AsteroidCaptureExit(){
}

function AsteroidCaptureUp(){
infoButtonCost.text = "$" + asteroidCaptureCost;
switch (buttonPick) {
case 1:
//empty circle
break;
case 2:
//quarter filled
break;
case 3:
//half filled
break;
case 4:
//three quarters filled
break;
case 5:
//fully filled
break;
}
}