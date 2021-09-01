const scriptURL = "https://script.google.com/macros/s/AKfycby4dRsGIdFRRwuNh6lLSoSrGEUhvSmJ53TjqQ7fUL36yXD2OG9b10RfbjBsZWnTvZV4fg/exec";

function success(res) {
    var cursubmission = document.getElementById("textsubmit").value;
    var sub = "Your post {" + cursubmission + "} was submitted!";
    alert(sub);
    document.getElementById("textsubmit").value = "";
    console.log(console.log("Success!", res));
    document.getElementById("subtry").disabled = false;
    document.getElementById("subtry").backgroundColor = "white";
    load();
}

function failed(res) {
    alert("Something went wrong and your post was discarded!");
    console.error("Error!", res);
    document.getElementById("subtry").disabled = false;
    document.getElementById("subtry").backgroundColor = "white";
}

const form = document.forms["submit-to-google-sheet"];
console.log(form)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.preventDefault())
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => success(response))
        .catch((error) => failed(error.message));
});
