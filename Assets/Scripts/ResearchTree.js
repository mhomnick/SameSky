#pragma strict

var infoButton : UnityEngine.UI.Image;
var infoButtonHead : UnityEngine.UI.Text;
var infoButtonDescrip : UnityEngine.UI.Text;
var infoButtonCost : UnityEngine.UI.Text;

function ButtonExit(){
	infoButtonHead.text = "";
	infoButtonDescrip.text = "";
	infoButtonCost.text = "";
}