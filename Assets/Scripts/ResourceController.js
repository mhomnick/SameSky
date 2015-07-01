#pragma strict

var missileCap : GUIText;
var Tier : GUIText;
var MoneyText : UnityEngine.UI.Text;
var MoneyWords : UnityEngine.UI.Text;
var AtmoText : UnityEngine.UI.Text;
var SatDamage : GUIText;
var SatRange : GUIText;
var MissileDamage : GUIText;
var Homing : GUIText;
var TechsResearched : GUIText;
var CostText : GUIText;
var DescripText : GUIText;
var MissileText : UnityEngine.UI.Text;
var ModulesText : UnityEngine.UI.Text;
var DrainText : UnityEngine.UI.Text;
var AtmoLostText : UnityEngine.UI.Text;
var MoneyGainedText : UnityEngine.UI.Text;
public static var newMissile : boolean = false;
public static var newModule : boolean = false;
var helpBox : GameObject;
var helpHead : UnityEngine.UI.Text;
var helpBody : UnityEngine.UI.Text;
var helpBoxLower : GameObject;
var helpHeadLower : UnityEngine.UI.Text;
var helpBodyLower : UnityEngine.UI.Text;

function NewMissile(){
	if (newMissile){
		MissileText.color = Color.Lerp(MissileText.color,Color.green,Time.deltaTime*5);
		yield WaitForSeconds (.5);
		MissileText.color = Color.Lerp(MissileText.color,Color.white,Time.deltaTime*5);
		newMissile = false;
	}
}

function NewModule(){
	if (newModule){
		ModulesText.color = Color.Lerp(ModulesText.color,Color.green,Time.deltaTime*5);
		yield WaitForSeconds (.5);
		ModulesText.color = Color.Lerp(ModulesText.color,Color.white,Time.deltaTime*5);
		newModule = false;
	}
}

function UpdateResources(){

	MissileText.text = "" + GameController.missiles;
	ModulesText.text = "" + GameController.modules;

	if (DestroyByContact.money != DestroyByContact.oldMoney){
		MoneyText.text = "" + DestroyByContact.money;
		DestroyByContact.oldMoney = DestroyByContact.money;
	}
	AtmoText.text = "" + Mathf.Round(AtmoHealth.atmoHealth);
	DrainText.text = "" + AtmoHealth.atmoDrain;

	if (GameController.techCost != GameController.oldTechCost){
		CostText.text = "Cost: " + GameController.techCost;
		GameController.oldTechCost = GameController.techCost;
	}

	if (GameController.descripText != GameController.oldDescripText){
		DescripText.text = GameController.descripText;
		GameController.oldDescripText = GameController.descripText;
	}
	AtmoLostText.text = "" + GameController.atmoLost;
	MoneyGainedText.text = "" + GameController.moneyGained;
}

function Start(){
	DestroyByContact.money = 300;
}

