#pragma strict

var missileReloadCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var satRangeButton : UnityEngine.UI.Button;
var stoppingPowerButton : UnityEngine.UI.Button;
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


function MissileReloadHover(){
	infoButtonHead.text = "PNEUMATIC ACCELORATORS";
	switch (buttonPick) {
	case 1:
	infoButtonDescrip.text = "Increase reload speed.";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 2:
	//quarter filled
	infoButtonDescrip.text = "Increase reload speed. Tier II";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 3:
	//half filled
	infoButtonDescrip.text = "Increase reload speed. Tier III";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 4:
	//three quarters filled
	infoButtonDescrip.text = "Increase reload speed. Tier IV";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 5:
	//fully filled
	infoButtonDescrip.text = "Increase reload speed. Tier V";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 6:
	infoButtonDescrip.text = "Reload speed maxed out.";
	infoButtonCost.text = "";
	break;
}
}

function MissileReloadButton(){
if ((DestroyByContact.money >= missileReloadCost) && (!buttonSelected)){
	buttonPick += 1;
 	 GameController.missileTimerMax -= 1.5;
 	 TimeDilationButton.oldMissileTimerMax -= 1.5;
 	 GameController.reloadSpeed += 1;
 	 TimeDilationButton.oldReloadSpeed += 1;
 	 GameController.techsResearched += 1;
 	 GameController.city1TechsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - missileReloadCost;
 	 missileReloadCost += missileReloadCost;
 if (buttonPick > 5){
		buttonSelected = true;
	}
	
		if (satRangeButton.interactable){
		stoppingPowerButton.interactable = true;
		}
	
	}
		GameController.techCost = missileReloadCost;
	
	switch (buttonPick) {
	case 1:
	infoButtonDescrip.text = "Increase reload speed.";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 2:
	//quarter filled
	infoButtonDescrip.text = "Increase reload speed. Tier II";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 3:
	//half filled
	infoButtonDescrip.text = "Increase reload speed. Tier III";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 4:
	//three quarters filled
	infoButtonDescrip.text = "Increase reload speed. Tier IV";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 5:
	//fully filled
	infoButtonDescrip.text = "Increase reload speed. Tier V";
	infoButtonCost.text = "$" + missileReloadCost;
	break;
	case 6:
	infoButtonDescrip.text = "Reload speed maxed out.";
	infoButtonCost.text = "";
	break;
}

	}
	
function MissileReloadExit(){
}

function MissileReloadUp(){
}