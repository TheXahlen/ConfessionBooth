
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
	//console.log(confessioncomp.length, confessioncomp)
	if(confessioncomp == "identity"){
	 console.log("it was done<3.") 
	   }else{
	if(confessioncomp.length < 25){
	brenderlist.push(confessioncomp)	
	}else{
	brenderlist.push(confessioncomp)
   	confessionlist.push(confessioncomp)
	}}}
brenderlist.splice(0,3)	


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
if(confessionlist.length == 0){
confessionlist.push("No submissions! Add one or come back later.");
//stores for future refrence
	
localStorage.setItem("brenderlist", brenderlist);
localStorage.setItem("confessions", confessioncomp);
  
  
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
	document.getElementById('textinput').value =  confessionlist[x];  
	document.getElementById('textinput').style.color =  brenderlist[indexinbren + 2];
	document.getElementById('textinput').style.textDecoration =  brenderlist[indexinbren + 3];
	document.getElementById('posterid').innerHTML =  brenderlist[indexinbren + 4]
    return x;
  }
}
  
  

if(confessionlist.length > 1){ 
//if generated list has more than one object then run a random number generator.
console.log(genNum())
console.log("above genned num")
}else{
document.getElementById('textinput').value =  ""
document.getElementById('textinput').value =  confessionlist[0]
document.getElementById('textinput').style.color =  brenderlist[2];
document.getElementById('textinput').style.textDecoration =  brenderlist[3];
document.getElementById('posterid').innerHTML =  brenderlist[4]
}
console.log("Completed")
}
//load()

