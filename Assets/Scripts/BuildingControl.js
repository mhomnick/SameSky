#pragma strict

var buildingButtonUp : Sprite;
var buildingButtonDown: Sprite;
var buildingButton : UnityEngine.UI.Image;
var buttonSkin : GUISkin;
var earth : GameObject;
var PivotPoint3 : GameObject;

public static var canBuildHere = true;
public static var showMoreBuildings = false;

// buildingSpawn is the transform that the building is instantiated on. Currently the "mono1" game object.
var buildingSpawn : Transform;
var mine : GameObject;
var mineCost : int = 100;
var satFactory : GameObject;
var missileFactory : GameObject;
var missileFactoryCost : int = 250;
var atmoPump : GameObject;
var atmoPumpCost : int = 300;

var zoomLab : boolean;

var cameraPosition : GameObject;
var city1Lab1 : GameObject;
var city1Lab2 : GameObject;
var city1Lab3 : GameObject;

var labZoomSpeed : float;
public static var isZoomed : boolean = false;

var mineCount : float;
var satFacCount : int;
public static var missileFacCount : int = 1;


public static var zoomLabMore1 : boolean;
public static var zoomLabNormal : boolean;

public static var waitTime : float = .8;

var continueButton : GameObject;
var labButton2 : UnityEngine.UI.Image;
var waveMenu : UnityEngine.UI.Image;
var waveMenuText : GameObject;
var showMenu : boolean;
var labButtonText1 : UnityEngine.UI.Text;
var labButtonText2 : UnityEngine.UI.Text;

var missileFacButtonCost1 : UnityEngine.UI.Text;
var missileFacButtonCost2 : UnityEngine.UI.Text;
var mineButtonCost1 : UnityEngine.UI.Text;
var mineButtonCost2 : UnityEngine.UI.Text;
var pumpButtonCost1 : UnityEngine.UI.Text;
var pumpButtonCost2 : UnityEngine.UI.Text;


var factoryButton : GameObject;
var atmoPumpButton : GameObject;
var mineButton : GameObject;
var cannonButton : GameObject;
var buildButton : GameObject;
var lowerButtons : GameObject;


function FactoryButton(){
	if ((canBuildHere) && (DestroyByContact.money >= missileFactoryCost)){ 
		var newBuildingMisFact = Instantiate (missileFactory, buildingSpawn.position, buildingSpawn.rotation);
		newBuildingMisFact.transform.parent = PivotPoint3.transform; 
		DestroyByContact.money -= missileFactoryCost;
		missileFactoryCost += 50;
		GameController.missileCap += 5;
		missileFacCount = missileFacCount + 1;
		//yield;
		missileFacButtonCost1.text = "" + missileFactoryCost;
		missileFacButtonCost2.text = "" + missileFactoryCost;
	} 
}

function MineButton(){
	if ((canBuildHere) && (DestroyByContact.money >= mineCost) && (GameController.canBuildMines)){ 
		var newBuildingMine = Instantiate (mine, buildingSpawn.position, buildingSpawn.rotation);
		newBuildingMine.transform.parent = PivotPoint3.transform; 
		DestroyByContact.money -= mineCost;
		mineCost += 50;
		mineCount = mineCount + 1;
		mineButtonCost1.text = "" + mineCost;
		mineButtonCost2.text = "" + mineCost;
	}
}

function AtmoPumpButton(){
	if ((canBuildHere) && (DestroyByContact.money >= atmoPumpCost)){ 
		var newBuildingAtmoPump = Instantiate (atmoPump, buildingSpawn.position, buildingSpawn.rotation);
		newBuildingAtmoPump.transform.parent = PivotPoint3.transform; 
		DestroyByContact.money -= atmoPumpCost;
		atmoPumpCost += 50;
		pumpButtonCost1.text = "" + atmoPumpCost;
		pumpButtonCost2.text = "" + atmoPumpCost;
	}
}

 function Start(){

 }
 
 function Update(){
 	CameraLabZoom();
 	if (Input.GetKeyDown(KeyCode.Y)){
 		LabZoom();
 	}
 }

