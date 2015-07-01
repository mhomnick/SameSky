#pragma strict

var color1 : Color;
var color2 : Color;

GetComponent(UI.Text);

var text : UnityEngine.UI.Text;


function MouseHover(){
	text.color = color2;
	text.color.a = 255;
}

function MouseExit(){
	text.color = color1;
	text.color.a = 255;
}