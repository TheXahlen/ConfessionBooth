
function getIP(json) {
 // THIS IS THE bLACKLIST FOR USERS WHO SHOULDNT USE IT//
 //explample blew of how to black list a user
 //var blacklist = ["sASfdsfgb","dsfsAAAA","DSAFDSAaaaa"]
 var blacklist = [""]
 var jsonip = JSON.stringify(json.ip)
 var iplength = jsonip.length - 2;
 var b64 = btoa(jsonip);
 var identity = b64.substring(0,iplength).split("").reverse().join("");
 var testif = blacklist.includes(identity);
 console.log("if true you are blocked sorry: " + testif)
 //
 if( testif == true){
 document.getElementById('posteridsecond').innerHTML =  identity; 
 document.getElementById('bodyifallowed').style.display = "none"; 
 document.getElementById('bodyifnotallowed').style.display = "block";
 }else{
 document.getElementById('identity').value =  identity;
 console.log("your identifier is: {" + identity + "}")
 document.getElementById('posterid').innerHTML =  identity; 
 console.log("document has updated the user identity")
}}
