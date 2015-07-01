#pragma strict

var missileDamCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var monoReloadButton : UnityEngine.UI.Button;
var monoSpeedButton : UnityEngine.UI.Button;
var monoHomingButton : UnityEngine.UI.Button;
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



function MissileDamHover(){
	infoButtonHead.text = "IMPROVED ARMS";
	switch (buttonPick) {
	case 1:
	infoButtonDescrip.text = "Increase missile damage.";
	break;
	case 2:
	//quarter filled
	infoButtonDescrip.text = "Increase missile damage. Tier II";
	break;
	case 3:
	//half filled
	infoButtonDescrip.text = "Increase missile damage. Tier III";
	break;
	case 4:
	//three quarters filled
	infoButtonDescrip.text = "Increase missile damage. Tier IV";
	break;
	case 5:
	//fully filled
	infoButtonDescrip.text = "Increase missile damage. Tier V";
	break;
	case 6:
	infoButtonDescrip.text = "Missile damage maxed out.";
	break;
}
	infoButtonCost.text = "$" + missileDamCost;
}

function MissileDamButton(){
if ((DestroyByContact.money >= missileDamCost) && (!buttonSelected)){
	buttonPick += 1;
 	GameController.missileDamage += 25;
 	GameController.techsResearched += 1;
 	GameController.city1TechsResearched += 1;
 	DestroyByContact.money = DestroyByContact.money - missileDamCost;
 	missileDamCost += missileDamCost;
 if (buttonPick > 5){
		buttonSelected = true;
	}
		monoReloadButton.interactable = true;
		monoSpeedButton.interactable = true;
		monoHomingButton.interactable = true;
	}
		GameController.techCost = missileDamCost;
		
	switch (buttonPick) {
	case 1:
	infoButtonDescrip.text = "Increase missile damage.";
	infoButtonCost.text = "$" + missileDamCost;
	break;
	case 2:
	//quarter filled
	infoButtonDescrip.text = "Increase missile damage. Tier II";
	infoButtonCost.text = "$" + missileDamCost;
	break;
	case 3:
	//half filled
	infoButtonDescrip.text = "Increase missile damage. Tier III";
	infoButtonCost.text = "$" + missileDamCost;
	break;
	case 4:
	//three quarters filled
	infoButtonDescrip.text = "Increase missile damage. Tier IV";
	infoButtonCost.text = "$" + missileDamCost;
	break;
	case 5:
	//fully filled
	infoButtonDescrip.text = "Increase missile damage. Tier V";
	infoButtonCost.text = "$" + missileDamCost;
	break;
	case 6:
	infoButtonDescrip.text = "Missile damage maxed out.";
	infoButtonCost.text = "";
	break;
}

	}
	
function MissileDamExit(){
}

function MissileDamUp(){
}