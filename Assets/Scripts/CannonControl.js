#pragma strict

var cannonButtonUp : Sprite;
var cannonButtonDown: Sprite;
var cannonButton : UnityEngine.UI.Image;
var monorail : GameObject;
public static var ammo : GameObject;
public static var showMoreCannon = false;
public static var isMissile = true;
public static var isMissile2 = false;
public static var isSatellite = false;
public static var isSatellite2 =  false;
public static var isSatellite3 = false;
public static var isAddOn = false;
public static var isAddOn2 = false;
public static var isAddOn3 = false;
public static var isAddOn4 = false;
public static var isAddOn5 = false;
var buttonSkin : GUISkin;

var missileButton : GameObject;
var missileButtonUI : UnityEngine.UI.Image;
var satsButtonUI : UnityEngine.UI.Image;
var captureSatsButtonUI : UnityEngine.UI.Image;
var thrusterAddOnButtonUI : UnityEngine.UI.Image;
var sizeAddOnSatButtonUI : UnityEngine.UI.Image;
var miningAddOnSatButtonUI : UnityEngine.UI.Image;
var shieldAddOnSatButtonUI : UnityEngine.UI.Image;
var laserAddOnSatButtonUI : UnityEngine.UI.Image;
var satsButton : GameObject;
var captureSatsButton : GameObject;

var satsCost1 : UnityEngine.UI.Text;
var satsCost2 : UnityEngine.UI.Text;
var captureSatsCost1 : UnityEngine.UI.Text;
var captureSatsCost2 : UnityEngine.UI.Text;

var selectedColor : Color;
var deselectedColor : Color;

function Start(){
    missileButtonUI.color = selectedColor;
}

function Update(){    //could this be done as an event and not as an update?
    if (Input.GetKeyDown("1")){
        SwitchMissile();
    }
    if (Input.GetKeyDown("2")){
        SwitchSatellite();
    }
    if (Input.GetKeyDown("3") && AsteroidCapture.asteroidCapturing){
        SwitchSatellite2();
    }
    if (Input.GetKeyDown("4")){
        SwitchAddOn();
    }
    if (Input.GetKeyDown("5")){
        SwitchAddOn2();
    }
    if (Input.GetKeyDown("6")){
        SwitchAddOn3();
    }
    if (Input.GetKeyDown("7")){
        SwitchAddOn4();
    }
    if (Input.GetKeyDown("8")){
        SwitchAddOn5();
    }
}

function SwitchMenu (){
	if (!missileButton.activeSelf){
	   missileButton.SetActive(true);
	} else {
	   missileButton.SetActive(false);
	}
	
	if (!satsButton.activeSelf){
	   satsButton.SetActive(true);
	} else {
	   satsButton.SetActive(false);
	}
	
	if (AsteroidCapture.asteroidCapturing){
	   if (!captureSatsButton.activeSelf){
	       captureSatsButton.SetActive(true);
	   } else {
	       captureSatsButton.SetActive(false);
	   }
	}


    if(showMoreCannon == false){
        showMoreCannon = true;
        //show button with arrow down
        cannonButton.sprite = cannonButtonDown;
    } else {
        showMoreCannon = false;
        //show button with arrow up
        cannonButton.sprite = cannonButtonUp;
    }
}
    
function SwitchMissile (){
    if(isMissile == false){
        isMissile = true;
        monorail.GetComponent.<Animation>().Play("Reload");
        //missileIcon.animation.Play("MissileIcon");
        missileButtonUI.color = selectedColor;
        satsButtonUI.color = deselectedColor;
        captureSatsButtonUI.color = deselectedColor;
        thrusterAddOnButtonUI.color = deselectedColor;
        sizeAddOnSatButtonUI.color = deselectedColor;
        miningAddOnSatButtonUI.color = deselectedColor;
        shieldAddOnSatButtonUI.color = deselectedColor;
        laserAddOnSatButtonUI.color = deselectedColor;
    }
    isMissile2 = false;
    isSatellite = false;
    isSatellite2 = false;
    isSatellite3 = false;
    isAddOn = false;
    isAddOn2 = false;
    isAddOn3 = false;
    isAddOn4 = false;
    isAddOn5 = false;
    //missileIcon.animation.Stop("MissileIcon");
}
    
