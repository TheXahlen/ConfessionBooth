const scriptURL = 'https://script.google.com/macros/s/AKfycbyhferKoM3lawXmfUHRrnjQC1vEexIbDdcYgLl-xY0tH2cjdKBjLNFExw/exec'
    
function success(res){
        var cursubmission = document.getElementById("textsubmit").value
        var sub = "Your post {" + cursubmission + "} was submitted!"
        alert(sub)
        document.getElementById("textsubmit").value = ""
        console.log(console.log('Success!', res))
        document.getElementById("subtry").disabled = false;
        load()
}

function failed(res){
        alert("Something went wrong and your post was discarded!")
        console.error('Error!', res)
        document.getElementById("subtry").disabled = false;
}

    const form = document.forms['submit-to-google-sheet']
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>  success(response))
      .catch(error =>  failed(error.message))
    })
