
localStorage.setItem("numbergenned", 0);
async function apicall(){
	return new Promise(async(resolve,reject)=>{
	let url = 'https://spreadsheets.google.com/feeds/cells/1arXjPy5iUERug2miLIPZKs0equJKxcT-QMqika16gm0/1/public/full?alt=json';
	let obj = await fetch(url)
	resolve(obj.json())
})}
    
async function load() {
	var confessionlist = []
	var brenderlist = []
	var anything = await apicall()
  var textjs = anything.feed.entry
  var yes = textjs["id"]
  for (let i = 1; i < textjs.length; i++) {
   	var confessionentry = textjs[i].content.$t
   	var confessioncomp = confessionentry
	//uncomment to debug the size of submissions.
	//console.log(confessioncomp.length, confessioncomp
	if(confessioncomp == "identity" || confessioncomp == "font" || confessioncomp == "confession" || confessioncomp == "deletedate" || confessioncomp == "color" || confessioncomp == "decoration" || confessioncomp == "size"){
	 console.log("filtered collumn header: ", confessioncomp)
	   }else{
	if(confessioncomp.length < 25){
	brenderlist.push(confessioncomp)	
	}else{
	brenderlist.push(confessioncomp)
   	confessionlist.push(confessioncomp)
	}}
  localStorage.setItem("brenderlist", JSON.stringify(brenderlist));
  localStorage.setItem("confessions", JSON.stringify(confessionlist));
  }
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

console.log(brenderlist,"brender")
console.log(confessionlist,"total list")
	
if(localStorage.getItem("FIRSTRUN") !== "TRUE"){	
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
  	genNum();
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
	  
	return x;
  }
}
  
  

if(confessionlist.length > 1){ 
//if generated list has more than one object then run a random number generator.
console.log(genNum())
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
}
console.log("Completed")
} else{
localStorage.setItem("FIRSTRUN","FALSE")
console.log("The site has started correctly!!!")
//only runs if first time loading page.
//pass
}}
//function TESTIFSTART(){
//pass	
//
//load()

