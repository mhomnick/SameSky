#pragma strict

function OnTriggerStay(other : Collider) 
{
	if (other.tag == "Building"){
    	BuildingControl.canBuildHere = false;
    }
}

function OnTriggerExit(other : Collider)
{
	if (other.tag == "Building"){
		BuildingControl.canBuildHere = true;
	}
}