function Update(){
	NewMissile();
	NewModule();

	UpdateResources();
	if (DestroyByContact.money <= 9){
		MoneyText.rectTransform.sizeDelta = Vector2.Lerp(MoneyText.rectTransform.sizeDelta,new Vector2(20,33),Time.deltaTime*3); 
	}
	if (DestroyByContact.money > 9 && DestroyByContact.money <= 99){
		MoneyText.rectTransform.sizeDelta = Vector2.Lerp(MoneyText.rectTransform.sizeDelta,new Vector2(38,33),Time.deltaTime*3); 
	}
	if (DestroyByContact.money < 1000 && DestroyByContact.money > 99){
		MoneyText.rectTransform.sizeDelta = Vector2.Lerp(MoneyText.rectTransform.sizeDelta,new Vector2(57.1,33),Time.deltaTime*3); 
	}
	if (DestroyByContact.money >= 1000 && DestroyByContact.money < 10000) {
		MoneyText.rectTransform.sizeDelta = Vector2.Lerp(MoneyText.rectTransform.sizeDelta,new Vector2(76,33),Time.deltaTime*3);
	}
	if (DestroyByContact.money >= 10000) {
		MoneyText.rectTransform.sizeDelta = Vector2.Lerp(MoneyText.rectTransform.sizeDelta,new Vector2(92.1,33),Time.deltaTime*3);
	}
	if (AtmoHealth.atmoHealth < 1000){
		AtmoText.rectTransform.sizeDelta = Vector2.Lerp(AtmoText.rectTransform.sizeDelta,new Vector2(65,33),Time.deltaTime*3); 
	}
	if (AtmoHealth.atmoHealth >= 1000) {
	}
	if (AtmoHealth.atmoDrain == 0){
		DrainText.rectTransform.sizeDelta = Vector2.Lerp(DrainText.rectTransform.sizeDelta,new Vector2(23,40.5),Time.deltaTime*3); 
	}
	if (AtmoHealth.atmoDrain < 0){
		DrainText.rectTransform.sizeDelta = Vector2.Lerp(DrainText.rectTransform.sizeDelta,new Vector2(38,40.5),Time.deltaTime*4); 
	}
	helpBox.transform.position = Input.mousePosition;
	helpBoxLower.transform.position = Input.mousePosition;
}

// Top Mouse Hovers

function MissileHover(){
	helpBox.SetActive(true);
	helpHead.text = "MISSILES";
	helpBody.text = "Switch to missiles.";
}

function MissileExit(){
	helpBox.SetActive(false);
}

function SatHover(){
	helpBox.SetActive(true);
	helpHead.text = "SATS";
	helpBody.text = "Current cost to launch a sat.";
}

function SatExit(){
	helpBox.SetActive(false);
}

function CaptureHover(){
	helpBox.SetActive(true);
	helpHead.text = "CAPTURE SATS";
	helpBody.text = "Bring asteroids into orbit.";
}

function CaptureExit(){
	helpBox.SetActive(false);
}

function ThrusterHover(){
	helpBox.SetActive(true);
	helpHead.text = "THRUSTER ADD ON";
	helpBody.text = "Mod captured asteroids with speed.";
}

function ThrusterExit(){
	helpBox.SetActive(false);
}

function SizeHover(){
	helpBox.SetActive(true);
	helpHead.text = "SIZE ADD ON";
	helpBody.text = "Mod captured asteroids with size.";
}

function SizeExit(){
	helpBox.SetActive(false);
}

function MiningHover(){
	helpBox.SetActive(true);
	helpHead.text = "MINING ADD ON";
	helpBody.text = "Mod captured asteroids for mining.";
}

function MiningExit(){
	helpBox.SetActive(false);
}

function ShieldHover(){
	helpBox.SetActive(true);
	helpHead.text = "SHIELD ADD ON";
	helpBody.text = "Mod captured asteroids with a shield.";
}

function ShieldExit(){
	helpBox.SetActive(false);
}

function LaserHover(){
	helpBox.SetActive(true);
	helpHead.text = "Laser ADD ON";
	helpBody.text = "Mod captured asteroids with a laser.";
}

function LaserExit(){
	helpBox.SetActive(false);
}


//Bottom Mouse Hovers

function FactoryHover(){
	helpBoxLower.SetActive(true);
	helpHeadLower.text = "FACTORY";
	helpBodyLower.text = "Place a missile factory. Adds missiles over time.";
}

function FactoryExit(){
	helpBoxLower.SetActive(false);
}

function MineHover(){
	helpBoxLower.SetActive(true);
	helpHeadLower.text = "MINE";
	helpBodyLower.text = "Place a mine. Adds money over time.";
}

function MineExit(){
	helpBoxLower.SetActive(false);
}

function PumpHover(){
	helpBoxLower.SetActive(true);
	helpHeadLower.text = "ATMO PUMP";
	helpBodyLower.text = "Place an atmo pump. Replenishes atmo over time.";
}

function PumpExit(){
	helpBoxLower.SetActive(false);
}














