#pragma strict

var positionAdjustLocation : GameObject;
var nextSatelliteNumber = 0;
var monorail : GameObject;
var monorailHolo : GameObject;
var asteroidSpawnPoints3 : Transform[] = new Transform[4];
var asteroidSpawnPoints2 : Transform[] = new Transform[4];
var asteroidSpawnPoints : Transform[] = new Transform[4];
var asteroidTier3 : GameObject;
var missileShot : GameObject;
var singularityMissile : GameObject;
var satelliteShot : GameObject;
var redirectSatellite : GameObject;
var captureSat : GameObject;
var thrusterAddOnSat : GameObject;
var sizeAddOnSat : GameObject;
var miningAddOnSat : GameObject;
var shieldAddOnSat : GameObject;
var laserAddOnSat : GameObject;
var satelliteSpawn : Transform;
var missileSpawn : Transform;
var satelliteCount : GUIText;
var jellyfish : GameObject;
var tank : GameObject;
var spider: GameObject;
var asteroid : GameObject;
var satEater : GameObject;
var enemyCount : int;
var asteroidCount : int;
var enemySpawnMin : float;
var enemyStartWait : float;
var enemyWaveWait : float;
var tankCount : int;
var tankSpawnMin : float;
var tankStartWait : float;
var tankWaveWait : float;
var spiderCount : int;
var spiderSpawnMin : float;
var spiderStartWait : float;
var spiderWaveWait : float;
var satEaterCount : int;
var satEaterSpawnWait : float;
var satEaterStartWait : float;
var satEaterWaveWait : float;
var asteroidSpawnWait : float;
var asteroidStartWait : float;
var asteroidWaveWait : float;
public static var missiles : int;
public static var satellites : int;
var satellitesValue : int;
satellites = satellitesValue;
var missilesValue: int;
missiles = missilesValue;
public static var modules : int = 0;
public static var isPaused : boolean;
var missileTimer : float;
public static var missileTimerMax : float;
var satelliteTimer : float;
public static var satelliteTimerMax : float;
public static var satelliteCost : int = 100;
public static var captureSatelliteCost : int = 100;
public static var redirectSatelliteCost : int = 800;

var guideToDestroy : GameObject;
var realGuide : GameObject;

var jellyfishesSpawned : int;
var enemiesRemaining : int;
var tanksSpawned : int;
var spidersSpawned : int;
var satEatersSpawned : int = 0;

public static var jellySwivel : boolean = false;

public static var satDamage : float = 1;
public static var oldSatDamage : float;
public static var satRangeRadius : float;
public static var satRangeHeight : float;
public static var satRangeCenter : Vector3;
public static var missileDamage : float;
public static var oldMissileDamage : float;
public static var homingMissiles : boolean;
public static var canBuildMines : boolean;
public static var atmoPumps : boolean;

public static var techsResearched : int;
public static var oldTechsResearched : int = 1;
public static var city1TechsResearched : int;
public static var city2TechsResearched : int;
public static var city3TechsResearched : int;
public static var city4TechsResearched : int;

var city1 : GameObject;
var city1Wrecked : GameObject;
var city1SmokeParticle1 : ParticleSystem;
var city1SmokeParticle2 : ParticleSystem;

public static var techCost : int;
public static var oldTechCost : int;
public static var descripText : String;
public static var oldDescripText : String;
public static var missileBuildSpeed : int;
public static var satelliteBuildSpeed : int;
public static var mineSpeed : float;

public static var jellyfishMaxHealth : int;
public static var tankMaxHealth : int;
public static var eaterJellyfishStartHealth : int;

public static var onBottom : boolean;

public static var canLaunch : boolean;

var Base1 : AudioSource;
var Base2 : AudioSource;
var Base3 : AudioSource;
var HappyBase1 : AudioSource;
var EnemySpawnAudio : AudioSource;
var MissileShootAudio : AudioSource;
var NoSatelliteAudio : AudioSource;

