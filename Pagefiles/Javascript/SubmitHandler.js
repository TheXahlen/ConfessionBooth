const scriptURL = 'https://script.google.com/macros/s/AKfycbyhferKoM3lawXmfUHRrnjQC1vEexIbDdcYgLl-xY0tH2cjdKBjLNFExw/exec'
    function success(res){
    alert("Your post was submitted!")
    console.log(console.log('Success!', res))
    }
    function failed(res){
    alert("Something went wrong and your post was discarded!")
    console.error('Error!', res)
    }
    const form = document.forms['submit-to-google-sheet']
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>  success(response))
      .catch(error =>  failed(error.message))
    })
