#pragma strict

var newGameText : UnityEngine.UI.Text;
var hoverColor : Color;
var pressColor : Color;


function Start () {

}

function Update () {
	NewScene();
	if (!ScreenFader.sceneEnding && newGameText.color.a <= 255){
		newGameText.color.a += Time.deltaTime;
	}
	if (ScreenFader.sceneEnding && newGameText.color.a >= 0){
		newGameText.color.a -= Time.deltaTime;
	}
}

function NewGame(){
	ScreenFader.sceneEnding = true;
	newGameText.color = pressColor;
}

function NewGameTextUp(){
	newGameText.color = hoverColor;
}

function NewGameTextOver(){
	newGameText.color = hoverColor;
}

function NewGameTextExit(){
	newGameText.color = Color.white;
}

function NewScene(){
	if (ScreenFader.sceneEnding){
		yield WaitForSeconds (3);
		Application.LoadLevel ("IntroScene");
	}
}