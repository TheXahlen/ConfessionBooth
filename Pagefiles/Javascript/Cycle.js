//THIS FUNCTION SHOULD ONLY EVER BE CALLED AFTER RUNNING load() or else it will not have any data to pull from.
function cycle() {
    var maxrefreshes = 4;
    var numcyc = localStorage.getItem("numcycled");
    var numcyc = parseInt(numcyc);
    if (numcyc > maxrefreshes) {
        load();
        localStorage.setItem("numcycled", 0);
    } else {
        var numcycleft = 5 - numcyc;
        console.log("the site will allow {", numcycleft, '} this limit is stored inside the "maxrefreshes variable" more cycles before it refreshes the datalist.');
        localStorage.setItem("numcycled", numcyc + 1);
    }
    var brenderlist = JSON.parse(localStorage.getItem("brenderlist"));
    var confessionlist = JSON.parse(localStorage.getItem("confessions"));
    if (confessionlist.length == 0) {
        editURL("identity", "", "");
        document.getElementById("textinput").style.color = "black";
        document.getElementById("textinput").style.textDecoration = "none";
        document.getElementById("textinput").innerHTML = "No submissions! Add one or come back later.";
        document.getElementById("posterid").innerHTML = localStorage.getItem("browserid") ;
        document.getElementById("currentID").value = localStorage.getItem("browserid");

        return null;
    }

    function genNum() {
        var x = Math.floor(Math.random() * confessionlist.length);
        if (x == localStorage.getItem("numbergenned")) {
            genNum();
        } else {
            localStorage.setItem("numbergenned", x);
            document.getElementById("textinput").value = "";
            var indexinbren = brenderlist.indexOf(confessionlist[x]);
            editURL("identity", brenderlist[indexinbren + 7], x);
            document.getElementById("currenttext").innerHTML = confessionlist[x];
            document.getElementById("textinput").innerHTML = confessionlist[x];
            document.getElementById("textinput").style.color = brenderlist[indexinbren + 2];
            document.getElementById("textinput").style.textDecoration = brenderlist[indexinbren + 3];
            document.getElementById("textinput").style.fontFamily = brenderlist[indexinbren + 4];
            document.getElementById("textinput").style.fontSize = brenderlist[indexinbren + 5];
            //document.getElementById("textinput").style.paddingBottom = parseInt(brenderlist[indexinbren + 5].replace("px", "")) / 2 + "%";
            console.log(brenderlist[6])
            document.getElementById("posterid").innerHTML = brenderlist[indexinbren + 7] + brenderlist[indexinbren + 6];
            document.getElementById("currentID").innerHTML = brenderlist[indexinbren + 7];

            return x;
        }
    }

    if (confessionlist.length > 1) {
        //if generated list has more than one object then run a random number generator.
        genNum();
    } else {
        editURL("identity", brenderlist[8], 0);
        document.getElementById("textinput").innerHTML = "";
        document.getElementById("currenttext").innerHTML = confessionlist[0];
        document.getElementById("textinput").innerHTML = confessionlist[0];
        document.getElementById("textinput").style.color = brenderlist[2];
        document.getElementById("textinput").style.textDecoration = brenderlist[3];
        document.getElementById("textinput").style.fontFamily = brenderlist[4];
        document.getElementById("textinput").style.fontSize = brenderlist[5];
        //document.getElementById("textinput").style.paddingBottom = parseInt(brenderlist[5].replace("px", "")) / 2 + "%";
        //console.log(brenderlist[6])
        document.getElementById("posterid").innerHTML = brenderlist[7] + brenderlist[6];
        document.getElementById("currentID").innerHTML = brenderlist[7];
        return null;
    }
}
//function TESTIFSTART(){
//pass
//
//load()
