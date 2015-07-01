#pragma strict

var blackHole : GameObject;


function OnTriggerEnter(other:Collider){
	if ((other.tag == "EnemyShip") || (other.tag == "AsteroidRight") || (other.tag == "AsteroidLeft")){
		Instantiate(blackHole,transform.position,transform.rotation);
		Destroy(gameObject);
	}
}