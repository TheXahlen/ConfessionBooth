function retPARAM(){
curURL = window.location.href
urlSET = curURL.search("=") + 1
try{
secondValueSET = curURL.search("/>") + 1 
identityforsecondvalue = curURL.substring(secondValueSET,curURL.length)
indentityforsecondlen = identityforsecondvalue.length
identityforSEARCH = curURL.substring(urlSET,curURL.length - indentityforsecondlen)
console.log("TRIED AND DID IT")
}catch{
console.log("CAUGHT AN ERROR")
identityforSEARCH = curURL.substring(urlSET,curURL.length)
}
console.log(curURL)
console.log(identityforSEARCH)
}

function editURL(name,value,secondvalue){
//var currentURL = "https://xplosivex.github.io/ConfessionBooth/index.html"
window.location.href =  "?" + name + "=" + value;
if(secondvalue !== ""){
window.location.href = "?" + name + "=" + value + "%" + secondvalue + "%"; 
}
retPARAM()
}
