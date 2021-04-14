
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
  // THIS IS THE bLACKLIST FOR USERS WHO SHOULDNT USE IT//
 //explample blew of how to black list a user
 //var blacklist = ["sASfdsfgb","dsfsAAAA","DSAFDSAaaaa"]
 var blacklist = ["[jNuUjL0YjI] [NjUHE]"]
 if (localStorage.getItem('browserid') !== null){
 var identity = localStorage.getItem("browserid")
 console.log("ID FOUND AND LOADED: " + identity)
 }else{
 console.log("YOU HAVE NO USER ID GENERATING")
 var jsonip = JSON.stringify(json.ip)
 var iplength = jsonip.length - 3;
 var extensionadd = makeid(5);
 var b64 = btoa(jsonip);
 var identity = "[" + b64.substring(0,iplength).split("").reverse().join("") + "] [" + extensionadd + "]";
 console.log("USER ID GENERATED: " + identity);
 localStorage.setItem("browserid", identity);
 document.getElementById("currentID").innerHTML = identity;
 }
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
 document.getElementById('posterid').innerHTML =  identity + ' <button onclick="loadPosts()" class="postid" style="border">|| View This Users Posts </button>'; 
 console.log("document has updated the user identity")
}}
