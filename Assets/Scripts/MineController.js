#pragma strict

function MineUpdate(){
	if (!GameController.isPaused){
		DestroyByContact.money += 1;
	}
}

InvokeRepeating("MineUpdate",GameController.mineSpeed,GameController.mineSpeed);