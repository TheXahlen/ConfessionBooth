function retPARAM(){
curURL = window.location.href
urlSET = curURL.search("=") + 1
try{
secondValueSET = curURL.search("/>") + 1 
identityforsecondvalue = curURL.substring(secondValueSET,curURL.length)
indentityforsecondlen = identityforsecondvalue.length
identityforSEARCH = curURL.substring(urlSET,curURL.length - indentityforsecondlen)
}catch{
identityforSEARCH = curURL.substring(urlSET,curURL.length)
}
console.log(curURL)
console.log(identityforSEARCH)
}

function editURL(name,value,secondvalue){
currentURL = "https://xplosivex.github.io/ConfessionBooth/index.html"
window.location.href = currentURL + "?" + name + "=" + value;
if(secondvalue !== ""){
window.location.href = currentURL + "?" + name + "=" + value + "/>" + secondvalue + "/>"; 
}
retPARAM()
}
