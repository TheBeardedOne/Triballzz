#pragma strict
var startFlag = 0;
//Speed of Player
var speed = 2;
var onMenu = 1;


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
	var player = GameObject.CreatePrimitive(PrimitiveType.Sphere);
		player.transform.position = Vector3(2,2.5,1.8);
		player.name = "player";
		
		//Player sphere given properties
		player.AddComponent(Rigidbody);
		player.AddComponent("PlayerMove");
		player.AddComponent("Touch");
		
		//player.AddComponent(SphereCollider);
		player.collider.material.dynamicFriction = .5;
		player.collider.material.staticFriction = 0;
		player.collider.material.bounciness = .95;
		player.collider.material.frictionCombine = PhysicMaterialCombine.Minimum;
		player.collider.material.bounceCombine = PhysicMaterialCombine.Maximum;
		player.collider.material.dynamicFriction2 = 0;
		player.collider.material.staticFriction2 = 0;
		player.rigidbody.angularDrag = 20.0;
		//player.rigidbody.drag = 1.0;
	
	//For loop variables
	var i = 0;
	var y = 0;
	
	//Creation of GameObject and tiles
	var tile : GameObject = Resources.Load("flat_tile");
	
	
	tile.transform.localScale = Vector3(0.49,0.49,0.49);
	//tile.transform.localRotation = Quaternion.AngleAxis(-90, Vector3(1,0,0));
	
	
	//tile.collider.enabled = true;
	
	var clone : GameObject;
	
	//Destroys our "Model" tile, so it does not linger around after map setup.
	//Destroy(tile);
	
	//Tile Placement algorithm, this will be heavily modified in the future. 
	//Some will be completely random, others will be pre determined.
	
		for(i = 0; i < 5; i++){
				for(y = 0; y < 5; y++){
					clone = Instantiate(tile,Vector3(i,0,y), Quaternion.identity);
					clone.AddComponent(MeshCollider);
   					clone.transform.localRotation = Quaternion.AngleAxis(0, Vector3(1,0,0));

					//Randomize Tile Color
				//	clone.renderer.material.color = new Color(Random.Range(1.0,4.0), Random.Range(5.0,10.0), Random.Range(2.0,5.0));
					
					}
			}
		}