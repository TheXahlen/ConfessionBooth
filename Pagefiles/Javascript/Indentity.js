
function getIP(json) {
 function makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:-=+)(*&^%$#@!.,/?';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
   }
   return result.join('');
 }
function generateIP(passed,ip){
if(passed == "TRUE"){
   var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))
   //var sediplength = ip.length - 3;
   var extensionadd = makeid(6);
   console.log(ip)
   var b64 = btoa(ip); 
   console.log(b64)
   var b64 = b64.substring(0,5)
   console.log(b64)
   var identfirst = "[" + b64 + "]"
   var identlast = "[" + extensionadd + "]"
   var identity = identfirst + identlast
   console.log("USER ID GENERATED: " + identity)
   localStorage.setItem("browserid", identity);
}else{
     var jsonip = JSON.stringify(json.ip)
     //var iplength = jsonip.length - 3;
     console.log(jsonip)
     var extensionadd = makeid(6;
     var b64 = btoa(jsonip);
     console.log(b64)
     var b64 = b64.substring(0,5)
     var identfirst = "[" + b64 + "]"
     var identlast = "[" + extensionadd + "]"
     var identity = identfirst + identlast
     console.log("USER ID GENERATED: " + identity);
     localStorage.setItem("browserid", identity);
}}
  // THIS IS THE bLACKLIST FOR USERS WHO SHOULDNT USE IT//
 //explample blew of how to black list a user
 //var blacklist = ["sASfdsfgb","dsfsAAAA","DSAFDSAaaaa"]
 var testforload = localStorage.getItem("LOADED") 
 if (localStorage.getItem('browserid') !== null){
     var identity = localStorage.getItem("browserid")
     document.getElementById("currentID").innerHTML = identity;
     console.log("ID FOUND AND LOADED: " + identity)
 }else{
     console.log("YOU HAVE NO USER ID GENERATING")
     document.getElementById("currentID").innerHTML = identity;
     if(testforload == "FALSE"){
     console.log("somesort of ad block or anti tracking installed using propietry method to generate an identifier")
     generateIP("TRUE")
     }else{
    generateIP()
     }
 }
 var blacklist = ["[jNuUjL0YjI] [NjUHE]"]
 var testif = blacklist.includes(identity);
if(testif == true){
console.log("Sorry your id has been blocked from viewing this page.")
}else{
console.log("Congrats you are not on the blacklist and are free to view this site!")
}
 // purely a test to see if user is blocked and loads the browserid
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
