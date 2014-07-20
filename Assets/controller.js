#pragma strict
var position : int;
var startpos: Vector3;
var endpos : Vector3;
var SW : int;
var finx : float;
var touchDeltaPosition: Vector2;
var touchPosition : Vector2;
var firstpos : Vector2;
var cswipe : Vector2;
var pq : int;

function Start () {
position=1;

}

function Update () {

/*if(Input.GetKeyDown(KeyCode.UpArrow)&&position==-1)
{
position=1;
gameObject.rigidbody2D.velocity=Vector2(0,0);
gameObject.rigidbody2D.gravityScale=-9;
}
if(Input.GetKeyDown(KeyCode.DownArrow)&&position==1)

{

position=-1;
gameObject.rigidbody2D.velocity=Vector2(0,0);
gameObject.rigidbody2D.gravityScale=9;
} */
if(Input.GetMouseButtonDown(0)){
firstpos=Input.mousePosition;

}
if(Input.GetMouseButtonUp(0)){
cswipe=Input.mousePosition;
pq=cswipe.y-firstpos.y;
				if(pq>0&&position==-1)
				{
				position=1;
				gameObject.rigidbody2D.velocity=Vector2(0,0);
				gameObject.rigidbody2D.gravityScale=-9;
				}
				if(pq<0&&position==1)

				{

				position=-1;
				gameObject.rigidbody2D.velocity=Vector2(0,0);
				gameObject.rigidbody2D.gravityScale=9;
				}

}


/*if (Input.touchCount > 0 && Input.GetTouch (0).phase == TouchPhase.Began) 
        {
            finx = 0;
            
            SW = 0;
            touchDeltaPosition = Input.GetTouch (0).position;
            startpos = new Vector3 (touchDeltaPosition.x, touchDeltaPosition.y, 0);
        }      
        if (Input.touchCount > 0 && Input.GetTouch (0).phase == TouchPhase.Moved) 
        {
            SW = 1;
        }
 
    
        if (Input.touchCount > 0 && Input.GetTouch (0).phase == TouchPhase.Ended) 
        {
            if (SW) 
            {
                 touchPosition = Input.GetTouch (0).position;
                endpos = new Vector3 (touchPosition.x,touchPosition.y,0);
                finx = endpos.y - startpos.y;
				if(finx>0&&position==-1)
				{
				position=1;
				gameObject.rigidbody2D.velocity=Vector2(0,0);
				gameObject.rigidbody2D.gravityScale=-9;
				}
				if(finx<0&&position==1)

				{

				position=-1;
				gameObject.rigidbody2D.velocity=Vector2(0,0);
				gameObject.rigidbody2D.gravityScale=9;
				}


			}
		}*/
		
		
		
		
}