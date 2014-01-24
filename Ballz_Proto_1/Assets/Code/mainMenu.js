#pragma strict
var chooseLevel = 0;
var newPosition : Vector3; 
var gameStart = 0;

function Update () {

Debug.Log("HERE");
	if(gameStart == 0) {
	 newPosition = camera.transform.position;
	 gameStart = 1;
	}
	cameraPan();

}

function OnGUI(){

if(chooseLevel == 0){
	if(GUI.Button(Rect (450, 50, 200, 100), "Play!!")&& chooseLevel == 0){
		//newPosition.x = GameObject.Find("panhere").transform.position.x;
		//newPosition.y = GameObject.Find("panhere").transform.position.y;
		Application.LoadLevel("Balls_Proto");
	}
	if(GUI.Button(Rect (450, 250, 200, 100), "Choose Level") && chooseLevel == 0){
		chooseLevel = 1;
	}
	if(GUI.Button(Rect (450, 450, 200, 100), "HighScores") && chooseLevel == 0){
		Application.LoadLevel("highScores");
	}
	if(GUI.Button(Rect (450, 650, 200, 100), "Exit") && chooseLevel == 0){
		Application.Quit();
	}
}

if(chooseLevel == 1){
	
	
		if(GUI.Button(Rect (200, 150, 200, 100), "Level 1")&& chooseLevel == 1){
			Application.LoadLevel("Balls_Proto");
		}
		if(GUI.Button(Rect (400, 150, 200, 100), "Level 2") && chooseLevel == 1){
			Application.LoadLevel("level_2_jungle");
		}
		if(GUI.Button(Rect (600, 150, 200, 100), "Level 3")&& chooseLevel == 1){
			Application.LoadLevel("Balls_Proto");
		}
		if(GUI.Button(Rect (800, 150, 200, 100), "Level 4")&& chooseLevel == 1){
			Application.LoadLevel("Balls_Proto");
		}
		if(GUI.Button(Rect (200, 350, 200, 100), "Level 5")&& chooseLevel == 1){
			Application.LoadLevel("Balls_Proto");
		}
		if(GUI.Button(Rect (400, 350, 200, 100), "Level 6") && chooseLevel == 1){
			Application.LoadLevel("level_1_jungle");
		}
		if(GUI.Button(Rect (600, 350, 200, 100), "Level 7")&& chooseLevel == 1){
			Application.LoadLevel("Balls_Proto");
		}
		if(GUI.Button(Rect (800, 350, 200, 100), "Level 8")&& chooseLevel == 1){
			Application.LoadLevel("Balls_Proto");
		}
		if(GUI.Button(Rect (200, 550, 200, 100), "Level 9")&& chooseLevel == 1){
			Application.LoadLevel("Balls_Proto");
		}
		if(GUI.Button(Rect (400, 550, 200, 100), "Level 10") && chooseLevel == 1){
			Application.LoadLevel("level_1_jungle");
		}
		if(GUI.Button(Rect (600, 550, 200, 100), "Level 11")&& chooseLevel == 1){
			Application.LoadLevel("Balls_Proto");
		}
		if(GUI.Button(Rect (800, 550, 200, 100), "Level 12")&& chooseLevel == 1){
			Application.LoadLevel("Balls_Proto");
		}
	}
}

function cameraPan(){

 camera.transform.position = Vector3.Lerp(camera.transform.position, newPosition,  Time.deltaTime);
}