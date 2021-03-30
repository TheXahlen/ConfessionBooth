
// Tried shortening refrences with these but it just didn't cooperate very well
//var cycledis = document.getElementById("cycle")
//var submitdis = document.getElementById("submit")
//var selector = document.getElementById("selector")
function Clicked(){

if(cycledis.disabled = true){
document.getElementById("cycle").disabled = false;
document.getElementById("submit").disabled = true;
document.getElementById("submit").opacity = .90;
document.getElementById("cycle").opacity = 0.75;
selector = document.getElementById("selector").display = none;
  
} 
  
else{
document.getElementById("cycle").disabled = true;
document.getElementById("submit").disabled = false;
document.getElementById("submit").opacity = 0.75;
document.getElementById("cycle").opacity = 0.90; 
selector = document.getElementById("selector").display =  initial;
  
}}
