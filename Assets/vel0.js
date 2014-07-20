#pragma strict
var pl : GameObject;
var ctrl: controller;

function Start(){
pl=GameObject.FindGameObjectWithTag("Player");
ctrl=pl.GetComponent(controller);


}
function OnTriggerEnter2D(collider : Collider2D)
	{
	
		if(collider.tag == "Player") {

			collider.gameObject.rigidbody2D.gravityScale=0;
			collider.gameObject.rigidbody2D.velocity=Vector2(0,0);
		
		
		}
		



		}