#pragma strict

var missileHomingCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var disColor : Color;
var enabledColor : Color;

function Update(){
if (GetComponent(UnityEngine.UI.Button).interactable == false){
GetComponent(UnityEngine.UI.Image).color = disColor;
}
else {
GetComponent(UnityEngine.UI.Image).color = enabledColor;
}
}


function MissileHomingHover(){
	infoButtonHead.text = "MISSILE HOMING";
	if (!buttonSelected){
	infoButtonDescrip.text = "Missiles home on targets.";
	infoButtonCost.text = "$" + missileHomingCost;
	}
	if (buttonSelected){
	infoButtonDescrip.text = "Homing researched.";
	infoButtonCost.text = "";
	}
}

function MissileHomingButton(){
if ((DestroyByContact.money >= missileHomingCost) && (!buttonSelected)){
 	GameController.homingMissiles = true;
 	DestroyByContact.money = DestroyByContact.money - missileHomingCost;
 	missileHomingCost += missileHomingCost;
		buttonSelected = true;
	}
		//monoReloadButton.interactable = true;
		//monoSpeedButton.interactable = true;
		GameController.techCost = missileHomingCost;
		infoButtonDescrip.text = "Homing researched.";
		infoButtonCost.text = "";
	}
	
function MissileHomingExit(){
}

function MissileHomingUp(){
}