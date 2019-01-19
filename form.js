/*
   
   William Hogeveen Music
   form.js
   
   Authors: Caleb Belcourt and Shohei Maeda
   Date: Nov 6, 2017
   
*/


/*
Function that will focus on the name input on the form as soon as the user loads up the page.
*/

function InitiateForm(){


document.fanInfo.fanName.focus();
}

/* Function that will validate form by making sure that all the required elements in this case the name and 
email are filled out.
*/

function ValidateForm() {

var name = document.forms["fanInfo"]["fanName"].value;

var email =document.forms["fanInfo"]["fanEmail"].value;

var at=email.indexOf("@");  
var dot=email.lastIndexOf(".");

    if (name == "") {
        alert("Incomplete Form, name not filled out");
        return false;
    }
	  
  else if(at<1 || dot<at+2 || dot+2>=email.length){
  alert("Incomplete Form, non-valid email format");
  return false;
}

else{
alert("The form has been completed successfully");
return true;
}
}