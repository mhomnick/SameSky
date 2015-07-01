#pragma strict

var satShootSpeedCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
//var stoppingPowerButton : UnityEngine.UI.Button;
//var monoReloadButton : UnityEngine.UI.Button;
//var satShootSpeedButton : UnityEngine.UI.Button;
//var atmoPumpButton : UnityEngine.UI.Button;
var disColor : Color;
var enabledColor : Color;

function Update(){ //GetComponent to var
	if (GetComponent(UnityEngine.UI.Button).interactable == false){
		GetComponent(UnityEngine.UI.Image).color = disColor;
	} else {
		GetComponent(UnityEngine.UI.Image).color = enabledColor;
	}
}


function SatShootSpeedHover(){
	infoButtonHead.text = "LASER OVERCLOCKING";
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Increase satellite attack speed.";
			infoButtonCost.text = "$" + satShootSpeedCost;
			break;
		case 2:
			infoButtonDescrip.text = "Increase satellite attack speed. Tier II";
			infoButtonCost.text = "$" + satShootSpeedCost;
			break;
		case 3:
			infoButtonDescrip.text = "Increase satellite attack speed. Tier III";
			infoButtonCost.text = "$" + satShootSpeedCost;
			break;
		case 4:
			infoButtonDescrip.text = "Satellite attack speed maxed out.";
			infoButtonCost.text = "";
			break;
	}
}

function SatShootSpeedButton(){
	if ((DestroyByContact.money >= satShootSpeedCost) && (!buttonSelected)){
		buttonPick += 1;
 		GameController.laserEmissionRate += .5;
 		DestroyByContact.money = DestroyByContact.money - satShootSpeedCost;
 		satShootSpeedCost += satShootSpeedCost;
 		if (buttonPick > 3){
			buttonSelected = true;
		}
		
		//satShootSpeedButton.interactable = true;
		//atmoPumpButton.interactable = true;
	}

	GameController.techCost = satShootSpeedCost;
		
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Increase satellite attack speed.";
			infoButtonCost.text = "$" + satShootSpeedCost;
			break;
		case 2:
			infoButtonDescrip.text = "Increase satellite attack speed. Tier II";
			infoButtonCost.text = "$" + satShootSpeedCost;
			break;
		case 3:
			infoButtonDescrip.text = "Increase satellite attack speed. Tier III";
			infoButtonCost.text = "$" + satShootSpeedCost;
			break;
		case 4:
			infoButtonDescrip.text = "Satellite attack speed maxed out.";
			infoButtonCost.text = "";
			break;
	}
		
}
	
function SatShootSpeedExit(){
}

function SatShootSpeedUp(){
}