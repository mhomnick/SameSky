#pragma strict

var satRangeCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var stoppingPowerButton : UnityEngine.UI.Button;
var monoReloadButton : UnityEngine.UI.Button;
//var satRangeButton : UnityEngine.UI.Button;
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


function SatRangeHover(){
	infoButtonHead.text = "ACTIVE PHASED ARRAY";
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Increase satellite range.";
			infoButtonCost.text = "$" + satRangeCost;
			break;
		case 2:
			infoButtonDescrip.text = "Increase satellite range. Tier II";
			infoButtonCost.text = "$" + satRangeCost;
			break;
		case 3:
			infoButtonDescrip.text = "Increase satellite range. Tier III";
			infoButtonCost.text = "$" + satRangeCost;
			break;
		case 4:
			infoButtonDescrip.text = "Satellite range maxed out.";
			infoButtonCost.text = "";
			break;
	}
}

function SatRangeButton(){
	if ((DestroyByContact.money >= satRangeCost) && (!buttonSelected)){
		buttonPick += 1;
 		GameController.satRangeRadius += 2;
 		GameController.satRangeHeight += 4;
 		GameController.satRangeCenter.y += 1.7;
 		DestroyByContact.money = DestroyByContact.money - satRangeCost;
 		satRangeCost += satRangeCost;
 		if (buttonPick > 3){
			buttonSelected = true;
		}
		if (monoReloadButton.interactable){
			stoppingPowerButton.interactable = true;
		}
		//satRangeButton.interactable = true;
		//atmoPumpButton.interactable = true;
	}

	GameController.techCost = satRangeCost;
		
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Increase satellite range.";
			infoButtonCost.text = "$" + satRangeCost;
			break;
		case 2:
			infoButtonDescrip.text = "Increase satellite range. Tier II";
			infoButtonCost.text = "$" + satRangeCost;
			break;
		case 3:
			infoButtonDescrip.text = "Increase satellite range. Tier III";
			infoButtonCost.text = "$" + satRangeCost;
			break;
		case 4:
			infoButtonDescrip.text = "Satellite range maxed out.";
			infoButtonCost.text = "";
			break;
	}
		
}
	
function SatRangeExit(){
}

function SatRangeUp(){
}