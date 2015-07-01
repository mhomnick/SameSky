#pragma strict


function OnTriggerEnter (other: Collider){
	if (other.tag == "SatelliteStationary"){
		transform.parent.GetComponent(JellyfishMover).move = false;
		transform.parent.GetComponent(JellyfishMover).eatingSat = true;
		yield WaitForSeconds (4);
		Destroy(other.gameObject);
		//transform.parent.GetComponent(JellyfishMover).move = true;
		transform.parent.GetComponent(JellyfishMover).eatingSat = false;
	}
}