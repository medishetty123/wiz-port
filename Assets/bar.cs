﻿using UnityEngine;
using System.Collections;

public class bar : MonoBehaviour {

	float countdown;
	public int aposition;
	public int score;
	Vector3 xp;
	void  Start (){
		countdown=10.0f;
		aposition =1;
		score=0;
		
	}
	
	void  FixedUpdate (){
		
		if(countdown<=0.0f)
		{Application.LoadLevel("1");
		}
		else if(countdown>0.0f)
		{
			countdown-=Time.deltaTime;
			xp=new Vector3(-(countdown/2)+9,gameObject.transform.position.y,gameObject.transform.position.z);
			gameObject.transform.position=xp;
		}
		
		
	}
	public void  add1 (){
		
		score+=1;
		if(countdown<=8){
			countdown+=2.0f;}
		
		
	}
	public void  flip (){if (aposition==1){
			aposition=-1;
		}
		else
		{aposition=1;
		}
		
	}
}
