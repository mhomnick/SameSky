#pragma strict

var stoppingPowerCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var disColor : Color;
var enabledColor : Color;

function Update(){ //GetComponent to var
	if (GetComponent(UnityEngine.UI.Button).interactable == false){
		GetComponent(UnityEngine.UI.Image).color = disColor;
	} else {
	GetComponent(UnityEngine.UI.Image).color = enabledColor;
	}
}


function StoppingPowerHover(){
	infoButtonHead.text = "PIERCING LASERS";
	if (!buttonSelected){
		infoButtonDescrip.text = "Lasers slow down aliens.";
		infoButtonCost.text = "$" + stoppingPowerCost;
	}
	if (buttonSelected){
		infoButtonDescrip.text = "Piercing lasers researched.";
		infoButtonCost.text = "";
	}
}

function StoppingPowerButton(){
	if ((DestroyByContact.money >= stoppingPowerCost) && (!buttonSelected)){
		buttonPick += 1;
 		GameController.laserSlowDown = true;
 		DestroyByContact.money = DestroyByContact.money - stoppingPowerCost;
 		stoppingPowerCost += stoppingPowerCost;
		buttonSelected = true;
	}
	//monoReloadButton.interactable = true;
	//monoSpeedButton.interactable = true;
	GameController.techCost = stoppingPowerCost;
	infoButtonDescrip.text = "Piercing lasers researched.";
	infoButtonCost.text = "";
}
	
function StoppingPowerExit(){
}

function StoppingPowerUp(){
}