public static var reloadSpeed : float;
public static var turboEmissionRate : float;
public static var laserEmissionRate : float;

public static var tripleClone : boolean;

public static var piercingActive : boolean = false;
public static var missileSlowDown : boolean = false;
public static var laserSlowDown : boolean = false;
public static var missileClusters : boolean = false;

public static var activeSatellites : int = 0;

public static var missileCap : int = 5;
public static var oldMissileCap : int = 5;
public static var satSalvage : boolean = false;

var LoseText : GUIText;

public static var clusterDamage : float = 30.0;

public static var city1Build1 : boolean = false;
public static var city1Build2 : boolean = false;
public static var city1Build3 : boolean = false;
public static var city1Build4 : boolean = false;

var contrastPlane : GameObject;
public static var asteroidRedirect : boolean = false;

public static var singularityMissiles : boolean = false;
public static var singularityMissileCount : int = 0;

public static var labTime : boolean = false;
var atmoStart : int = 1000;
public static var atmoLost : int;
var moneyStart : int;
public static var moneyGained : int;
var labTimeValue = labTime;
var waveMenu : GameObject;
var sunGlow : ParticleSystem;

var enemyArray : GameObject[];

public static var enemyTier : int = 0;
var oldEnemyTier : int = 1;

var menuUp : boolean = false;

var sun1 : Light;
var sun2 : Light;
var sun3 : Light;

public static var activeEnemies : int;

var progressBar1 : UnityEngine.UI.Image; 

var jellyWaitTime : int;
var tankWaitTime : int;
var spiderWaitTime : int;

/*function MissileStart(){
if ((!isPaused) && (missiles < missileCap)){
missiles += 1;
ResourceController.newMissile = true;
}
}

InvokeRepeating("MissileStart",18,18);*/

function Start () {		
	moneyStart = DestroyByContact.money;

	enemyCount = 5;
	enemySpawnMin = 10;
	enemyStartWait = 10;
	tankCount = 0;
	enemyWaveWait = 1;
	enemyTier = 1;

	if ((Application.platform == RuntimePlatform.OSXPlayer) || (Application.platform == RuntimePlatform.OSXEditor)){
		contrastPlane.GetComponent.<Renderer>().enabled = true;
	}
		
	monorail.GetComponent.<Animation>().Play("Reload");
	//monorailHolo.animation.Play("Startup");
	missileTimerMax = 5.0;
	satelliteTimerMax = 1.0;
    SpawnJellyfish ();
    SpawnAsteroids ();
    SpawnTank();
    SpawnSatEater();
    SpawnSpider();
    isPaused = false;
    satRangeRadius = 19;
    satRangeHeight = 33;
    satRangeCenter.y = 15;
    missileDamage = 10;
    jellyfishesSpawned = 0;
    homingMissiles = false;
    techsResearched = 0;
    city1TechsResearched = 0;
    canBuildMines = true;
    missileBuildSpeed = 12;
    satelliteBuildSpeed = 20;
    mineSpeed = 3.0;
    jellyfishMaxHealth = 10;
    tankMaxHealth = 80;
    eaterJellyfishStartHealth = 200;
    atmoPumps = false;
    onBottom = false;
    Base2.volume = 0.0;
    Base3.volume = 0.0;
    HappyBase1.volume = 0.0;
    canLaunch = true;
    reloadSpeed = 1.0;
    laserEmissionRate = 1.5;
    turboEmissionRate = 10.0;
    tripleClone = false;
    MusicPlay();
    //AudioPlay();
    
}

InvokeRepeating("EnemyCheck",1,1); 
//InvokeRepeating("WaveOver",1,1);

function EnemyCheck(){
    enemyArray = GameObject.FindGameObjectsWithTag("EnemyArray");
    activeEnemies = enemyArray.Length;
}

function LightsDown(){
	sun1.intensity = Mathf.Lerp(sun1.intensity,0,Time.deltaTime/2);
	sun2.intensity = Mathf.Lerp(sun2.intensity,0,Time.deltaTime/2);
	sun3.intensity = Mathf.Lerp(sun3.intensity,0,Time.deltaTime/2);
}
	
