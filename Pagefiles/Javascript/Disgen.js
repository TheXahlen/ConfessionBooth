
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
var currentuserID = document.getElementById("currentID").innerHTML 
var indexes = [], i;
for(i = 0; i < brenderparsedvar.length; i++)
if (brenderparsedvar[i] === currentuserID)
indexes.push(i);
var amount = indexes.length;
var listofposts = []
//return "This user identifier| " + browseridvar + " | has | " + amount + " | posts with an id at the following indexes: {" + indexes + "}";
for(var b = 0; b < indexes.length; b++){
listofposts.push(brenderparsedvar[indexes[b] - 4])
console.log(listofposts);
}}
