#pragma strict

var exitText : UnityEngine.UI.Text;
var hoverColor : Color;


function Start () {

}

function Update () {
	if (!ScreenFader.sceneEnding && exitText.color.a <= 255){
		exitText.color.a += Time.deltaTime;
	}
	if (ScreenFader.sceneEnding && exitText.color.a >= 0){
		exitText.color.a -= Time.deltaTime;
	}
}

function ExitScene(){
	ScreenFader.sceneEnding = true;
}

function ExitTextOver(){
	exitText.color = hoverColor;
}

function ExitTextExit(){
	exitText.color = Color.white;
}

function ExitGame(){
	Application.Quit();
}