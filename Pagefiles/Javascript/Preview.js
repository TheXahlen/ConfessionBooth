function SelectedColor() {
    let e = document.getElementById("color");
    let strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").style.color = strUser;
}
function SelectedDecoration() {
    let e = document.getElementById("decoration");
    let strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").textDecoration = strUser;
}
function SelectedSize() {
    let e = document.getElementById("size");
    let strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").fontSize = strUser;
}
function SelectedFont() {
    let e = document.getElementById("font");
    let strUser = e.options[e.selectedIndex].text;
    document.getElementById("Display").fontFamily = strUser;
}
