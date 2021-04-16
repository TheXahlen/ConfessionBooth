
function checkID(){
var idtocheck = localStorage.getItem('browserid')
  if (idtocheck !== null){
     var identity = localStorage.getItem("browserid")
     } else {
      getIP()
      return  
     }
var listofint = ["1","2","3","4","5","6","7","8","9","0"]
var idlength = idtocheck.length
var idiptocheck = idtocheck.substring(1,8)
var idendtocheck = idtocheck.substring(10,18)
}
