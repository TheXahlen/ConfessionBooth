function onset(){
try{
var setit = localStorage.getItem('browserid')
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
