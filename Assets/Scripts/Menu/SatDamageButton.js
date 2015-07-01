#pragma strict

var satDamCost : int;
var satDamDescrip = "Increase sat damage by .5";
var buttonPick : int = 1;
var CostText : GUIText;
var DescripText : GUIText;
var ResearchSound : AudioSource;

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2OVER1 : Texture2D;
var button2OVER2 : Texture2D;
var button2OVER3 : Texture2D;
var button2OVER4 : Texture2D;
var button2OVER5 : Texture2D;
var button2OVER6 : Texture2D;
var button2UP1 : Texture2D;
var button2UP2 : Texture2D;
var button2UP3 : Texture2D;
var button2UP4 : Texture2D;
var button2UP5 : Texture2D;
var button2UP6 : Texture2D;
var button2Selected : boolean;

var button21 : GameObject;
var button22 : GameObject;

function Start(){
button2Selected = false;
button21.SetActive(false);
button22.SetActive(false);
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
case 5:
GetComponent.<Renderer>().material.mainTexture = button2OVER4;
break;
case 6:
GetComponent.<Renderer>().material.mainTexture = button2OVER5;
break;
case 7:
GetComponent.<Renderer>().material.mainTexture = button2OVER6;
break;
}
CostText.enabled = true;
DescripText.enabled = true;
GameController.techCost = satDamCost;
GameController.descripText = satDamDescrip;
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
case 5:
GetComponent.<Renderer>().material.mainTexture = button2UP4;
break;
case 6:
GetComponent.<Renderer>().material.mainTexture = button2UP5;
break;
case 7:
GetComponent.<Renderer>().material.mainTexture = button2UP6;
break;
}
CostText.enabled = false;
DescripText.enabled = false;
}

function OnMouseDown(){
if ((DestroyByContact.money >= satDamCost) && (!button2Selected)){
buttonPick += 1;
button21.SetActive(true);
button22.SetActive(true);
GetComponent.<Renderer>().material.mainTexture = button2Down;
 	 GameController.satDamage += .5;
 	 GameController.techsResearched += 1;
 	 DestroyByContact.money = DestroyByContact.money - satDamCost;
 	 satDamCost += satDamCost;
 	 //ResearchSound.Play();
 	 if (buttonPick > 6){
button2Selected = true;
}
}
GameController.techCost = satDamCost;
GameController.descripText = satDamDescrip;
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
case 5:
GetComponent.<Renderer>().material.mainTexture = button2OVER4;
break;
case 6:
GetComponent.<Renderer>().material.mainTexture = button2OVER5;
break;
case 7:
GetComponent.<Renderer>().material.mainTexture = button2OVER6;
break;
}
}