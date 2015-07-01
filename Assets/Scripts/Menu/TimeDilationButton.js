#pragma strict

var button2Up : Texture2D;
var button2Down : Texture2D;
var button2Over : Texture2D;
var button2Selected : boolean;
var ResearchSound : AudioSource;
public static var oldRotateSpeedMax : float = 20;
public static var oldRotateSpeedMin : float = -20;
public static var oldRotateAccel : float = .2;
public static var oldRotateDecel : float = .7;
public static var oldMissileMaxSpeed : float = 1.7;
public static var oldMissileTimerMax : float = 5.0;
public static var oldReloadSpeed : float = 1.0;

var timeDilateCost : int;
var timeDilateDescrip = "Temporary time dilation";
var CostText : GUIText;
var DescripText : GUIText;

var timeDilateTimer : float;
public static var timeDilating : boolean;

function Start(){
button2Selected = false;
timeDilateTimer = 1.0;
timeDilating = false;
}

function OnMouseEnter(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Over;
CostText.enabled = true;
DescripText.enabled = true;
}
GameController.techCost = timeDilateCost;
GameController.descripText = timeDilateDescrip;
}

function OnMouseExit(){
if (!button2Selected){
GetComponent.<Renderer>().material.mainTexture = button2Up;
}
CostText.enabled = false;
DescripText.enabled = false;
}

function OnMouseDown(){
if (DestroyByContact.money >= timeDilateCost){
GetComponent.<Renderer>().material.mainTexture = button2Down;
if (!button2Selected){
 	 //turbo mode
 	 timeDilating = true;
 	 DestroyByContact.money = DestroyByContact.money - timeDilateCost;
 	 timeDilateTimer = 5;
 	 timeDilateCost += timeDilateCost;
 	 //ResearchSound.Play();
 	 }
//button2Selected = true;
}
GameController.techCost = timeDilateCost;
GameController.descripText = timeDilateDescrip;
}

function OnMouseUp(){
GetComponent.<Renderer>().material.mainTexture = button2Over;
}

function Update(){

if ((timeDilateTimer <= 5) && (timeDilateTimer > 0)){
if (!GameController.isPaused){
timeDilateTimer -= Time.deltaTime;
}
}
if (timeDilateTimer <= 0.0){
if (timeDilating){
timeDilating = false;
}
if (BuildingControl.waitTime != 1){
BuildingControl.waitTime = 1;
}
if ((CameraRotateNew.maxSpeed != oldRotateSpeedMax) && (CameraRotateNew.minSpeed != oldRotateSpeedMin)){
CameraRotateNew.maxSpeed = oldRotateSpeedMax;
CameraRotateNew.minSpeed = oldRotateSpeedMin;
}
if ((CameraRotateNew.accel != oldRotateAccel) && (CameraRotateNew.decel != oldRotateDecel)){
CameraRotateNew.accel = oldRotateAccel;
CameraRotateNew.decel = oldRotateDecel;
}
if ((Zoom.maxSpeed != 2.5) && (Zoom.minSpeed != -2.5) && (Zoom.accel != .2) && (Zoom.decel != .3)){
Zoom.maxSpeed = 2.5;
Zoom.minSpeed = -2.5;
Zoom.accel = .2;
Zoom.decel = .3;
}
if (MissileMover.maxSpeed != oldMissileMaxSpeed){
MissileMover.maxSpeed = oldMissileMaxSpeed;
}
if (MissileMover.accel != .05){
MissileMover.accel = .05;
}
if (GameController.missileTimerMax != oldMissileTimerMax){
GameController.missileTimerMax = oldMissileTimerMax;
}
if (GameController.reloadSpeed != oldReloadSpeed){
GameController.reloadSpeed = oldReloadSpeed;
}
if ((Time.timeScale < 1.0) && (!GameController.isPaused)){
Time.timeScale = 1.0;
}
}
TimeDilate();
}

function TimeDilate(){
if (timeDilating){
Time.timeScale = .25;
BuildingControl.waitTime = .25;
CameraRotateNew.maxSpeed = 85;
CameraRotateNew.minSpeed = -85;
CameraRotateNew.accel = .8;
CameraRotateNew.decel = 2.8;
Zoom.maxSpeed = 10;
Zoom.minSpeed = -10;
Zoom.accel = .8;
Zoom.decel = 1.2;
MissileMover.maxSpeed = 6.8;
MissileMover.accel = .2;
GameController.missileTimerMax = .5;
GameController.reloadSpeed = 12;
}
}




