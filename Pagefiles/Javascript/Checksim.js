function checkSim(){
var loadedposts = loadPosts("TRUE")
var currenttextinsubmit = document.getElementById("textsubmit").value
var amountforj = loadedposts.length;
    
if(loadedposts.length > 0){

    for(var j = 0; j < amountforj; j++){
    var similarity = stringSimilarity.compareTwoStrings(loadedposts[j], currenttextinsubmit);
    console.log("Comparing similarity of {" , loadedposts[j] ,  "} :to: {" , currenttextinsubmit , "} found a similarity of: {", similarity ,"}") 
    var errorreport = "This post was too similar to a previous post made with your identifer. Give it another go! \n " + loadedposts[j] +  " :compared with: " + currenttextinsubmit + "found a similarity of: {" + similarity + "} similarity limit of 0.75"
    if(similarity > 0.75){
       alert(errorreport)
       return "TRUE"}
    }}}
