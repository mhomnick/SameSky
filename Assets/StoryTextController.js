#pragma strict

var storyText : UnityEngine.UI.Text;
var storyText2 : UnityEngine.UI.Text;

//Story text booleans

//first time you lose atmosphere
var storyAtmo1 : boolean = false;

function Start () {
}

function Update () {

	if (GameController.labTime && GameController.activeEnemies == 0){
		StoryText();
	}
}

function StoryText(){

	//Non tier specific story elements
        
	if (GameController.enemyTier == 1){
		if (GameController.atmoLost > 0 && !storyAtmo1){
			storyText.text = "Though previous attackers were content destroying our cities, these aliens have obviously developed an interest in our atmosphere.";
			storyAtmo1 = true;
		}
		if (GameController.atmoLost == 0){
			storyText.text = "Though your planet is in ruins, you fight off a small wave of aliens valiantly.";
		}
	}
	if (GameController.enemyTier == 2){
		if (GameController.atmoLost <= 100){
			storyText.text = "Positive round 2";
		}
		if (GameController.atmoLost > 100){
			storyText.text = "WOW THAT WAVE WAS TOUGH.";
		}
	}
	if (GameController.enemyTier == 3){
		if (GameController.atmoLost <= 100){
			storyText.text = "Positive round 3";
		}
		if (GameController.atmoLost > 100){
			storyText.text = "WOW THAT WAVE WAS TOUGH.";
		}
	}
	if (GameController.enemyTier == 4){
		if (GameController.atmoLost <= 100){
			storyText.text = "Positive round 4";
		}
		if (GameController.atmoLost > 100){
			storyText.text = "WOW THAT WAVE WAS TOUGH.";
		}
	}
}