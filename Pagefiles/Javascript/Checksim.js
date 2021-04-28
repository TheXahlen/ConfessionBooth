function detectPRESENCE() {
    var listit = localStorage.getItem("confessions");
    var numbergenned = localStorage.getItem("numbergenned");
    var brenderit = localStorage.getItem("brenderlist");
    var setit = localStorage.getItem("browserid");
    var firstrun = localStorage.getItem("FIRSTRUN");
    var cyclenum = localStorage.getItem("numcycled");
    var dataload = localStorage.getItem("dataload");

    if (listit !== null || numbergenned !== null || brenderit !== null || firstrun !== null || dataload !== null || cyclenum !== null) {
        document.getElementById("listdata").innerHTML = "TRUE";
    } else {
        document.getElementById("listdata").innerHTML = "FALSE";
    }
    if (setit == null) {
        document.getElementById("browserid").innerHTML = "NULL";
    } else {
        document.getElementById("browserid").innerHTML = setit;
    }
}

function checkSim() {
    var loadedposts = loadPosts("TRUE");
    var currenttextinsubmit = document.getElementById("textsubmit").value;
    var amountforj = loadedposts.length;

    if (loadedposts.length > 0) {
        for (let j = 0; j < amountforj; j++) {
            var similarity = stringSimilarity.compareTwoStrings(loadedposts[j].replaceAll(" ", ""), currenttextinsubmit.replaceAll(" ", ""));
            console.log("Comparing similarity of {", loadedposts[j], "} :to: {", currenttextinsubmit, "} found a similarity of: {", similarity, "}");
            var errorreport = "This post was too similar to a previous post made with your identifer. Give it another go! \n " + loadedposts[j] + " :compared with: " + currenttextinsubmit + "found a similarity of: {" + similarity + "} similarity limit of 0.75";
            if (similarity > 0.75) {
                alert(errorreport);
                return "TRUE";
            }
        }
    }
}

