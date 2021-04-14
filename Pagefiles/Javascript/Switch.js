//file for switching 
function switchd(){
   //var cycledis = document.getElementById("cycle").style.display
   //var subdis = document.getElementById("subdis").style.display
   if (cycledis == "none"){
   document.getElementById("cycle").style.display = "block"
   document.getElementById("textinput").style.display = "block"
   document.getElementById("subtry").style.display = "none"
   document.getElementById("selector").style.display = "none"
   document.getElementById("textsubmit").style.display = "none"
   localStorage.setItem("buttonDescribe",'<button onclick="loadPosts()" class="postid" style="display:block"> || View This Users Posts </button>')
   }else{
   document.getElementById("cycle").style.display = "none"
   document.getElementById("textinput").style.display = "none"
   document.getElementById("textsubmit").style.display = "block"
   document.getElementById("subtry").style.display = "block"
   document.getElementById("selector").style.display = "block"
   localStorage.setItem("buttonDescribe",'<button onclick="loadPosts()" class="postid" style="display:none"> || View This Users Posts </button>')
   }}
