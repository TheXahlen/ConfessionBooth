def onset(){
var setit = localStorage.getItem('browserid')
document.getElementById('browserid').value =  setit;
}
def removeData(){
localStorage.removeItem('browserid');
}
