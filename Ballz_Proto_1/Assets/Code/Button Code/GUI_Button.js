#pragma strict
var string = "poop";
var isPaused = 0;
var onMenu = 1;
public static var gameStart = 0;

var icon : Texture2D;
var imageTextAsset : TextAsset;

function OnGUI(){
	
	//*** MENU BUTTONS ***
	/*if(onMenu == 1){
		if(GUI.Button(Rect (450, 450, 150, 75), "Play!")){
			Application.LoadLevel("Balls_Proto");
		}
		
	}*/
	
	//**** IN GAME BUTTONS ****
	if(gameStart == 0){
		Time.timeScale = 0.0; 
		Input.gyro.enabled = false;
		if (GUI.Button (Rect (20,10, 150, 75), icon)) {
		Time.timeScale = 1.0;
		GameObject.Find("player").rigidbody.velocity = Vector3.zero;
		
		GUI_Button.gameStart = 0;
		Input.gyro.enabled = true;
		gameStart = 1;
		}
	}
	
	if(gameStart == 1){
		if(GUI.Button(Rect (20, 20, 100, 60), "Restart")){
		
			Application.LoadLevel(Application.loadedLevel);
			gameStart = 0;
		}
	}
	
	if(gameStart == 1){
		if(isPaused == 0){
					if(GUI.Button(Rect (Screen.width - 120, 20, 100, 60), "Pause")){
					isPaused = 1;
					Time.timeScale = 0.0; 
					}
				}
				
				if(isPaused == 1){
						if(GUI.Button(Rect (Screen.width - 120, 20, 100, 60), "UnPause")){
							isPaused = 0;
							Time.timeScale = 1.0; 
					}
	 
	}
	
	} // **** END GAME BUTTONS****
	
	
	}
	