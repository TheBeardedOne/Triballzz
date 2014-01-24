
var speed = 1;
var x;
var y;

function Update () {
	
	//This hopefully prevents the player object from bouncing at angles
	rigidbody.angularVelocity = Vector3.zero;

		
	if(Input.GetButton("W")){
		rigidbody.AddForce(0,0,5);
		rigidbody.angularVelocity = Vector3.zero;

	 		}
	if(Input.GetButton("S")){
		rigidbody.AddForce(0,0,-5);
		rigidbody.angularVelocity = Vector3.zero;

	 		}
	if(Input.GetButton("A")){
		rigidbody.AddForce(-5,0,0);
		rigidbody.angularVelocity = Vector3.zero;

	 		}
	if(Input.GetButton("D")){
		rigidbody.AddForce(5,0,0);
		rigidbody.angularVelocity = Vector3.zero;

	 		}
	 		
	 		
	// Taken out in build 0.153
 	//Input.compensateSensors = true;	
	
	var GyroVector : Vector3;
	
	
	GyroVector = Input.gyro.rotationRate;
	
	// Movement speed accelerations added in 0.154
if(Input.gyro.enabled == true){

	if (GyroVector.x > 0.2){
		rigidbody.AddForce(Vector3(0, 0, -10));
		rigidbody.angularVelocity = Vector3.zero;
	 		if(GyroVector.x > 1.5){
		 		rigidbody.AddForce(Vector3(0, 0, -15));
		 		rigidbody.angularVelocity = Vector3.zero;
	 		}
	}
	if (GyroVector.y > 0.2){
		rigidbody.AddForce(Vector3(10, 0, 0));
		rigidbody.angularVelocity = Vector3.zero;

	 		if (GyroVector.y > 1.5){
		 	rigidbody.AddForce(Vector3(15, 0, 0));
		 	rigidbody.angularVelocity = Vector3.zero;
			}
	}
	if (GyroVector.x < -0.2) {
		rigidbody.AddForce(Vector3(0, 0, 10));
		rigidbody.angularVelocity = Vector3.zero;

			if (GyroVector.x < -1.5) {
				rigidbody.AddForce(Vector3(0, 0, 15));
				rigidbody.angularVelocity = Vector3.zero;
			}
	}
	if (GyroVector.y < -0.2){
		rigidbody.AddForce(Vector3(-10, 0, 0));
		rigidbody.angularVelocity = Vector3.zero;

	 		if (GyroVector.y < -1.5){
	 			rigidbody.AddForce(Vector3(-10, 0, 0));
	 			rigidbody.angularVelocity = Vector3.zero;
			}
		}
	}
	
	//This hopefully prevents the player object from bouncing at angles
	rigidbody.angularVelocity = Vector3.zero;
}