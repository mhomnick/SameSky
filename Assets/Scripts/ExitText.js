#pragma strict

var text1 : GameObject;
var text2 : GameObject;



function OnMouseEnter(){
	text1.GetComponent.<Renderer>().enabled = false;
	text2.GetComponent.<Renderer>().enabled = true;
}

function OnMouseExit(){
	text1.GetComponent.<Renderer>().enabled = true;
	text2.GetComponent.<Renderer>().enabled = false;
}

function OnMouseDown(){
	ScreenFader.sceneEnding = true;
	yield WaitForSeconds (2);
	Application.Quit();
}