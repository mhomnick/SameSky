#pragma strict

var atmoPumpsCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var disColor : Color;
var enabledColor : Color;
var atmoPumpButton : GameObject;
var atmoPumpButtonUI : UnityEngine.UI.Button;

function Update(){
if (GetComponent(UnityEngine.UI.Button).interactable == false){
GetComponent(UnityEngine.UI.Image).color = disColor;
}
else {
GetComponent(UnityEngine.UI.Image).color = enabledColor;
}
}


function AtmoPumpsHover(){
	infoButtonHead.text = "ENGINEERING";
	if (!buttonSelected){
	infoButtonDescrip.text = "Can build atmo pumps.";
	infoButtonCost.text = "$" + atmoPumpsCost;
	}
	if (buttonSelected){
	infoButtonDescrip.text = "Atmo pumps researched.";
	infoButtonCost.text = "";
	}
}

function AtmoPumpsButton(){
if ((DestroyByContact.money >= atmoPumpsCost) && (!buttonSelected)){
	buttonPick += 1;
 	GameController.atmoPumps = true;
 	atmoPumpButtonUI.interactable = true;
 	if (BuildingControl.showMoreBuildings){
 	atmoPumpButton.SetActive(true);
 	}
 	DestroyByContact.money = DestroyByContact.money - atmoPumpsCost;
 	atmoPumpsCost += atmoPumpsCost;
		buttonSelected = true;
	}
		//monoReloadButton.interactable = true;
		//monoSpeedButton.interactable = true;
		GameController.techCost = atmoPumpsCost;
		infoButtonDescrip.text = "Atmo pumps researched.";
		infoButtonCost.text = "";
	}
	
function AtmoPumpsExit(){
}

function AtmoPumpsUp(){
}