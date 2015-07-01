#pragma strict

var atmoExtendorsCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
//var asteroidCapturingButton : UnityEngine.UI.Button;
//var atmoExtendorsButton : UnityEngine.UI.Button;
//var atmoPumpButton : UnityEngine.UI.Button;
var disColor : Color;
var enabledColor : Color;

function Update(){
	if (GetComponent(UnityEngine.UI.Button).interactable == false){
		GetComponent(UnityEngine.UI.Image).color = disColor;
	} else {
		GetComponent(UnityEngine.UI.Image).color = enabledColor;
	}
}


function AtmoExtendorsHover(){
	infoButtonHead.text = "ATMO EXTENDORS";
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Increase max atmo size.";
			infoButtonCost.text = "$" + atmoExtendorsCost;
			break;
		case 2:
			infoButtonDescrip.text = "Increase max atmo size. Tier II";
			infoButtonCost.text = "$" + atmoExtendorsCost;
			break;
		case 3:
			infoButtonDescrip.text = "Increase max atmo size. Tier III";
			infoButtonCost.text = "$" + atmoExtendorsCost;
			break;
		case 4:
			infoButtonDescrip.text = "Atmo maxed out.";
			infoButtonCost.text = "";
			break;
	}
}

function AtmoExtendorsButton(){
	if ((DestroyByContact.money >= atmoExtendorsCost) && (!buttonSelected)){
		buttonPick += 1;
 		AtmoHealth.maxAtmo += 500;
 		DestroyByContact.money = DestroyByContact.money - atmoExtendorsCost;
 		atmoExtendorsCost += atmoExtendorsCost;
 		if (buttonPick > 3){
			buttonSelected = true;
		}
		//asteroidCapturingButton.interactable = true;
		//atmoExtendorsButton.interactable = true;
		//atmoPumpButton.interactable = true;
	}
	GameController.techCost = atmoExtendorsCost;
		
	switch (buttonPick) {
		case 1:
			infoButtonDescrip.text = "Increase max atmo size.";
			infoButtonCost.text = "$" + atmoExtendorsCost;
			break;
		case 2:
			infoButtonDescrip.text = "Increase max atmo size. Tier II";
			infoButtonCost.text = "$" + atmoExtendorsCost;
			break;
		case 3:
			infoButtonDescrip.text = "Increase max atmo size. Tier III";
			infoButtonCost.text = "$" + atmoExtendorsCost;
			break;
		case 4:
			infoButtonDescrip.text = "Atmo maxed out.";
			infoButtonCost.text = "";
			break;
	}
		
}
	
function AtmoExtendorsExit(){
}

function AtmoExtendorsUp(){
}