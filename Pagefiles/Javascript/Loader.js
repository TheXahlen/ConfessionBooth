// anything that needs to happen on load happens in here
var testfordata = retPARAM()
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
function detect(){
   if(localStorage.getItem("LOADED") == "FALSE"){
   getIP("DEBUG")  
   }}  
var numtestlist = [1,2,3,4,5,6,7,8,9,0,"1","2","3","4","5","6","7","8","9","0"]
var parsedint = parseInt(testfordata[0])
try{
if(testfordata[0].charAt(0) == "h"){
loadPosts( testfordata[1]);
}
if(numtestlist.includes(parsedint) == true || numtestlist.includes(testfordata[0]) == true){
	var brenderlist = JSON.parse(localStorage.getItem("brenderlist"))
	var confessionlist = JSON.parse(localStorage.getItem("confessions"))
	document.getElementById('textinput').value =  "";
	var indexinbren = brenderlist.indexOf(confessionlist[parsedint]) 
	document.getElementById("currenttext").innerHTML = confessionlist[parsedint];  
	document.getElementById('textinput').innerHTML =  confessionlist[fparsedint];  
	document.getElementById('textinput').style.color =  brenderlist[indexinbren + 2];
	document.getElementById('textinput').style.textDecoration =  brenderlist[indexinbren + 3];
	document.getElementById('textinput').style.fontFamily =  brenderlist[indexinbren + 4]
	document.getElementById('textinput').style.fontSize =  brenderlist[indexinbren + 5]
	document.getElementById('textinput').style.paddingBottom =  parseInt(brenderlist[indexinbren + 5].replace("px","")) / 2 + "%"
	document.getElementById('posterid').innerHTML =  brenderlist[indexinbren + 6];
	document.getElementById('currentID').innerHTML =  brenderlist[indexinbren + 6];
}
}catch{//pass
}

////////////

