#pragma strict

function OnTriggerEnter(other : Collider){
	if ((other.tag != "RightPeriph") && (other.tag != "LeftPeriph") && (other.tag != "Satellite") && (other.tag != "SatDish") && (other.tag != "SatBH")){
    	Destroy(other.gameObject);
    }
}