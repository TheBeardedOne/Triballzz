#pragma strict

import System;
import System.Collections;
import System.Xml;
import System.Xml.Serialization;
import System.IO;
import System.Text;
public var currentScore = 0;
var string = "poop";

 public var _Save : Rect;
 public var _Load : Rect;
 public var _SaveMSG : Rect;
 public var _LoadMSG : Rect;
//var _ShouldSave : boolean;
//var _ShouldLoad : boolean;
//var _SwitchSave : boolean;
//var _SwitchLoad : boolean;
 public var _FileLocation : String;
 public var _FileName : String = "SaveData.xml";
 
//public GameObject _Player;
 public var _Player : GameObject;
 public var _PlayerName : String = "Joe Schmoe";
 
 public var myData : UserData;
 public var _data : String;




//var gameStart = 0;

var icon : Texture2D;
var imageTextAsset : TextAsset;

function OnCollisionExit(Hit : Collision){

	Debug.Log("Entered!");
	
// If the ball hits a basic tile, points are accumulated.	
if(Hit.gameObject.name == "Base_tile_col"){
	Debug.Log("Hit!");
	GameObject.Find("player").rigidbody.angularVelocity = Vector3.zero;
	Destroy(Hit.gameObject);
	currentScore = currentScore + 10;
}

if(Hit.gameObject.name == "Spec_tile_col"){
	Debug.Log("Hit Super!");
	GameObject.Find("player").rigidbody.angularVelocity = Vector3.zero;
	Destroy(Hit.gameObject);
	currentScore = currentScore + 20;
	
	//TEST SPECIAL ABILITY. DELETE THIS LATER
	Time.timeScale = 0.5; 
	yield WaitForSeconds(2);
	Time.timeScale = 1.0;
}

if(Hit.gameObject.name == "floor"){
		Destroy(Hit.gameObject);
		Input.gyro.enabled = false;
		GUI_Button.gameStart = 3;
		//GUI.Box(Rect (Screen.width - 100,Screen.height - 50,100,50), "Points:" + string);
		//Application.LoadLevel("Balls_Proto");
	}


}

function OnGUI(){
		string = currentScore.ToString();
		
		if(!(GUI_Button.gameStart == 3)){
			GUI.Box(Rect (Screen.width - 200,Screen.height - 150,175,85), "Points:" + string);
		}
		if(GUI_Button.gameStart == 3){
			
			Input.gyro.enabled = false;

			GameObject.Find("player").rigidbody.Sleep();
			
			GUI.Box(Rect(375,100, 400, 200), "Your score is:" + string);
			
			if(GUI.Button(Rect (300, 350, 200, 100), "Play Again?")){
				Application.LoadLevel("Balls_Proto");
				GUI_Button.gameStart = 0;

			}
			
			if(GUI.Button(Rect (625, 350, 200, 100), "Main Menu")){
				Input.gyro.enabled = false;
				GUI_Button.gameStart = 0;
				//************SAVE GAME*********************
				
				 Debug.Log("We have entered da sev");
      			//Debug.Log("SaveLoadXML: sanity check:"+ _Player.transform.position.x);
 
      			/*myData._iUser.x = _Player.transform.position.x;
      			myData._iUser.y = _Player.transform.position.y;
     			 myData._iUser.z = _Player.transform.position.z;
     			 myData._iUser.name = _PlayerName;   \
     			 */
      
    			 myData.player.score = currentScore;
 
     			 // Time to creat our XML!
     			 _data = SerializeObject(myData);
     			 // This is the final resulting XML from the serialization process
      			CreateXML();
      			
      			Debug.Log(_data);
      			Debug.Log("we have exited da sev");
      			LoadXML();
				
				
					Application.LoadLevel("mainMenu");
			}
			
			
			
		
		}
		
		
}

 
//public class GameSaveLoad: MonoBehaviour {
 
// An example where the encoding can be found is at
// http://www.eggheadcafe.com/articles/system.xml.xmlserialization.asp
// We will just use the KISS method and cheat a little and use
// the examples from the web page since they are fully described
 
