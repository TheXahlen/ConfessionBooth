
function getIP(json) {
 function makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:}{[]-=+)(*&^%$#@!.,/?';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
   }
   return result.join('');
 // THIS IS THE bLACKLIST FOR USERS WHO SHOULDNT USE IT//
 //explample blew of how to black list a user
 //var blacklist = ["sASfdsfgb","dsfsAAAA","DSAFDSAaaaa"]
 var blacklist = [""]
 try{
 var identity = localStorage.getItem("browserid")
 console.log("ID FOUND AND LOADED: " + identity)
 }catch{
 console.log("YOU HAVE NO USER ID GENERATING")
 var jsonip = JSON.stringify(json.ip)
 var iplength = jsonip.length - 3;
 var extensionadd = makeid(5);
 var b64 = btoa(jsonip);
 var identity = "{" + b64.substring(0,iplength).split("").reverse().join("") + "}{" + extensionadd + "}";
 console.log("USER ID GENERATED: " + identity;
 localStorage.setItem("browserid", identity);
 }
 var testif = blacklist.includes(identity);
 console.log("if true you are blocked sorry: " + testif)
 //
  
  
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
