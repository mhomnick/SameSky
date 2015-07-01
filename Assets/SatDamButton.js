#pragma strict

var satDamCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var satRangeButton : UnityEngine.UI.Button;
var satShootSpeedButton : UnityEngine.UI.Button;
var satReclamationButton : UnityEngine.UI.Button;
var disColor : Color;
var enabledColor : Color;

function Update(){  //GetComponents to var
	if (GetComponent(UnityEngine.UI.Button).interactable == false){
		GetComponent(UnityEngine.UI.Image).color = disColor;
	} else {
	GetComponent(UnityEngine.UI.Image).color = enabledColor;
	}
}



function SatDamHover(){
	infoButtonHead.text = "ELECTROMAGNETIC RESONATORS";
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Increase satellite damage.";
			break;
		case 2:
			//quarter filled
			infoButtonDescrip.text = "Increase satellite damage. Tier II";
			break;
		case 3:
			//half filled
			infoButtonDescrip.text = "Increase satellite damage. Tier III";
			break;
		case 4:
			//three quarters filled
			infoButtonDescrip.text = "Increase satellite damage. Tier IV";
			break;
		case 5:
			//fully filled
			infoButtonDescrip.text = "Increase satellite damage. Tier V";
			break;
		case 6:
			infoButtonDescrip.text = "Satellite damage maxed out.";
			break;
	}
	infoButtonCost.text = "$" + satDamCost;
}

function SatDamButton(){
	if ((DestroyByContact.money >= satDamCost) && (!buttonSelected)){
		buttonPick += 1;
 		GameController.satDamage += .5;
 		GameController.techsResearched += 1;
 		GameController.city1TechsResearched += 1;
 		DestroyByContact.money = DestroyByContact.money - satDamCost;
 		satDamCost += satDamCost;
 		if (buttonPick > 5){
			buttonSelected = true;
		}
		//These buttons are activated
		satRangeButton.interactable = true;
		satShootSpeedButton.interactable = true;
		satReclamationButton.interactable = true;
	}

	GameController.techCost = satDamCost;
		
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Increase satellite damage.";
			infoButtonCost.text = "$" + satDamCost;
			break;
		case 2:
			//quarter filled
			infoButtonDescrip.text = "Increase satellite damage. Tier II";
			infoButtonCost.text = "$" + satDamCost;
			break;
		case 3:
			//half filled
			infoButtonDescrip.text = "Increase satellite damage. Tier III";
			infoButtonCost.text = "$" + satDamCost;
			break;
		case 4:
			//three quarters filled
			infoButtonDescrip.text = "Increase satellite damage. Tier IV";
			infoButtonCost.text = "$" + satDamCost;
			break;
		case 5:
			//fully filled
			infoButtonDescrip.text = "Increase satellite damage. Tier V";
			infoButtonCost.text = "$" + satDamCost;
			break;
		case 6:
			infoButtonDescrip.text = "Satellite damage maxed out.";
			infoButtonCost.text = "";
			break;
	}

}
	
function SatDamExit(){
}

function SatDamUp(){
}