// This is our local private members

//private var VPosition : Vector3;
 
// When the EGO is instansiated the Start will trigger
// so we setup our initial values for our local members
//function Start () {
/*function Awake () {	
      // We setup our rectangles for our messages
      _Save=new Rect(10,80,100,20);
      _Load=new Rect(10,100,100,20);
      _SaveMSG=new Rect(10,120,200,40);
      _LoadMSG=new Rect(10,140,200,40);
 
      // Where we want to save and load to and from
      _FileLocation=Application.dataPath;
 
 
      // we need soemthing to store the information into
      myData=new UserData();
   }
 
*/
 
   // ***************************************************
   // Saving The Player...
   // **************************************************   
  
 
    
   
 
 

 
/* The following metods came from the referenced URL */
//string UTF8ByteArrayToString(byte[] characters)
function UTF8ByteArrayToString(characters : byte[] )
{     
   var encoding : UTF8Encoding  = new UTF8Encoding();
   var constructedString : String  = encoding.GetString(characters);
   return (constructedString);
}
 
//byte[] StringToUTF8ByteArray(string pXmlString)
function StringToUTF8ByteArray(pXmlString : String)
{
   var encoding : UTF8Encoding  = new UTF8Encoding();
   var byteArray : byte[]  = encoding.GetBytes(pXmlString);
   return byteArray;
}
 
   // Here we serialize our UserData object of myData
   //string SerializeObject(object pObject)
function SerializeObject(pObject : Object)
{
   var XmlizedString : String  = null;
   var memoryStream : MemoryStream  = new MemoryStream();
   var xs : XmlSerializer = new XmlSerializer(typeof(UserData));
   var xmlTextWriter : System.Xml.XmlTextWriter  = new System.Xml.XmlTextWriter(memoryStream, Encoding.UTF8);
   xs.Serialize(xmlTextWriter, pObject);
   memoryStream = xmlTextWriter.BaseStream; // (MemoryStream)
   XmlizedString = UTF8ByteArrayToString(memoryStream.ToArray());
   return XmlizedString;
}
 
   // Here we deserialize it back into its original form
   //object DeserializeObject(string pXmlizedString)
function DeserializeObject(pXmlizedString : String)   
{
   var xs : XmlSerializer  = new XmlSerializer(typeof(UserData));
   var memoryStream : MemoryStream  = new MemoryStream(StringToUTF8ByteArray(pXmlizedString));
   var xmlTextWriter : System.Xml.XmlTextWriter  = new System.Xml.XmlTextWriter(memoryStream, Encoding.UTF8);
   return xs.Deserialize(memoryStream);
}
 
   // Finally our save and load methods for the file itself
function CreateXML()
{
   var writer : StreamWriter;
   //FileInfo t = new FileInfo(_FileLocation+"\\"+ _FileName);
   var t : FileInfo = new FileInfo(_FileLocation+"/"+ _FileName);
   if(!t.Exists)
   {
      writer = t.CreateText();
   }
   else
   {
      t.Delete();
      writer = t.CreateText();
   }
   writer.Write(_data);
   writer.Close();
   Debug.Log("File written.");
}
 
function LoadXML()
{
   //StreamReader r = File.OpenText(_FileLocation+"\\"+ _FileName);
   var r : StreamReader = File.OpenText(_FileLocation+"/"+ _FileName);
   var _info : String = r.ReadToEnd();
   r.Close();
   _data=_info;
   Debug.Log("File Read");
}


function Awake () {	
      // We setup our rectangles for our messages
      _Save=new Rect(10,80,100,20);
      _Load=new Rect(10,100,100,20);
      _SaveMSG=new Rect(10,120,200,40);
      _LoadMSG=new Rect(10,140,200,40);
 
      // Where we want to save and load to and from
      _FileLocation=Application.dataPath;
 
 
      // we need soemthing to store the information into
      myData=new UserData();
   }