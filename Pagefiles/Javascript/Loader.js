// anything that needs to happen on load happens in here
var testfordata = retPARAM();
localStorage.removeItem("brenderlist");
var testfordata1 = testfordata[0];
var testfordata2 = testfordata[1];
function Loader("LOADED") {
    document.getElementById("cycle").disabled = true;
    document.getElementById("cycle").backgroundColor = "grey";

    document.getElementById("switcher").disabled = true;
    document.getElementById("switcher").backgroundColor = "grey";

    document.getElementById("subtry").disabled = true;
    document.getElementById("subtry").backgroundColor = "grey";
    setcurrentDate();
    load();
    localStorage.setItem("FIRSTRUN", "TRUE");
    localStorage.setItem("numbergenned", 0);
    localStorage.setItem("numcycled", 0);
    localStorage.setItem("dataload", 0);
    setdeleteDate();
    setTimeout(detect(), 1500);checkID();
   var identity = localStorage.getItem("browserid");
    document.getElementById("currentID").innerHTML = identity;
    document.getElementById("posterid").innerHTML = identity;

    document.getElementById("cycle").disabled = false;
    document.getElementById("cycle").backgroundColor = "white";

    document.getElementById("switcher").disabled = false;
    document.getElementById("switcher").backgroundColor = "white";

    document.getElementById("subtry").disabled = false;
    document.getElementById("subtry").backgroundColor = "white";
    //pass
    localStorage.setItem("FIRSTRUN", "FALSE");

var numtestlist = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var parsedint = parseInt(testfordata[0]);

if (testfordata1.charAt(0) == "h") {
    console.log(testfordata[1] + "FFF" + testfordata2 + "YEP THIS IS IT");
    loadPosts(testfordata2);
} else if (numtestlist.includes(retPARAM()[0]) == true) {
    console.log("THIS IS AN ATTEMPT TO CREATE A USER POST BASED ON URL");
    var brenderlist = JSON.parse(localStorage.getItem("brenderlist"));
    var confessionlist = JSON.parse(localStorage.getItem("confessions"));
    document.getElementById("textinput").value = "";
    var indexinbren = brenderlist.indexOf(confessionlist[parsedint]);
    document.getElementById("currenttext").innerHTML = confessionlist[parsedint];
    document.getElementById("textinput").innerHTML = confessionlist[parsedint];
    document.getElementById("textinput").style.color = brenderlist[indexinbren + 2];
    document.getElementById("textinput").style.textDecoration = brenderlist[indexinbren + 3];
    document.getElementById("textinput").style.fontFamily = brenderlist[indexinbren + 4];
    document.getElementById("textinput").style.fontSize = brenderlist[indexinbren + 5];
    document.getElementById("date").innerHTML = brenderlist[indexinbren + 6];
    document.getElementById("posterid").innerHTML = brenderlist[indexinbren + 7];
    document.getElementById("currentID").innerHTML = brenderlist[indexinbren + 7];
} else {
    //pass
}
    function detect() {
    if (localStorage.getItem("LOADED") !== "TRUE") {
        getIP();
    }
}
}


////////////

