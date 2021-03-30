function cleartextbox(){
var textequal = document.getElementById("textinput").value
if (textequal.length > 300){
document.getElementById("textinput").value = "text is more than 300";
}
else if(textequal.length = 0){
document.getElementById("textinput").value = "text is 0";
} else {
document.getElementById("textinput").value = "";
}
document.getElementById("textinput").value = ""     
}
