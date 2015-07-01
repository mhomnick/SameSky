#pragma strict

public static var money = 300;
public static var oldMoney : int = 0;

function OnTriggerEnter(other : Collider) {     //Should these be other.tag? Does that matter?
	if ((tag == "Missile") && (other.tag == "OrbitingAsteroid")){
	   Destroy(gameObject);
	   //Destroy(transform.parent.gameObject);
    }
	if ((tag == "Missile") && (other.tag == "EnemyShip") && (!GameController.piercingActive)) {
        Destroy(gameObject);
        //Destroy(transform.parent.gameObject);
    }
    if ((tag == "Missile") && (other.tag == "EnemyShip") && (GameController.missileClusters)) {
        //Cluster particle system emit
        Destroy(gameObject);
        //Destroy(transform.parent.gameObject);
    }
    if (other.tag == "Earth"){
        Destroy(gameObject);
        Destroy(transform.parent.gameObject);
    }
	if ((tag == "Missile") && (other.tag == "Boundary")){
	   //Destroy(transform.parent.gameObject);
	}
}
