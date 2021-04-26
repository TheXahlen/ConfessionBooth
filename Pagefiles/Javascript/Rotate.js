 function SelectedColor() {
    var e = document.getElementById("color");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").style.color = strUser;
   }
   function SelectedDecoration() {
    var e = document.getElementById("decoration");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").style.textDecoration = strUser;
   }
   //size is hard to support on the mobile version
   function SelectedSize() {
   var e = document.getElementById("size");
   var strUser = e.options[e.selectedIndex].text;
   document.getElementById("Display").style.fontSize = strUser;
   }
   function SelectedFont() {
    var e = document.getElementById("font");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").style.fontFamily = strUser;
   }
   function switchd() {
    load();
    checkID();
    setcurrentDate();
    var identity = localStorage.getItem("browserid");
    document.getElementById("currentID").innerHTML = identity;
    document.getElementById("posterid").innerHTML = identity;

    var cycledis = document.getElementById("cycle").style.display;
    // var subdis = document.getElementById("subtry").style.display;
    // var textdis = document.getElementById("textinput").style.display;
    // var selectdis = document.getElementById("selector").style.display;
    // var textsubdis = document.getElementById("textsubmit").style.display;
    // var viewdis = document.getElementById("posterload").style.display;

    if (cycledis == "none") {
     document.getElementById("posterload").style.display = "block";
     document.getElementById("cycle").style.display = "block";
     document.getElementById("textinput").style.display = "block";
     document.getElementById("subtry").style.display = "none";
     document.getElementById("Display").style.display = "none";
     document.getElementById("selector").style.display = "none";
     document.getElementById("textsubmit").style.display = "none";
     //localStorage.setItem("buttonDescribe",'<button onclick="loadPosts()" class="postid" style="display:block"> || View This Users Posts </button>')
    } else {
     location.hash = "";

     document.getElementById("cycle").style.display = "none";
     document.getElementById("textinput").style.display = "none";
     document.getElementById("posterload").style.display = "none";
     document.getElementById("Display").style.display = "block";
     document.getElementById("textsubmit").style.display = "block";
     document.getElementById("subtry").style.display = "block";
     document.getElementById("selector").style.display = "block";
     //localStorage.setItem("buttonDescribe",'<button onclick="loadPosts()" class="postid" style="display:none"> || View This Users Posts </button>')
    }
   }
