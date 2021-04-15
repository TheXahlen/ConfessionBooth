

//
//PROTOTYPING FOR A FUNCTION TO GET MUTIPLE INDEXES INSTEAD OF JUST THE FIRST ONE.
//

//function getAllIndexes(arr, val) {
  //  var indexes = [], i;
   // for(i = 0; i < arr.length; i++)
     //   if (arr[i] === val)
       //     indexes.push(i);
    //var amount = indexes.length;
    //return "This user identifier| " + browseridvar + " | has | " + amount + " | posts with an id at the following indexes: {" + indexes + "}";
function loadPosts(testspecific){
if(testspecific == "TRUE"){
var brenderparsedvar = JSON.parse(localStorage.getItem("brenderlist"))
var currentuserID = localStorage.getItem("browserid")
}else{

var brenderparsedvar = JSON.parse(localStorage.getItem("brenderlist"))
//var browseridvar = localStorage.getItem("browserid")
var currentuserID = document.getElementById("posterid").innerHTML 
}

var indexes = [], i;
for(i = 0; i < brenderparsedvar.length; i++){
if (brenderparsedvar[i] === currentuserID){
indexes.push(i);
}}
var amount = indexes.length;
var postindexed
var listofposts = []
var completelist = []
for(var b = 0; b < amount; b++){
var postindexed = brenderparsedvar[indexes[b] - 6]
var sizeoffont = brenderparsedvar[indexes[b] - 1] + '; ' 
var fontfamily = brenderparsedvar[indexes[b] - 2] + '; '
var textdecoration = brenderparsedvar[indexes[b] - 3] + '; '
var textcolor = brenderparsedvar[indexes[b] - 4] + '; '
var numpos = '<b style="color:black;">[' + b +  ']</b>' 
var postmodifer = '<p style="line-height:100%; font-size:' +  sizeoffont + 'font-family:' + fontfamily + 'text-decoration:' + textdecoration + 'color:' + textcolor + '"> ' + numpos  
var pushable = postmodifer + postindexed + '</p><br>'
var pushable = pushable.toString()
listofposts.push(pushable)
completelist.push(brenderparsedvar[indexes[b] - 6])
}

if(testspecific == "TRUE"){
console.log(completelist,"|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||", listofposts)
return completelist  
}

if(window.location.href == "https://xplosivex.github.io/ConfessionBooth/mobileindex.html"){
listofposts.unshift('<div style="word-wrap: break-word; line-height:90%;" id="postsfromuserid">') 
}else{
listofposts.unshift('<div style="word-wrap: break-word; line-height:5%;" id="postsfromuserid">')  
}
listofposts.push('</div>')
console.log(listofposts)
var telned = listofposts.join(' ')
console.log(telned)
if(indexes.length == 0){
console.log("no posts from id: " + currentuserID)
document.getElementById('textinput').innerHTML = "{" + currentuserID + "} This user Identifer has not posted yet!"; 
document.getElementById('currenttext').innerHTML = "{" + currentuserID + "} This user Identifer has not posted yet!"; 
}else{
console.log("This user identifier| " + currentuserID + " | has | " + amount + " | posts with an id at the following indexes: [" + indexes + ']')
console.log(listofposts + ": COMPLETE LIST! FOR USER WITH ID : [" + currentuserID + "]")
document.getElementById('textinput').innerHTML =  telned;
console.log(document.getElementById('textinput').innerHTML)  
document.getElementById('currenttext').innerHTML = telned;
document.getElementById('textinput').style.color = "black";
document.getElementById('textinput').style.textDecoration =  "none";
}}
