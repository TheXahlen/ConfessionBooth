function setdeleteDate() {
    let curDelete = new Date();
    var deleteDate = curDelete.getDate() + 15;
    if (deleteDate > 30) {
        deleteDate = deleteDate - 30;
    }
    document.getElementById("deletedate").value = deleteDate;
}

function setcurrentDate() {
    let date = new Date();
    let options = {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        
    };
   let completedDate = '[' + date.toLocaleTimeString("en-us", options).replaceAll(",", "").replaceAll(" ", "-").replace("-","|").replace("-",":") + ']'
    document.getElementById("currentdate").value = completedDate;
    document.getElementById("date").innerHTML = completedDate;
}
