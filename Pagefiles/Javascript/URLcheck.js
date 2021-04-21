function retPARAM(){
curURL = window.location.href
urlSET = curURL.search("=") + 1
identityforSEARCH = curURL.substring(urlSET,curURL.length)
console.log(curURL)
console.log(identityforSEARCH)
}

function editURL(name,value){
currentURL = "https://xplosivex.github.io/ConfessionBooth/index.html"
window.location.href = currentURL + "?" + name + "=" + value;
retPARAM()
}
