#pragma strict

//var player : Transform;  // Drag your player here
private var fp : Vector2;  // first finger position
private var lp : Vector2;  // last finger position
var speed : float;
var accel : float;
var decel : float;
var maxSpeed : float;
var minSpeed : float;

function Start(){	
	speed = 0;
}

function Update(){
	transform.Rotate(0,0,Time.deltaTime*speed);
	for (var touch : Touch in Input.touches) {
		if (touch.phase == TouchPhase.Began) {
			fp = touch.position;
			lp = touch.position;
		}
		if (touch.phase == TouchPhase.Moved ) {
			lp = touch.position;
		}
		if(touch.phase == TouchPhase.Ended) { 
      		if((fp.x - lp.x) > 80) { // left swipe
       			if ((speed < maxSpeed) && (speed < 0)){
					speed += decel;
				}
				if ((speed < maxSpeed) && (speed >= 0)){
					speed += accel;
				}
       		} else if((fp.x - lp.x) < -80){ // right swipe
				if ((speed > minSpeed) && (speed > 0)){
					speed -= decel;	
				}
				if ((speed > minSpeed) && (speed <= 0)){
					speed -= accel;
				}
			}
		}
	}
}