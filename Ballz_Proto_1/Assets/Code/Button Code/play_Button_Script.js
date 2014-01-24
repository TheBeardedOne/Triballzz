#pragma strict

var chooseLocation = 0;
var previousPosition :Vector3;
var newPosition : Vector3; 
var gameStart = 0;


//
// THIS BUTTON WILL PLAY THE LEVEL MOST RECENTLY UNLOCKED
//

function OnMouseDown(){
	
	camReset();
	Application.LoadLevel("Balls_Proto");
}

function Update () {
	
}


function camReset(){
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