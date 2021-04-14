function onset(){
try{
var setit = localStorage.getItem('browserid')
document.getElementById('browserid').innerHTML =  setit;
}catch{
document.getElementById('browserid').innerHTML =  "NULL";  
}}
function removeData(){
localStorage.removeItem('browserid');
document.getElementById('browserid').innerHTML =  "NULL";
}
