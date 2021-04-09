function getIP(json) {
 var ip = json.ip.replace(".", "")
 console.log(ip);
 var iplength = ip.length;
 var b64 = btoa(ip);
 var identity = b64.substring(0,7);
 console.log("you're identifier is" + identity)
}
