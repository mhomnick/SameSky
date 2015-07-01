#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;
var ResearchSound : AudioSource;

var turboCost : int;
var turboCostDescrip = "Temporary sat turbo mode";
var CostText : GUIText;
var DescripText : GUIText;

var turboTimer : float;
public static var isTurbo : boolean;

function Start(){
button2Selected = false;
turboTimer = 1.0;
isTurbo = false;
}

function OnMouseEnter(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Over;
CostText.enabled = true;
DescripText.enabled = true;
}
GameController.techCost = turboCost;
GameController.descripText = turboCostDescrip;
}

function OnMouseExit(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Up;
}
CostText.enabled = false;
DescripText.enabled = false;
}

function OnMouseDown(){
if (DestroyByContact.money >= turboCost){
GetComponent.<Renderer>().material.mainTexture = button2Down;
if (!button2Selected){
 	 //turbo mode
 	 isTurbo = true;
 	 DestroyByContact.money = DestroyByContact.money - turboCost;
 	 turboTimer = 8.0;
 	 //ResearchSound.Play();
 	 }
//button2Selected = true;
}
GameController.techCost = turboCost;
GameController.descripText = turboCostDescrip;
}

function OnMouseUp(){
GetComponent.<Renderer>().material.mainTexture = button2Over;
}

function Update(){
if ((turboTimer <= 8.0) && (turboTimer > 0)){
if (!GameController.isPaused){
turboTimer -= Time.deltaTime;
}
}
if (turboTimer <= 0.0){
isTurbo = false;
}
}

