#pragma strict
var startFlag = 0;
//Speed of Player
var speed = 2;
var onMenu = 1;
var shader;
var mat;
var oOfI : int;
var zOfY : int;
var yLOCATION : int;
var tex : Texture;

function Update () {
//Checks to see if the game board is created
if(startFlag == 0){
//Flag. Has this run before? 1 = yes, 0 = no.
startFlag = 1;
// This part of the code needs to change for when we select maps. 
setUp();
		//iPhoneSettings.screenOrientation = iPhoneScreenOrientation.LandscapeRight;
	 	//AndroidTargetDevice.screenOrientation.LandscapeRight;	
}
//Gameplay starts here
}

	function setUp() {
	//***Player sphere created***
	
	var player : GameObject =  Resources.Load("ballFBX");
	//var player = GameObject.CreatePrimitive(PrimitiveType.Sphere);
		player = GameObject.Find("ballFBX");
	
		player.transform.position = Vector3(960,-196.2845,193);
		player.name = "player";
		
		//Player sphere given properties
		player.AddComponent(Rigidbody);
		player.AddComponent("PlayerMove");
		player.AddComponent("Touchy");
		
		//Searches for a shader and assigns it to a variable
		shader = Shader.Find("Toony-Basic");
	
		//player.AddComponent(SphereCollider);
		player.collider.material.dynamicFriction = .5;
		player.collider.material.staticFriction = 0;
		player.collider.material.bounciness = 1.0;
		player.collider.material.frictionCombine = PhysicMaterialCombine.Minimum;
		player.collider.material.bounceCombine = PhysicMaterialCombine.Maximum;
		player.collider.material.dynamicFriction2 = 0;
		player.collider.material.staticFriction2 = 0;
		//The comment below adds a shader to the ball. Currently it is only purple for unkown reasons.
		//player.renderer.material.shader = shader;
		player.rigidbody.angularDrag = 200.0;
		player.rigidbody.freezeRotation = true;

		//player.rigidbody.drag = 1.0;
	
	//For loop variables
	var i = 0;
	var y = 0;
	
	//Creation of GameObject and tiles
	var superTile : GameObject = GameObject.Find("superTile");
	
	//Resources.Load("superTile");
	//This code sets the variable equal to the actual object. 
	// I do not know how the regular tile is being instantiated... but its working.
	//superTile = GameObject.Find("superTile");
	var tile : GameObject = GameObject.Find("grassyTile");
	
	//Resources.Load("flat_tile");
	
	
	// scales the tiles to correct sizes
	//superTile.transform.localScale = Vector3(0.49,1.5,0.49);
	//tile.transform.localScale = Vector3(0.49,0.65,0.49);
	
	//tile.transform.localRotation = Quaternion.AngleAxis(-90, Vector3(1,0,0));
	
	//Clones created for objects
	var superClone : GameObject;
	var clone : GameObject;
	
	
	//Destroys our "Model" tile, so it does not linger around after map setup. Not needed since build 0.15 (perhaps earlier)
	//Destroy(tile);
	
	//**** TILE PLACEMENT ALGORITHM ****, 
	//this will be heavily modified in the future. 
	//All tiles will be pre determined
	
	/* THIS IS THE ORIGINAL CREATION CODE ******
		for(i = 0; i < 6; i++){
				for(y = 0; y < 6; y++){
				
				if((i == 2 || i ==3) && (y >= 2 && y <= 3)){
					superClone = Instantiate(superTile,Vector3(i,0,y), Quaternion.identity);
					superClone.AddComponent(MeshCollider);
   					superClone.transform.localRotation = Quaternion.AngleAxis(0, Vector3(1,0,0));
				}else{
					clone = Instantiate(tile,Vector3(i,0,y), Quaternion.identity);
					clone.AddComponent(MeshCollider);
   					clone.transform.localRotation = Quaternion.AngleAxis(0, Vector3(1,0,0));
				}
					//Randomize Tile Color
				//	clone.renderer.material.color = new Color(Random.Range(1.0,4.0), Random.Range(5.0,10.0), Random.Range(2.0,5.0));
					
					}
			}*/
			
			oOfI = GameObject.FindWithTag("locationMarker").transform.position.x;
			zOfY = GameObject.FindWithTag("locationMarker").transform.position.z;
			yLOCATION = GameObject.FindWithTag("locationMarker").transform.position.y;
			
			for(i = oOfI; i < oOfI + 7; i++){
				for(y = zOfY; y < zOfY + 7; y++){
				
				if((i == oOfI + 2 || i == oOfI + 4 || i == oOfI + 3) && (y >= zOfY + 2 && y <= zOfY + 4)){
					superClone = Instantiate(superTile,Vector3(i,yLOCATION,y), Quaternion.identity);
					superClone.AddComponent(MeshCollider);
   					superClone.transform.localRotation = Quaternion.AngleAxis(0, Vector3(1,0,0));
				}else{
					clone = Instantiate(tile,Vector3(i,yLOCATION,y), Quaternion.identity);
					clone.AddComponent(MeshCollider);
   					clone.transform.localRotation = Quaternion.AngleAxis(0, Vector3(1,0,0));
				}
					//Randomize Tile Color
				//	clone.renderer.material.color = new Color(Random.Range(1.0,4.0), Random.Range(5.0,10.0), Random.Range(2.0,5.0));
					
					}
			}
			
			for(i = oOfI+ 2; i < 5 + oOfI; i++){
				for(y = zOfY + 2; y < zOfY + 5; y++){
					clone = Instantiate(tile,Vector3(i,yLOCATION + 0.25,y), Quaternion.identity);
					clone.AddComponent(MeshCollider);
   					clone.transform.localRotation = Quaternion.AngleAxis(0, Vector3(1,0,0));
				}	
			}
			
		}