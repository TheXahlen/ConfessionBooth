function retPARAM(){
var curURL = window.location.href
curURL = curURL.replaceAll("#","") 
var urlSecond = curURL.replace(/%.*%/, '%%')
var urlSecondFormat = urlSecond.replaceAll("%","")
console.log(curURL)
var urlSET = urlSecondFormat.search("=") + 1;
var identityforSEARCH = curURL.substring(urlSET,urlSecondFormat.length)
var percentind = curURL.search("%");
var suboftotal = curURL.substring(percentind, curURL.length)
suboftotal = suboftotal.replaceAll("%","")
//console.log(curURL)
console.log(suboftotal)
console.log(identityforSEARCH)
}

function editURL(name,value,secondvalue){

parent.location.hash = currentURL + "?" + name + "=" + value;
if(secondvalue !== ""){
praent.location.hash = currentURL + "?" + name + "=" + value + "%" + secondvalue + "%"; 
}
retPARAM()
}
