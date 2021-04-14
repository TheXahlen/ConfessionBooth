const scriptURL = 'https://script.google.com/macros/s/AKfycbyhferKoM3lawXmfUHRrnjQC1vEexIbDdcYgLl-xY0tH2cjdKBjLNFExw/exec'
    const form = document.forms['submit-to-google-sheet']
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>  alert("Your post was submitted!"))
      .catch(error =>  alert("Something went wrong and your post was discarded!"))
    })
