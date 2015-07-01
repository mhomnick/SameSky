#pragma strict
 
 var color : Color;
 var introText : GUIText;
 
 function Start(){
     introText.text = "I couldn't help but say to Mr. Gorbachev,\n just think how easy his task and mine might be \nin these meetings that we held if suddenly\n there was a threat to this world from another planet.\n\n We'd find out once and for all\n that we really are all human beings here\n on this earth together.\n\n - Ronald Reagan, 1985";
     color = Color.white;
 }
 
 function Update(){
     Fade();
     if (GetComponent.<GUIText>().material.color.a <= 0){
          LoadGame();
     }
 }
  
 function Fade(){
 	yield WaitForSeconds (10);
     while (GetComponent.<GUIText>().material.color.a > 0){
         GetComponent.<GUIText>().material.color.a -= 0.05 * Time.deltaTime * 0.01;
          yield;
     }
 }
 
 function LoadGame(){
     yield WaitForSeconds(2);
     Application.LoadLevel ("StarWars");
 }