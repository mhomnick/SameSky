#pragma strict

var salvageCost : int;
var salvageDescrip = "Increases salvage by 1";
var buttonPick : int = 1;
var CostText : GUIText;
var DescripText : GUIText;

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2OVER1 : Texture2D;
var button2OVER2 : Texture2D;
var button2OVER3 : Texture2D;
var button2UP1 : Texture2D;
var button2UP2 : Texture2D;
var button2UP3 : Texture2D;
var button2Selected : boolean;

var button31 : GameObject;


function Start(){
button2Selected = false;
button31.SetActive(false);
}

function OnMouseEnter(){
switch (buttonPick) {
case 1:
GetComponent.<Renderer>().material.mainTexture = button2Over;
break;
case 2:
GetComponent.<Renderer>().material.mainTexture = button2OVER1;
break;
case 3:
GetComponent.<Renderer>().material.mainTexture = button2OVER2;
break;
case 4:
GetComponent.<Renderer>().material.mainTexture = button2OVER3;
break;
}
CostText.enabled = true;
DescripText.enabled = true;
GameController.techCost = salvageCost;
GameController.descripText = salvageDescrip;
}

function OnMouseExit(){
switch (buttonPick) {
case 1:
GetComponent.<Renderer>().material.mainTexture = button2Up;
break;
case 2:
GetComponent.<Renderer>().material.mainTexture = button2UP1;
break;
case 3:
GetComponent.<Renderer>().material.mainTexture = button2UP2;
break;
case 4:
GetComponent.<Renderer>().material.mainTexture = button2UP3;
break;
}
CostText.enabled = false;
DescripText.enabled = false;
}

function OnMouseDown(){
if ((DestroyByContact.money >= salvageCost) && (!button2Selected)){
buttonPick += 1;
GetComponent.<Renderer>().material.mainTexture = button2Down;
 	 AtmoHealth.atmoSalvage += 1;
 	 GameController.techsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - salvageCost;
 	 salvageCost += salvageCost;
 	 button31.SetActive(true);
 	 if (buttonPick > 3){
button2Selected = true;
}
}
GameController.techCost = salvageCost;
GameController.descripText = salvageDescrip;
}

function OnMouseUp(){
switch (buttonPick) {
case 1:
GetComponent.<Renderer>().material.mainTexture = button2Over;
break;
case 2:
GetComponent.<Renderer>().material.mainTexture = button2OVER1;
break;
case 3:
GetComponent.<Renderer>().material.mainTexture = button2OVER2;
break;
case 4:
GetComponent.<Renderer>().material.mainTexture = button2OVER3;
break;
}
}