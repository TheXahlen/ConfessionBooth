// anything that needs to happen on load happens in here
function Loader(){
   
localStorage.setItem("FIRSTRUN","TRUE")
localStorage.setItem("LOADED","FALSE")
localStorage.setItem("numbergenned", 0);
localStorage.setItem("numcycled",0)
localStorage.setItem("dataload",0)

function detect(){
   if(localStorage.getItem("LOADED") == "FALSE"){
   getIP("DEBUG")  
   }}  
setTimeout(detect(), 1500)
checkID()
localStorage.setItem("browserid", identity);
document.getElementById("currentID").innerHTML = identity;
document.getElementById('posterid').innerHTML =  identity;
//pass
}
////////////

