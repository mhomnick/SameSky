#pragma strict

/*var pauseWhenGameIsPaused : boolean = true;

var previousTimeSinceStartup : float;

function Awake(){
previousTimeSinceStartup = Time.realtimeSinceStartup;
}

function Update(){
var realtimeSinceStartup : float = Time.realtimeSinceStartup;
deltaTime = realtimeSinceStartup - previousTimeSinceStartup;
previousTimeSinceStartup = realtimeSinceStartup;

if (deltaTime < 0){
	Debug.LogWarning("Delta time less than zero, discarding (delta time was " + deltaTime + ")");
	
	deltaTime = 0;
	}
	
if (pauseWhenGameIsPaused && GameStateManager.SharedInstance.Paused()){
deltaTime = 0;
}
}

function IEnumerator TimeScaleIndependentWaitForSeconds(seconds : float){
var elapsedTime : float = 0;
while(elapsedTime < seconds)
{yield return nulll;
elapsedTime += deltaTime;
}
}

var deltaTime : float {get; private set;}
*/