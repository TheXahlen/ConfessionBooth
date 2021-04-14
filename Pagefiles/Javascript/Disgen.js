
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
for(var b = 0; b < indexes.length; b++){
listofposts.push("Post number {" + b + "} [" + brenderparsedvar[indexes[b] - 4] + " ] " + "\n")

}
if(indexes.length == 0){
console.log("no posts from id: " + currentuserID)
document.getElementById('textinput').value = "This user has not posted yet!"; 
}else{
return "This user identifier| " + browseridvar + " | has | " + amount + " | posts with an id at the following indexes: {" + indexes + "}";
console.log(listofposts + ": COMPLETE LIST! FOR USER WITH ID : {" + currentuserID + "}")
document.getElementById('textinput').value =  listofposts;
document.getElementById('textinput').style.color = "black";
document.getElementById('textinput').style.textDecoration =  "none";
}}
