function SelectedColor() {
    var e = document.getElementById("color");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").style.color = strUser;
}
function SelectedDecoration() {
    var e = document.getElementById("decoration");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").textDecoration = strUser;
}
function SelectedSize() {
    var e = document.getElementById("size");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").fontSize = strUser;
}
function SelectedFont() {
    var e = document.getElementById("font");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").fontFamily = strUser;
}
