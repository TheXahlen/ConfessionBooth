//file for switching 
function switchd(){
   
   
   var cycledis = document.getElementById("cycle").style.display
   var subdis = document.getElementById("subtry").style.display
   var textdis = document.getElementById("textinput").style.display
   var selectdis =  document.getElementById("selector").style.display
   var textsubdis = document.getElementById("textsubmit").style.display
   
   
   if (cycledis == "none"){
   cycledis = "block"
   textdis = "block"
   subdis = "none"
   selectdis = "none"
   textsubdis = "none"
   //localStorage.setItem("buttonDescribe",'<button onclick="loadPosts()" class="postid" style="display:block"> || View This Users Posts </button>')
   }else{
   cycledis = "none"
   textdis = "none"
   textsubdis = "block"
   subdis = "block"
   selectdis = "block"
   //localStorage.setItem("buttonDescribe",'<button onclick="loadPosts()" class="postid" style="display:none"> || View This Users Posts </button>')
   }}
