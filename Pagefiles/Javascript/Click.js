
// Tried shortening refrences with these but it just didn't cooperate very well
//var cycledis = document.getElementById("cycle")
//var submitdis = document.getElementById("submit")
//var selector = document.getElementById("selector")
function Clicked(){

if(document.getElementById("cycle").display = "none"){
  document.getElementById("cycle").display = "none";
document.getElementById("selector").display = "initial";
document.getElementById("submit").opacity = .90;
document.getElementById("cycle").opacity = 0.75;
document.getElementById("selector").display = "none";
  
} 
  
else{
document.getElementById("cycle").display = "inital";
document.getElementById("selector").display = "none";
document.getElementById("submit").opacity = 0.75;
document.getElementById("cycle").opacity = 0.90; 
document.getElementById("selector").display =  "initial";
  
}}
