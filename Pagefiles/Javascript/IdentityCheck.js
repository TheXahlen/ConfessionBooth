
function checkID(){
var idtocheck = localStorage.getItem('browserid')
  //if (idtocheck !== null){
   //  var identity = localStorage.getItem("browserid")
   //  } else {
    //  getIP()
    //  return null
    // }
var listofint = ["1","2","3","4","5","6","7","8","9","0"]
var idlength = idtocheck.length;
var idiptocheck = idtocheck.substring(1,8);
idiptocheck = atob(idiptocheck);
  console.log(idiptocheck)
var ipsplit = idiptocheck.split("");
var ipsplitlength = ipsplit.length;
var idiplength = idtocheck.length;
 //these test if an id is actually legit.
 for (var b = 0; b < ipsplitlength; b++) {
   var indextocheck = ipsplit[b];
    if(listofint.includes(indextocheck) == false){
     console.log(indextocheck)
     console.log("The ID {" + idtocheck + "} is invalid due to tampering: GENERATING  NEW ID :")
     localStorage.removeItem('browserid')
     getIP()
     return null
    }}
   if(idiplength !== 18){
     console.log("The ID {" + idtocheck + "} is invalid due to an invalid index: GENERATING  NEW ID :" )
     localStorage.removeItem('browserid')
     getIP()
     return null
      }


      
   console.log("CONGRATS you passed your id is legit bro 😎")
}
