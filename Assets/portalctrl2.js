#pragma strict

var countdown:float;
var countdownc:float;
var rend: SpriteRenderer;
var cube:GameObject;
var bar1 : bar;

var rendb : SpriteRenderer;

function Start () {

countdown=0.0f;
countdownc=Random.Range(0,3);
rend=gameObject.GetComponent(SpriteRenderer);
cube=GameObject.FindGameObjectWithTag("energy");
bar1=cube.GetComponent(bar);
}

function FixedUpdate () {
if(bar1.aposition ==1){
if(countdown<=0.0f)
{
rend.color= new Color(.5,.5,.5,.5);
gameObject.transform.collider2D.isTrigger=false;


	if(countdownc<=0.0f)
	{
	countdown=1.0f;
	}
	else if(countdownc>0.0f)
	{countdownc-=Time.deltaTime;
	}



}


else if(countdown>0.0f)
{
rend.color = new Color(1,1,1,1);
gameObject.transform.collider2D.isTrigger=true;
countdown-=Time.deltaTime;
countdownc=Random.Range(0,3);
}
}
else
{
rend.color= new Color(.5,.5,.5,.5);
gameObject.transform.collider2D.isTrigger=false;
countdown=0;
}

}
function OnTriggerEnter2D(collider : Collider2D)
{
collider.transform.position.y-=1.5;
bar1.add1();
bar1.flip();

}
function OnCollisionEnter2D(col : Collision2D)
    {
        if(col.gameObject.tag == "Player")
        {
          rendb = col.gameObject.GetComponent(SpriteRenderer);
          rendb.color= new Color(.3,.4,.2,1);
        	Application.LoadLevel("1");
        
        }
    }


