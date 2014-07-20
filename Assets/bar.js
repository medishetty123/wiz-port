#pragma strict

var countdown:float;
var aposition : int;
var score : int;
function Start () {
countdown=10.0f;
aposition =1;
score=0;

}

function FixedUpdate () {

if(countdown<=0.0f)
{Application.LoadLevel("1");
}
else if(countdown>0.0f)
{
countdown-=Time.deltaTime;
gameObject.transform.position.x=-(countdown/2)+9;
}


}
function add1()
{

score+=1;
if(countdown<=8){
countdown+=2.0f;}


}
function flip()
{if (aposition==1){
aposition=-1;
}
else
{aposition=1;
}

}

