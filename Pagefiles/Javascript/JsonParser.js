var confessionlist = []

async function apicall(){
    return new Promise(async(resolve,reject)=>{
        let url = 'https://spreadsheets.google.com/feeds/cells/1arXjPy5iUERug2miLIPZKs0equJKxcT-QMqika16gm0/1/public/full?alt=json';
        let obj = await fetch(url)
        resolve(obj.json())
    })

}

async function load() {
	var anything = await apicall()
    console.log(anything)
    var textjs = anything.feed.entry
    var yes = textjs["id"]
    for (let i = 1; i < textjs.length; i++) {
    var confessionentry = textjs[i].content.$t
    var confessioncomp = "[ENTRY NUMBER: " + i + " " + confessionentry + "]" 
    confessionlist.push(confessioncomp)
    console.log(confessionlist)    
    

}
var lengthoflist = confessionlist.length
console.log(lengthoflist)
var listselect = Math.floor(Math.random() * lengthoflist)
console.log(listselect)
document.getElementById("textinput").innerHTML = ""

}
