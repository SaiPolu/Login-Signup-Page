 function validateform(){  
var n=document.myform.email.value;  
var p=document.myform.password.value;  
   if(n=="admin" && p=="S@1"){  
  alert("login succesful");  
   return false;
  }  
  else {  
    alert("Login Failed");  
    return false;  
  }
  
}  
