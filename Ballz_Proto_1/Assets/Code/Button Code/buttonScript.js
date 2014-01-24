#pragma strict

static public var chooseLocation = 0;
var previousPosition :Vector3;
var newPosition : Vector3; 
var gameStart = 0;


//
// THIS IS THE BUTTON CODE FOR THE "Tap to start"
//

function Start(){
	GameObject.Find("pPlane1").GetComponent.< buttonScript >().chooseLocation = 0;
}

function OnMouseDown(){
	Debug.Log("POOP");
	
	chooseLocation = 1;
	Debug.Log(chooseLocation);
	newPosition = GameObject.Find("menu").transform.position;
}



function Update () {
	//Debug.Log("HERE");
	if(chooseLocation == 1){
		cameraPan();
		if(GameObject.Find("Main Camera").transform.position == previousPosition){
			Debug.Log("FINISHED - Button Script");
			if(Application.loadedLevel == "mainMenu"){
			chooseLocation = 0;
			}
			//THIS COULD BE THE SPOT
		}
	}
	
}

function cameraPan(){
	Debug.Log("CAM PAN");
 previousPosition = GameObject.Find("Main Camera").transform.position;
 GameObject.Find("Main Camera").transform.position = Vector3.Lerp(GameObject.Find("Main Camera").transform.position, newPosition,  2.0* Time.deltaTime);
 
}

