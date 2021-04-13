
function getIP(json) {
 // THIS IS THE bLACKLIST FOR USERS WHO SHOULDNT USE IT//
 //var blacklist = ["NjQ1LjY"]
 var blacklist = [""]
 // hiIII///
 var jsonip = JSON.stringify(json.ip)
 var ip = jsonip.replace(".", "")
 var iplength = ip.length;
 var b64 = btoa(ip);
 var identity = b64.substring(0,10).split("").reverse().join("");
 var testif = blacklist.includes(identity);
 console.log("if true you are blocked sorry: " + testif)
 if( testif == true){
 document.getElementById('posteridsecond').innerHTML =  identity; 
 document.getElementById('bodyifallowed').style.display = "none"; 
 document.getElementById('bodyifnotallowed').style.display = "block";
 }else{
 document.getElementById('identity').value =  identity;
 console.log("your identifier is" + identity)
 document.getElementById('posterid').innerHTML =  identity; 
 console.log("document has updated the user identity")
}}
