#pragma strict

 var maxUpAndDown : float;            // amount of meters going up and down
 var speed : float;           // up and down speed
 protected var angle : float = 0;            // angle to determin the height by using the sinus
 protected var toDegrees : float = Mathf.PI/180;    // radians to degrees
 var startHeight : float;
 
  function Start(){
 	 transform.LookAt(Vector3.zero);
     startHeight = transform.localPosition.x;  
 }
 
 function FixedUpdate(){
     angle += speed * Time.deltaTime;
     if (angle > 360){ 
     	angle -= 360;
     }
     transform.localPosition.x = startHeight + maxUpAndDown * Mathf.Sin(angle * toDegrees);
 }