function Switch (){

	if (!factoryButton.activeSelf){
		factoryButton.SetActive(true);
	} else {
		factoryButton.SetActive(false);
	}
	
	if (GameController.canBuildMines){
		if (!mineButton.activeSelf){
			mineButton.SetActive(true);
		} else {
			mineButton.SetActive(false);
		}
	}
	
	if (GameController.atmoPumps){
		if (!atmoPumpButton.activeSelf){
			atmoPumpButton.SetActive(true);
		} else {
			atmoPumpButton.SetActive(false);
		}
	}

    if(showMoreBuildings == false){
        showMoreBuildings = true;
        //show button with arrow down
        buildingButton.sprite = buildingButtonDown;
    } else {
        showMoreBuildings = false;
        //show button with arrow up
        buildingButton.sprite = buildingButtonUp;
    }
}
    
function LabZoom(){
	if (showMenu){
		showMenu = false;
	} else {
		showMenu = true;
	}
	if (!LabZoomer.wasZoomed){
		earth.GetComponent.<Animation>()["Earth Doors"].time = 0;
		earth.GetComponent.<Animation>().PlayQueued("Earth Doors");
	}
	if (!zoomLab){
    	zoomLab = true;
    	//Camera.main.animation.Play("LabSwoop1");
    	GameController.isPaused = true;
    	continueButton.SetActive(false);
    	labButtonText1.text = "TO SURFACE";
    	labButtonText2.text = "TO SURFACE";
    	labButton2.rectTransform.localPosition = new Vector3(300,-148,0);
    	waveMenu.enabled = false;
    	waveMenuText.SetActive(false);
    	cannonButton.SetActive(false);
    	buildButton.SetActive(false);
    	lowerButtons.SetActive(false);
    } else {
    	zoomLab = false;
    	//Camera.main.animation.Play("LabSwoopOut1");
    	//GameController.isPaused = false;
    	continueButton.SetActive(true);
    	labButtonText1.text = "RESEARCH LAB";
    	labButtonText2.text = "RESEARCH LAB";
    	labButton2.rectTransform.localPosition = new Vector3(105.3,-148,0);
    	waveMenu.enabled = true;
    	waveMenuText.SetActive(true);
    	lowerButtons.SetActive(true);
    	//cannonButton.SetActive(true);
    	//buildButton.SetActive(true);
    	}
	if (!isZoomed){
		isZoomed = true;
		CameraRotateNew.speed = 0;
	} else {
		isZoomed = false;
	}
}

function CameraLabZoom(){
	if (!GameController.asteroidRedirect){
		if (MonorailCollider.cityNumber == 0 && !zoomLab){
			Camera.main.transform.position = Vector3.Lerp(Camera.main.transform.position, cameraPosition.transform.position, labZoomSpeed);	
			Camera.main.transform.rotation = Quaternion.Lerp(Camera.main.transform.rotation, cameraPosition.transform.rotation, labZoomSpeed);
			//lab1.SetActive(false);
			//lab2.SetActive(false);
		}
 
 /////////////////////CITY 1///////////////////////////////
 
 		if (zoomLab){
 			Camera.main.transform.position = Vector3.Lerp(Camera.main.transform.position, city1Lab1.transform.position, labZoomSpeed);
 			Camera.main.transform.rotation = Quaternion.Lerp(Camera.main.transform.rotation, city1Lab1.transform.rotation, labZoomSpeed);
 			yield WaitForSeconds (waitTime);
 			city1Lab1.transform.position = Vector3.Lerp(city1Lab1.transform.position, city1Lab2.transform.position, labZoomSpeed);
 
 		}
 		if ((!zoomLab) && (!GameController.isPaused) /*&& (MonorailCollider.cityNumber == 1)*/ && (!zoomLabMore1)){
 			Camera.main.transform.position = Vector3.Lerp(Camera.main.transform.position, cameraPosition.transform.position, labZoomSpeed);	
 			Camera.main.transform.rotation = Quaternion.Lerp(Camera.main.transform.rotation, cameraPosition.transform.rotation, labZoomSpeed);
 			//yield WaitForSeconds (waitTime);
 			city1Lab1.transform.position = Vector3.Lerp(city1Lab1.transform.position, city1Lab3.transform.position, labZoomSpeed);
 		}
 
 		if ((!zoomLab) && (!GameController.isPaused) && (zoomLabMore1)){
 			Camera.main.transform.position = Vector3.Lerp(Camera.main.transform.position, city1Lab3.transform.position, labZoomSpeed);	
 			yield WaitForSeconds (waitTime - .2);
 			zoomLabMore1 = false;
 		}
 	}
 }
 
 
 
 