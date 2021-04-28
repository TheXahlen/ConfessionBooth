
async function apicall(){
	return new Promise(async(resolve,reject)=>{
	let url = 'https://spreadsheets.google.com/feeds/cells/1arXjPy5iUERug2miLIPZKs0equJKxcT-QMqika16gm0/1/public/full?alt=json';
	let obj = await fetch(url)
	resolve(obj.json())
})}
async function load() {
	var confessionlist = []
	var brenderlist = []
	let anything = await apicall()
	let textjs = anything.feed.entry
	var yes = textjs["id"]
	for (let i = 1; i < textjs.length; i++) {
		let confessionentry = textjs[i].content.$t
		var confessioncomp = confessionentry
		//uncomment to debug the size of submissions.
		//console.log(confessioncomp.length, confessioncomp
		if(confessioncomp == "identity" || confessioncomp == "date" || confessioncomp == "font" || confessioncomp == "confession" || confessioncomp == "deletedate" || confessioncomp == "color" || confessioncomp == "decoration" || confessioncomp == "size"){
			 console.log("filtered collumn header: ", confessioncomp)
		}else{
			if(confessioncomp.length < 25){
				brenderlist.push(confessioncomp)	
			}else{
				brenderlist.push(confessioncomp)
				confessionlist.push(confessioncomp)
			}}}
localStorage.setItem("brenderlist", JSON.stringify(brenderlist));
localStorage.setItem("confessions", JSON.stringify(confessionlist));
console.log("BRENDER META DATA LIST LOADED with {", brenderlist.length, "} Items" )
console.log("CONFESSIONLIST LOADED with {", confessionlist.length, "}items here it is mutiplied by 6 {", confessionlist.length * 6,"} if this is within an offset of 15 from the BRENDER meta data above everything is in correct index!")
console.log("new list structure loaded with out complaint!")
}

