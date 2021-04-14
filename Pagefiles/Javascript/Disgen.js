

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
listofposts.push("Post number {" + b + "} [" + brenderparsedvar[indexes[b] - 4] + " ] " + "\n")
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
