function retPARAM(){
curURL = window.location.href
urlSET = curURL.search("=") + 1
identityforSEARCH = curURL.substring(urlSET,curURL.length)
console.log(curURL)
console.log(identityforSEARCH)
}

function editURL(name,value){
window.location.href = window.location.href + "?" + name + "=" + value;
RetrievePARAM()
}
