function setdeleteDate(){
var curDelete = new Date();
var deleteDate = curDelete.getDate() + 15;
if(deleteDate > 30){
deleteDate = deleteDate - 30; 
}
document.getElementById('deletedate').value = deleteDate;
}
