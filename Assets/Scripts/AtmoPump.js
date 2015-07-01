#pragma strict

function Start(){
	AtmoHealth.pumpCount += .0000025;
}

function AtmoPump () {
	if ((!GameController.isPaused) && (AtmoHealth.atmoHealth < AtmoHealth.maxAtmo)){
		AtmoHealth.atmoHealth += .025;
	}
}
	
InvokeRepeating("AtmoPump",.1,.1);