
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
    }
for(var i = 0; i < confessionlist.length; i++){
	var lengthtest = confessionlist[i].length;
	try 
	{ 	
  	var indexed0 = confessionlist.indexOf("deletedate");
  	var indexed1 = confessionlist.indexOf("confession");
  	confessionlist.splice(indexed0,1)
  	confessionlist.splice(indexed1,1)
	}catch(e){
  //pass//
  }

if(lengthtest < 3){
	console.log("FDFS")
  console.log(confessionlist[i])
	confessionlist.splice(i, 1)	
}}
//console.log(confessionlist)    

var lengthoflist = confessionlist.length
var listselect = Math.floor(Math.random() * lengthoflist)
document.getElementById('textinput').value =  ""
document.getElementById('textinput').value =  confessionlist[listselect]
console.log("TRUE")
}
