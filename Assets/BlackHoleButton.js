#pragma strict

var blackHoleCost : int;
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
	} else {
		GetComponent(UnityEngine.UI.Image).color = enabledColor;
	}
}


function BlackHoleHover(){
	infoButtonHead.text = "SINGULARITY BOMBS";
	if (!buttonSelected){
		infoButtonDescrip.text = "Create black holes with missiles.";
		infoButtonCost.text = "$" + blackHoleCost;
	}
	if (buttonSelected){
		infoButtonDescrip.text = "Singularity bombs researched.";
		infoButtonCost.text = "";
	}
}

function BlackHoleButton(){
	if ((DestroyByContact.money >= blackHoleCost) && (!buttonSelected)){
 		if (!GameController.singularityMissiles){
 	 		GameController.singularityMissiles = true;
 	 	}
 		GameController.singularityMissileCount += 1;
 		DestroyByContact.money = DestroyByContact.money - blackHoleCost;
 		blackHoleCost += blackHoleCost;
		buttonSelected = true;
	}
	//monoReloadButton.interactable = true;
	//monoSpeedButton.interactable = true;
	GameController.techCost = blackHoleCost;
	infoButtonDescrip.text = "Singularity bombs researched.";
	infoButtonCost.text = "";
}
	
function BlackHoleExit(){
}

function BlackHoleUp(){
}