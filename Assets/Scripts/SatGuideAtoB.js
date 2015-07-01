#pragma strict

public static var guideColor : Color;
var satGuideA : Transform;
var pointB : Transform;
var pointA : Vector3;
var speed = 0.5;

 
function Start () {
    pointA = transform.position;
    while (true) {
        var i = Mathf.PingPong(Time.time * speed, 1);
        transform.position = Vector3.Lerp(pointA, pointB.position, i);
        yield;
    }
    GetComponent.<Renderer>().material.color.a = .2;
}

function Update(){
	pointA = satGuideA.transform.position;
}

function OnTriggerStay(other: Collider){
	if (other.tag == "SatelliteStationary"){
		GetComponent.<Renderer>().material.SetColor("_Color",Color.green);
		GameController.canLaunch = true;
	}
	if (other.tag == "SatelliteStationaryLinked"){
		GetComponent.<Renderer>().material.SetColor("_Color",Color.red);
		GameController.canLaunch = false;
	}
}

function OnTriggerExit(other: Collider){
	if ((other.tag == "SatelliteStationary") || (other.tag == "SatelliteStationaryLinked")){
		GetComponent.<Renderer>().material.SetColor("_Color",Color.white);
		GetComponent.<Renderer>().material.color.a = .2;
		GameController.canLaunch = true;
	}
}