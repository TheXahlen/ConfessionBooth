
// Tried shortening refrences with these but it just didn't cooperate very well
//var cycledis = document.getElementById("cycle")
//var submitdis = document.getElementById("submit")
//var selector = document.getElementById("selector")

///file is now repurposed.
//Originally used to switch between a submit and cycle mode
//couldn't figure out how to get it to work so now this clicks the button within the form
//the reason this clicks an invisble button is the only way the listener detects if you are actually submitting
//is if the button that is clicked exists within the <form> </form> so this made it impossible to align the submit and cycle 
// buttons also if I aligned them within the <form> </form> than cycle also submitted data sadly. So I just made this click an
//invisible button inside the <form> </form>



//var currenttextread = document.getElementById("currenttext");
//var testforsim = stringSimilarity.compareTwoStrings(document.getElementById("textinput").value, document.getElementById("currenttext").innerHTML);
//testforsim = testforsim.toString();
//testforsim = testforsim.substring(0,4);
//console.log(testforsim + " this is the integer for similarity between these two strings {" + document.getElementById("currenttext") + "},{" + document.getElementById("textinput").value + "}" )
//testforsim = parseInt(testforsim);
//if(testforsim > 0.70){
//alert("Please don't submit other peoples messages, or things you just cycled through thanks!")



function Clicked(){
load()
//var idtotest = localStorage.getItem('browserid');
var loadedposts = loadPosts("TRUE")
var currenttextinsubmit = document.getElementById("textsubmit").value
var amountforj = loadedposts.length;
    
if(loadedposts.length > 0){

    for(var j = 0; j < amountforj; j++){
    var similarity = stringSimilarity.compareTwoStrings(loadedposts[j], currenttextinsubmit);
    console.log("Comparing similarity of" , loadedposts[j] ,  ":to:" , currenttextinsubmit , "found a similarity of: {", similarity ,"}") 
    if("BLANK" == 1){
       alert("This post is too similar to a post you made with this identifier")
       return "FUNCTION FAILSAFE"}
    }}

 
 if(document.getElementById("subtry").style.display == "none"){
console.log("submission was attempted although the submit button is not visible so action was aborted")
}else{
document.getElementById("submit").click();
}}