function SwitchMissile2 (){
    if(isMissile2 == false){
        isMissile2 = true;
        monorail.GetComponent.<Animation>().Play("Reload");
        thrusterAddOnButtonUI.color = deselectedColor;
        sizeAddOnSatButtonUI.color = deselectedColor;
        missileButtonUI.color = deselectedColor;
        satsButtonUI.color = deselectedColor;
        miningAddOnSatButtonUI.color = deselectedColor;
        shieldAddOnSatButtonUI.color = deselectedColor;
        laserAddOnSatButtonUI.color = deselectedColor;
    }
    isMissile = false;  
    isSatellite = false;
    isSatellite2 = false;
    isSatellite3 = false;
    isAddOn = false;
    isAddOn2 = false;
    isAddOn3 = false;
    isAddOn4 = false;
    isAddOn5 = false;
}
    
function SwitchSatellite (){
    if(isSatellite == false){
        isSatellite = true;
        //monorail.animation.Play("SatelliteLoad");
        thrusterAddOnButtonUI.color = deselectedColor;
        sizeAddOnSatButtonUI.color = deselectedColor;
        missileButtonUI.color = deselectedColor;
        satsButtonUI.color = selectedColor;
        captureSatsButtonUI.color = deselectedColor;
        miningAddOnSatButtonUI.color = deselectedColor;
        shieldAddOnSatButtonUI.color = deselectedColor;
        laserAddOnSatButtonUI.color = deselectedColor;
    }
    isMissile = false;
    isMissile2 = false;
    isSatellite2 = false;
    isSatellite3 = false;
    isAddOn = false;
    isAddOn2 = false;
    isAddOn3 = false;
    isAddOn4 = false;
    isAddOn5 = false;
    satsCost1.text = "" + GameController.satelliteCost;
    satsCost2.text = "" + GameController.satelliteCost;
}
    
function SwitchSatellite2(){
    if(isSatellite2 == false){
    	isSatellite2 = true;
    	thrusterAddOnButtonUI.color = deselectedColor;
    	sizeAddOnSatButtonUI.color = deselectedColor;
    	missileButtonUI.color = deselectedColor;
    	satsButtonUI.color = deselectedColor;
    	miningAddOnSatButtonUI.color = deselectedColor;
    	captureSatsButtonUI.color = selectedColor;
    	shieldAddOnSatButtonUI.color = deselectedColor;
    	laserAddOnSatButtonUI.color = deselectedColor;
    }
    isMissile = false;
    isMissile2 = false;
    isSatellite = false;
    isSatellite3 = false;
    isAddOn = false;
    isAddOn2 = false;
    isAddOn3 = false;
    isAddOn4 = false;
    isAddOn5 = false;
    captureSatsCost1.text = "" + GameController.satelliteCost;
    captureSatsCost2.text = "" + GameController.satelliteCost;
}
    
function SwitchSatellite3(){
    if(isSatellite3 == false){
    	isSatellite3 = true;
    }
    isMissile = false;
    isMissile2 = false;
    isSatellite = false;
    isSatellite2 = false;
    isAddOn = false;
    isAddOn2 = false;
    isAddOn3 = false;
    isAddOn4 = false;
    isAddOn5 = false;
}
    
function SwitchAddOn(){
    if(isAddOn == false){
    	isAddOn = true;
    	thrusterAddOnButtonUI.color = selectedColor;
    	missileButtonUI.color = deselectedColor;
        satsButtonUI.color = deselectedColor;
        captureSatsButtonUI.color = deselectedColor;
        sizeAddOnSatButtonUI.color = deselectedColor;
        miningAddOnSatButtonUI.color = deselectedColor;
        shieldAddOnSatButtonUI.color = deselectedColor;
        laserAddOnSatButtonUI.color = deselectedColor;
    }
    isMissile = false;
    isMissile2 = false;
    isSatellite = false;
    isSatellite2 = false;
    isSatellite3 = false;
    isAddOn2 = false;
    isAddOn3 = false;
    isAddOn4 = false;
    isAddOn5 = false;
}
    
function SwitchAddOn2(){
    if(isAddOn2 == false){
    	isAddOn2 = true;
    	sizeAddOnSatButtonUI.color = selectedColor;
    	thrusterAddOnButtonUI.color = deselectedColor;
    	missileButtonUI.color = deselectedColor;
        satsButtonUI.color = deselectedColor;
        captureSatsButtonUI.color = deselectedColor;
        miningAddOnSatButtonUI.color = deselectedColor;
        shieldAddOnSatButtonUI.color = deselectedColor;
        laserAddOnSatButtonUI.color = deselectedColor;
    }
    isMissile = false;
    isMissile2 = false;
    isSatellite = false;
    isSatellite2 = false;
    isSatellite3 = false;
    isAddOn = false;
    isAddOn3 = false;
    isAddOn4 = false;
    isAddOn5 = false;
}
    
