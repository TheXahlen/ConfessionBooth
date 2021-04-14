

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
//}
function loadPosts(){
var brenderparsedvar = JSON.parse(localStorage.getItem("brenderlist"))
var browseridvar = localStorage.getItem("browserid")
var currentuserID = document.getElementById("posterid").innerHTML 
var indexes = [], i;
for(i = 0; i < brenderparsedvar.length; i++)
if (brenderparsedvar[i] === currentuserID)
indexes.push(i);
var amount = indexes.length;
var listofposts = []
for(var b = 0; b < indexes.length; b++){
var postindexed = brenderparsedvar[indexes[b] - 6]
var sizeoffont = brenderparsedvar[indexes[b] - 1] + ';' 
var fontfamily = brenderparsedvar[indexes[b] - 2] + ';'
var textdecoration = brenderparsedvar[indexes[b] - 3] + ';'
var textcolor = brenderparsedvar[indexes[b] - 4] + ';'
var postmodifer = '<p ' + 'style="font-size:' +  sizeoffont + 'font-family:' + fontfamily + 'text-decoration:' + textdecoration + 'color:' + textcolor + '">'  
var postnum = "[" + b + "]"
listofposts.push( postnum + postmodifer + postindexed + '</p> <br>')
}
if(indexes.length == 0){
console.log("no posts from id: " + currentuserID)
document.getElementById('textinput').innerHTML = "This user has not posted yet!"; 
document.getElementById('currenttext').innerHTML = "This user has not posted yet!"; 
}else{
console.log("This user identifier| " + browseridvar + " | has | " + amount + " | posts with an id at the following indexes: {" + indexes + "}")
console.log(listofposts + ": COMPLETE LIST! FOR USER WITH ID : {" + currentuserID + "}")
document.getElementById('textinput').innerHTML =  listofposts;
document.getElementById('currenttext').innerHTML = listofposts;
document.getElementById('textinput').style.color = "black";
document.getElementById('textinput').style.textDecoration =  "none";
}}
