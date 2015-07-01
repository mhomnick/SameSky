#pragma strict

var enemy : Transform;

function OnTriggerEnter(other : Collider){
	if (enemy == null){
		if (other.tag == "EnemyShip"){
			enemy = other.transform;
		}
	}
}