function SwitchAddOn3(){
    if(isAddOn3 == false){
    	isAddOn3 = true;
    	sizeAddOnSatButtonUI.color = deselectedColor;
    	thrusterAddOnButtonUI.color = deselectedColor;
    	missileButtonUI.color = deselectedColor;
        satsButtonUI.color = deselectedColor;
        captureSatsButtonUI.color = deselectedColor;
        miningAddOnSatButtonUI.color = selectedColor;
        shieldAddOnSatButtonUI.color = deselectedColor;
        laserAddOnSatButtonUI.color = deselectedColor;
    }
    isMissile = false;
    isMissile2 = false;
    isSatellite = false;
    isSatellite2 = false;
    isSatellite3 = false;
    isAddOn = false;
    isAddOn2 = false;
    isAddOn4 = false;
    isAddOn5 = false;
}
    
function SwitchAddOn4(){
    if(isAddOn4 == false){
    	isAddOn4 = true;
    	sizeAddOnSatButtonUI.color = deselectedColor;
    	thrusterAddOnButtonUI.color = deselectedColor;
    	missileButtonUI.color = deselectedColor;
        satsButtonUI.color = deselectedColor;
        captureSatsButtonUI.color = deselectedColor;
        miningAddOnSatButtonUI.color = deselectedColor;
        shieldAddOnSatButtonUI.color = selectedColor;
        laserAddOnSatButtonUI.color = deselectedColor;
    }
    isMissile = false;
    isMissile2 = false;
    isSatellite = false;
    isSatellite2 = false;
    isSatellite3 = false;
    isAddOn = false;
    isAddOn2 = false;
    isAddOn3 = false;
    isAddOn5 = false;
}
    
function SwitchAddOn5(){
    if(isAddOn5 == false){
    	isAddOn5 = true;
    	sizeAddOnSatButtonUI.color = deselectedColor;
    	thrusterAddOnButtonUI.color = deselectedColor;
    	missileButtonUI.color = deselectedColor;
        satsButtonUI.color = deselectedColor;
        captureSatsButtonUI.color = deselectedColor;
        miningAddOnSatButtonUI.color = deselectedColor;
        shieldAddOnSatButtonUI.color = deselectedColor;
        laserAddOnSatButtonUI.color = selectedColor;
    }
    isMissile = false;
    isMissile2 = false;
    isSatellite = false;
    isSatellite2 = false;
    isSatellite3 = false;
    isAddOn = false;
    isAddOn2 = false;
    isAddOn3 = false;
    isAddOn4 = false;
}

function OnGUI(){
    //GUI.skin = buttonSkin;
    if ((isMissile) || (isMissile2)){
        GUI.backgroundColor = Color.red;
    }
    if ((isSatellite) || (isSatellite2) || (isSatellite3)){
        GUI.backgroundColor = Color.blue;
    }
    /*if (GUI.Button(Rect(0,Screen.height - 35,130,30), "Cannon"))	
	   SwitchMenu();*/

    if (showMoreCannon){
    /*if	(GUI.Button (Rect(0,Screen.height - 65,130,30), "Missiles: " + GameController.missiles)){
	   SwitchMissile();
    }*/
        if (GameController.singularityMissiles){
            if	(GUI.Button (Rect(0,Screen.height - 185,130,30), "S Missiles: " + GameController.singularityMissileCount)){
                SwitchMissile2();
            }
        }
        /*if (GUI.Button(Rect(0,Screen.height - 95,130,30), "Satellites: $" + GameController.satelliteCost)){
            SwitchSatellite();
 	    }*/
        /*if (AsteroidCapture.asteroidCapturing){
            if (GUI.Button(Rect(0,Screen.height - 125,130,30), "Capture Sat: $" + GameController.satelliteCost)){
                SwitchSatellite2();
            }
        }*/
        if (AsteroidRedirectButton.asteroidRedirecting){
            if (GUI.Button(Rect(0,Screen.height - 155,130,30), "Redirect Sat: $" + GameController.redirectSatelliteCost)){
                SwitchSatellite3();
            }
        }
    }
}