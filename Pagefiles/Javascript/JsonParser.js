
localStorage.setItem("numbergenned", 0);
async function apicall(){
	return new Promise(async(resolve,reject)=>{
	let url = 'https://spreadsheets.google.com/feeds/cells/1arXjPy5iUERug2miLIPZKs0equJKxcT-QMqika16gm0/1/public/full?alt=json';
	let obj = await fetch(url)
	resolve(obj.json())
})}
    
async function load() {
	var confessionlist = []
	var anything = await apicall()
  var textjs = anything.feed.entry
  var yes = textjs["id"]
  for (let i = 1; i < textjs.length; i++) {
   	var confessionentry = textjs[i].content.$t
   	var confessioncomp = confessionentry
   	confessionlist.push(confessioncomp)
	var brenderlist = confessionlist  
    }

for(var i = 0; i < confessionlist.length; i++){
	var lengthtest = confessionlist[i].length;

  //pass//
  
if(confessionlist[i].length < 25){

	confessionlist.splice(i, i + 1)	
}}
try 
	{ 	
  	var indexed0 = confessionlist.indexOf("deletedate");
  	//var indexed1 = confessionlist.indexOf("Confession");
  	confessionlist.splice(indexed0,1)
	//confessionlist.splice(indexed1,1)
}catch(e){//pass
}
console.log(brenderlist,"brender")
console.log(confessionlist,"total list")
if(confessionlist.length == 0){
confessionlist.push("No submissions! Add one or come back later.");
}
  
  
function genNum() {
  var x = Math.floor(Math.random() * confessionlist.length);
  if(x == localStorage.getItem("numbergenned")) {
  	genNum();
  }
  else {
    localStorage.setItem("numbergenned", x);
    document.getElementById('textinput').value =  "";
		document.getElementById('textinput').value =  confessionlist[x];
    return x;
  }
}
  
  

if(confessionlist.length > 1){ 
console.log(genNum())
console.log("above genned num")
}else{
document.getElementById('textinput').value =  ""
document.getElementById('textinput').value =  confessionlist[0]
}
console.log("Completed")
}
//load()

