// anything that needs to happen on load happens in here
function Loader(){
   
document.getElementById("cycle").disabled = true;
document.getElementById("cycle").backgroundColor = "grey";
   
document.getElementById("switcher").disabled = true;
document.getElementById("switcher").backgroundColor = "grey";
   
document.getElementById("subtry").disabled = true;
document.getElementById("subtry").backgroundColor = "grey";

load()   
localStorage.setItem("FIRSTRUN","TRUE")
localStorage.setItem("LOADED","FALSE")
localStorage.setItem("numbergenned", 0);
localStorage.setItem("numcycled",0)
localStorage.setItem("dataload",0)
setdeleteDate();
var testfordata = retPARAM()
try{
if(testfordata[0][0] == "h"{
console.log("THERE IS AN ATTEMPT TO LOAD A DISGEN OF A USERS POSTS")
}else if(testfordata[0])

}
}catch{//pass
}
function detect(){
   if(localStorage.getItem("LOADED") == "FALSE"){
   getIP("DEBUG")  
   }}  
setTimeout(detect(), 1500)
checkID()
var identity = localStorage.getItem('browserid');
document.getElementById("currentID").innerHTML = identity;
document.getElementById('posterid').innerHTML =  identity;
   
 document.getElementById("cycle").disabled = false;
document.getElementById("cycle").backgroundColor = "white";
   
document.getElementById("switcher").disabled = false;
document.getElementById("switcher").backgroundColor = "white";
   
document.getElementById("subtry").disabled = false;
document.getElementById("subtry").backgroundColor = "white";  
//pass
localStorage.setItem("FIRSTRUN","FALSE")
}
////////////

