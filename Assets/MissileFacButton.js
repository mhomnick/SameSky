#pragma strict

var missileFacUpgradeCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
//var asteroidCapturingButton : UnityEngine.UI.Button;
//var missileFacUpgradeButton : UnityEngine.UI.Button;
var disColor : Color;
var enabledColor : Color;

function Update(){  //assign GetComponent to var to reduce calls
	if (GetComponent(UnityEngine.UI.Button).interactable == false){
		GetComponent(UnityEngine.UI.Image).color = disColor;
	} else {
		GetComponent(UnityEngine.UI.Image).color = enabledColor;
	}
}


function MissileFacUpgradeHover(){
	infoButtonHead.text = "MISSILE MATERIALS";
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Missiles produced faster.";
			infoButtonCost.text = "$" + missileFacUpgradeCost;
			break;
		case 2:
			infoButtonDescrip.text = "Missiles produced faster. Tier II";
			infoButtonCost.text = "$" + missileFacUpgradeCost;
			break;
		case 3:
			infoButtonDescrip.text = "Missiles produced faster. Tier III";
			infoButtonCost.text = "$" + missileFacUpgradeCost;
			break;
		case 4:
			infoButtonDescrip.text = "Missile production maxed out.";
			infoButtonCost.text = "";
			break;
	}
}

function MissileFacUpgradeButton(){
	if ((DestroyByContact.money >= missileFacUpgradeCost) && (!buttonSelected)){
		buttonPick += 1;
 		GameController.missileBuildSpeed -= 3;
 		DestroyByContact.money = DestroyByContact.money - missileFacUpgradeCost;
 		missileFacUpgradeCost += missileFacUpgradeCost;
 		if (buttonPick > 3){
			buttonSelected = true;
		}
		//These buttons are activated
		
		//asteroidCapturingButton.interactable = true;
		//missileFacUpgradeButton.interactable = true;
		//atmoPumpButton.interactable = true;
	}

	GameController.techCost = missileFacUpgradeCost;
		
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Missiles produced faster.";
			infoButtonCost.text = "$" + missileFacUpgradeCost;
			break;
		case 2:
			infoButtonDescrip.text = "Missiles produced faster. Tier II";
			infoButtonCost.text = "$" + missileFacUpgradeCost;
			break;
		case 3:
			infoButtonDescrip.text = "Missiles produced faster. Tier III";
			infoButtonCost.text = "$" + missileFacUpgradeCost;
			break;
		case 4:
			infoButtonDescrip.text = "Missile production maxed out.";
			infoButtonCost.text = "";
			break;
	}
		
}
	
function MissileFacUpgradeExit(){
}

function MissileFacUpgradeUp(){
}