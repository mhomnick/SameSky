#pragma strict

//var button1Pick : Texture2D[] = new Texture2D[4];	
//button1Pick[0] is the first one in the array

var speedCost : int;
var monoSpeedDescrip = "Increase mono speed by 5";
var CostText : GUIText;
var DescripText : GUIText;

var buttonPick : int = 1;

var button1Up : Texture2D;
var button1Down : Texture2D;
var button1Over : Texture2D;
var button1OVER1 : Texture2D;
var button1OVER2 : Texture2D;
var button1OVER3 : Texture2D;
var button1UP1 : Texture2D;
var button1UP2 : Texture2D;
var button1UP3 : Texture2D;
var button1Selected : boolean;

var monoThruster1 : GameObject;
var monoThruster2 : GameObject;
var monoMaterial : Material;

var button11 : GameObject;
var button12 : GameObject;

function Start(){
button1Selected = false;
button11.SetActive(false);
button12.SetActive(false);
}

function OnMouseEnter(){
if (!button1Selected){
switch (buttonPick) {
case 1:
GetComponent.<Renderer>().material.mainTexture = button1Over;
break;
case 2:
GetComponent.<Renderer>().material.mainTexture = button1OVER1;
break;
case 3:
GetComponent.<Renderer>().material.mainTexture = button1OVER2;
break;
case 4:
GetComponent.<Renderer>().material.mainTexture = button1OVER3;
break;
}
}
monoThruster1.GetComponent.<Renderer>().material.color = Color.red;
monoThruster2.GetComponent.<Renderer>().material.color = Color.red;
CostText.enabled = true;
DescripText.enabled = true;
GameController.techCost = speedCost;
GameController.descripText = monoSpeedDescrip;
}

function OnMouseExit(){
switch (buttonPick) {
case 1:
GetComponent.<Renderer>().material.mainTexture = button1Up;
break;
case 2:
GetComponent.<Renderer>().material.mainTexture = button1UP1;
break;
case 3:
GetComponent.<Renderer>().material.mainTexture = button1UP2;
break;
case 4:
GetComponent.<Renderer>().material.mainTexture = button1UP3;
break;
}
monoThruster1.GetComponent.<Renderer>().material = monoMaterial;
monoThruster2.GetComponent.<Renderer>().material = monoMaterial;
CostText.enabled = false;
DescripText.enabled = false;	
}

function OnMouseDown(){
if ((DestroyByContact.money >= speedCost) && (!button1Selected)){
buttonPick += 1;
GetComponent.<Renderer>().material.mainTexture = button1Down;
button11.SetActive(true);
//button12.SetActive(true);
 	CameraRotateNew.maxSpeed += 3;
 	CameraRotateNew.minSpeed -= 3;
 	TimeDilationButton.oldRotateSpeedMax += 3;
 	TimeDilationButton.oldRotateSpeedMin -= 3;
 	GameController.techsResearched += 1;
 	GameController.city1TechsResearched += 1;
 	DestroyByContact.money = DestroyByContact.money - speedCost;
 	speedCost += speedCost;
if (buttonPick > 3){
button1Selected = true;
}
}
GameController.techCost = speedCost;
GameController.descripText = monoSpeedDescrip;
}

function OnMouseUp(){
switch (buttonPick) {
case 1:
GetComponent.<Renderer>().material.mainTexture = button1Over;
break;
case 2:
GetComponent.<Renderer>().material.mainTexture = button1OVER1;
break;
case 3:
GetComponent.<Renderer>().material.mainTexture = button1OVER2;
break;
case 4:
GetComponent.<Renderer>().material.mainTexture = button1OVER3;
break;
}
}


