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
if(identityforSEARCH ==  "https://xplosivex.github.io/ConfessionBooth/index.html"){
return null
}else{  
return [suboftotal,identityforSEARCH] 
}
//console.log(suboftotal)
//console.log(identityforSEARCH)
}

function editURL(name,value,secondvalue){
//var currentURL = "https://xplosivex.github.io/ConfessionBooth/index.html"
parent.location.hash  =  "?" + name + "=" + value;
if(secondvalue !== ""){
parent.location.hash = "?" + name + "=" + value + "%" + secondvalue + "%"; 
}
}
