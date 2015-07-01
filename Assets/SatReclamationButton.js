#pragma strict

var satReclamationCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var atmoExtendorsButton : UnityEngine.UI.Button;
var asteroidCapturingButton : UnityEngine.UI.Button;
var disColor : Color;
var enabledColor : Color;

function Update(){ //GetComponent to var
	if (GetComponent(UnityEngine.UI.Button).interactable == false){
		GetComponent(UnityEngine.UI.Image).color = disColor;
	} else {
		GetComponent(UnityEngine.UI.Image).color = enabledColor;
	}
}


function SatReclamationHover(){
	infoButtonHead.text = "SATELLITE RECLAMATION";
	if (!buttonSelected){
		infoButtonDescrip.text = "Press H to salvage satellite.";
		infoButtonCost.text = "$" + satReclamationCost;
	}
	if (buttonSelected){
		infoButtonDescrip.text = "Satellite reclamation researched.";
		infoButtonCost.text = "";
	}
}

function SatReclamationButton(){
	if ((DestroyByContact.money >= satReclamationCost) && (!buttonSelected)){
 		GameController.satSalvage = true;
 		DestroyByContact.money = DestroyByContact.money - satReclamationCost;
 		satReclamationCost += satReclamationCost;
		buttonSelected = true;
	}
	if (asteroidCapturingButton.interactable){
		atmoExtendorsButton.interactable = true;
	}
	//monoReloadButton.interactable = true;
	//monoSpeedButton.interactable = true;
	GameController.techCost = satReclamationCost;
	infoButtonDescrip.text = "Satellite reclamation researched.";
	infoButtonCost.text = "";
}
	
function SatReclamationExit(){
}

function SatReclamationUp(){
}