function retPARAM(){
var curURL = window.location.href
var urlSecond = curURL.replace(/H.*S/, '%%')
var urlSecondFormat = urlSecond.replaceAll("%","")
console.log(curURL)
var urlSET = urlSecondFormat.search("=") + 1;
var identityforSEARCH = curURL.substring(urlSET,urlSecondFormat.length)
var percentind = curURL.search("%") + 1;
var suboftotal = curURL.substring(percentind, curURL.length - 1)
//console.log(curURL)
console.log(suboftotal)
console.log(identityforSEARCH)
}

function editURL(name,value,secondvalue){
currentURL = "https://xplosivex.github.io/ConfessionBooth/index.html"
window.location.href = currentURL + "?" + name + "=" + value;
if(secondvalue !== ""){
window.location.href = currentURL + "?" + name + "=" + value + "%" + secondvalue + "%"; 
}
retPARAM()
}
