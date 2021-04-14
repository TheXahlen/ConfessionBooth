//brenderlist.splice(0,3)	


//debugging purposes
//console.log(confessionlist, "FOR LOOP")
//console.log(confessionlist[i].length, "LENGTH OF ITEMS")
//try 
	
// THIS IS DEPRECIATED IT WAS A METHOD OF REMOVING META DATA FROM THE LIST.	
	
//	{ 	
  //	var indexed0 = confessionlist.indexOf("deletedate");
  //	//var indexed1 = confessionlist.indexOf("Confession");
  //	confessionlist.splice(indexed0,1)
	//confessionlist.splice(indexed1,1)
//}catch(e){//pass
//}
function cycle(){

var numcyc = localStorage.getItem("numcycled")
var numcyc = parseInt(numcyc)
	if(numcyc > 4){
		load()
		localStorage.setItem("numcycled", 0)	
	}else{
		var numcycleft = 5 - numcyc
		console.log( "the cite will allow {", numcycleft  ,"} more cycles before it refreshes the datalist.")
		localStorage.setItem("numcycled", numcyc + 1)
	}
var brenderlist = JSON.parse(localStorage.getItem("brenderlist"))
var confessionlist = JSON.parse(localStorage.getItem("confessions"))
	if(confessionlist.length == 0){
		document.getElementById('textinput').style.color = "black";
		document.getElementById('textinput').style.textDecoration =  "none";
		confessionlist.push("No submissions! Add one or come back later.");
		document.getElementById("currenttext").innerHTML = "No submissions! Add one or come back later.";
		document.getElementById('currentID').innerHTML =  localStorage.getItem("browserid")
		document.getElementById('posterid').innerHTML =  localStorage.getItem("browserid")
	}
  
function genNum() {
	var x = Math.floor(Math.random() * confessionlist.length);
	if(x == localStorage.getItem("numbergenned")) {
	genNum()
	}
  	else {
		localStorage.setItem("numbergenned", x);
		document.getElementById('textinput').value =  "";
		var indexinbren = brenderlist.indexOf(confessionlist[x]) 
		console.log(indexinbren, "THISIS")  
		document.getElementById("currenttext").innerHTML = confessionlist[x];  
		document.getElementById('textinput').innerHTML =  confessionlist[x];  
		document.getElementById('textinput').style.color =  brenderlist[indexinbren + 2];
		document.getElementById('textinput').style.textDecoration =  brenderlist[indexinbren + 3];
		document.getElementById('textinput').style.fontFamily =  brenderlist[indexinbren + 4]
		document.getElementById('textinput').style.fontSize =  brenderlist[indexinbren + 5]
		document.getElementById('posterid').innerHTML =  brenderlist[indexinbren + 6];
		document.getElementById('currentID').innerHTML =  brenderlist[indexinbren + 6];

return x;}}
  
  

if(confessionlist.length > 1){ 
//if generated list has more than one object then run a random number generator.
genNum()
}else{
	document.getElementById('textinput').innerHTML =  ""
	document.getElementById("currenttext").innerHTML =  confessionlist[0]
	document.getElementById('textinput').innerHTML =  confessionlist[0]
	document.getElementById('textinput').style.color =  brenderlist[2];
	document.getElementById('textinput').style.textDecoration =  brenderlist[3];
	document.getElementById('textinput').style.fontFamily =  brenderlist[4]
	document.getElementById('textinput').style.fontSize =  brenderlist[5]
	document.getElementById('posterid').innerHTML =  brenderlist[6];
	document.getElementById('currentID').innerHTML =  brenderlist[6];
}}
//function TESTIFSTART(){
//pass	
//
//load()
