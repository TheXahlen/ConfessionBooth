
//function getIP(json) {
 function makeid(total) {
    var result = [];
    let letters = 'abcdefghijklmnopqrstuvwxy'
    let lettercapitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let symbols = ':-+)(*^$@!.,/';
    var letterLength = letters.length;
    var lettercapitalLength = lettercapitals.length;
    var symbolLength = symbols.length;
    total
    for (let i = 0; i < total; i++ ) {
    if(i < 1){
        result.push(letters.charAt(Math.floor(Math.random() * letterLength)));
    }
     if(i < 2){
        result.push(lettercapitals.charAt(Math.floor(Math.random() * lettercapitalLength)));
     } 
      if(i < 4){
      result.push(symbols.charAt(Math.floor(Math.random() * symbolLength)));
    }
    console.log("Identity char: " + i + " :added to your identifier, [" + result +"]") 
    } 
   return result.join('');
 }

function getIP(json){
if(localStorage.getItem("LOADED") !== "TRUE"){
   var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))
   //var sediplength = ip.length - 3;
   console.log(ip)
   var extensionadd = makeid(7);
   ip = ip.toString()
   ip = ip.split(".").join("")
   var b64 = btoa(ip); 
   b64 = b64.substring(0,7)
   var identfirst = "[" + b64 + "]"
   var identlast = "[" + extensionadd + "]"
   var identity = identfirst + identlast
   console.log("USER ID GENERATED: " + identity)
   localStorage.setItem("browserid", identity);
   document.getElementById("currentID").innerHTML = identity;
   document.getElementById('posterid').innerHTML =  identity;
}else{
     var jsonip = JSON.stringify(json.ip)
     //var iplength = jsonip.length - 3;
     console.log(jsonip)
     var extensionadd = makeid(7);
     
     jsonip = jsonip.toString()
     jsonip.replaceALL(""","")
     jsonip = jsonip.split(".").join("")
     var b64 = btoa(jsonip); 
     b64 = b64.substring(0,7)
     var identfirst = "[" + b64 + "]"
     var identlast = "[" + extensionadd + "]"
     var identity = identfirst + identlast
     console.log("USER ID GENERATED: " + identity);
     localStorage.setItem("browserid", identity);
}
  // THIS IS THE bLACKLIST FOR USERS WHO SHOULDNT USE IT//
 //explample blew of how to black list a user
 //var blacklist = ["sASfdsfgb","dsfsAAAA","DSAFDSAaaaa"]
 if (localStorage.getItem('browserid') !== null){
     var identity = localStorage.getItem("browserid")
     document.getElementById("currentID").innerHTML = identity;
     document.getElementById('posterid').innerHTML =  identity;
     console.log("ID FOUND AND LOADED: " + identity)
     
 }else{
    getIP()  
 }
 
 document.getElementById('identity').value =  identity;
 console.log("your identifier is: {" + identity + "}")
 document.getElementById('posterid').innerHTML =  identity;
 console.log("document has updated the user identity")
 }
 //var blacklist = [""]
// var testif = blacklist.includes(identity);
//if(testif == true){
//console.log("Sorry your id has been blocked from viewing this page.")
//}else{
//console.log("Congrats you are not on the blacklist and are free to view this site!")
//}
 // purely a test to see if user is blocked and loads the browserid
//if( testif == true){
//document.getElementById('posteridsecond').innerHTML =  identity; 
// document.getElementById('bodyifallowed').style.display = "none"; 
// document.getElementById('bodyifnotallowed').style.display = "block";
// }else{
// document.getElementById('identity').value =  identity;
// console.log("your identifier is: {" + identity + "}")
//document.getElementById('posterid').innerHTML =  identity;
// console.log("document has updated the user identity")
//}