function LightsUp(){
	sun1.intensity = Mathf.Lerp(sun1.intensity,0.6,Time.deltaTime/2);
	sun2.intensity = Mathf.Lerp(sun2.intensity,1.3,Time.deltaTime/2);
	sun3.intensity = Mathf.Lerp(sun3.intensity,0.35,Time.deltaTime/2);
}

function WaveOver(){
    if (labTime && enemyArray.Length == 0 && !menuUp){
		menuUp = true;
		yield WaitForSeconds (5);
		if (!waveMenu.activeSelf){
            waveMenu.SetActive(true);
		}
		if (!isPaused){
            isPaused = true;
        }
        if (!BuildingControl.isZoomed){
            BuildingControl.isZoomed = true;
        }
        atmoLost = atmoStart - Mathf.Round(AtmoHealth.atmoHealth);
        moneyGained = DestroyByContact.money - moneyStart;
		}
}

function ContinueButton(){
	labTime = false;
	menuUp = false;
	waveMenu.SetActive(false);
    isPaused = false;
    BuildingControl.isZoomed = false;
        
        
       //Tier Advancement//
        
    if (enemyTier == 1){
        //change to tier 2 stats:
        enemyCount = 7;
		enemySpawnMin = 10;
		jellyfishMaxHealth = 20;
		Base2.volume = .4;
    }
        
    if (enemyTier == 2){
        //change to tier 3 stats
        enemyCount = 15;
		enemySpawnMin = 5;
		jellyfishMaxHealth = 40;
		jellySwivel = true;
        tankCount = 1;
		tankSpawnMin = 70;
		Base3.volume = .5;
    }
        
    if (enemyTier == 3){
        //change to tier 4 stats
        enemyCount = 20;
		enemySpawnMin = 4;
		tankSpawnMin = 60;
		jellyfishMaxHealth = 80;
		tankMaxHealth = 140;
		satEaterCount = 1;
		satEaterSpawnWait = 60;
    }
        
    if (enemyTier == 4){
        //change to tier 5 stats
        enemyCount = 25;
		enemySpawnMin = 4;
		tankSpawnMin = 50;
		jellyfishMaxHealth = 110;
		eaterJellyfishStartHealth = 200;
		tankMaxHealth = 300;
    }
        
    if (enemyTier == 5){
        //change to tier 6 stats
        enemyCount = 30;
		enemySpawnMin = 3;
		tankSpawnMin = 45;
		jellyfishMaxHealth = 140;
		eaterJellyfishStartHealth = 300;
		tankMaxHealth = 250;
    }
        
    if (enemyTier == 6){
        //change to tier 7 stats
        enemyCount = 40;
		enemySpawnMin = 2;
		tankSpawnMin = 40;
		jellyfishMaxHealth = 170;
		eaterJellyfishStartHealth = 350;
		tankMaxHealth = 400;
    }
        
    if (enemyTier == 7){
        //change to tier 8 stats
        enemyCount = 40;
		enemySpawnMin = 2;
		tankSpawnMin = 40;
		jellyfishMaxHealth = 200;
		eaterJellyfishStartHealth = 350;
		tankMaxHealth = 400;
    }
        
    if (enemyTier == 8){
        //change to tier 9 stats
        enemyCount = 40;
		enemySpawnMin = 2;
		tankSpawnMin = 40;
		jellyfishMaxHealth = 200;
		eaterJellyfishStartHealth = 350;
		tankMaxHealth = 400;
    }
        
    if (enemyTier == 9){
        //change to tier 10 stats
        enemyCount = 40;
		enemySpawnMin = 2;
		tankSpawnMin = 40;
		jellyfishMaxHealth = 200;
		eaterJellyfishStartHealth = 350;
		tankMaxHealth = 400;
    }
        
    //advance to next tier
    enemyTier += 1;
        
    //reset stat counters
    atmoStart = AtmoHealth.atmoHealth;
    moneyStart = DestroyByContact.money;
}

