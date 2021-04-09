function getIP(json) {
 var ip = json.ip.replace(".", "")
 var iplength = ip.length;
 var b64 = btoa(ip);
 var identity = b64.substring(0,7);
 console.log("your identifier is" + identity)
 document.getElementById('identity').value =  indenity;  
}
