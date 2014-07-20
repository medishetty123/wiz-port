#pragma strict
var cube:GameObject;
var bar1 : bar;
function Start () {
cube=GameObject.FindGameObjectWithTag("energy");
bar1=cube.GetComponent(bar);
}

function Update () {
guiText.text=bar1.score.ToString();
}