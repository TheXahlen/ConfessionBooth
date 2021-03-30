// anything that needs to happen on load happens in here


function Loader(){
document.getElementById("cycle").disabled = true;
document.getElementById("cycle").opacity = 0.9;
}

function Clicked(){
var cycledis = document.getElementById("cycle")
var submitdis = document.getElementById("submit")
var selector = document.getElementById("selector")
if(cycledis.disabled = true){
cycledis.disabled = false;
submitdis.disabled = true;
submitdis.opacity = .90;
cycledis.opacity = 0.75;
selector.display = "none";
  
} else{
cycledis.disabled = true;
submitdis.disabled = false;
submitdis.opacity = 0.75;
cycledis.opacity = 0.90; 
selector.display =  "initial";
  
}
