var brenderparsedvar = JSON.parse(localStorage.getItem("brenderlist"))
var browseridvar = localStorage.getItem("browserid")
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    var amount = indexes.length;
    return "This user identifier has |" + amount + "| posts with an id at the following indexes: {" + indexes + "}";
    
}
//getAllIndexes(brenderparsedvar,browseridvar)
