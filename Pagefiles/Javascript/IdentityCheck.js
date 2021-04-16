
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
    return null
   }else{
    getIP()
    var identity = localStorage.getItem('browserid');
    document.getElementById("currentID").innerHTML = identity;
    document.getElementById('posterid').innerHTML =  identity;
    return null
   }}
///if (idtocheck == null){
 //failCheck("code 4: User does not have id")
//}

var listofint = ["1","2","3","4","5","6","7","8","9","0"]
var idlength = idtocheck.length;
  if(idlength !== 18){
      failCheck("code 1: Does not index properly")
      return null

    
      }
var idiptocheck = idtocheck.substring(1,8);
try{
idiptocheck = atob(idiptocheck);
}catch{
 failCheck("code 2: Not base64")
 return null
}
 console.log(idiptocheck)
var ipsplit = idiptocheck.split("");
var ipsplitlength = ipsplit.length;
var idiplength = idtocheck.length;
 //these test if an id is actually legit.
 for (var b = 0; b < ipsplitlength; b++) {
   var indextocheck = ipsplit[b];
      if(listofint.includes(indextocheck) == false){
      failCheck("code 3: Not base64 does not convert to a valid id")
       return null
    }
 }


      
   console.log("CONGRATS you passed your id is legit bro 😎")
}
