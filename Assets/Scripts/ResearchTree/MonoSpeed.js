#pragma strict

var monoSpeedCost : int;
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
}
else {
GetComponent(UnityEngine.UI.Image).color = enabledColor;
}
}


function MonoSpeedHover(){
	infoButtonHead.text = "TRHUSTER BOOST";
	switch (buttonPick) {
	case 1:
	infoButtonDescrip.text = "Increase mono speed.";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 2:
	//quarter filled
	infoButtonDescrip.text = "Increase mono speed. Tier II";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 3:
	//half filled
	infoButtonDescrip.text = "Increase mono speed. Tier III";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 4:
	//three quarters filled
	infoButtonDescrip.text = "Increase mono speed. Tier IV";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 5:
	//fully filled
	infoButtonDescrip.text = "Increase mono speed. Tier V";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 6:
	infoButtonDescrip.text = "Mono speed maxed out.";
	infoButtonCost.text = "";
	break;
}
}

function MonoSpeedButton(){
if ((DestroyByContact.money >= monoSpeedCost) && (!buttonSelected)){
	 buttonPick += 1;
 	 CameraRotateNew.maxSpeed += 3;
 	 CameraRotateNew.minSpeed -= 3;
 	 TimeDilationButton.oldRotateSpeedMax += 3;
 	 TimeDilationButton.oldRotateSpeedMin -= 3;
 	 GameController.techsResearched += 1;
 	 GameController.city1TechsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - monoSpeedCost;
 	 monoSpeedCost += monoSpeedCost;
 if (buttonPick > 5){
		buttonSelected = true;
	}
	}
		//monoReloadButton.interactable = true;
		//monoSpeedButton.interactable = true;
		GameController.techCost = monoSpeedCost;
		
		switch (buttonPick) {
	case 1:
	infoButtonDescrip.text = "Increase mono speed.";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 2:
	//quarter filled
	infoButtonDescrip.text = "Increase mono speed. Tier II";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 3:
	//half filled
	infoButtonDescrip.text = "Increase mono speed. Tier III";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 4:
	//three quarters filled
	infoButtonDescrip.text = "Increase mono speed. Tier IV";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 5:
	//fully filled
	infoButtonDescrip.text = "Increase mono speed. Tier V";
	infoButtonCost.text = "$" + monoSpeedCost;
	break;
	case 6:
	infoButtonDescrip.text = "Mono speed maxed out.";
	infoButtonCost.text = "";
	break;
}
		
	}
	
function MonoSpeedExit(){
}

function MonoSpeedUp(){
}