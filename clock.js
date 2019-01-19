"use strict";

/*
   
   William Hogeveen Music
   clock.js
   
   Authors: Caleb Belcourt and Shohei Scrub
   Date: Nov 6, 2017
   
*/


function displayClock(){
	
	var today= new Date();
	var localDate= today.toLocaleDateString();
	var localTime= today.toLocaleTimeString();
	
	document.getElementById("Today").innerHTML = "The date is " + localDate + ". Current Time:"+ localTime;
	}

displayClock();
setInterval("displayClock()" ,1000);
	
	
	
