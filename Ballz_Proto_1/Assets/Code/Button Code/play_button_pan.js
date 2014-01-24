#pragma strict

static public var chooseLocation = 0;
var previousPosition :Vector3;
var newPosition : Vector3; 
var gameStart = 0;


//
// THIS IS THE BUTTON CODE FOR THE OPTIONS BUTTON
// THE CAMERA WILL PAN TO THE SET OF OPTIONS BUTTONS
//


function OnMouseDown(){
	Debug.Log("Button down");
	camReset();
	chooseLocation = 1;
	newPosition = GameObject.Find("theme").transform.position;
}

function Update () {
	//Debug.Log("HERE");
	if(chooseLocation == 1){
		cameraPan();
		if(GameObject.Find("Main Camera").transform.position == previousPosition){
			Debug.Log("FINISHED - Play Button");
			chooseLocation = 0;
		}
	}
	
}

function cameraPan(){
 previousPosition = GameObject.Find("Main Camera").transform.position;
 Debug.Log("CAM PAN");
 GameObject.Find("Main Camera").transform.position = Vector3.Lerp(GameObject.Find("Main Camera").transform.position, newPosition,  Time.deltaTime);
}

function camReset(){

		Debug.Log("CamReset Entered - Play Button");

	GameObject.Find("pPlane1").GetComponent.< buttonScript >().chooseLocation = 0;
	GameObject.Find("pPlane2").GetComponent.< options_button >().chooseLocation = 0;
	GameObject.Find("pPlane3").GetComponent.< play_button_pan >().chooseLocation = 0;
	GameObject.Find("pPlane4").GetComponent.< credits_Button >().chooseLocation = 0;
	GameObject.Find("pPlane6").GetComponent.< share_Button >().chooseLocation = 0;
	GameObject.Find("pPlane7").GetComponent.< scores_Button >().chooseLocation = 0;
	
	//back buttons
	GameObject.Find("pPlane8").GetComponent.< back_Button >().chooseLocation = 0;
	GameObject.Find("pPlane10").GetComponent.< back_Button >().chooseLocation = 0;
	GameObject.Find("pPlane13").GetComponent.< back_Button >().chooseLocation = 0;
	GameObject.Find("pPlane14").GetComponent.< back_Button >().chooseLocation = 0;
	GameObject.Find("pPlane15").GetComponent.< back_Button >().chooseLocation = 0;

}
