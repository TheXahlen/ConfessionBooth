function onset(){
var setit = localStorage.getItem('browserid')
document.getElementById('browserid').value =  setit;
}
function removeData(){
localStorage.removeItem('browserid');
}
