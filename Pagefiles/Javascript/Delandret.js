function onset(){
try{
var listit = localStorage.getItem('confessions');
var numbergenned = localStorage.getItem('numbergenned');
var brenderit = localStorage.getItem('brenderlist');
var setit = localStorage.getItem('browserid');
var firstrun = localStorage.getItem('FIRSTRUN');
if (listit !== null || numbergenned !== null || brenderit !== null || firstrun !== null){
document.getElementById('listdata').innerHTML =  "TRUE";
} else{
document.getElementById('listdata').innerHTML =  "FALSE";
}
if (setit == null){
document.getElementById('browserid').innerHTML =  "NULL"
}else{
document.getElementById('browserid').innerHTML =  setit;
}}catch{
document.getElementById('browserid').innerHTML =  "NULL";  
}}
function removeData(){
localStorage.removeItem('browserid');
document.getElementById('browserid').innerHTML =  "NULL";
}
function removelistData(){
localStorage.removeItem('brenderlist');
localStorage.removeItem('confessions');
localStorage.removeItem('numbergenned');
document.getElementById('listdata').innerHTML =  "FALSE";
}