function SpawnJellyfish () {        //if(jellyfishesSpawned == (enemyCount - 3) to replace all else if statements
    yield WaitForSeconds (enemyStartWait);
    while (true){
        for ( var i : int = 0; i < enemyCount; i++){
            if (!isPaused){
                if (jellyfishesSpawned == 5 && enemyTier == 1){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else if (jellyfishesSpawned == 12 && enemyTier == 2){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else if (jellyfishesSpawned == 27 && enemyTier == 3){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else if (jellyfishesSpawned == 47 && enemyTier == 4){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else if (jellyfishesSpawned == 72 && enemyTier == 5){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else if (jellyfishesSpawned == 102 && enemyTier == 6){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else if (jellyfishesSpawned == 142 && enemyTier == 7){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else if (jellyfishesSpawned == 182 && enemyTier == 8){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else if (jellyfishesSpawned == 222 && enemyTier == 9){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else if (jellyfishesSpawned == 262 && enemyTier == 10){
                    print("WaveDone");
                    //sunGlow.enableEmission = true;
                    labTime = true;
                } else {
                    //sunGlow.enableEmission = false;
                }
        	    var positionAdjust = Vector3(positionAdjustLocation.transform.position.x, positionAdjustLocation.transform.position.y, positionAdjustLocation.transform.position.z);
        	    var spawnPosition = positionAdjust + Random.insideUnitCircle.normalized * Random.Range(6.0,7.0);
        	    var spawnRotation : Quaternion= Quaternion.identity;
        	    if (!labTime){
                    var newJellyfish = Instantiate (jellyfish, spawnPosition, spawnRotation);
                    jellyfishesSpawned += 1;
                    newJellyfish.name = "Jellyfish" + jellyfishesSpawned;
                    var relativeLocation = newJellyfish.transform.InverseTransformPoint(monorail.transform.position);
                    EnemySpawnAudio.Play();
                }
                jellyWaitTime = Random.Range(enemySpawnMin,10);
                yield WaitForSeconds (jellyWaitTime);
                //print("Waited for " + jellyWaitTime + " secs");
            }
        }
        yield WaitForSeconds (enemyWaveWait);
    }
}

function SpawnTank () {
    yield WaitForSeconds (/*tankStartWait*/Random.Range(1,8));
    while (true){
        for ( var i : int = 0; i < tankCount; i++){
        	if (!isPaused){
                var positionAdjust = Vector3(positionAdjustLocation.transform.position.x, positionAdjustLocation.transform.position.y, positionAdjustLocation.transform.position.z);
                var spawnPosition = positionAdjust + Random.insideUnitCircle.normalized *7;
                var spawnRotation : Quaternion= Quaternion.identity;
                if (!labTime){
                    var newTank = Instantiate (tank, spawnPosition, spawnRotation);
                    tanksSpawned += 1;
                    newTank.name = "Tank" + tanksSpawned;
                    var relativeLocation = newTank.transform.InverseTransformPoint(monorail.transform.position);
                    EnemySpawnAudio.Play();
                }
                tankWaitTime = Random.Range(tankSpawnMin,70);
                yield WaitForSeconds (tankWaitTime);
                print("Tank waited for " + tankWaitTime + " secs");
            }
        }
        yield WaitForSeconds (tankWaveWait);
    }
}

function SpawnSpider () {
    yield WaitForSeconds (spiderStartWait);
    while (true){
        for ( var i : int = 0; i < spiderCount; i++){
        	if (!isPaused){
                var positionAdjust = Vector3(positionAdjustLocation.transform.position.x, positionAdjustLocation.transform.position.y, positionAdjustLocation.transform.position.z);
                var spawnPosition = positionAdjust + Random.insideUnitCircle.normalized *7;
                var spawnRotation : Quaternion= Quaternion.identity;
                if (!labTime){
                    var newSpider = Instantiate (spider, spawnPosition, spawnRotation);
                    spidersSpawned += 1;
                    newSpider.name = "Spider" + spidersSpawned;
                    var relativeLocation = newSpider.transform.InverseTransformPoint(monorail.transform.position);
                    EnemySpawnAudio.Play();
                }
                spiderWaitTime = Random.Range(spiderSpawnMin,70);
                yield WaitForSeconds (spiderWaitTime);
                print("Spider waited for " + spiderWaitTime + " secs");
            }
        }
        yield WaitForSeconds (spiderWaveWait);
    }
}

function SpawnSatEater () {
    yield WaitForSeconds (satEaterStartWait);
    while (true){
        for ( var i : int = 0; i < satEaterCount; i++){
        	if ((!isPaused) && (activeSatellites > 8)){    
                var positionAdjust = Vector3(positionAdjustLocation.transform.position.x, positionAdjustLocation.transform.position.y, positionAdjustLocation.transform.position.z);
                var spawnPosition = positionAdjust + Random.insideUnitCircle.normalized *7;
                var spawnRotation : Quaternion= Quaternion.identity;
              /*var newSatEater = Instantiate (satEater, spawnPosition, spawnRotation);
                satEatersSpawned += 1;
                //enemiesRemaining -= 1;
                if (!labTime){
                    newSatEater.name = "SatEater" + satEatersSpawned;
		            var relativeLocation = newSatEater.transform.InverseTransformPoint(monorail.transform.position);
		            EnemySpawnAudio.Play();
		        }*/
            yield WaitForSeconds (satEaterSpawnWait);
            }
        }
        yield WaitForSeconds (satEaterWaveWait);
    }
}

function SpawnAsteroids (){
	
	yield WaitForSeconds (asteroidStartWait);
    while (true){
        for ( var i : int= 0; i < asteroidCount; i++){
        	if (!isPaused){
        	   var number = Random.Range(0,100);
        	   if (number <= 60){
	//There is a 60% chance to spawn an asteroid on a random point from the 1st tier array
                    var randomPoint = Random.Range(0,asteroidSpawnPoints.Length);
                    Instantiate (asteroid, asteroidSpawnPoints[randomPoint].position, asteroidSpawnPoints[randomPoint].rotation); 
                    yield WaitForSeconds (asteroidSpawnWait);
	            }
                if ((number > 60) && (number <= 90)){
	//There is a 30% chance to spawn an asteroid on a random point from the 2st tier array
                    var randomPoint2 = Random.Range(0,asteroidSpawnPoints2.Length);
                    Instantiate (asteroid, asteroidSpawnPoints2[randomPoint2].position, asteroidSpawnPoints2[randomPoint2].rotation); 
                    yield WaitForSeconds (asteroidSpawnWait);
                }
                if (number > 90){
	//There is a 10% chance to spawn an asteroid on a random point from the 3rd tier array
                    var randomPoint3 = Random.Range(0,asteroidSpawnPoints3.Length);
                    Instantiate (asteroidTier3, asteroidSpawnPoints3[randomPoint3].position, asteroidSpawnPoints3[randomPoint3].rotation); 
                    yield WaitForSeconds (asteroidSpawnWait);
                }
	//print(number);
            }
        }
        yield WaitForSeconds (asteroidWaveWait);
    }
}
    
function EnemyTiers(){	
	//if (sunGlow.enableEmission == false){
	
	if (jellyfishesSpawned == 5){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else if (jellyfishesSpawned == 12){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else if (jellyfishesSpawned == 27){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else if (jellyfishesSpawned == 47){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else if (jellyfishesSpawned == 72){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else if (jellyfishesSpawned == 102){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else if (jellyfishesSpawned == 142){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else if (jellyfishesSpawned == 182){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else if (jellyfishesSpawned == 222){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else if (jellyfishesSpawned == 262){
        sunGlow.enableEmission = true;
	  //LightsDown();
	} else {
	    sunGlow.enableEmission = false;
	}	
 }

function Update () {  //can certain keys be activeated as an event and not have to be checked on update?
		//progressBar1.rectTransform.sizeDelta = Vector2.Lerp(progressBar1.rectTransform.sizeDelta,new Vector2(0,8),Time.deltaTime*3);

	WaveOver();

	labTimeValue = labTime;
	EnemyTiers();

	if (Input.GetKeyDown (KeyCode.M)){
		DestroyByContact.money += 10000;
		missiles += 30;
		satellites += 30;
		singularityMissileCount += 30;
		modules += 30;
	}
		
	if (Input.GetKeyDown (KeyCode.V)){
		AudioListener.volume = 0;
	}
		
	if (Input.GetKeyDown (KeyCode.B)){
		AudioListener.volume = 1;
	}
		
	if (Input.GetKeyDown (KeyCode.L)){
		Time.timeScale = Time.timeScale + 3.0;
	}
		
	if (Input.GetKeyDown (KeyCode.K) && Time.timeScale > 1){
		Time.timeScale = Time.timeScale - 3.0;
	}

	/////////////////////////////////////////////	
				
		//CITY 1
		
	if ((city1TechsResearched >= 3) && (city1TechsResearched < 6)){
		//play build up to level 1 animation
		if (!isPaused){
            if (!city1Build1){
                city1Build1 = true;
            }
            city1.GetComponent.<Animation>().Play("Building1");
            city1.GetComponent.<Animation>()["Building1"].speed = .75;
		}
		//city1Wrecked.renderer.enabled = false;
		city1SmokeParticle1.Stop();
		city1SmokeParticle2.Stop();
		//play happy music part 1
		HappyBase1.volume = .5;
	}
		
	if ((city1TechsResearched >= 6) && (city1TechsResearched < 9)){
		if (!isPaused){
            city1.GetComponent.<Animation>().Play("Building2");
            city1.GetComponent.<Animation>()["Building2"].speed = .75;
		}
	}
		
	if ((city1TechsResearched >= 9) && (city1TechsResearched < 12)){
		if (!isPaused){
            city1.GetComponent.<Animation>().Play("Building3");
            city1.GetComponent.<Animation>()["Building3"].speed = .75;
		}
	}
		
	if ((city1TechsResearched >= 12) && (city1TechsResearched < 15)){
		if (!isPaused){
            city1.GetComponent.<Animation>().Play("Building4");
            city1.GetComponent.<Animation>()["Building4"].speed = .75;
		}
	}

	if (Input.GetButtonDown ("Fire1") && (!BuildingControl.isZoomed)) {
		if (Time.timeScale == 1.0){
			isPaused = true;
			Time.timeScale = 0;
		} else {
			Time.timeScale = 1.0;
			isPaused = false;
		}
	}
		
	if (!BuildingControl.isZoomed){
        if ((Input.GetKeyDown("space")) && (missiles > 0 && CannonControl.isMissile == true) && (missileTimer == 0.0)) {
            Instantiate(missileShot, missileSpawn.position, missileSpawn.rotation);
            MissileShootAudio.Play();
        
            missiles --;
             
            monorail.GetComponent.<Animation>()["Shoot"].speed = 2;
            monorail.GetComponent.<Animation>()["Open"].speed = .5;
            monorail.GetComponent.<Animation>()["Reload"].speed = reloadSpeed;
            monorail.GetComponent.<Animation>().Stop("Reload");
            monorail.GetComponent.<Animation>().Play("Reload");
            //monorail.animation.CrossFadeQueued("Reload",.2,QueueMode.CompleteOthers);
             
            missileTimer = missileTimerMax;
        }
        if ((Input.GetKeyDown("space")) && (singularityMissileCount > 0 && CannonControl.isMissile2 == true) && (missileTimer == 0.0))     {
 
            Instantiate(singularityMissile, missileSpawn.position, missileSpawn.rotation);
            MissileShootAudio.Play();
            
            singularityMissileCount --;
            
            monorail.GetComponent.<Animation>()["Shoot"].speed = 2;
            monorail.GetComponent.<Animation>()["Open"].speed = .5;
            monorail.GetComponent.<Animation>()["Reload"].speed = reloadSpeed;
            monorail.GetComponent.<Animation>().Stop("Reload");
            monorail.GetComponent.<Animation>().Play("Reload");
            //monorail.animation.CrossFadeQueued("Reload",.2,QueueMode.CompleteOthers);
            
            missileTimer = missileTimerMax;
        }
    }
	
	// New satellite launching
	if ((Input.GetKeyDown("space")) && (CannonControl.isSatellite == true) && (satelliteTimer == 0.0) && (DestroyByContact.money >= satelliteCost) && (canLaunch)){
       
       var newSatellite = Instantiate(satelliteShot, satelliteSpawn.position, satelliteSpawn.rotation);
       
       if (SatelliteShootNew.lowerSatZone){
       Instantiate(guideToDestroy, realGuide.transform.position, realGuide.transform.rotation);
       }      
             newSatellite.name = "Satellite" + nextSatelliteNumber;
             nextSatelliteNumber += 1;
             //monorail.animation.Play("SatelliteLoad");
             DestroyByContact.money -= satelliteCost;
             satelliteTimer = satelliteTimerMax;
             MissileShootAudio.Play();
             activeSatellites += 1;
	
	}
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isSatellite == true) && (satelliteTimer == 0.0) && (DestroyByContact.money >= satelliteCost) && (!canLaunch)){
	   NoSatelliteAudio.Play();
	}
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isSatellite == true) && (satelliteTimer == 0.0) && (DestroyByContact.money < satelliteCost)){
	   NoSatelliteAudio.Play();
	}
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isSatellite == true) && (satelliteTimer == 0.0) && (DestroyByContact.money < satelliteCost) && (!canLaunch)){
	   NoSatelliteAudio.Play();
	}
	
	//Mining satellites
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isSatellite2 == true) && (satelliteTimer == 0.0) && (DestroyByContact.money >= captureSatelliteCost)){
       var newCaptureSatellite = Instantiate(captureSat, satelliteSpawn.position, satelliteSpawn.rotation);
             
        newCaptureSatellite.name = "CaptureSatellite" + nextSatelliteNumber;
        nextSatelliteNumber += 1;
        //monorail.animation.Play("SatelliteLoad");
        DestroyByContact.money -= captureSatelliteCost;
        satelliteTimer = satelliteTimerMax;
        MissileShootAudio.Play();
        //activeSatellites += 1;
	}
	
	//Thruster add on
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isAddOn == true) && (satelliteTimer == 0.0) && (modules > 0)){  
       var newThrusterSatellite = Instantiate(thrusterAddOnSat, satelliteSpawn.position, satelliteSpawn.rotation);
             
        newThrusterSatellite.name = "ThrusterSatellite" + nextSatelliteNumber;
        nextSatelliteNumber += 1;
        //monorail.animation.Play("SatelliteLoad");
        modules -= 1;
        satelliteTimer = satelliteTimerMax;
        MissileShootAudio.Play();
        //activeSatellites += 1;
	}
	
	//Size add on
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isAddOn2 == true) && (satelliteTimer == 0.0) && (modules > 0)){   
       var newSizeSatellite = Instantiate(sizeAddOnSat, satelliteSpawn.position, satelliteSpawn.rotation);
             
        newSizeSatellite.name = "SizeSatellite" + nextSatelliteNumber;
        nextSatelliteNumber += 1;
        //monorail.animation.Play("SatelliteLoad");
        modules -= 1;
        satelliteTimer = satelliteTimerMax;
        MissileShootAudio.Play();
        //activeSatellites += 1;
	}
	
	//Mining add on
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isAddOn3 == true) && (satelliteTimer == 0.0) && (modules > 0)){
       var newMiningSatellite = Instantiate(miningAddOnSat, satelliteSpawn.position, satelliteSpawn.rotation);
             
        newMiningSatellite.name = "MiningSatellite" + nextSatelliteNumber;
        nextSatelliteNumber += 1;
        //monorail.animation.Play("SatelliteLoad");
        modules -= 1;
        satelliteTimer = satelliteTimerMax;
        MissileShootAudio.Play();
        //activeSatellites += 1;
	}
	
	//Shield add on
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isAddOn4 == true) && (satelliteTimer == 0.0) && (modules > 0)){      
       var newShieldSatellite = Instantiate(shieldAddOnSat, satelliteSpawn.position, satelliteSpawn.rotation);
             
        newShieldSatellite.name = "ShieldSatellite" + nextSatelliteNumber;
        nextSatelliteNumber += 1;
        //monorail.animation.Play("SatelliteLoad");
        modules -= 1;
        satelliteTimer = satelliteTimerMax;
        MissileShootAudio.Play();
        //activeSatellites += 1;
	}
	
	//Laser add on
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isAddOn5 == true) && (satelliteTimer == 0.0) && (modules > 0)){      
       var newLaserSatellite = Instantiate(laserAddOnSat, satelliteSpawn.position, satelliteSpawn.rotation);
             
        newLaserSatellite.name = "LaserSatellite" + nextSatelliteNumber;
        nextSatelliteNumber += 1;
        //monorail.animation.Play("SatelliteLoad");
        modules -= 1;
        satelliteTimer = satelliteTimerMax;
        MissileShootAudio.Play();
        //activeSatellites += 1;
	}
	
	//Redirect satellites
	
	if ((Input.GetKeyDown("space")) && (CannonControl.isSatellite3 == true) && (satelliteTimer == 0.0) && (DestroyByContact.money >= redirectSatelliteCost)){      
       var newRedirectSatellite = Instantiate(redirectSatellite, satelliteSpawn.position, satelliteSpawn.rotation);
             
        newRedirectSatellite.name = "RedirectSatellite" + nextSatelliteNumber;
        nextSatelliteNumber += 1;
        //monorail.animation.Play("SatelliteLoad");
        DestroyByContact.money -= redirectSatelliteCost;
        satelliteTimer = satelliteTimerMax;
        MissileShootAudio.Play();
        //activeSatellites += 1;
	}
	
	
	
	if (missileTimer > 0){
	   missileTimer -= Time.deltaTime;
	}
	if (missileTimer < 0){
	   missileTimer = 0;
	}
	if (satelliteTimer > 0){
	   satelliteTimer -= Time.deltaTime;
	}
	if (satelliteTimer < 0){
	   satelliteTimer = 0;
	}

	/****replace next 20ish lines?

    function onSatelliteChange () {   //is there a way to detect change in satellite numbers? Then we can take this out of update as well.
        if(activeSatellites/5 == 1)
            satelliteCost += 25;
        else
            satelliteCost += ((activeSatellites/5)*50);      //integer division
    }
    */
	if (activeSatellites > 5){
	   satelliteCost = 125;
	}
	if (activeSatellites > 10){
	   satelliteCost = 175;
	}
	if (activeSatellites > 15){
	   satelliteCost = 225;
	}
	if (activeSatellites > 20){
	   satelliteCost = 275;
	}
	if (activeSatellites > 25){
	   satelliteCost = 325;
	}
	if (activeSatellites > 30){
	   satelliteCost = 375;
	}
	if (AtmoHealth.atmoHealth <= 0){
	   GameOver();
	}
}
	
function MusicPlay(){
	//yield WaitForSeconds (1);
	Base1.Play();
	Base2.Play();
	Base3.Play();
	HappyBase1.Play();
	Base1.volume = 1;
	//Base2.volume = .5;
	//Base3.volume = .5;
}
	
function GameOver(){
	LoseText.enabled = true;
	LoseText.transform.Translate(Vector3.left * Time.deltaTime * .4);
	yield WaitForSeconds (8);
	Application.LoadLevel ("Welcome");
}
	
	function WreckagePlacement(){
	
	}
	
	
	
	