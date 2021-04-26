function setdeleteDate() {
    var curDelete = new Date();
    var deleteDate = curDelete.getDate() + 15;
    if (deleteDate > 30) {
        deleteDate = deleteDate - 30;
    }
    document.getElementById("deletedate").value = deleteDate;
}

function setdeleteDate() {
    let date = new Date();  
    let options = {  
     month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  

    var dateVal = date.toLocaleTimeString("en-us", options); 
    dateVal = dateVal.replaceAll(",","").replaceAll(" ","-")
    var completedDate = "{" + dateVal + "}"
    document.getElementById("currentdate").value = completedDate;
}

