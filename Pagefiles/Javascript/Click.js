
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

function Clicked(){
var currenttextread = document.getElementById("currenttext");
var testforsim = stringSimilarity.compareTwoStrings(document.getElementById("textinput").value, document.getElementById("currenttext").innerHTML);
testforsim = testforsim.toString();
testforsim = testforsim.substring(2,4);
console.log(testforsim + " this is the integer for similarity.")
testforsim = parseInt(testforsim);
if(testforsim > 60){
alert("Please don't submit other peoples messages, or things you just cycled through thanks!")
}else{
document.getElementById("submit").click();
}}

