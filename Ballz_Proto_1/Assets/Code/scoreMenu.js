#pragma strict

function Start () {

}

function Update () {
	
}


var scrollViewVector : Vector2 = Vector2.zero;
var innerText : String = "I am inside the ScrollView";

function OnGUI () {
	// Begin the ScrollView
	scrollViewVector = GUI.BeginScrollView (Rect (400, 100, 400, 800), scrollViewVector, Rect (0, 0, 400, 400));

	if(GUI.Button(Rect (100, 500, 300, 100), "Back To Main Menu")){
		Application.LoadLevel("mainMenu");
	}
	
	// Put something inside the ScrollView
	innerText = GUI.TextArea (Rect (0, 0, 400, 400), innerText);

	// End the ScrollView
	GUI.EndScrollView();
}

/*function OnGUI()
{   
 
   // ***************************************************
   // Loading The Player...
   // **************************************************       
   if (GUI.Button(_Load,"Load")) {
 
      GUI.Label(_LoadMSG,"Loading from: "+_FileLocation);
      // Load our UserData into myData
      LoadXML();
      if(_data.ToString() != "")
      {
         // notice how I use a reference to type (UserData) here, you need this
         // so that the returned object is converted into the correct type
         //myData = (UserData)DeserializeObject(_data);
         myData = DeserializeObject(_data);
         // set the players position to the data we loaded
         VPosition=new Vector3(myData._iUser.x,myData._iUser.y,myData._iUser.z);             
         _Player.transform.position=VPosition;
         // just a way to show that we loaded in ok
         Debug.Log(myData._iUser.name);
      }
 
   }
*/