
function checkID(){

var idtocheck = localStorage.getItem('browserid')
 function failCheck(errormessage){
   var errormes = "The ID {" + idtocheck + "} is invalid due to : " + errormessage + " : //GENERATING  NEW ID//"
   alert(errormes)
   localStorage.removeItem('browserid')
   if(localStorage.getItem("LOADED") == "FALSE"){
   getIP("DEBUG") 
    var identity = localStorage.getItem('browserid');
    document.getElementById("currentID").innerHTML = identity;
    document.getElementById('posterid').innerHTML =  identity;
   }else{
    getIP()
    var identity = localStorage.getItem('browserid');
    document.getElementById("currentID").innerHTML = identity;
    document.getElementById('posterid').innerHTML =  identity;
   }}
if (idtocheck == null){
 failCheck("code 4: User does not have id")
}
var listofint = ["1","2","3","4","5","6","7","8","9","0"]
var idlength = idtocheck.length;
var idiptocheck = idtocheck.substring(0,10);
try{
idiptocheck = atob(idiptocheck);
}catch{
 failCheck("code 1: Not base64")
}
 console.log(idiptocheck)
var ipsplit = idiptocheck.split("");
var ipsplitlength = ipsplit.length;
var idiplength = idtocheck.length;
 //these test if an id is actually legit.
 for (var b = 0; b < ipsplitlength; b++) {
   var indextocheck = ipsplit[b];
      if(listofint.includes(indextocheck) == false){
      failCheck("code 2: Not base64 does not convert to a valid id")
    }}
   if(idiplength !== 18){
      failCheck("code 3: Does not index properly")

    
      }


      
   console.log("CONGRATS you passed your id is legit bro 😎")
}
