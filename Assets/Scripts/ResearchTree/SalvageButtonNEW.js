#pragma strict

var salvageCost : int;
var buttonSelected : boolean = false;
var buttonPick : int = 1;
var infoButtonCost : UnityEngine.UI.Text;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var asteroidCapturingButton : UnityEngine.UI.Button;
//var salvageButton : UnityEngine.UI.Button;
var atmoPumpButton : UnityEngine.UI.Button;
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


function SalvageHover(){
	infoButtonHead.text = "BETTER SALVAGE";
	switch (buttonPick) {
	case 1:
	infoButtonDescrip.text = "Increase salvage money.";
	infoButtonCost.text = "$" + salvageCost;
	break;
	case 2:
	infoButtonDescrip.text = "Increase salvage money. Tier II";
	infoButtonCost.text = "$" + salvageCost;
	break;
	case 3:
	infoButtonDescrip.text = "Increase salvage money. Tier III";
	infoButtonCost.text = "$" + salvageCost;
	break;
	case 4:
	infoButtonDescrip.text = "Salvage maxed out";
	infoButtonCost.text = "";
	break;
}
}

function SalvageButton(){
if ((DestroyByContact.money >= salvageCost) && (!buttonSelected)){
	buttonPick += 1;
 	AtmoHealth.atmoSalvage += 1;
 	DestroyByContact.money = DestroyByContact.money - salvageCost;
 	salvageCost += salvageCost;
 if (buttonPick > 3){
		buttonSelected = true;
	}
		asteroidCapturingButton.interactable = true;
		//salvageButton.interactable = true;
		atmoPumpButton.interactable = true;
	}
		GameController.techCost = salvageCost;
		
	switch (buttonPick) {
	case 1:
	infoButtonDescrip.text = "Increase salvage money.";
	infoButtonCost.text = "$" + salvageCost;
	break;
	case 2:
	infoButtonDescrip.text = "Increase salvage money. Tier II";
	infoButtonCost.text = "$" + salvageCost;
	break;
	case 3:
	infoButtonDescrip.text = "Increase salvage money. Tier III";
	infoButtonCost.text = "$" + salvageCost;
	break;
	case 4:
	infoButtonDescrip.text = "Salvage maxed out";
	infoButtonCost.text = "";
	break;
}
		
	}
	
function SalvageExit(){
}

function SalvageUp(){
}