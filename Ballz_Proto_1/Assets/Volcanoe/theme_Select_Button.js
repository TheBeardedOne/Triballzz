#pragma strict


//var objects = FindObjectsOfType(GameObject);
var tempObj : GameObject;
var renderThemes = new ArrayList();
var i = 1;

function Start () {
    //Fills Array with theme select objects
	
}

function Update () {

}

    
    

function OnMouseDown(){

	//Logic flaw, please review. *****
	
	if(gameObject.name == "Forward_Arrow_button1"){
		if(i == 1){
			//Perhaps you need to "de-render" the hitbox as well to make this work.
			//Still need to figure out how to re-render an object.
			GameObject.Find("theme_Select Jungle").renderer.enabled = false;
		}
		if(i == 2){
			GameObject.Find("theme_Select Desert").renderer.enabled = false;

		}
		if(i == 3){
		
		}
		if(i ==4){
		
		}
		
		//Increases i to know what theme screen should be displayed
		i++;
		
		
		if(i == 1){
			GameObject.Find("theme_Select Jungle").renderer.enabled = true;
		}
		if(i == 2){
			GameObject.Find("theme_Select Desert").renderer.enabled = true;
		}
		
		if(i > 2){
			i = 2;
		}
		
		Debug.Log(i);
	}
	
	if(gameObject.name == "Backward_Arrow_button1"){
		if(i == 1){
			GameObject.Find("theme_Select Jungle").renderer.enabled = false;
		}
		if(i == 2){
			GameObject.Find("theme_Select Desert").renderer.enabled = false;

		}
		if(i == 3){
		
		}
		if(i ==4){
		
		}
		
		//Decreases i to know what theme screen should be displayed
		i--;
		
		
		if(i == 1){
			GameObject.Find("theme_Select Jungle").renderer.enabled = true;
		}
		if(i == 2){
			GameObject.Find("theme_Select Desert").renderer.enabled = true;
		}
		
		if(i < 1){
			i = 1;
		}
				Debug.Log(i);

	}
}
