var blacklist = []
function getIP(json) {
 var ip = json.ip.replace(".", "")
 var iplength = ip.length;
 var b64 = btoa(ip);
 var identity = b64.substring(0,7);
 if(blacklist.includes(identity) = true){
 document.getElementById('bodyifallowed').style.display = "none"; 
 document.getElementById('bodyifnotallowed').style.display = "block";
 }else{
 document.getElementById('identity').value =  identity;
 console.log("your identifier is" + identity)
 document.getElementById('posterid').innerHTML =  identity; 
 console.log("document has updated the user identity")
}}
