var brenderparsed = JSON.parse(localStorage.getItem("brenderlist"))
var browserid = localStorage.getItem("browserid")
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}
getAllIndexes(brenderparsed,browserid)
